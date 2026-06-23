import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Phone,
  MapPin,
  Star,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Droplets,
  Home,
  CheckCircle,
  Quote,
} from "lucide-react";

/* ============================================================
   PREMIUM AI WEBSITE - JUST CLEANING
   Exterior Cleaning & Pressure Washing Services
   Abbotsford & Mission, BC, Canada
   ============================================================ */

// ─── Animation Variants ───
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Scroll Reveal Component ───
function ScrollReveal({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Navigation ───
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#before-after" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <img
              src="/logo.jpeg"
              alt="Company Logo"
              className="w-7 h-7 object-contain rounded-lg"
            />

            <div className="flex flex-col">
              <span
                className={`text-lg font-bold tracking-tight leading-none transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}
              >
                Just Cleaning
              </span>
              <span
                className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? "text-teal-600" : "text-white/70"}`}
              >
                Exterior Cleaning
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-teal-500 ${
                  scrolled ? "text-slate-600" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-600/20"
                  : "bg-white text-teal-700 hover:bg-white/90"
              }`}
            >
              Free Quote
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-stone-200 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-slate-700 font-medium hover:text-teal-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-teal-600 text-white font-semibold py-3 rounded-full hover:bg-teal-700 transition-colors"
              >
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ─── Hero Section ───
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758158452965-ef267a639880?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Beautiful home exterior after cleaning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, 10, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-2xl"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8"
            >
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white/90 text-sm font-medium">
                4.9/5 Google Rating - Trusted by 200+ Homeowners
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Protect Your Home's{" "}
              <span className="text-teal-400">First Impression</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg lg:text-xl text-white/75 leading-relaxed mb-10 max-w-xl"
            >
              Professional exterior cleaning that restores, protects, and
              transforms your property. Serving Abbotsford & Mission with
              meticulous attention to every detail.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-teal-500/25 hover:shadow-teal-400/30 hover:-translate-y-0.5"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+16045551234"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap items-center gap-6 text-white/60 text-sm"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Local & Family-Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-400" />
                <span>Satisfaction Guaranteed</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Clean modern home exterior"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold text-lg">
                      200+ Homes Transformed
                    </p>
                    <p className="text-slate-500 text-sm">
                      Across Abbotsford & Mission, BC
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Trust Bar ───
function TrustBar() {
  const trustItems = [
    { icon: Star, label: "4.9/5 Google Rating", sub: "Based on 50+ Reviews" },
    { icon: Home, label: "Residential Specialists", sub: "Homes & Properties" },
    { icon: CheckCircle, label: "Free Quotes", sub: "No Obligation" },
    { icon: MapPin, label: "Local Service", sub: "Abbotsford & Mission" },
    { icon: Shield, label: "Fully Insured", sub: "Peace of Mind" },
    {
      icon: Award,
      label: "Satisfaction Guaranteed",
      sub: "100% Happy Customers",
    },
  ];

  return (
    <section className="bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, i) => (
            <ScrollReveal key={i} variants={fadeUp} delay={i * 0.05}>
              <div className="flex flex-col items-center text-center group">
                <div className="w-12 h-12 bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center mb-3 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-slate-900 font-semibold text-sm">
                  {item.label}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">{item.sub}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ───
function Services() {
  const services = [
    {
      title: "Roof Cleaning",
      description:
        "Moss, algae, and debris silently destroy your roof. Our gentle soft-wash treatment eliminates growth at the root while preserving shingles - extending your roof's life by years.",
      image:
        "https://images.unsplash.com/photo-1507023489093-26fc6366ec14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Soft-wash technology",
        "Moss & algae removal",
        "Gutter debris clearing",
      ],
      icon: Home,
    },
    {
      title: "Gutter Cleaning",
      description:
        "Clogged gutters cause water damage, foundation issues, and pest infestations. We thoroughly clear, flush, and inspect your entire gutter system to protect what matters most.",
      image:
        "https://crystalclear-window-cleaning.com/wp-content/uploads/2023/10/Gutter-Cleaning-Portland-OR.jpg",
      features: [
        "Complete debris removal",
        "Downspout flushing",
        "Damage inspection",
      ],
      icon: Droplets,
    },
    {
      title: "Siding Cleaning",
      description:
        "Years of dirt, mildew, and oxidation dull your home's appearance. Our low-pressure cleaning method safely restores vinyl, wood, and fiber cement siding to like-new condition.",
      image:
        "https://irp.cdn-website.com/5ef8b4dd/dms3rep/multi/c1c5a0b1a4dacc0d73bd017a7c3cab51f6fc6ad3-1.jpeg",
      features: [
        "Safe low-pressure wash",
        "Mildew & mold removal",
        "Color restoration",
      ],
      icon: Shield,
    },
    {
      title: "Driveway Cleaning",
      description:
        "Oil stains, moss, and grime make driveways look neglected and create slip hazards. Our high-pressure surface cleaning strips away years of buildup, revealing clean concrete.",
      image:
        "https://www.sharkpressurewashing.org/wp-content/uploads/2024/12/The-Hidden-Culprits-Damaging-Your-Driveway-scaled.jpg",
      features: [
        "Oil stain removal",
        "Moss & weed elimination",
        "Surface sealing available",
      ],
      icon: Award,
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Services Built Around
            <br className="hidden lg:block" /> Your Home's Needs
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Every surface requires a different approach. We tailor our cleaning
            methods to protect your property while delivering exceptional
            results.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} variants={scaleIn} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-stone-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white text-xl font-bold">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-slate-600 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <span
                        key={j}
                        className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-medium px-3 py-1.5 rounded-full"
                      >
                        <CheckCircle className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ───
function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Attention to Detail",
      description:
        "We treat every corner, edge, and surface with the same meticulous care we'd give our own homes. No shortcuts, ever.",
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description:
        "We show up when we say we will. Clear communication, punctual arrivals, and consistent quality you can count on every time.",
    },
    {
      icon: Award,
      title: "Friendly Professionals",
      description:
        "Our team is courteous, respectful, and genuinely passionate about helping homeowners love their property again.",
    },
    {
      icon: Phone,
      title: "Fast Response",
      description:
        "Questions answered within hours, quotes delivered quickly, and scheduling that works around your busy life.",
    },
    {
      icon: Droplets,
      title: "Safe Cleaning Methods",
      description:
        "We use the right pressure, the right solutions, and the right techniques for every surface to prevent damage.",
    },
    {
      icon: Star,
      title: "Outstanding Results",
      description:
        "Before we leave, we walk the property with you to ensure every expectation has been exceeded.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variants={slideFromLeft}>
            <span className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Why Homeowners Trust Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              More Than Just
              <br />a Cleaning Crew
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              When you invite someone onto your property, you deserve a team
              that respects your home, communicates clearly, and delivers
              results that make you proud. That is the Just Cleaning difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/20"
              >
                Request a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:+16045551234"
                className="inline-flex items-center justify-center gap-2 text-white/80 hover:text-white font-semibold px-6 py-4 transition-colors"
              >
                <Phone className="w-5 h-5" />
                (604) 555-1234
              </a>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <ScrollReveal key={i} variants={fadeUp} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500/30 transition-colors">
                    <reason.icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Before & After Section ───
function BeforeAfter() {
  const comparisons = [
    {
      before: "/driveway-cleaning/before.png",
      after: "/driveway-cleaning/after.png",
      label: "Driveway Transformation",
      description:
        "Years of oil stains and moss buildup removed in a single session.",
    },
    {
      before: "/siding-cleaning/before.png",
      after: "/siding-cleaning/after.jpg",
      label: "Siding Restoration",
      description:
        "Mildew and oxidation stripped away, revealing the original color.",
    },
    {
      before: "/roof-cleaning/before.png",
      after: "/roof-cleaning/after.png",
      label: "Roof Cleaning",
      description:
        "Moss and algae eliminated with our gentle soft-wash treatment.",
    },
  ];

  return (
    <section id="before-after" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Real Results
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            See the Transformation
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Drag to compare before and after. These are the kinds of dramatic
            improvements we deliver on every job.
          </p>
        </ScrollReveal>

        <div className="space-y-16">
          {comparisons.map((item, i) => (
            <ScrollReveal
              key={i}
              variants={i % 2 === 0 ? slideFromLeft : slideFromRight}
            >
              <ComparisonSlider item={item} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSlider({ item }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e) => isDragging && handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div
        ref={containerRef}
        className="relative rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none aspect-[4/3]"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <img
          src={item.after}
          alt="After cleaning"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={item.before}
            alt="Before cleaning"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
            BEFORE
          </div>
        </div>
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-0.5">
              <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
              <div className="w-0.5 h-4 bg-slate-400 rounded-full" />
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          AFTER
        </div>
      </div>

      <div className="lg:pl-8">
        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
          {item.label}
        </h3>
        <p className="text-slate-500 text-lg leading-relaxed mb-6">
          {item.description}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors group"
        >
          Get Your Free Quote
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

// ─── Reviews Section ───
function Reviews() {
  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "Abbotsford, BC",
      rating: 5,
      text: "We had moss covering our entire roof and the team made it look brand new. They were professional, respectful of our garden, and explained everything they were doing. Worth every penny!",
      service: "Roof Cleaning",
      avatar: "S",
    },
    {
      name: "David Chen",
      location: "Mission, BC",
      rating: 5,
      text: "The driveway transformation was incredible. I honestly did not think those oil stains would ever come out. The crew arrived on time, worked efficiently, and left everything spotless.",
      service: "Driveway Cleaning",
      avatar: "D",
    },
    {
      name: "Jennifer Okonkwo",
      location: "Abbotsford, BC",
      rating: 5,
      text: "Our gutters were completely clogged after the fall. They cleaned everything out, flushed the downspouts, and even pointed out a small repair we needed. Fantastic attention to detail.",
      service: "Gutter Cleaning",
      avatar: "J",
    },
    {
      name: "Robert Henderson",
      location: "Mission, BC",
      rating: 5,
      text: "The siding on our 20-year-old house looked grey and lifeless. After Just Cleaning finished, the original color came back and the house looks years younger. Neighbors keep asking who we used!",
      service: "Siding Cleaning",
      avatar: "R",
    },
    {
      name: "Amanda Liu",
      location: "Abbotsford, BC",
      rating: 5,
      text: "I have used other pressure washing services before, but these guys are on another level. They actually care about the results. Our deck, driveway, and siding all look phenomenal.",
      service: "Full Exterior Package",
      avatar: "A",
    },
    {
      name: "Michael Tremblay",
      location: "Abbotsford, BC",
      rating: 5,
      text: "Fast quote, fair pricing, and the work was done exactly when promised. The team was friendly and professional from start to finish. Already booked them for next spring!",
      service: "Roof & Gutter Cleaning",
      avatar: "M",
    },
  ];

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            What Your Neighbours Say
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real reviews from real homeowners across Abbotsford and Mission who
            trusted us with their properties.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ScrollReveal key={i} variants={fadeUp} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg transition-all duration-500 border border-stone-100 h-full flex flex-col"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-teal-100 mb-3" />
                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-bold text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">
                      {review.name}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {review.location} &middot; {review.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variants={fadeUp} className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-5 shadow-sm border border-stone-200">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-200">
                <span className="text-2xl font-bold text-slate-800">G</span>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-slate-900">4.9</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-slate-400 text-xs">
                  Based on 50+ Google Reviews
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-stone-200" />
            <p className="hidden sm:block text-slate-500 text-sm">
              Join hundreds of satisfied homeowners
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Service Areas ───
function ServiceAreas() {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80"
          alt="Fraser Valley landscape"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal variants={slideFromLeft}>
            <span className="inline-block text-teal-400 font-semibold text-sm tracking-widest uppercase mb-4">
              Service Area
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              Proudly Serving
              <br />
              the Fraser Valley
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We are not a faceless franchise - we are your neighbours. Based
              right here in Abbotsford, we understand the unique challenges that
              Fraser Valley weather brings to your home's exterior.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <h3 className="text-white font-bold text-lg">Abbotsford</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Full coverage across all neighbourhoods including Clearbrook,
                  Sumas, and Matsqui.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-teal-400" />
                  <h3 className="text-white font-bold text-lg">Mission</h3>
                </div>
                <p className="text-slate-400 text-sm">
                  Serving Mission City, Hatzic, Dewdney, and surrounding rural
                  properties.
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 text-slate-400 text-sm">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Typical response time: Within 24 hours</span>
            </div>
          </ScrollReveal>

          <ScrollReveal variants={slideFromRight}>
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-white font-bold text-xl mb-6">
                  Ready to Transform Your Property?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+16045551234"
                    className="flex items-center gap-4 bg-teal-600 hover:bg-teal-500 text-white p-5 rounded-2xl transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Call Us Directly</p>
                      <p className="text-teal-100 text-sm">(604) 555-1234</p>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                  <a
                    href="#contact"
                    className="flex items-center gap-4 bg-white/10 hover:bg-white/15 text-white p-5 rounded-2xl transition-all duration-300 border border-white/10 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">
                        Request a Free Quote
                      </p>
                      <p className="text-slate-400 text-sm">
                        No obligation, fast response
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2 text-slate-400 text-sm">
                  <Shield className="w-4 h-4 text-teal-400" />
                  <span>Fully insured and bonded for your protection</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ Section ───
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How often should I clean my roof?",
      answer:
        "In the Fraser Valley's wet climate, we recommend roof cleaning every 2-3 years. Moss and algae grow quickly in our damp conditions, and left untreated, they can lift shingles, trap moisture, and significantly shorten your roof's lifespan. If you notice green patches or dark streaks, it is time to schedule a cleaning.",
    },
    {
      question: "Do you provide free estimates?",
      answer:
        "Absolutely. Every quote we provide is completely free and comes with no obligation. We will visit your property, assess the work needed, and give you a detailed, transparent breakdown of costs. No hidden fees, no surprises - just honest pricing for honest work.",
    },
    {
      question: "Is pressure washing safe for my home?",
      answer:
        "It depends on the surface. That is why we use different techniques for different materials. For delicate surfaces like roofs, siding, and wood decks, we use soft-wash methods with low pressure and specialized cleaning solutions. For tough surfaces like concrete driveways, we use higher pressure. We always assess your property first and use the safest, most effective method for each surface.",
    },
    {
      question: "Which areas do you serve?",
      answer:
        "We proudly serve homeowners throughout Abbotsford and Mission, BC, including surrounding areas in the Fraser Valley. If you are unsure whether we cover your location, just give us a call - we are happy to accommodate when possible.",
    },
    {
      question: "How long does the service take?",
      answer:
        "Most residential jobs are completed in 2-4 hours. A full roof cleaning might take 3-5 hours, while a driveway or patio cleaning is typically 1-2 hours. We will give you a clear time estimate when we provide your quote, and we always work efficiently to minimize disruption to your day.",
    },
    {
      question: "What surfaces can you clean?",
      answer:
        "We clean asphalt shingles, metal roofs, concrete driveways and walkways, pavers, wood and composite decks, vinyl and fiber cement siding, gutters, fences, and more. If it is on the exterior of your home, we can likely clean it. Reach out if you have something specific in mind.",
    },
  ];

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <ScrollReveal variants={fadeUp} className="text-center mb-16">
          <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Common Questions
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know before booking your exterior cleaning
            service.
          </p>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} variants={fadeUp} delay={i * 0.05}>
              <div className="bg-stone-50 rounded-2xl border border-stone-100 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left group"
                >
                  <span className="text-slate-900 font-semibold text-lg pr-4 group-hover:text-teal-600 transition-colors">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm"
                  >
                    <ChevronDown className="w-4 h-4 text-slate-600" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-500 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact Section ───
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollReveal variants={slideFromLeft}>
            <span className="inline-block text-teal-600 font-semibold text-sm tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Ready to Restore
              <br />
              Your Home?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              Tell us about your project and we will get back to you within 24
              hours with a free, no-obligation quote. No pressure, just honest
              advice and transparent pricing.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Call Us</p>
                  <p className="text-slate-500">(604) 555-1234</p>
                  <p className="text-slate-400 text-sm mt-1">
                    Mon-Sat, 8am-6pm
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Service Area</p>
                  <p className="text-slate-500">Abbotsford & Mission, BC</p>
                  <p className="text-slate-400 text-sm mt-1">
                    Fraser Valley region
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold">Fully Insured</p>
                  <p className="text-slate-500">
                    WCB coverage & liability insurance
                  </p>
                  <p className="text-slate-400 text-sm mt-1">
                    Your property is protected
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variants={slideFromRight}>
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-stone-200/50 border border-stone-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Request a Free Quote
              </h3>
              <p className="text-slate-500 mb-8">
                Fill out the form below and we will respond within 24 hours.
              </p>

              <AnimatePresence>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-teal-50 border border-teal-200 rounded-2xl p-8 text-center"
                  >
                    <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-teal-600" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Quote Request Sent!
                    </h4>
                    <p className="text-slate-500">
                      We will be in touch within 24 hours. Thanks for choosing
                      Just Cleaning!
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                          placeholder="(604) 555-1234"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none"
                      >
                        <option value="">Select a service...</option>
                        <option value="roof">Roof Cleaning</option>
                        <option value="gutter">Gutter Cleaning</option>
                        <option value="siding">Siding Cleaning</option>
                        <option value="driveway">Driveway Cleaning</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Additional Details
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none"
                        placeholder="Tell us about your property, any specific concerns, or preferred timing..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-500 text-white font-semibold text-lg py-4 rounded-xl transition-all duration-300 shadow-lg shadow-teal-600/20 hover:shadow-teal-500/30 hover:-translate-y-0.5"
                    >
                      Send My Free Quote Request
                    </button>
                    <p className="text-center text-slate-400 text-sm">
                      No spam, ever. We respect your privacy.
                    </p>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ───
function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-teal-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-700 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <ScrollReveal variants={fadeUp}>
          <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Your Home Deserves to Look Its Best
          </h2>
          <p className="text-teal-100 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Do not let dirt, moss, and grime steal your home's curb appeal. Join
            hundreds of satisfied homeowners across the Fraser Valley who trust
            Just Cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 font-bold text-lg px-10 py-4 rounded-full hover:bg-teal-50 transition-all duration-300 shadow-xl"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+16045551234"
              className="inline-flex items-center justify-center gap-2 bg-teal-700 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-teal-800 transition-all duration-300 border border-teal-500"
            >
              <Phone className="w-5 h-5" />
              Call (604) 555-1234
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Footer ───
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-lg leading-none">
                  Just Cleaning
                </span>
                <p className="text-teal-400 text-[10px] tracking-widest uppercase">
                  Exterior Cleaning
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Professional exterior cleaning services for homeowners across
              Abbotsford and Mission. Protecting and restoring properties since
              2018.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-amber-400 fill-amber-400"
                />
              ))}
              <span className="text-white text-sm font-semibold ml-2">
                4.9/5
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-400 transition-colors"
                >
                  Roof Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-400 transition-colors"
                >
                  Gutter Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-400 transition-colors"
                >
                  Siding Cleaning
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-400 transition-colors"
                >
                  Driveway Cleaning
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-400 transition-colors"
                >
                  Our Services
                </a>
              </li>
              <li>
                <a
                  href="#before-after"
                  className="hover:text-teal-400 transition-colors"
                >
                  Before & After
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-teal-400 transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-teal-400 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400" />
                <a
                  href="tel:+16045551234"
                  className="hover:text-teal-400 transition-colors"
                >
                  (604) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Abbotsford & Mission, BC</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-400" />
                <span>Mon-Sat: 8am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Just Cleaning. All rights
            reserved.
          </p>
          <p className="text-sm">
            Proudly serving Abbotsford & Mission, British Columbia
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main App ───
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <BeforeAfter />
      <Reviews />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
