'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [feedback, setFeedback] = useState('');
  const [startedAt] = useState(() => Date.now());

  const isSending = status === 'sending';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    setFeedback('');

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get('fullName') ?? '').trim();
    const businessName = String(formData.get('businessName') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const website = String(formData.get('website') ?? '').trim();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName,
          businessName,
          email,
          phone,
          message,
          website,
          startedAt,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? 'Something went wrong while sending your inquiry.');
      }

      setStatus('success');
      setFeedback('Your message has been sent. AXIMO will reply shortly.');
      event.currentTarget.reset();
    } catch (error) {
      setStatus('error');
      setFeedback(error instanceof Error ? error.message : 'Something went wrong while sending your inquiry.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
      <input type="hidden" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" />
      <input type="hidden" name="startedAt" value={String(startedAt)} />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,163,255,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_44%)]" />
      <div className="relative space-y-6">
        <div>
          <p className="section-label text-skyglow/76">Send a message</p>
          <h2 className="mt-3 font-heading text-3xl tracking-[-0.04em] text-white">Tell AXIMO what you are building.</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FloatingField name="fullName" label="Full Name" autoComplete="name" required />
          <FloatingField name="businessName" label="Business Name" autoComplete="organization" required />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FloatingField name="email" label="Email Address" type="email" autoComplete="email" required />
          <FloatingField name="phone" label="Phone Number" type="tel" inputMode="tel" autoComplete="tel" required />
        </div>

        <FloatingField name="message" label="Message" as="textarea" rows={7} required />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            disabled={isSending}
            type="submit"
            className="group inline-flex min-h-[48px] items-center justify-center rounded-full border border-skyglow/25 bg-[linear-gradient(135deg,rgba(14,75,143,0.95),rgba(77,163,255,0.9))] px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-white shadow-[0_18px_40px_rgba(14,75,143,0.24),0_0_40px_rgba(77,163,255,0.15)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_54px_rgba(14,75,143,0.34),0_0_54px_rgba(77,163,255,0.22)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
          >
            <span className="mr-3 inline-flex h-2 w-2 rounded-full bg-white/90 shadow-[0_0_16px_rgba(255,255,255,0.8)] transition group-hover:scale-110" />
            {isSending ? 'Sending' : 'Send Inquiry'}
          </button>

          <p className="text-xs uppercase tracking-[0.28em] text-white/48">Responses are handled directly by the AXIMO team.</p>
        </div>

        <AnimatePresence mode="wait">
          {status === 'success' && feedback && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
              aria-live="polite"
            >
              {feedback}
            </motion.p>
          )}

          {status === 'error' && feedback && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
              aria-live="polite"
            >
              {feedback}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}

type FloatingFieldProps = {
  name: string;
  label: string;
  type?: string;
  as?: 'input' | 'textarea';
  rows?: number;
  required?: boolean;
  autoComplete?: string;
  inputMode?: 'text' | 'tel' | 'email' | 'numeric' | 'decimal' | 'search' | 'url';
};

function FloatingField({ name, label, type = 'text', as = 'input', rows = 4, required = false, autoComplete, inputMode }: FloatingFieldProps) {
  const inputClassName = 'peer w-full rounded-[1.4rem] border border-white/10 bg-white/[0.04] px-4 pb-3 pt-6 text-white outline-none transition duration-300 placeholder:text-transparent focus:border-skyglow/38 focus:bg-white/[0.06] focus:shadow-[0_0_0_1px_rgba(77,163,255,0.12),0_0_28px_rgba(77,163,255,0.10)]';
  const labelClassName = 'pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-white/42 transition-all duration-300 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-[0.26em] peer-focus:text-skyglow/82 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:uppercase peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-white/42 peer-[&:not(:placeholder-shown)]:top-3 peer-[&:not(:placeholder-shown)]:translate-y-0 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:uppercase peer-[&:not(:placeholder-shown)]:tracking-[0.26em] peer-[&:not(:placeholder-shown)]:text-skyglow/82';

  return (
    <label className="group relative block">
      {as === 'textarea' ? (
        <textarea
          name={name}
          required={required}
          rows={rows}
          placeholder=" "
          autoComplete={autoComplete}
          className={`${inputClassName} min-h-[9.5rem] resize-none py-4`}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder=" "
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={inputClassName}
        />
      )}
      <span className={labelClassName}>{label}</span>
    </label>
  );
}
