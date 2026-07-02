import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Home as HomeIcon,
  Building2,
  Truck,
  Sofa,
  Paintbrush,
  ShieldCheck,
  Leaf,
  Clock,
  Users,
  Award,
  Star,
  ChevronRight,
  ArrowRight,
  Quote,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─── Before/After Slider Component ──────────────────────────────
function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderValue((x / rect.width) * 100);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = (e) => {
    if (isDragging.current) handleMove(e.clientX);
  };
  const handleTouchMove = (e) => {
    if (isDragging.current) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-4xl mx-auto h-80 sm:h-96 md:h-[28rem] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      {/* After Image (Full) */}
      <div className="absolute inset-0">
        <img
          src="/after.png"
          alt="After Cleaning"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
      >
        <img
          src="/before.png"
          alt="Before Cleaning"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
        style={{ left: `${sliderValue}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-emerald-400">
          <div className="flex gap-0.5">
            <ChevronRight className="w-4 h-4 text-emerald-500 rotate-180" />
            <ChevronRight className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-emerald-500/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium">
        After
      </div>
    </div>
  );
}

// ─── Section Wrapper ────────────────────────────────────────────
function Section({ children, className = "", id = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      id={id}
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

// ─── Main Home Component ─────────────────────────────────────────
export default function Home() {
  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Regular Cleaning",
      description:
        "Weekly or bi-weekly maintenance cleaning to keep your home consistently fresh and tidy.",
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: <HomeIcon className="w-8 h-8" />,
      title: "Deep Cleaning",
      description:
        "Intensive top-to-bottom cleaning for every corner, perfect for seasonal refreshes.",
      color: "from-sky-400 to-blue-500",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Move In / Out",
      description:
        "Comprehensive cleaning for property transitions, ensuring spotless handovers.",
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Cleaning",
      description:
        "Professional office and retail cleaning tailored to your business schedule.",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Post Renovation",
      description:
        "Remove construction dust and debris to reveal your beautifully renovated space.",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Sofa & Mattress",
      description:
        "Deep extraction cleaning for upholstery and mattresses to eliminate allergens.",
      color: "from-cyan-400 to-indigo-400",
    },
  ];

  const features = [
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Reliable",
      desc: "On-time, every time. We respect your schedule.",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Experienced",
      desc: "Over 10 years of professional cleaning expertise.",
    },
    {
      icon: <Leaf className="w-7 h-7" />,
      title: "Eco Friendly",
      desc: "Non-toxic, biodegradable cleaning products.",
    },
    {
      icon: <ShieldCheck className="w-7 h-7" />,
      title: "Background Checked",
      desc: "All staff fully vetted and trustworthy.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Flexible Scheduling",
      desc: "Book online anytime that works for you.",
    },
    {
      icon: <Star className="w-7 h-7" />,
      title: "100% Satisfaction",
      desc: "Not happy? We will re-clean free of charge.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Toronto, ON",
      rating: 5,
      text: "Absolutely phenomenal service! The team arrived on time, was incredibly thorough, and left my condo spotless. I have already booked my next appointment.",
    },
    {
      name: "James K.",
      location: "Mississauga, ON",
      rating: 5,
      text: "We used Working Hands for our move-out cleaning and got our full deposit back. The attention to detail was impressive. Highly recommend!",
    },
    {
      name: "Priya R.",
      location: "Brampton, ON",
      rating: 5,
      text: "The deep cleaning service transformed our home. They even cleaned spots I did not know were dirty. Professional, friendly, and worth every penny.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════
           1. HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.1),_transparent_50%)]" />

        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">
                Premium House Cleaning in the GTA
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              A Cleaner Home,
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                A Better Life
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl"
            >
              Professional, insured, and eco-friendly house cleaning services
              across the Greater Toronto Area. Experience the difference of
              truly spotless spaces.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="/quote"
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Our Services
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <span className="text-white font-semibold text-sm">
                  4.9 Google Rating
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-white/90 text-sm font-medium">
                  Supplies Included
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="text-white/90 text-sm font-medium">
                  Fully Insured
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
           2. ABOUT PREVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div variants={fadeUp} custom={0} className="relative">
              <div className="overflow-hidden rounded-3xl border border-emerald-100 shadow-xl bg-white">
                <img
                  src="/about-us.png"
                  alt="Working Hands House Cleaning GTA"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
                  draggable={false}
                />
              </div>

              {/* Floating Stat Card */}
              <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:right-6 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4">
                <p className="text-3xl font-bold text-emerald-600 leading-none">
                  10+
                </p>
                <p className="text-slate-500 text-sm mt-1">Years Experience</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} custom={1}>
              <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Trusted Cleaning Professionals Serving the GTA
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Working Hands House Cleaning has been transforming homes across
                the Greater Toronto Area for over a decade. Our dedicated team
                of trained professionals takes pride in delivering meticulous,
                reliable, and eco-friendly cleaning services tailored to your
                unique needs.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                From regular maintenance to deep cleans and specialized
                services, we treat every home with the care and respect it
                deserves. Your satisfaction is our guarantee.
              </p>
              <a
                href="/about"
                className="group inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           3. SERVICES PREVIEW
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Premium Cleaning Solutions
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Comprehensive cleaning packages designed for every need, delivered
              with professionalism and care.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={6} className="text-center">
            <a
              href="/services"
              className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           4. WHY CHOOSE US
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-24 sm:py-32 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(16,185,129,0.04)_1px,_transparent_0)] bg-[length:40px_40px]" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              The Working Hands Difference
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              We go above and beyond to deliver an exceptional cleaning
              experience every single time.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           5. BEFORE & AFTER
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-24 sm:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-emerald-400 font-semibold text-sm tracking-wider uppercase mb-3 block">
              Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              See the Transformation
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Drag the slider to witness the remarkable difference our
              professional cleaning makes.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1}>
            <BeforeAfterSlider />
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           6. TESTIMONIALS
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Real reviews from real homeowners across the GTA who trust Working
              Hands.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 relative"
              >
                <Quote className="w-10 h-10 text-emerald-100 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">
                      {t.name}
                    </p>
                    <p className="text-slate-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           7. FINAL CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.08),_transparent_50%)]" />

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
                Ready for a cleaner home?
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Get Your Free Quote Today
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Experience the Working Hands difference. No obligations, no hidden
              fees — just honest pricing for premium cleaning services across
              the GTA.
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
                Request Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-10 flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm"
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
