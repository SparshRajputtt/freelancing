import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  Shield,
  Award,
  Phone,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  Check,
  Home,
  Building2,
  Sparkles,
  Box,
  Briefcase,
  HardHat,
  BedDouble,
  ArrowRight,
  Clock,
  Users,
  ThumbsUp,
  MessageCircle,
  Menu,
  X,
  Calendar,
  Zap,
  Headphones,
  BarChart3,
  Mail,
  Send,
  Play,
  Pause,
  Quote,
  PhoneCall,
  Map,
  Search,
  Filter,
  Heart,
} from "lucide-react";

import { SocialIcon } from "react-social-icons";

// ─── DATA ───────────────────────────────────────────────────────────────

const Instagram = () => (
  <SocialIcon
    url="https://www.instagram.com/cleaning4you.nj"
    target="_blank"
    rel="noopener noreferrer"
  />
);

const stats = [
  { icon: Users, value: "2,400+", label: "Happy Clients" },
  { icon: Clock, value: "8+", label: "Years Experience" },
  { icon: Home, value: "15,000+", label: "Properties Cleaned" },
  { icon: Star, value: "4.9", label: "Google Rating" },
];

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    desc: "Transform your home into a sanctuary. Our meticulous residential cleaning ensures every surface sparkles with perfection.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-200/30",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    desc: "Elevate your business environment. We deliver pristine commercial spaces that impress clients and inspire employees.",
    color: "from-teal-500/20 to-cyan-500/20",
    border: "border-teal-200/30",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "Beyond the surface. Our deep cleaning penetrates every corner, eliminating hidden dirt and restoring freshness.",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-200/30",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
  },
  {
    icon: Box,
    title: "Move In / Move Out",
    desc: "Start fresh or leave it flawless. Our move cleaning ensures a seamless transition with spotless results.",
    color: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-200/30",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Briefcase,
    title: "Office Cleaning",
    desc: "Productivity starts with cleanliness. We maintain professional office environments that reflect your brand standards.",
    color: "from-indigo-500/20 to-violet-500/20",
    border: "border-indigo-200/30",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-600",
  },
  {
    icon: HardHat,
    title: "Post Construction",
    desc: "From dust to dazzling. We specialize in post-construction cleanup, removing debris and revealing your finished space.",
    color: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-200/30",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600",
  },
  {
    icon: BedDouble,
    title: "Airbnb Cleaning",
    desc: "Five-star reviews guaranteed. We prepare your rental property to exceed guest expectations every single time.",
    color: "from-purple-500/20 to-fuchsia-500/20",
    border: "border-purple-200/30",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    desc: "Full coverage and professional licensing for your complete peace of mind.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    desc: "Our team undergoes rigorous training and certification in premium cleaning techniques.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    desc: "Not satisfied? We will re-clean at no charge. Your happiness is our priority.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    desc: "We respect your time. Arrive on schedule, every time, with precision and care.",
  },
  {
    icon: Sparkles,
    title: "Eco-Friendly Products",
    desc: "Premium, non-toxic cleaning solutions safe for your family, pets, and the environment.",
  },
  {
    icon: Users,
    title: "Trusted Team",
    desc: "Background-checked professionals who treat your space with the utmost respect.",
  },
];

const beforeAfter = [
  {
    id: 1,
    label: "Kitchen Deep Clean",
    category: "Residential",
    before: "/kitchen/before.png",
    after: "/kitchen/after.png",
  },
  {
    id: 2,
    label: "Office Transformation",
    category: "Commercial",
    before: "/office/before.png",
    after: "/office/after.png",
  },
  {
    id: 3,
    label: "Bathroom Revival",
    category: "Residential",
    before: "/bathroom/before.png",
    after: "/bathroom/after.png",
  },
  {
    id: 4,
    label: "Living Room Refresh",
    category: "Residential",
    before: "/living-room/before.png",
    after: "/living-room/after.png",
  },
  {
    id: 5,
    label: "Retail Space Clean",
    category: "Commercial",
    before: "/retail-space/before.png",
    after: "/retail-space/after.png",
  },
  {
    id: 6,
    label: "Post-Construction",
    category: "Specialized",
    before: "/post-construction/before.png",
    after: "/post-construction/after.png",
  },
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Hoboken",
    text: "Cleaning4You transformed our home beyond recognition. The attention to detail is extraordinary. Every corner sparkles. This is not just cleaning — it is an art form.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "CEO, TechStart NJ",
    text: "We have tried multiple commercial cleaning services. None compare to the professionalism and consistency of Cleaning4You. Our office has never looked better.",
    rating: 5,
  },
  {
    name: "Amanda Rodriguez",
    role: "Airbnb Host, Jersey City",
    text: "My guest reviews went from 4.2 to 4.9 stars after switching to Cleaning4You. They understand what premium hospitality cleaning means. Absolutely worth every penny.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Property Manager, NYC",
    text: "Managing 40+ properties requires a cleaning partner you can trust implicitly. Cleaning4You delivers flawless results every single time. They are an extension of our team.",
    rating: 5,
  },
  {
    name: "Jennifer Park",
    role: "Homeowner, Montclair",
    text: "After a major renovation, I thought the dust would never go away. Cleaning4You made our house feel brand new. The post-construction clean was nothing short of miraculous.",
    rating: 5,
  },
];

const howItWorks = [
  {
    step: "01",
    icon: Calendar,
    title: "Book",
    desc: "Schedule online or call us. Choose your service, date, and time. We will confirm within minutes.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "We Clean",
    desc: "Our certified team arrives fully equipped. We transform your space with meticulous attention to every detail.",
  },
  {
    step: "03",
    icon: Heart,
    title: "Relax",
    desc: "Step into a pristine environment. Enjoy your spotless space and the peace of mind that comes with it.",
  },
];

const serviceAreas = [
  {
    state: "New Jersey",
    cities: [
      "Hoboken",
      "Jersey City",
      "Newark",
      "Montclair",
      "Morristown",
      "Princeton",
      "Edison",
      "Paramus",
    ],
  },
  {
    state: "New York",
    cities: [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Staten Island",
      "Bronx",
      "Yonkers",
      "White Plains",
      "New Rochelle",
    ],
  },
];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We proudly serve all of New Jersey and New York, including Hoboken, Jersey City, Manhattan, Brooklyn, Newark, Montclair, and surrounding areas. Contact us to confirm service availability in your specific location.",
  },
  {
    q: "Are your cleaning products safe for pets and children?",
    a: "Absolutely. We exclusively use eco-friendly, non-toxic, and biodegradable cleaning products that are completely safe for your family, pets, and the environment. No harsh chemicals, ever.",
  },
  {
    q: "How do I get a quote?",
    a: "Getting a quote is simple. Fill out our online form, call us directly, or send us a message on WhatsApp. We provide transparent, upfront pricing with no hidden fees. Most quotes are delivered within 2 hours.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not at all. Many of our clients provide access instructions and return to a perfectly clean home. Our team is fully background-checked, licensed, and insured for your complete peace of mind.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We understand plans change. You can reschedule or cancel up to 24 hours before your appointment at no charge. Same-day cancellations may incur a small fee to cover team scheduling.",
  },
  {
    q: "Do you offer recurring cleaning plans?",
    a: "Yes, we offer weekly, bi-weekly, and monthly recurring cleaning plans with preferred pricing. Our subscription clients enjoy priority scheduling and exclusive perks.",
  },
];

const futureFeatures = [
  {
    icon: Zap,
    title: "AI Customer Assistant",
    desc: "Instant intelligent responses to all your cleaning questions.",
  },
  {
    icon: Headphones,
    title: "24/7 Chatbot",
    desc: "Round-the-clock support for bookings, questions, and updates.",
  },
  {
    icon: BarChart3,
    title: "Instant Quote Generator",
    desc: "Get accurate pricing in seconds with our smart calculator.",
  },
  {
    icon: Calendar,
    title: "Online Booking",
    desc: "Schedule your cleaning in under 60 seconds, any time of day.",
  },
  {
    icon: Clock,
    title: "Calendar Integration",
    desc: "Sync your cleaning schedule with Google or Outlook Calendar.",
  },
  {
    icon: Check,
    title: "Lead Qualification",
    desc: "Smart intake forms that match you with the perfect service plan.",
  },
  {
    icon: Send,
    title: "Automated Follow-ups",
    desc: "Post-service care and reminders to keep your space pristine.",
  },
  {
    icon: Users,
    title: "Customer Portal",
    desc: "Manage bookings, view history, and track loyalty rewards.",
  },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── COMPONENTS ─────────────────────────────────────────────────────────

function AnimatedCounter({ value, start, suffix = "" }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const hasPlus = value.includes("+");
  const isDecimal = value.includes(".");

  useEffect(() => {
    if (!start) return;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(isDecimal ? numericValue : numericValue);
        clearInterval(timer);
      } else {
        setCount(
          isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current),
        );
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [numericValue, isDecimal, start]);

  return (
    <span>
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}
      {hasPlus && "+"}
      {suffix}
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Gallery", href: "#gallery" },
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
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_40px_rgba(0,0,0,0.06)] border-b border-gray-100/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? "bg-emerald-600 shadow-lg shadow-emerald-600/20"
                  : "bg-white/20 backdrop-blur-md"
              }`}
            >
              <Sparkles
                className={`w-5 h-5 ${scrolled ? "text-white" : "text-white"}`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg font-bold tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
              >
                Cleaning4You
              </span>
              <span
                className={`text-[10px] font-semibold tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-emerald-600" : "text-emerald-300"}`}
              >
                New Jersey & New York
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:opacity-100 relative group ${
                  scrolled
                    ? "text-slate-600 hover:text-emerald-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-emerald-500" : "bg-white"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+12025551234"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                scrolled
                  ? "text-emerald-700 hover:bg-emerald-50"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="#contact"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-lg ${
                scrolled
                  ? "bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-600/20 hover:shadow-emerald-600/30"
                  : "bg-white text-emerald-700 hover:bg-white/90 shadow-white/20"
              }`}
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-slate-800 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="tel:+12025551234"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-emerald-700 font-semibold bg-emerald-50 hover:bg-emerald-100 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-white font-semibold bg-emerald-600 hover:bg-emerald-700 transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(20,184,166,0.1),_transparent_50%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div style={{ opacity }} className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-white/80 font-medium">
                Premium Cleaning Services in NJ & NY
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
            >
              Experience{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Pristine
              </span>{" "}
              Living
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg lg:text-xl text-white/60 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
            >
              New Jersey and New York's most trusted premium cleaning service.
              Licensed, insured, and dedicated to transforming every space we
              touch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-emerald-400 hover:shadow-2xl hover:shadow-emerald-500/25 hover:-translate-y-0.5"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+12025551234"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Shield, label: "Licensed" },
                { icon: Award, label: "Insured" },
                { icon: Check, label: "Certified" },
                { icon: Star, label: "4.9 Google" },
                { icon: Instagram, label: "4.2K Followers" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <badge.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-medium text-white/70">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/20 border border-white/10">
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <div className="text-center p-12">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-xl shadow-emerald-500/30">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Premium Cleaning
                    </h3>
                    <p className="text-white/50">
                      Transforming spaces across NJ & NY
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-black/10 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Star className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      4.9 Rating
                    </p>
                    <p className="text-xs text-slate-500">Google Reviews</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl shadow-black/10 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">2,400+</p>
                    <p className="text-xs text-slate-500">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-100 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors duration-300">
                  <stat.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">
                  <AnimatedCounter value={stat.value} start={isInView} />
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" ref={ref} className="relative py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Premium Solutions for Every Space
          </h2>
          <p className="text-lg text-slate-500">
            From cozy apartments to corporate headquarters, we deliver
            exceptional results tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 rounded-3xl bg-white border ${service.border} hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer overflow-hidden`}
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm group-hover:text-slate-600 transition-colors">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      ref={ref}
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
              The Cleaning4You
              <span className="block text-emerald-600">Difference</span>
            </h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              We do not just clean — we elevate. Every detail matters, every
              surface counts, and every client deserves nothing less than
              perfection.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-5 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 border border-transparent hover:border-emerald-100 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
              <div className="aspect-square bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-12">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                    <Shield className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    Trusted by Thousands
                  </h3>
                  <p className="text-white/60 max-w-sm mx-auto">
                    Our commitment to excellence has made us the preferred
                    choice for premium cleaning across New Jersey and New York.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-slate-900">
                  100% Satisfaction
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-500" />
                <span className="font-bold text-slate-900">Award Winning</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfterGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPositions, setSliderPositions] = useState({});
  const [draggingId, setDraggingId] = useState(null);

  const handleMove = useCallback((clientX, rect, id) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    setSliderPositions((prev) => ({
      ...prev,
      [id]: percentage,
    }));
  }, []);

  const handleMouseDown = (id) => setDraggingId(id);
  const handleMouseUp = () => setDraggingId(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e) => {
      if (draggingId === null) return;

      const rect = document
        .getElementById(`slider-${draggingId}`)
        ?.getBoundingClientRect();

      if (rect) {
        handleMove(e.clientX, rect, draggingId);
      }
    };

    const handleGlobalMouseUp = () => {
      setDraggingId(null);
    };

    window.addEventListener("pointermove", handleGlobalMouseMove);
    window.addEventListener("pointerup", handleGlobalMouseUp);

    return () => {
      window.removeEventListener("pointermove", handleGlobalMouseMove);
      window.removeEventListener("pointerup", handleGlobalMouseUp);
    };
  }, [draggingId, handleMove]);

  const categories = ["All", ...new Set(beforeAfter.map((b) => b.category))];
  const filteredItems =
    activeSlide === 0
      ? beforeAfter
      : beforeAfter.filter((b) => b.category === categories[activeSlide]);

  return (
    <section id="gallery" ref={ref} className="relative py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4">
            Results That Speak
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Before & After Gallery
          </h2>
          <p className="text-lg text-slate-500">
            Drag the slider to witness the transformation. Real results from
            real clients.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveSlide(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeSlide === i
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg shadow-slate-200/50 border border-slate-100"
            >
              {/* Interactive Before/After Slider */}
              <div
                id={`slider-${item.id}`}
                className="relative aspect-[4/3] cursor-ew-resize overflow-hidden"
                style={{ touchAction: "none" }}
                onPointerDown={(e) => {
                  handleMouseDown(item.id);
                  handleMove(
                    e.clientX,
                    e.currentTarget.getBoundingClientRect(),
                    item.id,
                  );
                }}
              >
                {/* After Image */}
                <img
                  src={item.after}
                  alt={`${item.label} After`}
                  className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />

                {/* Before Image */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    clipPath: `inset(0 ${100 - (sliderPositions[item.id] ?? 50)}% 0 0)`,
                  }}
                >
                  <img
                    src={item.before}
                    alt={`${item.label} Before`}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    draggable={false}
                  />
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none z-[1]" />

                {/* Slider handle */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                  style={{
                    left: `${sliderPositions[item.id] ?? 50}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-emerald-500">
                    <div className="flex gap-0.5">
                      <ChevronDown className="w-3 h-3 text-emerald-600 rotate-90" />
                      <ChevronDown className="w-3 h-3 text-emerald-600 -rotate-90" />
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-5 left-5 z-20 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20">
                  <p className="text-white text-sm font-medium">{item.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <section
      id="reviews"
      ref={ref}
      className="relative py-28 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.03),_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4">
            Client Stories
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Loved by Homeowners & Businesses
          </h2>
          <p className="text-lg text-slate-500">
            Do not just take our word for it. Here is what our clients say about
            their experience.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] sm:h-[320px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6">
                    <Quote className="w-8 h-8 text-emerald-600" />
                  </div>
                  <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 max-w-3xl font-medium italic">
                    "{testimonials[current].text}"
                  </p>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <p className="font-bold text-slate-900 text-lg">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-emerald-500"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.1),_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-lg text-white/50">
            Three simple steps to a spotless space. No hassle, no stress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {howItWorks.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative"
            >
              {/* Connector line */}
              {i < 2 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
              )}

              <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-emerald-500 text-white text-sm font-bold">
                  {step.step}
                </div>
                <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                  <step.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeState, setActiveState] = useState(0);

  return (
    <section ref={ref} className="relative py-28 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4">
            Service Areas
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Areas We Serve
          </h2>
          <p className="text-lg text-slate-500">
            Proudly delivering premium cleaning services across New Jersey and
            New York.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {serviceAreas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
                activeState === i
                  ? "bg-white shadow-xl shadow-slate-200/50 border-emerald-200"
                  : "bg-white/50 border-slate-200 hover:bg-white hover:shadow-lg"
              }`}
              onClick={() => setActiveState(i)}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                    activeState === i
                      ? "bg-emerald-500"
                      : "bg-slate-100 group-hover:bg-emerald-50"
                  }`}
                >
                  <MapPin
                    className={`w-7 h-7 transition-colors ${
                      activeState === i
                        ? "text-white"
                        : "text-slate-400 group-hover:text-emerald-600"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {area.state}
                  </h3>
                  <p className="text-sm text-slate-500">
                    {area.cities.length} cities covered
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {area.cities.map((city, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ delay: j * 0.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-emerald-50 transition-colors"
                  >
                    <Map className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-slate-700">
                      {city}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" ref={ref} className="relative py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500">
            Everything you need to know about our premium cleaning services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl border transition-all duration-300 ${
                openIndex === i
                  ? "bg-emerald-50/30 border-emerald-200 shadow-lg shadow-emerald-100/50"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === i
                      ? "bg-emerald-500 text-white rotate-180"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
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
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 bg-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(16,185,129,0.1),_transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-4 border border-emerald-500/20">
              Get In Touch
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Ready for a
              <span className="block text-emerald-400">Spotless Space?</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed">
              Get your free, no-obligation quote in minutes. Our team is ready
              to transform your space.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: Phone,
                  label: "Call Us",
                  value: "(862) 910-2228",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "info@cleaning4younj.com",
                },
                {
                  icon: MapPin,
                  label: "Service Area",
                  value: "New Jersey & New York",
                },
                {
                  icon: Clock,
                  label: "Working Hours",
                  value: "Mon - Sat • 8:00 AM - 6:00 PM",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/50">{item.label}</p>
                    <p className="font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://wa.me/18629102228"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold hover:bg-emerald-500/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/cleaning4you.nj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Quote Request Sent!
                  </h3>
                  <p className="text-white/50">
                    We will get back to you within 2 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                        placeholder="(201) 555-0123"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Service Type
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all appearance-none"
                    >
                      <option value="" className="bg-slate-800">
                        Select a service
                      </option>
                      <option value="residential" className="bg-slate-800">
                        Residential Cleaning
                      </option>
                      <option value="commercial" className="bg-slate-800">
                        Commercial Cleaning
                      </option>
                      <option value="deep" className="bg-slate-800">
                        Deep Cleaning
                      </option>
                      <option value="move" className="bg-slate-800">
                        Move In / Out
                      </option>
                      <option value="office" className="bg-slate-800">
                        Office Cleaning
                      </option>
                      <option
                        value="post-construction"
                        className="bg-slate-800"
                      >
                        Post Construction
                      </option>
                      <option value="airbnb" className="bg-slate-800">
                        Airbnb Cleaning
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your space..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-semibold text-lg hover:bg-emerald-400 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/25 hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Get My Free Quote
                  </button>
                  <p className="text-center text-xs text-white/30">
                    By submitting, you agree to our privacy policy. We never
                    share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FutureFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-28 bg-slate-50/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-4">
            Coming Soon
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            The Future of Cleaning
          </h2>
          <p className="text-lg text-slate-500">
            We are building the most advanced cleaning service platform. Here is
            what is next.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {futureFeatures.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-emerald-100 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-emerald-50 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold text-white">Cleaning4You</p>
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-emerald-400">
                  NJ & NY
                </p>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Premium residential and commercial cleaning services across New
              Jersey and New York. Licensed, insured, and committed to
              excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/cleaning4younj"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white/60" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-emerald-500/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white/60" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                "Residential Cleaning",
                "Commercial Cleaning",
                "Deep Cleaning",
                "Move In / Out",
                "Office Cleaning",
                "Post Construction",
                "Airbnb Cleaning",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-white/40 hover:text-emerald-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Why Choose Us",
                "Gallery",
                "Reviews",
                "FAQ",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-white/40 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Phone className="w-4 h-4 text-emerald-400" />
                (201) 555-CLEAN
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <Mail className="w-4 h-4 text-emerald-400" />
                hello@cleaning4younj.com
              </li>
              <li className="flex items-start gap-3 text-sm text-white/40">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5" />
                Serving all of New Jersey & New York
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Cleaning4You NJ. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/30 hover:text-white/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── LOADING SCREEN ─────────────────────────────────────────────────────

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-slate-900 flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-400 flex items-center justify-center shadow-xl shadow-emerald-500/30">
          <Sparkles className="w-10 h-10 text-white" />
        </div>
      </motion.div>
      <h2 className="text-2xl font-bold text-white mb-2">Cleaning4You</h2>
      <p className="text-white/40 text-sm mb-8">
        Preparing your premium experience...
      </p>
      <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-white/30 text-xs mt-3">{progress}%</p>
    </motion.div>
  );
}

// ─── MAIN APP ───────────────────────────────────────────────────────────

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <Hero />
          <Stats />
          <Services />
          <WhyChooseUs />
          <BeforeAfterGallery />
          <Testimonials />
          <HowItWorks />
          <ServiceAreas />
          <FAQ />
          <Contact />
          <FutureFeatures />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
