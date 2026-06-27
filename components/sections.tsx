'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';

const services = [
  { title: 'Social Media Management', copy: 'Consistency, voice, and visual direction that makes every post feel deliberate.' },
  { title: 'Branding', copy: 'Identity systems built to look premium, stay memorable, and scale across channels.' },
  { title: 'Reels & Editing', copy: 'Fast, polished short-form motion that turns attention into watch time.' },
  { title: 'Creative Campaigns', copy: 'Launch ideas with a cinematic arc, not just a content calendar.' },
  { title: 'Graphic Design', copy: 'Posters, launch visuals, and conversion-first assets with aesthetic discipline.' },
  { title: 'Marketing Strategy', copy: 'A clear plan that connects story, audience, and business intent.' },
];

const portfolio = [
  { label: 'Poster launch', title: 'Night market campaign', tone: 'from quiet to magnetic', accent: 'from-primary via-secondary to-ink' },
  { label: 'Reel edit', title: 'Motion-first showcase', tone: 'built to stop the scroll', accent: 'from-secondary via-ink to-primary' },
  { label: 'Brand system', title: 'Identity refresh', tone: 'clean, modern, scalable', accent: 'from-ink via-secondary to-primary' },
  { label: 'School campaign', title: 'Admissions story', tone: 'clear trust, strong momentum', accent: 'from-primary via-ink to-secondary' },
  { label: 'Cafe creatives', title: 'Social launch kit', tone: 'premium visuals for local growth', accent: 'from-secondary via-primary to-ink' },
];

const processSteps = [
  { id: '01', title: 'Discover', copy: 'We map the brand, audience, and opportunity before anything gets designed.' },
  { id: '02', title: 'Create', copy: 'Visual systems, motion ideas, and messaging are built with one cinematic direction.' },
  { id: '03', title: 'Launch', copy: 'We publish with consistency so the market sees momentum, not random activity.' },
  { id: '04', title: 'Scale', copy: 'Results inform the next iteration, turning attention into lasting growth.' },
];

const team = [
  {
    name: 'Pratik Singh',
    role: 'Founding strategist',
    copy: 'Shapes direction, positioning, and story so every project feels bigger than a deliverable.',
    initials: 'PS',
  },
  {
    name: 'Prabhat Vishwakarma',
    role: 'Creative lead',
    copy: 'Builds the visual language, motion energy, and design detail that defines the AXIMO look.',
    initials: 'PV',
  },
  {
    name: 'Yashika Singh',
    role: 'Growth and content',
    copy: 'Turns ideas into campaigns, keeps the output sharp, and ensures the brand stays alive online.',
    initials: 'YS',
  },
  {
    name: 'Aditya Kushwaha',
    role: 'Video creation lead',
    copy: 'Crafts motion-driven storytelling, cinematic edits, and visual sequences that turn attention into emotion.',
    initials: 'AK',
  },
];

const testimonials = [
  { quote: 'AXIMO makes small brands look like they already belong on a bigger stage.', by: 'Founder-level thinking' },
  { quote: 'The visuals feel premium, but the strategy is what makes the work matter.', by: 'Strategy-first execution' },
  { quote: 'It does not feel like content volume. It feels like a brand becoming undeniable.', by: 'Momentum with intent' },
];

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <div className="max-w-3xl">
      <p className="section-label text-skyglow/80">{eyebrow}</p>
      <h2 className="font-heading mt-4 text-4xl leading-none tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">{title}</h2>
      <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">{copy}</p>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden px-5 pb-24 pt-10 sm:px-6 lg:px-8 lg:pb-32">
      <div className="absolute inset-x-0 top-0 h-[72vh] bg-hero-radial opacity-90" />

      <motion.div
        aria-hidden
        className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-skyglow/20 bg-[radial-gradient(circle,rgba(119,215,255,0.3),rgba(119,215,255,0.08),transparent_70%)] blur-2xl"
        animate={{ y: [0, -20, 0], x: [0, 14, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute left-[-6rem] top-36 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-3xl"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-8">
        <div className="max-w-4xl pt-12 sm:pt-16 lg:pt-20">
          <p className="section-label text-skyglow/80">AXIMO / creative startup from gorakhpur</p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading mt-6 text-5xl leading-[0.92] tracking-[-0.05em] text-white sm:text-7xl lg:text-[7.5rem]"
          >
            <span className="block">Every Brand Wants</span>
            <span className="block text-white/82">Attention.</span>
            <motion.span
              className="mt-4 block text-white/58 sm:mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              But Only A Few Create Impact.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-8 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
          >
            AXIMO builds premium digital presence for ambitious local brands, turning social media, motion, and brand identity into a cinematic growth system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/#services" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-ink transition hover:-translate-y-0.5 hover:bg-skywash">
              Explore AXIMO
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-skyglow/30 bg-skyglow/10 px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-skyglow transition hover:-translate-y-0.5 hover:bg-skyglow/18 hover:shadow-glow">
              Start Your Brand Journey
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.85 }}
          className="glass-panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(119,215,255,0.14),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_64%)]" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between text-[0.64rem] uppercase tracking-[0.34em] text-white/45">
              <span>Signal</span>
              <span>01</span>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <p className="text-xs uppercase tracking-[0.32em] text-skyglow/85">The modern audience</p>
              <p className="mt-4 text-2xl leading-tight text-white sm:text-3xl">scrolls fast, remembers less, and trusts brands that feel clear.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">Presence</p>
                <p className="mt-4 font-heading text-3xl text-white">Premium</p>
              </div>
              <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/45">Momentum</p>
                <p className="mt-4 font-heading text-3xl text-skyglow">Live</p>
              </div>
            </div>
            <div className="rounded-[1.25rem] border border-skyglow/20 bg-[linear-gradient(135deg,rgba(119,215,255,0.18),rgba(255,255,255,0.02))] p-4 text-sm leading-6 text-white/75">
              Local roots. Global taste. A system built to make small businesses look unmistakably ready.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section id="story" className="relative overflow-hidden px-5 py-24 text-ink sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f4f8ff_0%,#eef5ff_38%,#f8fbff_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(77,163,255,0.2),transparent_38%),radial-gradient(circle_at_88%_28%,rgba(14,75,143,0.16),transparent_34%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(18,62,107,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(18,62,107,0.45)_1px,transparent_1px)] [background-size:54px_54px]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(10,15,28,0.8)_0.6px,transparent_0.6px)] [background-size:3px_3px]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, 12, 0], opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-4rem] top-36 h-80 w-80 rounded-full bg-primary/18 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, -14, 0], opacity: [0.42, 0.64, 0.42] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[16%] top-[40%] h-20 w-20 rounded-full border border-primary/20"
        animate={{ y: [0, -10, 0], rotate: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[18%] top-[26%] h-16 w-16 border border-accent/30"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{ y: [0, 12, 0], rotate: [0, -10, 0], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div {...reveal}>
          <p className="section-label text-secondary/65">The story</p>
          <h2 className="font-heading mt-4 max-w-xl text-4xl leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl text-balance">
            <span className="bg-[linear-gradient(120deg,#0A0F1C_20%,#123E6B_54%,#0E4B8F_100%)] bg-clip-text text-transparent">
              Most brands do not
            </span>{' '}
            <span className="text-primary">lose</span>{' '}
            <span className="bg-[linear-gradient(120deg,#0A0F1C_20%,#123E6B_54%,#0E4B8F_100%)] bg-clip-text text-transparent">because they are</span>{' '}
            <span className="text-secondary">ordinary</span>{' '}
            <span className="text-primary">or bad</span>.
          </h2>
        </motion.div>

        <motion.div {...reveal} className="grid gap-5">
          <p className="max-w-2xl text-lg leading-8 text-ink/72 sm:text-xl">
            They lose because they look ordinary, speak inconsistently, and disappear in feeds filled with faster, louder, and more polished competitors.
          </p>

          <div className="grid gap-4 lg:grid-cols-[1fr_0.78fr]">
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {['ordinary content', 'ignored brands', 'weak presence'].map((item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[1.45rem] border border-secondary/12 bg-white/72 p-5 shadow-[0_16px_42px_rgba(8,14,28,0.1)] backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,163,255,0.18),transparent_45%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                  <p className="relative text-xs uppercase tracking-[0.3em] text-secondary/58">0{index + 1}</p>
                  <p className="relative mt-9 text-2xl font-medium text-ink">{item}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[1.6rem] border border-secondary/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(232,242,255,0.72))] p-5 shadow-[0_18px_50px_rgba(11,18,36,0.14)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,163,255,0.26),transparent_44%)]" />
              <div className="relative space-y-4">
                <p className="text-[0.62rem] uppercase tracking-[0.34em] text-secondary/56">attention decay</p>
                <div className="rounded-2xl border border-secondary/12 bg-white/70 p-3">
                  <div className="mb-3 flex items-center justify-between text-[0.58rem] uppercase tracking-[0.26em] text-secondary/50">
                    <span>Feed preview</span>
                    <span>stale</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-full rounded-full bg-secondary/12" />
                    <div className="h-2.5 w-4/5 rounded-full bg-secondary/10" />
                    <div className="h-20 rounded-xl bg-[linear-gradient(135deg,rgba(18,62,107,0.16),rgba(14,75,143,0.08))]" />
                  </div>
                </div>
                <div className="rounded-2xl border border-secondary/12 bg-white/65 p-3">
                  <p className="text-[0.58rem] uppercase tracking-[0.26em] text-secondary/48">engagement curve</p>
                  <svg viewBox="0 0 220 70" className="mt-2 h-14 w-full">
                    <path d="M4 42 C38 24, 72 58, 106 40 C132 26, 170 46, 216 44" stroke="rgba(18,62,107,0.35)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    <path d="M4 47 C38 31, 72 52, 106 44 C132 40, 170 50, 216 52" stroke="rgba(77,163,255,0.38)" strokeWidth="2" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            whileHover={{ y: -4 }}
            className="relative mt-1 overflow-hidden rounded-[2rem] border border-skyglow/28 bg-[linear-gradient(145deg,rgba(10,15,28,0.85),rgba(18,62,107,0.76))] p-6 text-white shadow-[0_24px_70px_rgba(8,14,30,0.38),0_0_40px_rgba(77,163,255,0.14)] sm:p-8"
          >
            <div className="pointer-events-none absolute inset-0 opacity-50">
              <div className="hero-sheen h-full w-full animate-shimmer" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,163,255,0.3),transparent_42%)]" />
            <p className="relative text-xs uppercase tracking-[0.34em] text-skyglow/88">AXIMO was created to change that.</p>
            <p className="relative mt-4 max-w-2xl text-lg leading-8 text-white/84">
              We build presence that looks premium, feels cinematic, and still speaks clearly to the people who matter most: the customers around you.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-14 w-full max-w-7xl">
        <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(77,163,255,0.22),rgba(14,75,143,0.5),rgba(77,163,255,0.22),transparent)]" />
        <div className="absolute inset-0 h-px animate-shimmer bg-[linear-gradient(90deg,transparent,rgba(77,163,255,0.7),transparent)]" />
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-ink px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Creative systems for brands that want more than content."
          copy="Each service is designed to work together, so the brand looks coherent from feed to campaign to conversion."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              {...reveal}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.35 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(119,215,255,0.14),transparent_32%)] opacity-0 transition duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">0{index + 1}</p>
                <h3 className="mt-6 font-heading text-3xl leading-tight text-white">{service.title}</h3>
                <p className="mt-5 max-w-sm text-sm leading-7 text-white/68">{service.copy}</p>
                <div className="mt-8 h-px w-full bg-white/10" />
                <p className="mt-4 text-xs uppercase tracking-[0.28em] text-skyglow/75">Hover to feel the shift</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PortfolioSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const dragState = useRef({ isDragging: false, startX: 0, startScrollLeft: 0 });
  const wheelFrame = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const updateActiveIndex = () => {
      const center = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(center - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();
    container.addEventListener('scroll', updateActiveIndex, { passive: true });
    window.addEventListener('resize', updateActiveIndex);

    return () => {
      container.removeEventListener('scroll', updateActiveIndex);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const handleWheel = (event: WheelEvent) => {
      const hasHorizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      if (!hasHorizontalIntent && Math.abs(event.deltaY) < 2) return;

      event.preventDefault();

      if (wheelFrame.current) {
        cancelAnimationFrame(wheelFrame.current);
      }

      wheelFrame.current = requestAnimationFrame(() => {
        const delta = event.deltaX !== 0 && hasHorizontalIntent ? event.deltaX : event.deltaY;
        container.scrollBy({ left: delta * 1.15, behavior: 'auto' });
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (wheelFrame.current) {
        cancelAnimationFrame(wheelFrame.current);
      }
    };
  }, []);

  const scrollToCard = (index: number) => {
    const container = carouselRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    const targetLeft = card.offsetLeft - container.clientWidth / 2 + card.offsetWidth / 2;
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
    setActiveIndex(index);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = carouselRef.current;
    if (!container) return;

    dragState.current = {
      isDragging: true,
      startX: event.clientX,
      startScrollLeft: container.scrollLeft,
    };

    container.classList.add('is-dragging');
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = carouselRef.current;
    if (!container || !dragState.current.isDragging) return;

    const walk = event.clientX - dragState.current.startX;
    container.scrollLeft = dragState.current.startScrollLeft - walk;
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = carouselRef.current;
    dragState.current.isDragging = false;
    container?.classList.remove('is-dragging');
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <section id="work" className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(77,163,255,0.16),transparent_36%),linear-gradient(180deg,rgba(10,15,28,0.96),rgba(10,15,28,1))]"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/14 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, 10, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-accent/12 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -14, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="section-label text-skyglow/80">Portfolio</p>
          <h2 className="font-heading mt-4 text-4xl leading-none tracking-tight text-white sm:text-5xl lg:text-6xl text-balance">
            Work that feels like a reveal, not a gallery.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/68 sm:text-base">
            A cinematic showcase for posters, reels, identity systems, school campaigns, and restaurant visuals with a sharper visual rhythm.
          </p>
        </div>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,rgba(10,15,28,0.96),rgba(10,15,28,0))]" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,rgba(10,15,28,0.96),rgba(10,15,28,0))]" />

          <button
            type="button"
            aria-label="Scroll portfolio left"
            onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
            className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/8 p-3 text-white shadow-[0_18px_50px_rgba(3,8,20,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-skyglow/30 hover:bg-primary/18 hover:shadow-glow md:inline-flex"
          >
            <span className="sr-only">Previous portfolio card</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Scroll portfolio right"
            onClick={() => scrollToCard(Math.min(activeIndex + 1, portfolio.length - 1))}
            className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/10 bg-white/8 p-3 text-white shadow-[0_18px_50px_rgba(3,8,20,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:border-skyglow/30 hover:bg-primary/18 hover:shadow-glow md:inline-flex"
          >
            <span className="sr-only">Next portfolio card</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="mb-4 flex items-center justify-between gap-4 text-[0.65rem] uppercase tracking-[0.32em] text-white/48">
            <span>Drag to explore</span>
            <span>{String(activeIndex + 1).padStart(2, '0')} / {String(portfolio.length).padStart(2, '0')}</span>
          </div>

          <div
            ref={carouselRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            tabIndex={0}
            className="aximo-carousel-scrollbar flex cursor-grab gap-6 overflow-x-auto pb-5 pt-2 outline-none snap-x snap-mandatory scroll-smooth select-none [scrollbar-gutter:stable]"
            aria-label="Portfolio carousel"
          >
            {portfolio.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.article
                  key={item.title}
                  ref={(node) => {
                    cardRefs.current[index] = node;
                  }}
                  {...reveal}
                  whileHover={{ y: -8, scale: 1.012 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative min-w-[82vw] max-w-[32rem] snap-center overflow-hidden rounded-[2rem] border p-5 shadow-[0_26px_80px_rgba(3,8,20,0.45)] transition-all duration-500 sm:min-w-[30rem] lg:min-w-[34rem] ${isActive ? 'border-skyglow/35 bg-white/[0.06] scale-[1.02]' : 'border-white/10 bg-white/[0.04] opacity-85'}`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,163,255,0.22),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_30%)] opacity-80 transition duration-500 group-hover:opacity-100" />
                  <div className={`relative flex h-[24rem] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${item.accent} p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] sm:p-7`}>
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,28,0.08),rgba(10,15,28,0.68)),radial-gradient(circle_at_top_right,rgba(77,163,255,0.28),transparent_28%)] transition duration-700 group-hover:bg-[linear-gradient(180deg,rgba(10,15,28,0.04),rgba(10,15,28,0.5)),radial-gradient(circle_at_top_right,rgba(77,163,255,0.36),transparent_34%)]" />
                    <div className="pointer-events-none absolute right-4 top-4 h-12 w-12 opacity-45">
                      <Image src="/branding/aximo-logo-mark.jpg" alt="" fill className="object-contain mix-blend-screen" sizes="48px" />
                    </div>
                    <motion.div
                      aria-hidden
                      className="absolute inset-0 rounded-[1.5rem] border border-white/10"
                      animate={{
                        boxShadow: isActive
                          ? ['0 0 0 rgba(77,163,255,0.05)', '0 0 0 rgba(77,163,255,0.22)', '0 0 0 rgba(77,163,255,0.05)']
                          : ['0 0 0 rgba(77,163,255,0.02)', '0 0 0 rgba(77,163,255,0.1)', '0 0 0 rgba(77,163,255,0.02)'],
                      }}
                      transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                    <div className="relative flex items-center justify-between text-[0.64rem] uppercase tracking-[0.34em] text-white/72">
                      <span>{item.label}</span>
                      <span>0{index + 1}</span>
                    </div>
                    <div className="relative max-w-sm space-y-4">
                      <p className="text-[0.68rem] uppercase tracking-[0.34em] text-white/68">AXIMO / selected case</p>
                      <h3 className={`max-w-[12ch] font-heading text-4xl leading-[0.96] tracking-[-0.04em] drop-shadow-[0_2px_14px_rgba(3,8,20,0.45)] sm:text-5xl ${isActive ? 'text-white' : 'text-white/92'}`}>
                        {item.title}
                      </h3>
                      <p className={`max-w-xs text-sm leading-7 sm:text-[0.95rem] ${isActive ? 'text-white/84' : 'text-white/74'}`}>{item.tone}</p>
                    </div>
                    <div className="relative flex items-center justify-between pt-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/65">
                      <span>Poster / Motion / Identity</span>
                      <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-white/80 transition group-hover:border-skyglow/30 group-hover:text-white">
                        Showcase
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {portfolio.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => scrollToCard(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? 'w-10 bg-skyglow shadow-glow' : 'w-2.5 bg-white/20 hover:bg-white/35'}`}
                aria-label={`Go to portfolio card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section id="process" className="bg-ink px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Process"
          title="A minimal four-step system with momentum built in."
          copy="Simple to follow, fast to understand, and flexible enough to adapt to the pace of a modern startup or local brand."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              {...reveal}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-sm uppercase tracking-[0.32em] text-skyglow/75">{step.id}</p>
              <h3 className="mt-6 font-heading text-3xl text-white">{step.title}</h3>
              <p className="mt-5 text-sm leading-7 text-white/68">{step.copy}</p>
              <div className="mt-8 h-px w-full bg-white/10" />
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/42">Step {index + 1}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden bg-white px-5 py-24 text-ink sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(77,163,255,0.11),transparent_38%),radial-gradient(circle_at_82%_30%,rgba(14,75,143,0.09),transparent_34%),linear-gradient(180deg,#f7faff_0%,#f3f8ff_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,rgba(9,16,30,0.12)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(rgba(18,62,107,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(18,62,107,0.34)_1px,transparent_1px)] [background-size:58px_58px]" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-5rem] top-0 h-72 w-72 opacity-[0.09] mix-blend-multiply"
        animate={{ y: [0, 10, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image src="/branding/aximo-logo-mark.jpg" alt="" fill className="object-contain" sizes="288px" />
      </motion.div>

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-36 h-72 w-72 rounded-full bg-skyglow/14 blur-3xl"
        animate={{ y: [0, -10, 0], x: [0, 12, 0], opacity: [0.3, 0.52, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[-5rem] top-56 h-80 w-80 rounded-full bg-primary/14 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -12, 0], opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[14%] top-[22%] h-14 w-14 border border-skyglow/30"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{ y: [0, 10, 0], rotate: [0, -10, 0], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.div
          {...reveal}
          className="relative max-w-4xl overflow-hidden rounded-[2rem] border border-secondary/18 bg-[linear-gradient(145deg,rgba(9,16,30,0.84),rgba(18,62,107,0.74))] px-6 py-7 shadow-[0_20px_60px_rgba(8,14,28,0.28)] backdrop-blur-xl sm:px-8 sm:py-9"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,163,255,0.25),transparent_42%)]" />
          <p className="relative section-label text-skyglow/88">Team</p>
          <h2 className="relative font-heading mt-4 max-w-3xl text-4xl font-semibold leading-[0.96] tracking-tight text-[#F8FAFF] drop-shadow-[0_6px_18px_rgba(5,10,20,0.5)] sm:text-5xl lg:text-6xl text-balance">
            Founders with startup energy, not office hierarchy.
          </h2>
          <p className="relative mt-5 max-w-2xl text-sm leading-7 text-[#F8FAFF]/78 sm:text-base">
            AXIMO is presented like a team that is building the future in public: focused, ambitious, and clear about what it wants to become.
          </p>
        </motion.div>

        <motion.p
          {...reveal}
          className="mt-8 max-w-3xl text-sm uppercase tracking-[0.26em] text-secondary/72 sm:text-base"
        >
          Built by creators obsessed with making brands impossible to ignore.
        </motion.p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {team.map((person, index) => (
            <motion.article
              key={person.name}
              {...reveal}
              whileHover={{ y: -10, scale: 1.015 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-[2rem] border border-secondary/14 bg-[linear-gradient(165deg,rgba(255,255,255,0.82),rgba(232,242,255,0.68))] p-6 shadow-[0_22px_60px_rgba(10,16,30,0.12)] backdrop-blur-xl ${index % 2 === 1 ? 'md:translate-y-6' : ''}`}
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(77,163,255,0.24),transparent_34%)] opacity-35 transition duration-500 group-hover:opacity-90"
                animate={{ opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[2rem] border border-skyglow/12"
                animate={{ boxShadow: ['0 0 0 rgba(77,163,255,0.02)', '0 0 0 rgba(77,163,255,0.2)', '0 0 0 rgba(77,163,255,0.02)'] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-skyglow/34 bg-[linear-gradient(145deg,rgba(14,75,143,0.3),rgba(10,15,28,0.76))] text-sm font-semibold tracking-[0.14em] text-white shadow-[0_0_28px_rgba(77,163,255,0.24)]">
                    {person.initials}
                    <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_48%)]" />
                  </div>
                  <div>
                    <p className="text-[0.66rem] uppercase tracking-[0.3em] text-secondary/58">Founder profile</p>
                    <h3 className="mt-2 font-heading text-3xl leading-tight text-ink sm:text-[2rem]">{person.name}</h3>
                  </div>
                </div>

                <div className="rounded-full border border-skyglow/24 bg-skyglow/10 px-3 py-1 text-[0.63rem] uppercase tracking-[0.28em] text-secondary">
                  0{index + 1}
                </div>
              </div>

              <div className="relative mt-6 flex items-center gap-3">
                <motion.span
                  aria-hidden
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-skyglow/26 bg-skyglow/10 text-skyglow"
                  whileHover={{ rotate: 14, scale: 1.08 }}
                >
                  ↗
                </motion.span>
                <p className="text-xs uppercase tracking-[0.28em] text-secondary/68">{person.role}</p>
              </div>

              <p className="relative mt-6 max-w-lg text-sm leading-7 text-ink/74 sm:text-[0.95rem]">
                {person.copy}
              </p>

              <div className="relative mt-8 h-px w-full bg-[linear-gradient(90deg,rgba(18,62,107,0),rgba(18,62,107,0.28),rgba(18,62,107,0))]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-ink px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="The kind of feedback that signals trust."
          copy="Short, clear, and built around the feeling brands want when they show up online with more confidence."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.figure key={testimonial.quote} {...reveal} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
              <blockquote className="text-xl leading-9 text-white sm:text-2xl">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.32em] text-skyglow/75">{testimonial.by}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="bg-white px-5 py-24 text-ink sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div {...reveal} className="glass-soft relative overflow-hidden rounded-[2.5rem] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(119,215,255,0.26),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.34),rgba(255,255,255,0.08))]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-label text-ink/52">Call to action</p>
              <h2 className="font-heading mt-5 max-w-3xl text-4xl leading-none tracking-tight text-ink sm:text-5xl lg:text-7xl text-balance">
                Your brand deserves more than ordinary.
              </h2>
            </div>
            <Link href="/contact" className="inline-flex w-fit items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.24em] text-white transition hover:-translate-y-0.5 hover:bg-black">
              Let&apos;s Build Something Unforgettable
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
