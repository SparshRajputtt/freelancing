import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Leaf,
  Heart,
  Star,
  Award,
  Users,
  Target,
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Quote,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Section Wrapper ──────────────────────────────────────────────
function Section({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

// ─── Image Placeholder Component ──────────────────────────────────
function ImagePlaceholder({
  icon,
  label,
  sublabel,
  className = "",
  gradient = "from-emerald-50 to-teal-50",
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_60%)]" />
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-8">
        <div className="w-20 h-20 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/40 flex items-center justify-center shadow-lg mb-4">
          {icon}
        </div>
        <p className="text-slate-700 font-semibold text-lg">{label}</p>
        <p className="text-slate-400 text-sm">{sublabel}</p>
      </div>
    </div>
  );
}

// ─── Main About Component ───────────────────────────────────────
export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Integrity",
      description:
        "We believe in honest pricing, transparent communication, and doing what we say we will do. No hidden fees, no shortcuts.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Care",
      description:
        "Every home we enter is treated with the same respect and attention we would give our own. Your space is sacred.",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Sustainability",
      description:
        "We exclusively use eco-friendly, biodegradable products that are safe for your family, pets, and the planet.",
      color: "from-lime-400 to-emerald-500",
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: "Excellence",
      description:
        "Good enough is never enough. We obsess over the details that others miss, delivering results that exceed expectations.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Community",
      description:
        "We are proud to be part of the GTA community, supporting local families and businesses with dependable service.",
      color: "from-sky-400 to-blue-500",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Growth",
      description:
        "We invest in continuous training and the latest cleaning innovations to always deliver the best possible service.",
      color: "from-violet-400 to-purple-500",
    },
  ];

  const team = [
    {
      name: "Maria Santos",
      role: "Founder & CEO",
      initials: "MS",
      color: "from-emerald-400 to-teal-500",
    },
    {
      name: "David Chen",
      role: "Operations Manager",
      initials: "DC",
      color: "from-sky-400 to-blue-500",
    },
    {
      name: "Aisha Patel",
      role: "Head of Training",
      initials: "AP",
      color: "from-violet-400 to-purple-500",
    },
    {
      name: "James Okafor",
      role: "Client Relations",
      initials: "JO",
      color: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════
           HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.08),_transparent_50%)]" />
        <div className="absolute top-24 right-16 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-20 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">
                About Working Hands
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Built on Trust,
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Driven by Care
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              For over a decade, Working Hands House Cleaning has been the
              trusted choice for homeowners and businesses across the Greater
              Toronto Area. Discover the story behind our commitment to
              excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
           COMPANY STORY
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-28 sm:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div variants={slideLeft} className="flex justify-center">
              <div className="w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl border border-emerald-100 bg-white">
                <img
                  src="/our-story.png"
                  alt="Working Hands Cleaning Services Story"
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </div>
            </motion.div>

            <motion.div variants={slideRight}>
              <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                From a Single Van to the GTA's Most Trusted Name
              </h2>
              <div className="space-y-5">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Working Hands began in 2014 with a simple belief: everyone
                  deserves to come home to a clean, peaceful space. What started
                  as a one-person operation with a single van and a handful of
                  loyal clients has grown into one of the most respected
                  cleaning services in the Greater Toronto Area.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our founder, Maria Santos, built this company on the principle
                  that cleaning is not just about removing dirt — it is about
                  restoring comfort, health, and dignity to the spaces where
                  life happens. That philosophy still guides every decision we
                  make today.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Today, our team of over 40 trained professionals serves
                  thousands of homes and businesses across Toronto, Mississauga,
                  Brampton, Vaughan, and beyond. We have cleaned everything from
                  cozy downtown condos to sprawling suburban estates, and every
                  single one receives our signature attention to detail.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <p className="text-4xl font-bold text-emerald-600">10+</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Years of Service
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-600">40+</p>
                  <p className="text-slate-500 text-sm mt-1">Team Members</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-600">15K+</p>
                  <p className="text-slate-500 text-sm mt-1">Homes Cleaned</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           MISSION
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-28 sm:py-36 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div variants={slideLeft} className="order-2 lg:order-1">
              <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
                Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-8">
                Elevating the Standard of Clean
              </h2>
              <div className="space-y-5">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Our mission is straightforward yet profound: to deliver
                  cleaning services that go beyond surface-level results. We aim
                  to create healthier environments where families thrive,
                  businesses impress, and peace of mind is guaranteed.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We are committed to using only the safest, most effective
                  eco-friendly products available. Every solution in our toolkit
                  is carefully selected to protect your loved ones, your pets,
                  and the environment — without ever compromising on cleaning
                  power.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  But our mission extends beyond the homes we clean. We are
                  dedicated to building a workplace where our team members feel
                  valued, trained, and empowered to do their best work. Happy
                  teams create happy clients.
                </p>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "100% eco-friendly and non-toxic cleaning products",
                  "Rigorous quality checks on every service",
                  "Continuous staff training and certification",
                  "Community-focused hiring and fair wages",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={slideRight} className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-teal-100 border border-slate-200 bg-white">
                <img
                  src="/our-mission.png"
                  alt="Our Mission"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                  draggable={false}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           CORE VALUES
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-28 sm:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(16,185,129,0.03)_1px,_transparent_0)] bg-[length:48px_48px]" />
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
              Our Core Values
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              These six principles are the foundation of everything we do. They
              shape our culture, guide our decisions, and define the Working
              Hands experience.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           MEET OUR TEAM
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-28 sm:py-36 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.08),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.06),_transparent_50%)]" />
        <div className="absolute top-32 left-16 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <motion.div variants={slideLeft}>
              <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
                The People Behind the Shine
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10">
                OUR TEAM
              </h2>

              <div className="space-y-8">
                <p className="text-slate-300 text-lg leading-relaxed">
                  <span className="text-emerald-400 font-semibold">
                    We're more than just a cleaning crew
                  </span>{" "}
                  — we're a team that truly cares. Every space we clean, we
                  treat as if it were our own. With attention to detail, care in
                  every corner, and pride in what we do — we go beyond just
                  "cleaning."
                </p>

                <p className="text-slate-300 text-lg leading-relaxed">
                  <span className="text-emerald-400 font-semibold">
                    Our team is made up of people with values — honesty,
                    responsibility, and a genuine desire to make things better.
                  </span>{" "}
                  We're not afraid of hard work, and we believe that real
                  quality comes from doing things right, every single time.
                </p>

                <p className="text-slate-300 text-lg leading-relaxed">
                  <span className="text-emerald-400 font-semibold">
                    We show up with hands ready to work and hearts in the right
                    place.
                  </span>{" "}
                  Because for us, this isn't just a job — it's a chance to help
                  others feel good in the spaces they live and work in.
                </p>
              </div>

              {/* Team stats */}
              <div className="mt-12 flex flex-wrap gap-8">
                <div>
                  <p className="text-4xl font-bold text-emerald-400">40+</p>
                  <p className="text-slate-500 text-sm mt-1">Team Members</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-400">100%</p>
                  <p className="text-slate-500 text-sm mt-1">
                    Background Checked
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-emerald-400">10+</p>
                  <p className="text-slate-500 text-sm mt-1">Years Together</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Video */}
            <motion.div variants={slideRight} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10 border border-white/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full aspect-[4/3] object-cover"
                  poster="https://static.wixstatic.com/media/7cf92b_2fb3e3b26c054b06922697b27341ec8df000.jpg"
                >
                  <source
                    src="https://video.wixstatic.com/video/7cf92b_2fb3e3b26c054b06922697b27341ec8d/480p/mp4/file.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/10 rounded-2xl rotate-6 blur-sm" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal-500/8 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </Section>x

      {/* ═══════════════════════════════════════════════════════════════
           CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.06),_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">
                Ready to experience the difference?
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Let Working Hands Transform Your Space
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Join thousands of satisfied GTA homeowners who trust us with their
              homes. Request your free, no-obligation quote today.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/quote"
                className="group inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Request a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Serving All GTA</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
