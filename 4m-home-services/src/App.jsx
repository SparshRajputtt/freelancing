import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Phone,
  MapPin,
  Instagram,
  ShieldCheck,
  Sparkles,
  Clock,
  Star,
  ChevronDown,
  ArrowRight,
  ArrowLeftRight,
  Mail,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

/* ============================================================
   4M HOME SERVICES — PREMIUM SITE CONTENT
   Edit the constants below to update copy, images & contact info.
   ============================================================ */

const BUSINESS = {
  name: "4M Home Services",
  legalName: "4M Home Services Inc.",
  phone: "(437) 555‑0142", // placeholder — replace with real number
  phoneRaw: "+14375550142",
  email: "hello@4mhomeservices.ca", // placeholder — replace with real inbox
  instagram: "@4m_cleaning",
  instagramUrl: "https://instagram.com/4m_cleaning",
  city: "Toronto, Ontario",
};

// Replace with the real founder photo, name & story.
const FOUNDER = {
  name: "Founder Name",
  role: "Founder & Lead Cleaner",
  photo:
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
  quote:
    "I don't send anyone into a home I wouldn't trust with my own.",
  bio: [
    "4M started small — a single vacuum, a notebook of appointments, and a standard I refused to compromise on. The name itself is a promise: four hands, one mission, every single time.",
    "Cleaning isn't just wiping a surface. It's noticing the things most people walk past — the baseboard nobody checks, the streak left on a mirror, the smell that lingers after a 'quick clean.' That kind of attention came from years of doing this work myself, long before it became a company.",
    "Every member of our team is trained to the same European-influenced standard: methodical, unhurried, and finished properly — or not finished at all.",
  ],
};

const TRUST_ITEMS = [
  { icon: Clock, label: "Locally Trusted", detail: "Since 2022" },
  { icon: ShieldCheck, label: "Fully Insured", detail: "Every visit, every team" },
  { icon: Sparkles, label: "Luxury Standards", detail: "Hospitality‑grade finish" },
  { icon: CheckCircle2, label: "Residential & Commercial", detail: "Homes & businesses" },
  { icon: Clock, label: "Fast Response", detail: "Quotes within 24 hours" },
  { icon: Star, label: "5‑Star Satisfaction", detail: "Rated by the GTA" },
];

const SERVICES = [
  {
    name: "Signature Regular Cleaning",
    tag: "Most Booked",
    desc: "A recurring rhythm of care — weekly, bi‑weekly, or monthly — so your home is never more than a few days from spotless.",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Deep Reset Cleaning",
    tag: "Top to Bottom",
    desc: "An intensive, detail‑obsessed clean for the spaces that build up over time — baseboards, grout, behind appliances, inside cabinets.",
    image:
      "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Move‑In / Move‑Out Cleaning",
    tag: "Fresh Start",
    desc: "A property handed over exactly as it should be — every cupboard, sill, and corner finished for the next chapter, or the final walkthrough.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Post‑Renovation Cleaning",
    tag: "Construction Dust, Gone",
    desc: "Fine dust and residue removed from every surface, vent, and fixture — so a finished renovation finally feels finished.",
    image:
      "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Luxury Home Cleaning",
    tag: "White‑Glove",
    desc: "A bespoke standard for larger and high‑end properties — discreet, unhurried, and tailored to the materials in your home.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Commercial & Office Cleaning",
    tag: "Built Around Your Hours",
    desc: "Reliable, after‑hours cleaning for offices and small businesses that need consistency without the disruption.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
];

const WHY_US = [
  "A trained eye for the details most cleaners walk past",
  "Hotel‑grade finishing on every surface, every visit",
  "Background‑checked, fully insured team — no exceptions",
  "Scheduling that respects your time, not the other way around",
  "Eco‑conscious products available on request",
  "A team that treats your home like it's their own",
];

const PROCESS = [
  {
    n: "01",
    title: "You reach out",
    text: "Send a few photos or details through our quick enquiry form, or call us directly. Most quotes are returned within a day.",
  },
  {
    n: "02",
    title: "We build your quote",
    text: "No generic packages. We price around your home, your priorities, and how often you'd like us back.",
  },
  {
    n: "03",
    title: "We clean, properly",
    text: "Our team arrives on time, works to a checklist, and finishes every room before moving to the next — never rushed.",
  },
  {
    n: "04",
    title: "You walk through with us",
    text: "Before we leave, we walk the space with you. If something isn't right, we fix it on the spot.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    area: "Yorkville, Toronto",
    text:
      "They cleaned baseboards I didn't even know needed cleaning. My condo hasn't looked this good since the day I moved in.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "David Cho",
    area: "North York",
    text:
      "Booked a post‑renovation clean and was genuinely shocked at the dust they got out of places I would have never reached.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Priya Nair",
    area: "Markham",
    text:
      "Same two cleaners every visit, always on time, always thorough. It feels less like a service and more like a standard.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Jennifer Walsh",
    area: "Etobicoke",
    text:
      "Used them for a move‑out clean and got our full deposit back without a single question from the landlord.",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
  {
    name: "Marc Robitaille",
    area: "Vaughan",
    text:
      "Our office has never been this consistent. They work around our hours and we never even notice they've been in.",
    avatar: "https://i.pravatar.cc/150?img=51",
  },
  {
    name: "Aisha Khan",
    area: "Mississauga",
    text:
      "I'm particular about my kitchen and they exceeded what I expected. Worth every dollar for the peace of mind alone.",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
];

const AREAS = [
  "Toronto",
  "North York",
  "Vaughan",
  "Richmond Hill",
  "Markham",
  "Mississauga",
  "Etobicoke",
  "Greater Toronto Area",
];

const FAQS = [
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not at all. Many of our clients give us secure entry instructions and go about their day. We'll send a message when we arrive and when we're finished.",
  },
  {
    q: "What's actually different between a Regular Clean and a Deep Clean?",
    a: "A Regular Clean maintains a home that's already in good shape — surfaces, floors, bathrooms, kitchen. A Deep Clean goes further: baseboards, inside appliances, grout, light fixtures, and the buildup that accumulates over months. Most new clients start with a Deep Clean, then move to a recurring schedule.",
  },
  {
    q: "Do you bring your own supplies and equipment?",
    a: "Yes, every team arrives fully equipped. If you'd prefer we use specific products on certain surfaces — natural stone, for example — just let us know in advance.",
  },
  {
    q: "What happens if something gets damaged during a clean?",
    a: "It's exceptionally rare, but you're covered. 4M Home Services is fully insured, and we'll always tell you directly rather than hope you don't notice.",
  },
  {
    q: "Can I request the same cleaner or team each time?",
    a: "Yes — most of our recurring clients keep the same one or two people for every visit. Consistency is part of how we maintain quality.",
  },
  {
    q: "How do you screen and train your cleaners?",
    a: "Every team member is background‑checked before joining, then trained to our checklist‑based standard before working independently in a client's home.",
  },
  {
    q: "How far in advance should I book?",
    a: "For one‑time cleans, 2–4 days' notice usually secures your preferred time. Recurring clients are placed on a fixed slot, so there's no rebooking each time.",
  },
  {
    q: "Do you offer eco‑friendly cleaning products?",
    a: "Yes, on request at no extra charge — just mention it when you book and we'll match the products to your home.",
  },
];

/* ============================================================
   SHARED UI HELPERS
   ============================================================ */

function Reveal({ children, delay = 0, y = 28, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, dark = false }) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-widest2 ${
        dark ? "text-brass-light" : "text-brass-dark"
      }`}
    >
      <span className={`h-px w-6 ${dark ? "bg-brass-light" : "bg-brass-dark"}`} />
      {children}
    </span>
  );
}

function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2" aria-hidden="true">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-brass to-transparent" />
    </div>
  );
}

function PrimaryButton({ children, href = "#contact", className = "" }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all duration-300 hover:bg-brass-dark hover:shadow-lg hover:shadow-brass/20 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function SecondaryButton({ children, href, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-transparent px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink hover:bg-ink hover:text-paper ${className}`}
    >
      {children}
    </a>
  );
}

/* ============================================================
   NAVBAR
   ============================================================ */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Our Story", href: "#founder" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "bg-paper/95 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span
            className={`font-display text-2xl font-medium tracking-tight ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            4M
          </span>
          <span
            className={`hidden text-[11px] font-medium uppercase tracking-widest2 sm:inline ${
              scrolled ? "text-ink/50" : "text-paper/70"
            }`}
          >
            Home Services
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium uppercase tracking-wide transition-colors duration-300 ${
                scrolled ? "text-ink/70 hover:text-ink" : "text-paper/80 hover:text-paper"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <PrimaryButton href="#contact" className="!px-6 !py-2.5">
            Free Quote
          </PrimaryButton>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden ${scrolled ? "text-ink" : "text-paper"}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-paper lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-ink/5 py-3 text-sm font-medium text-ink/80"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <SecondaryButton href={`tel:${BUSINESS.phoneRaw}`}>
                  <Phone className="h-4 w-4" /> Call Now
                </SecondaryButton>
                <PrimaryButton href="#contact">Book a Free Quote</PrimaryButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ============================================================
   HERO — the "spotless reveal": image sharpens from a haze
   as a brass line wipes across it on load.
   ============================================================ */

function Hero() {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 450);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100vh] items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <motion.img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
          alt="Sunlit, immaculately clean luxury living room"
          className="h-full w-full object-cover"
          initial={{ scale: 1.08, filter: "blur(14px) saturate(0.7)" }}
          animate={
            revealed
              ? { scale: 1, filter: "blur(0px) saturate(1)" }
              : { scale: 1.08, filter: "blur(14px) saturate(0.7)" }
          }
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* the wiping brass line */}
        <motion.div
          className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-transparent via-brass-light to-transparent shadow-[0_0_24px_4px_rgba(199,168,118,0.6)]"
          initial={{ left: "0%", opacity: 0 }}
          animate={revealed ? { left: "100%", opacity: [0, 1, 1, 0] } : {}}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/10" />
        <div className="absolute inset-0 bg-ink/20" />
      </div>

      {/* drifting dust motes — fade out, reinforcing "spotless" */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-paper/40"
            style={{ left: `${8 + i * 9}%`, top: `${20 + (i % 5) * 14}%` }}
            initial={{ opacity: 0.5, y: 0 }}
            animate={{ opacity: 0, y: -40 }}
            transition={{ duration: 3 + i * 0.3, delay: 1 + i * 0.15, ease: "easeOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="max-w-2xl"
        >
          <Eyebrow dark>Toronto &amp; The GTA · Est. 2022</Eyebrow>

          <h1 className="mt-6 font-display text-[2.6rem] font-medium leading-[1.08] text-paper sm:text-6xl lg:text-[4.2rem]">
            The kind of clean you{" "}
            <em className="font-display italic text-brass-light">feel</em> the
            moment you walk in.
          </h1>

          <p className="mt-7 max-w-md text-[15px] leading-relaxed text-paper/75 sm:text-base">
            4M Home Services brings hospitality‑grade standards to homes and
            businesses across the GTA — fully insured, quietly meticulous,
            and never, ever rushed.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <PrimaryButton href="#contact">Book a Free Quote</PrimaryButton>
            <SecondaryButton
              href={`tel:${BUSINESS.phoneRaw}`}
              className="!border-paper/30 !text-paper hover:!bg-paper hover:!text-ink"
            >
              <Phone className="h-4 w-4" /> Call Now
            </SecondaryButton>
          </div>

          <div className="mt-12 flex items-center gap-6 text-paper/70">
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-brass-light text-brass-light" />
              ))}
            </div>
            <span className="text-[13px]">Rated 5 stars across the GTA</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5 text-paper/50" />
      </motion.div>
    </section>
  );
}

/* ============================================================
   TRUST STRIP
   ============================================================ */

function TrustStrip() {
  return (
    <section className="relative -mt-px bg-paper py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 sm:grid-cols-3 lg:grid-cols-6">
          {TRUST_ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <div className="flex h-full flex-col items-center gap-2.5 bg-paper px-4 py-8 text-center">
                <item.icon className="h-5 w-5 text-brass-dark" strokeWidth={1.5} />
                <p className="font-display text-[15px] font-medium leading-tight text-ink">
                  {item.label}
                </p>
                <p className="text-[11.5px] text-ink/50">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES
   ============================================================ */

function Services() {
  return (
    <section id="services" className="bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow>Premium Services</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Six ways to keep a home — or business — exactly as it should be.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/8 bg-ink/8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 0.08}>
              <div className="group relative flex h-full flex-col bg-paper">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-ink">
                    {s.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 py-7">
                  <h3 className="font-display text-xl font-medium text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink/60">
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-brass-dark transition-all duration-300 group-hover:gap-3"
                  >
                    Request this service <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   WHY CHOOSE US — split layout
   ============================================================ */

function WhyChooseUs() {
  return (
    <section className="bg-linen py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1556909212-d5b65500a873?q=80&w=1200&auto=format&fit=crop"
              alt="Cleaning professional carefully wiping a luxury kitchen countertop"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>Why Homeowners Choose Us</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
              We don't clean faster.
              <br />
              We clean <em className="italic text-brass-dark">properly.</em>
            </h2>
          </Reveal>

          <ul className="mt-10 flex flex-col gap-5">
            {WHY_US.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brass/15">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brass-dark" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink/75">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SIGNATURE ELEMENT — "The Reveal" before/after slider
   ============================================================ */

function RevealSlider({ before, after, label }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(2, Math.min(98, pct));
    setPos(pct);
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(x);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-2xl shadow-ink/10 sm:aspect-[16/10]"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromClientX(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt={`${label} — after cleaning`}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={before}
          alt={`${label} — before cleaning`}
          className="h-full w-full object-cover"
          draggable={false}
        />
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-paper/30 to-transparent" />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-paper backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-brass/90 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-ink backdrop-blur-sm">
        After
      </span>

      <div
        className="absolute inset-y-0 w-[3px] bg-paper shadow-[0_0_20px_rgba(0,0,0,0.25)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-brass bg-paper shadow-lg">
          <ArrowLeftRight className="h-4 w-4 text-brass-dark" />
        </div>
      </div>
    </div>
  );
}

function BeforeAfter() {
  const pairs = [
    {
      label: "Kitchen Deep Clean",
      before:
        "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&w=1200&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop",
    },
    {
      label: "Bathroom Restoration",
      before:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1200&auto=format&fit=crop",
      after:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="bg-ink py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal>
          <Eyebrow dark>Before &amp; After</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-tight text-paper sm:text-5xl">
            Drag the line. See the standard.
          </h2>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-paper/60">
            Real transformations from real GTA homes — slide to see exactly
            what a 4M clean looks like.
          </p>
        </Reveal>

        <div className="mt-14 flex justify-center gap-3">
          {pairs.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2 text-[12.5px] font-semibold uppercase tracking-wide transition-all duration-300 ${
                active === i
                  ? "bg-brass text-ink"
                  : "bg-paper/10 text-paper/60 hover:bg-paper/15"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <Reveal key={active}>
            <RevealSlider
              before={pairs[active].before}
              after={pairs[active].after}
              label={pairs[active].label}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROCESS
   ============================================================ */

function Process() {
  return (
    <section id="process" className="bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Four steps. No surprises.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.1}>
              <div className="relative border-t border-ink/10 pt-6">
                <span className="font-display text-3xl font-medium text-brass-dark/70">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-medium text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-ink/60">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOUNDER
   ============================================================ */

function Founder() {
  return (
    <section id="founder" className="bg-linen py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <Eyebrow>About the Founder</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            A standard built by hand, not by franchise.
          </h2>

          <blockquote className="mt-8 border-l-2 border-brass pl-6 font-display text-xl italic leading-relaxed text-ink/80">
            "{FOUNDER.quote}"
          </blockquote>

          <div className="mt-8 flex flex-col gap-4">
            {FOUNDER.bio.map((p, i) => (
              <p key={i} className="text-[15px] leading-relaxed text-ink/65">
                {p}
              </p>
            ))}
          </div>

          <p className="mt-7 font-display text-lg font-medium text-ink">
            {FOUNDER.name}
            <span className="ml-2 text-[13px] font-sans font-normal uppercase tracking-wide text-ink/45">
              {FOUNDER.role}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={FOUNDER.photo}
                alt={FOUNDER.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-paper p-5 shadow-xl sm:block">
              <p className="font-display text-3xl font-medium text-brass-dark">2022</p>
              <p className="text-[11.5px] uppercase tracking-wide text-ink/50">
                Founded in Toronto
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   TESTIMONIALS
   ============================================================ */

function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <Eyebrow>Customer Testimonials</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            What the GTA is saying.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-ink/8 bg-paper p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-brass text-brass" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink/70">
                  "{t.text}"
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[13.5px] font-semibold text-ink">{t.name}</p>
                    <p className="text-[12px] text-ink/45">{t.area}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVICE AREAS
   ============================================================ */

function ServiceAreas() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <Eyebrow dark>Service Areas</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-paper sm:text-5xl">
            Serving Toronto and the GTA.
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          {AREAS.map((area, i) => (
            <Reveal key={area} delay={i * 0.04}>
              <div className="flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-5 py-2.5 text-[13.5px] text-paper/80 transition-colors duration-300 hover:border-brass-light/50 hover:text-paper">
                <MapPin className="h-3.5 w-3.5 text-brass-light" />
                {area}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */

function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-[17px] font-medium text-ink">{q}</span>
        <ChevronDown
          className={`h-4 w-4 flex-none text-brass-dark transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14.5px] leading-relaxed text-ink/60">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="bg-linen py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal className="text-center">
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Good questions, honest answers.
          </h2>
        </Reveal>

        <div className="mt-14">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <FaqItem
                q={f.q}
                a={f.a}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT / BOOKING CTA
   ============================================================ */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend‑only demo: wire this up to your form backend / email service.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28">
      <div className="absolute inset-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <Reveal>
            <Eyebrow dark>Book a Free Quote</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-paper sm:text-5xl">
              Let's give your space the standard it deserves.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/65">
              Tell us a little about your space and we'll come back to you
              with a tailored quote — usually within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10 flex flex-col gap-5">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="flex items-center gap-4 text-paper/85 transition-colors hover:text-paper"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20">
                <Phone className="h-[18px] w-[18px]" />
              </span>
              <span className="text-[15px] font-medium">{BUSINESS.phone}</span>
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="flex items-center gap-4 text-paper/85 transition-colors hover:text-paper"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20">
                <Mail className="h-[18px] w-[18px]" />
              </span>
              <span className="text-[15px] font-medium">{BUSINESS.email}</span>
            </a>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-paper/85 transition-colors hover:text-paper"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/20">
                <Instagram className="h-[18px] w-[18px]" />
              </span>
              <span className="text-[15px] font-medium">{BUSINESS.instagram}</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-2xl bg-paper p-8 shadow-2xl sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-10 w-10 text-brass-dark" />
                <h3 className="mt-5 font-display text-2xl font-medium text-ink">
                  Thank you.
                </h3>
                <p className="mt-2 max-w-xs text-[14.5px] text-ink/60">
                  We've received your request and will be in touch within 24
                  hours with your quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-[12.5px] font-medium uppercase tracking-wide text-ink/50">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-[14.5px] text-ink placeholder:text-ink/35 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/20"
                    />
                  </div>
                  <div>
                    <label className="text-[12.5px] font-medium uppercase tracking-wide text-ink/50">
                      Phone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(437) 555‑0142"
                      className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-[14.5px] text-ink placeholder:text-ink/35 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[12.5px] font-medium uppercase tracking-wide text-ink/50">
                    Service Needed
                  </label>
                  <select className="mt-2 w-full rounded-lg border border-ink/15 bg-linen px-4 py-3 text-[14.5px] text-ink focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/20">
                    {SERVICES.map((s) => (
                      <option key={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[12.5px] font-medium uppercase tracking-wide text-ink/50">
                    Tell us about your space
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Size of home, number of rooms, preferred date..."
                    className="mt-2 w-full resize-none rounded-lg border border-ink/15 bg-linen px-4 py-3 text-[14.5px] text-ink placeholder:text-ink/35 focus:border-brass focus:outline-none focus:ring-2 focus:ring-brass/20"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper transition-all duration-300 hover:bg-brass-dark"
                >
                  Request My Free Quote
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 border-b border-paper/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl font-medium text-paper">4M</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest2 text-paper/40">
              Home Services
            </p>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-paper/55">
              Premium residential and commercial cleaning, locally trusted
              across Toronto and the GTA since 2022.
            </p>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[13.5px] font-medium text-paper/70 hover:text-paper"
            >
              <Instagram className="h-4 w-4" /> {BUSINESS.instagram}
            </a>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-paper/40">
              Explore
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-paper/65">
              <li><a href="#services" className="hover:text-paper">Services</a></li>
              <li><a href="#process" className="hover:text-paper">Our Process</a></li>
              <li><a href="#founder" className="hover:text-paper">Our Story</a></li>
              <li><a href="#testimonials" className="hover:text-paper">Reviews</a></li>
              <li><a href="#faq" className="hover:text-paper">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-paper/40">
              Service Areas
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px] text-paper/65">
              {AREAS.slice(0, 5).map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-wide text-paper/40">
              Get in Touch
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-[14px] text-paper/65">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-brass-light" /> {BUSINESS.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-brass-light" /> {BUSINESS.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brass-light" /> {BUSINESS.city}
              </li>
            </ul>
            <PrimaryButton href="#contact" className="mt-5 !px-5 !py-2.5">
              Get a Free Quote
            </PrimaryButton>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-[12px] text-paper/40 sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.</p>
          <p>Locally owned. Fully insured. Proudly serving the GTA.</p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   STICKY MOBILE CALL BAR
   ============================================================ */

function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 border-t border-ink/10 bg-paper/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 py-3 text-sm font-semibold text-ink"
      >
        <Phone className="h-4 w-4" /> Call Now
      </a>
      <a
        href="#contact"
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink py-3 text-sm font-semibold text-paper"
      >
        Free Quote
      </a>
    </div>
  );
}

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  return (
    <div className="font-sans text-char antialiased">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <Process />
      <Founder />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCallBar />
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </div>
  );
}
