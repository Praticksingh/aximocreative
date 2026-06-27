import Image from 'next/image';
import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';

const phoneNumbers = [
  '+91 81274 06133',
  '+91 83170 56193',
  '+91 83548 82580',
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,163,255,0.16),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.06),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 grid-shell opacity-35" />

      <section className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-12">
        <div className="max-w-2xl pt-10 lg:sticky lg:top-28">
          <p className="section-label text-skyglow/80">Contact</p>
          <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-skyglow/18 bg-white/[0.04] px-3 py-2 shadow-[0_0_28px_rgba(77,163,255,0.1)] backdrop-blur-xl">
            <span className="relative h-9 w-9 overflow-hidden rounded-full border border-skyglow/24 bg-white/5">
              <Image src="/branding/aximo-logo-mark.jpg" alt="AXIMO logo" fill className="object-cover" sizes="36px" priority />
            </span>
            <span className="text-[0.68rem] uppercase tracking-[0.28em] text-skyglow/82">AXIMO Contact Portal</span>
          </div>
          <h1 className="font-heading mt-5 text-5xl leading-[0.93] tracking-[-0.06em] text-white sm:text-6xl lg:text-[4.5rem]">
            Start a cinematic conversation with AXIMO.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
            Share your business, the problem you want solved, and the result you want to see. We’ll respond with a clear next step and a direct conversation, not a generic pitch.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a
              className="group glass-panel rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-skyglow/22 hover:bg-white/[0.06] hover:shadow-[0_18px_48px_rgba(8,14,30,0.32),0_0_30px_rgba(77,163,255,0.12)]"
              href="mailto:aximocreative@gmail.com"
            >
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">Email</p>
              <p className="mt-4 font-heading text-xl text-white transition group-hover:text-skyglow">aximocreative@gmail.com</p>
              <p className="mt-2 text-sm text-white/54">Click to open your email app</p>
            </a>

            <div className="glass-panel rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">Response window</p>
              <p className="mt-4 font-heading text-xl text-white">Same day, usually within business hours.</p>
              <p className="mt-2 text-sm text-white/54">The form sends straight to the AXIMO team inbox.</p>
            </div>
          </div>

          <div className="mt-4 grid gap-4">
            <div className="glass-panel rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">Phone</p>
              <div className="mt-4 grid gap-3 text-sm text-white/78 sm:grid-cols-3">
                {phoneNumbers.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-skyglow/24 hover:bg-white/[0.06] hover:text-skyglow"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">What happens next</p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/68">
                You’ll receive a confirmation email right away. AXIMO also sends an automatic response so the conversation starts cleanly while our team reviews your inquiry.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-skyglow/30 bg-skyglow/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.24em] text-skyglow transition hover:-translate-y-0.5 hover:bg-skyglow/18 hover:shadow-glow">
              Back to home
            </Link>
          </div>
        </div>

        <div className="pb-8 lg:pt-4">
          <div className="mb-5 flex items-center justify-between text-[0.68rem] uppercase tracking-[0.32em] text-white/42">
            <span>Contact form</span>
            <span>AXIMO / direct line</span>
          </div>
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
