import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

const RESEND_API_URL = 'https://api.resend.com/emails';
const SUPPORT_EMAIL = 'aximocreative@gmail.com';
const AUTO_RESPONSE_SUBJECT = 'AXIMO received your message';
const AUTO_RESPONSE_BODY = `Thank you for contacting AXIMO.

We’ve successfully received your inquiry and our team will connect with you shortly.

Meanwhile, keep building bold ideas.

— Team AXIMO`;

type ContactPayload = {
  fullName?: unknown;
  businessName?: unknown;
  email?: unknown;
  phone?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

function normalizeText(value: unknown) {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value: string) {
  const cleaned = value.replace(/[\s()+\-]/g, '');
  return cleaned.length >= 7 && /^[\d+\-()\s]+$/.test(value);
}

async function sendResendEmail({
  from,
  to,
  subject,
  text,
  replyTo,
}: {
  from: string;
  to: string[];
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error('Missing RESEND_API_KEY environment variable.');
  }

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      text,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || 'Failed to send contact email.');
  }
}

export async function POST(request: Request) {
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!fromEmail) {
    return NextResponse.json(
      { message: 'Missing RESEND_FROM_EMAIL environment variable.' },
      { status: 500 },
    );
  }

  let payload: ContactPayload | null = null;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid request payload.' }, { status: 400 });
  }

  const fullName = normalizeText(payload?.fullName);
  const businessName = normalizeText(payload?.businessName);
  const email = normalizeText(payload?.email).toLowerCase();
  const phone = normalizeText(payload?.phone);
  const message = normalizeText(payload?.message);
  const website = normalizeText(payload?.website);
  const startedAt = Number(payload?.startedAt);

  if (website) {
    return NextResponse.json({ message: 'Submission rejected.' }, { status: 400 });
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 2500) {
    return NextResponse.json({ message: 'Please take a moment before submitting.' }, { status: 400 });
  }

  if (!fullName || fullName.length < 2 || fullName.length > 100) {
    return NextResponse.json({ message: 'Please enter a valid full name.' }, { status: 400 });
  }

  if (!businessName || businessName.length < 2 || businessName.length > 120) {
    return NextResponse.json({ message: 'Please enter a valid business name.' }, { status: 400 });
  }

  if (!email || !isValidEmail(email) || email.length > 160) {
    return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
  }

  if (!phone || !isValidPhone(phone) || phone.length > 40) {
    return NextResponse.json({ message: 'Please enter a valid phone number.' }, { status: 400 });
  }

  if (!message || message.length < 10 || message.length > 3000) {
    return NextResponse.json({ message: 'Please share a detailed message.' }, { status: 400 });
  }

  const internalSubject = `New AXIMO inquiry from ${fullName}`;
  const internalBody = [
    `Client Name: ${fullName}`,
    `Business Name: ${businessName}`,
    `Client Email: ${email}`,
    `Phone Number: ${phone}`,
    '',
    'Message:',
    message,
  ].join('\n');

  await Promise.all([
    sendResendEmail({
      from: fromEmail,
      to: [SUPPORT_EMAIL],
      subject: internalSubject,
      text: internalBody,
      replyTo: email,
    }),
    sendResendEmail({
      from: fromEmail,
      to: [email],
      subject: AUTO_RESPONSE_SUBJECT,
      text: AUTO_RESPONSE_BODY,
    }),
  ]);

  return NextResponse.json({ ok: true });
}