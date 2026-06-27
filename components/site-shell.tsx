'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';

const navigation = [
  { label: 'Home', href: '/#hero' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Process', href: '/#process' },
  { label: 'Team', href: '/#team' },
  { label: 'Contact', href: '/contact' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setLoaderVisible(false);
    }, 1200);

    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX - 16);
      cursorY.set(event.clientY - 16);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener('mousemove', handleMove);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(119,215,255,0.12),_transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.035),transparent_18%)]" />
      <div className="pointer-events-none absolute inset-0 grid-shell opacity-40" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-0 h-64 w-64 opacity-[0.06] mix-blend-screen"
        animate={{ y: [0, 12, 0], x: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image src="/branding/aximo-logo-mark.jpg" alt="" fill className="object-contain" sizes="256px" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full border border-skyglow/35 bg-skyglow/10 blur-[0.5px] md:block"
        style={{ x: cursorX, y: cursorY }}
      />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/72 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-md border border-primary/20 bg-gradient-to-br from-primary/8 to-secondary/6 shadow-glow transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_32px_rgba(77,163,255,0.35)]">
              <Image src="/branding/aximo-logo-mark.jpg" alt="AXIMO logo" fill className="object-cover" sizes="40px" priority />
            </span>
            <div>
              <p className="font-heading text-lg tracking-[0.18em] text-white">AXIMO</p>
              <p className="text-[0.62rem] uppercase tracking-[0.38em] text-white/60">creative media startup</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 rounded-full border border-primary/12 bg-black/6 p-1 text-xs uppercase tracking-[0.24em] text-white/68 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 transition ${item.href === '/contact' && pathname === '/contact' ? 'bg-primary text-white shadow-glow' : 'hover:bg-primary/6 hover:text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            className="rounded-md border border-primary/24 bg-gradient-to-br from-primary/8 to-secondary/6 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:shadow-glow"
          >
            Start a project
          </Link>
        </div>
      </header>

      <AnimatePresence>
        {loaderVisible && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -24 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink"
          >
            <div className="glass-panel mx-5 flex w-full max-w-md flex-col items-center gap-5 rounded-[2rem] px-8 py-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: [1, 1.03, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative h-24 w-24 overflow-hidden rounded-full border border-skyglow/25 bg-[radial-gradient(circle,rgba(119,215,255,0.32),rgba(119,215,255,0.05),transparent)] shadow-glow"
              >
                <Image src="/branding/aximo-logo-mark.jpg" alt="AXIMO logo" fill className="object-cover" sizes="96px" priority />
              </motion.div>
              <p className="section-label text-skyglow/80">Initializing AXIMO</p>
              <h2 className="font-heading text-3xl tracking-[0.08em] text-white">Cinematic mode on</h2>
              <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
                <div className="hero-sheen h-full w-full animate-shimmer rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 pt-24"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="relative z-10 border-t border-primary/12 bg-ink text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:px-8">
          <div>
            <div className="group inline-flex items-center gap-3">
              <span className="relative h-10 w-10 overflow-hidden rounded-md border border-skyglow/24 bg-white/[0.04] transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_28px_rgba(77,163,255,0.24)]">
                <Image src="/branding/aximo-logo-mark.jpg" alt="AXIMO logo" fill className="object-cover" sizes="40px" />
              </span>
              <p className="section-label text-white/40">AXIMO</p>
            </div>
            <p className="mt-4 max-w-md text-2xl leading-tight text-white/88 sm:text-3xl">
              A local creative startup with global ambition.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">Navigation</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/#hero">Home</Link>
              <Link href="/#services">Services</Link>
              <Link href="/#work">Work</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">Connect</p>
            <div className="mt-5 flex flex-col gap-4">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/aximocreative/"
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-skyglow/20 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgba(77,163,255,0.12)]"
              >
                <video
                  src="/branding/aximo-instagram.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full object-contain"
                />
                <div className="flex items-center gap-2 px-3.5 py-2.5">
                  <p className="text-sm text-white/80 transition-colors duration-300 group-hover:text-white">Instagram</p>
                  <span className="text-white/20">·</span>
                  <p className="text-[0.68rem] tracking-wide text-white/40">@aximocreative</p>
                </div>
              </a>

              {/* WhatsApp 1 */}
              <a
                href="https://wa.me/918127406133"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-skyglow/20 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgba(77,163,255,0.12)]"
              >
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] transition-transform duration-300 group-hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/70 transition-colors duration-300 group-hover:text-skyglow" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.span>
                <div className="min-w-0">
                  <p className="text-sm text-white/80 transition-colors duration-300 group-hover:text-white">WhatsApp</p>
                  <p className="text-[0.68rem] tracking-wide text-white/40">+91 8127406133</p>
                </div>
              </a>

              {/* WhatsApp 2 */}
              <a
                href="https://wa.me/918354882580"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-skyglow/20 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgba(77,163,255,0.12)]"
              >
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] transition-transform duration-300 group-hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/70 transition-colors duration-300 group-hover:text-skyglow" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </motion.span>
                <div className="min-w-0">
                  <p className="text-sm text-white/80 transition-colors duration-300 group-hover:text-white">WhatsApp</p>
                  <p className="text-[0.68rem] tracking-wide text-white/40">+91 8354882580</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:aximocreative@gmail.com"
                className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-3 transition-all duration-[350ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-skyglow/20 hover:bg-white/[0.05] hover:shadow-[0_8px_30px_rgba(77,163,255,0.12)]"
              >
                <motion.span
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] transition-transform duration-300 group-hover:scale-110"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-white/70 transition-colors duration-300 group-hover:text-skyglow" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </motion.span>
                <div className="min-w-0">
                  <p className="text-sm text-white/80 transition-colors duration-300 group-hover:text-white">Email</p>
                  <p className="text-[0.68rem] tracking-wide text-white/40">aximocreative@gmail.com</p>
                </div>
              </a>

            </div>
          </div>
        </div>
        <div className="border-t border-primary/8 px-5 py-4 text-center text-[0.7rem] uppercase tracking-[0.3em] text-white/50 sm:px-6 lg:px-8">
          © 2026 AXIMO. Designed to move brands forward.
        </div>
      </footer>
    </div>
  );
}
