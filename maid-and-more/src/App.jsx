import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  Sparkles,
  Shield,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Check,
  ArrowRight,
  Award,
  Users,
  Calendar,
  MessageSquare,
  Zap,
  Menu,
  X,
  Bot,
  Brain,
  BarChart3,
  Headphones,
  Timer,
  CreditCard,
  Home,
  Building2,
  Sofa,
  KeyRound,
  BedDouble,
  Layers,
  Flame,
  Gem,
  Quote,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";
import { SocialIcon } from "react-social-icons";

const Instagram = () => <SocialIcon url="https://instagram.com" />;

const Facebook = () => <SocialIcon url="https://facebook.com" />;

const Twitter = () => <SocialIcon url="https://twitter.com" />;
// ─── DATA ───────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/maidandmore/",
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/",
  },
];

const SERVICES = [
  {
    icon: Home,
    title: "Domestic Cleaning",
    desc: "Weekly, fortnightly, or one-off home cleans tailored to your lifestyle. Every surface, every corner, every time.",
    features: [
      "Dusting & Polishing",
      "Kitchen Deep Clean",
      "Bathroom Sanitisation",
      "Floor Care",
    ],
    color: "from-teal-500/10 to-emerald-500/10",
    accent: "teal",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    desc: "Professional office and commercial space cleaning that keeps your business looking its absolute best.",
    features: [
      "Office Deep Clean",
      "Reception Areas",
      "Meeting Rooms",
      "Common Areas",
    ],
    color: "from-emerald-500/10 to-teal-500/10",
    accent: "emerald",
  },
  {
    icon: Layers,
    title: "Deep Cleaning",
    desc: "Intensive, top-to-bottom cleaning for spaces that need more than a surface-level refresh.",
    features: [
      "Behind Appliances",
      "Inside Cupboards",
      "Window Tracks",
      "Grout Restoration",
    ],
    color: "from-sky-500/10 to-teal-500/10",
    accent: "sky",
  },
  {
    icon: KeyRound,
    title: "End of Tenancy",
    desc: "Guaranteed deposit-return cleaning. We leave nothing behind but sparkling surfaces.",
    features: [
      "Inventory Checklist",
      "Oven Deep Clean",
      "Carpet Shampoo",
      "Guarantee Included",
    ],
    color: "from-amber-500/10 to-orange-500/10",
    accent: "amber",
  },
  {
    icon: BedDouble,
    title: "Airbnb Cleaning",
    desc: "Turnaround cleaning for short-term rentals. Fast, thorough, and guest-ready every single time.",
    features: [
      "Linen Change",
      "Restocking",
      "Photo-Ready Finish",
      "Same-Day Service",
    ],
    color: "from-rose-500/10 to-pink-500/10",
    accent: "rose",
  },
  {
    icon: Sofa,
    title: "Carpet Cleaning",
    desc: "Hot water extraction and dry-cleaning methods that revive tired carpets and remove deep-set stains.",
    features: [
      "Stain Removal",
      "Deodorising",
      "Allergen Reduction",
      "Quick Drying",
    ],
    color: "from-violet-500/10 to-purple-500/10",
    accent: "violet",
  },
  {
    icon: Flame,
    title: "Oven Cleaning",
    desc: "Specialised oven cleaning that removes baked-on grease and carbon without harsh chemicals.",
    features: [
      "Rack & Tray Cleaning",
      "Door Glass",
      "Extractor Hood",
      "Eco-Safe Products",
    ],
    color: "from-orange-500/10 to-red-500/10",
    accent: "orange",
  },
  {
    icon: Gem,
    title: "Estate Styling",
    desc: "Prepare your property for sale or rental with professional staging and presentation cleaning.",
    features: [
      "Decluttering",
      "Staging Advice",
      "Premium Finish",
      "Photography Ready",
    ],
    color: "from-indigo-500/10 to-blue-500/10",
    accent: "indigo",
  },
];

const STATS = [
  { value: "30+", label: "Years Experience", icon: Clock },
  { value: "4.9", label: "Google Rating", icon: Star },
  { value: "3,000+", label: "Instagram Followers", icon: Users },
  { value: "2026", label: "Award Finalist", icon: Award },
];

const WHY_CHOOSE = [
  {
    icon: Shield,
    title: "Fully Insured",
    desc: "Complete public liability and employer's insurance. Your property is protected from the moment we arrive.",
  },
  {
    icon: Users,
    title: "Vetted Professionals",
    desc: "Every team member is background-checked, trained in-house, and committed to our exacting standards.",
  },
  {
    icon: Sparkles,
    title: "Attention to Detail",
    desc: "We clean what others miss. Light switches, skirting boards, behind the toilet — nothing escapes our eye.",
  },
  {
    icon: Clock,
    title: "Punctual & Reliable",
    desc: "We arrive when we say we will. No excuses, no delays — just dependable service you can count on.",
  },
  {
    icon: Zap,
    title: "Eco-Conscious",
    desc: "Wherever possible, we use environmentally responsible products that are safe for your family and pets.",
  },
  {
    icon: Award,
    title: "Award-Recognised",
    desc: "UK Small Business Awards 2026 Finalist. Our reputation speaks for itself — and our clients agree.",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner, Solihull",
    text: "Maid & More transformed our home. The attention to detail is extraordinary — they even cleaned inside the microwave and behind the radiators. I've never seen our kitchen sparkle like this.",
    rating: 5,
  },
  {
    name: "James Thornton",
    role: "Property Manager, Birmingham",
    text: "We use Maid & More for all our end-of-tenancy cleans across 40+ properties. Their reliability is unmatched, and the deposit return rate has never been higher. Truly professional.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Airbnb Host, Edgbaston",
    text: "As an Airbnb Superhost, cleanliness is everything. Maid & More understands this perfectly. My guests consistently mention how immaculate the flat is. They're part of my success.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Office Manager, Jewellery Quarter",
    text: "Our office has never looked better. The team is discreet, efficient, and incredibly thorough. Clients regularly comment on how professional our space feels now.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Homeowner, Harborne",
    text: "I've tried several cleaning services over the years, but Maid & More is in a different league. The deep clean they did before Christmas was genuinely life-changing.",
    rating: 5,
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Book",
    desc: "Call, WhatsApp, or fill out our simple online form. Tell us what you need and when you need it.",
    icon: Calendar,
  },
  {
    step: "02",
    title: "We Clean",
    desc: "Our trained professionals arrive on time with everything they need. You relax while we transform your space.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Enjoy",
    desc: "Step back into a spotless, fresh-smelling home or office. Satisfaction guaranteed, every single time.",
    icon: Star,
  },
];

const FAQS = [
  {
    q: "What areas do you cover?",
    a: "We proudly serve Birmingham, Solihull, and surrounding areas including Edgbaston, Harborne, Moseley, Kings Heath, Sutton Coldfield, and Shirley. If you're unsure whether we cover your location, just give us a call.",
  },
  {
    q: "Are your cleaners insured and background-checked?",
    a: "Absolutely. Every member of our team is fully vetted with background checks, trained in-house to our exacting standards, and covered by comprehensive public liability and employer's insurance.",
  },
  {
    q: "Do I need to provide cleaning supplies?",
    a: "No — we bring everything we need, including professional-grade equipment and eco-friendly products. If you have specific product preferences, just let us know and we'll accommodate.",
  },
  {
    q: "How do I book a cleaning service?",
    a: "You can book by phone, WhatsApp, email, or through our online booking form. For regular domestic cleaning, we'll find a recurring slot that works for your schedule. For one-off services, we can usually accommodate within 48 hours.",
  },
  {
    q: "What is your cancellation policy?",
    a: "We understand plans change. We ask for 24 hours' notice for cancellations or rescheduling. Cancellations with less than 24 hours' notice may incur a small fee.",
  },
  {
    q: "Do you offer a satisfaction guarantee?",
    a: "Yes — 100%. If you're not completely satisfied with any aspect of our service, contact us within 24 hours and we'll return to make it right at no extra charge.",
  },
];

const AI_FEATURES = [
  {
    icon: Bot,
    title: "AI Customer Support",
    desc: "Our intelligent assistant answers questions, provides quotes, and helps you book — anytime, day or night.",
  },
  {
    icon: Brain,
    title: "Instant Quote Assistant",
    desc: "Get an accurate, transparent price estimate in seconds based on your property size and service needs.",
  },
  {
    icon: Calendar,
    title: "Online Booking",
    desc: "Book your clean in under 60 seconds. Choose your date, time, and service — confirmation arrives instantly.",
  },
  {
    icon: Timer,
    title: "Calendar Integration",
    desc: "Sync your cleaning appointments directly with your Google or Outlook calendar. Never miss a clean again.",
  },
  {
    icon: BarChart3,
    title: "Lead Qualification",
    desc: "Smart intake forms that understand your needs and match you with the right service and team instantly.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Assistant",
    desc: "Whether it's 2pm or 2am, our AI and human support team is ready to help with any query.",
  },
];

// ─── UTILITY COMPONENTS ─────────────────────────────────

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({
  overline,
  title,
  subtitle,
  align = "center",
  dark = false,
}) => (
  <div
    className={`max-w-3xl ${
      align === "center" ? "mx-auto text-center" : ""
    } mb-16`}
  >
    {overline && (
      <FadeIn>
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 border ${
            dark
              ? "bg-teal-500/10 text-teal-300 border-teal-500/20"
              : "bg-teal-50 text-teal-700 border-teal-100"
          }`}
        >
          {overline}
        </span>
      </FadeIn>
    )}

    <FadeIn delay={0.1}>
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
    </FadeIn>

    {subtitle && (
      <FadeIn delay={0.2}>
        <p
          className={`text-lg md:text-xl leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${dark ? "text-slate-400" : "text-slate-500"}`}
        >
          {subtitle}
        </p>
      </FadeIn>
    )}
  </div>
);

// ─── NAVBAR ───────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border-b border-slate-100/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                  scrolled ? "bg-teal-600" : "bg-white/20 backdrop-blur-md"
                }`}
              >
                <Sparkles
                  className={`w-5 h-5 ${scrolled ? "text-white" : "text-white"}`}
                />
              </div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                Maid & More
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? "text-slate-600 hover:text-teal-700 hover:bg-teal-50/50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+447553827298"
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "text-teal-700 hover:bg-teal-50"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-xl bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-all duration-300 shadow-lg shadow-teal-600/20 hover:shadow-teal-600/30 hover:-translate-y-0.5"
              >
                Get Free Quote
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-slate-900 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6"
          >
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-4 text-lg font-medium text-slate-800 hover:text-teal-700 hover:bg-teal-50 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="tel:01234567890"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold hover:border-teal-600 hover:text-teal-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ─── HERO ─────────────────────────────────────────────────

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 0.95]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(20,184,166,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNjBWMGg2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 right-[10%] w-72 h-72 bg-teal-500/10 rounded-full blur-[100px]"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 800], [0, -150]) }}
        className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]"
      />

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Award Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
            >
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium text-white/90">
                UK Small Business Awards 2026 Finalist
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-8"
            >
              Birmingham's
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Most Trusted
              </span>
              Cleaners
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-xl"
            >
              Premium domestic and commercial cleaning for Birmingham &
              Solihull. Over 30 years of spotless reputation. Fully insured.
              Award-recognised.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-teal-600 text-white font-semibold text-lg hover:bg-teal-500 transition-all duration-300 shadow-2xl shadow-teal-600/25 hover:shadow-teal-500/40 hover:-translate-y-1"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              {[
                { icon: Star, text: "4.9 Google Rating" },
                { icon: Users, text: "3,000+ Followers" },
                { icon: Shield, text: "Fully Insured" },
                { icon: Clock, text: "30+ Years" },
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400">
                  <badge.icon className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                {/* Cleaning Visual Representation */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg">
                        Premium Cleaning
                      </div>
                      <div className="text-slate-400 text-sm">
                        Birmingham & Solihull
                      </div>
                    </div>
                  </div>

                  {/* Animated Bars */}
                  <div className="space-y-4">
                    {[
                      { label: "Customer Satisfaction", value: 99 },
                      { label: "Repeat Bookings", value: 94 },
                      { label: "On-Time Arrival", value: 98 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-300">{item.label}</span>
                          <span className="text-teal-400 font-semibold">
                            {item.value}%
                          </span>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{
                              delay: 0.8 + i * 0.2,
                              duration: 1.2,
                              ease: "easeOut",
                            }}
                            className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mini Testimonial */}
                  <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/5">
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>
                    <p className="text-slate-300 text-sm italic leading-relaxed">
                      "The best cleaning service we've ever used. Truly
                      exceptional attention to detail."
                    </p>
                    <p className="text-slate-500 text-xs mt-2">
                      — Sarah M., Solihull
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-sm">
                    Available Today
                  </div>
                  <div className="text-slate-500 text-xs">
                    Book within 2 hours
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

// ─── STATS ────────────────────────────────────────────────

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50 mb-6 group-hover:bg-teal-100 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── SERVICES ───────────────────────────────────────────

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="services"
      className="relative py-32 bg-slate-50 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          overline="Our Services"
          title="Every Clean, Perfected"
          subtitle="From routine domestic cleans to specialist commercial services, we deliver excellence across every category."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`group relative bg-white rounded-3xl p-8 border border-slate-100 hover:border-teal-200 hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 cursor-pointer h-full flex flex-col ${
                  hoveredIndex !== null && hoveredIndex !== i
                    ? "opacity-60 scale-[0.98]"
                    : ""
                }`}
              >
                {/* Gradient BG on hover */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-white flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                    <service.icon className="w-7 h-7 text-slate-700 group-hover:text-teal-600 transition-colors duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>

                  <ul className="space-y-2.5">
                    {service.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2.5 text-sm text-slate-600"
                      >
                        <Check className="w-4 h-4 text-teal-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 group-hover:gap-3 transition-all duration-300">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── BEFORE & AFTER ───────────────────────────────────────

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  return (
    <section id="results" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          overline="See the Difference"
          title="Transformations That Speak"
          subtitle="Drag to reveal the Maid & More difference. Every clean is a transformation."
        />

        <FadeIn>
          <div
            ref={containerRef}
            className="relative max-w-4xl mx-auto aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 cursor-ew-resize select-none"
            onMouseDown={(e) => {
              isDragging.current = true;
              handleMove(e.clientX);
            }}
            onMouseMove={(e) => {
              if (isDragging.current) handleMove(e.clientX);
            }}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onTouchStart={(e) => {
              isDragging.current = true;
              handleMove(e.touches[0].clientX);
            }}
            onTouchMove={(e) => {
              if (isDragging.current) handleMove(e.touches[0].clientX);
            }}
            onTouchEnd={() => (isDragging.current = false)}
          >
            {/* BEFORE IMAGE */}
            <img
              src="/after.png"
              alt="Kitchen before cleaning"
              draggable={false}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* AFTER IMAGE */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <img
                src="/before.png"
                alt="Kitchen after cleaning"
                draggable={false}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Slider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
              style={{
                left: `${sliderPosition}%`,
                transform: "translateX(-50%)",
              }}
            >
              {/* Slider Handle */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-14 h-14 rounded-full bg-white shadow-2xl border-4 border-white flex items-center justify-center">
                  <div className="flex gap-1">
                    <div className="w-1 h-5 rounded-full bg-slate-300"></div>
                    <div className="w-1 h-5 rounded-full bg-slate-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before Label */}
            <div className="absolute top-6 left-6 px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md text-white text-sm font-semibold">
              Before
            </div>

            {/* After Label */}
            <div className="absolute top-6 right-6 px-4 py-2 rounded-xl bg-teal-600/90 backdrop-blur-md text-white text-sm font-semibold">
              After
            </div>

            {/* Drag Hint */}

            {/* Mobile Hint */}
            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/60 text-white text-xs">
              Swipe →
            </div>

            {/* Desktop Hint */}
            <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-md shadow-lg text-slate-700 text-sm font-medium">
              ← Drag to compare →
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: Sparkles,
              title: "Deep Cleaned",
              desc: "Every surface sanitised and polished",
            },
            {
              icon: Shield,
              title: "Fully Protected",
              desc: "Safe, insured, and guaranteed work",
            },
            {
              icon: Star,
              title: "Satisfaction Guaranteed",
              desc: "Not happy? We'll make it right",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── WHY CHOOSE ─────────────────────────────────────────

const WhyChoose = () => {
  return (
    <section
      id="why-us"
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,184,166,0.08)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          dark
          overline="Why Maid & More"
          title="The Difference Is in the Details"
          subtitle="We don't just clean spaces — we restore them. Here's why thousands of clients across Birmingham and Solihull choose us."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 border border-white/[0.06] hover:border-teal-500/20 hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── AWARDS ─────────────────────────────────────────────

const Awards = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.05)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold tracking-widest uppercase mb-6 border border-amber-100">
                <Award className="w-4 h-4" />
                National Recognition
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                UK Small Business
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                  Awards 2026
                </span>
                Finalist
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-8">
                Being named a finalist in the UK Small Business Awards 2026 is
                more than an honour — it's independent validation of our
                commitment to excellence. From our meticulous cleaning standards
                to our exceptional customer care, this recognition reflects
                everything we stand for.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-slate-700">
                    National Finalist
                  </span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Star className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-slate-700">
                    Industry Recognised
                  </span>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <Shield className="w-5 h-5 text-amber-500" />
                  <span className="text-sm font-semibold text-slate-700">
                    Trusted Standard
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Background Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-300/20 via-orange-300/10 to-amber-300/20 blur-3xl rounded-[40px]" />

              {/* Certificate Card */}
              <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-amber-100 overflow-hidden">
                <img
                  src="/certificate.png"
                  alt="UK Small Business Awards 2026 National Finalist Certificate"
                  className="w-full h-auto rounded-2xl object-contain"
                />
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// ─── TESTIMONIALS ───────────────────────────────────────

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      id="reviews"
      className="relative py-32 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          overline="Client Reviews"
          title="Loved by Birmingham & Solihull"
          subtitle="Don't just take our word for it. Here's what our clients say about the Maid & More experience."
        />

        <FadeIn>
          <div className="relative max-w-4xl mx-auto">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-900/5 border border-slate-100 overflow-hidden">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-teal-50" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(TESTIMONIALS[activeIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-amber-400 fill-amber-400"
                        />
                      ),
                    )}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-slate-800 leading-relaxed mb-8 font-medium">
                    "{TESTIMONIALS[activeIndex].text}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-teal-700 font-bold text-lg">
                      {TESTIMONIALS[activeIndex].name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {TESTIMONIALS[activeIndex].name}
                      </div>
                      <div className="text-sm text-slate-500">
                        {TESTIMONIALS[activeIndex].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      setIsAutoPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-8 bg-teal-600"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors"
                >
                  {isAutoPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4" />
                  )}
                </button>
                <button
                  onClick={() => {
                    setActiveIndex(
                      (prev) =>
                        (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                    );
                    setIsAutoPlaying(false);
                  }}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={() => {
                    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
                    setIsAutoPlaying(false);
                  }}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// ─── HOW IT WORKS ───────────────────────────────────────

const HowItWorks = () => {
  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          overline="Simple Process"
          title="Three Steps to Spotless"
          subtitle="We've made booking a premium clean as effortless as the result itself."
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-teal-200 via-emerald-200 to-teal-200" />

          {HOW_IT_WORKS.map((step, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <div className="relative text-center">
                <div className="relative inline-flex mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-xl shadow-teal-500/20">
                    <step.icon className="w-9 h-9 text-white" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white text-sm font-bold flex items-center justify-center border-4 border-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── AI FEATURES ──────────────────────────────────────────

const AIFeatures = () => {
  return (
    <section className="relative py-32 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,184,166,0.06)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          dark
          overline="Future-Ready Technology"
          title="Powered by Intelligence"
          subtitle="We're not just a cleaning company — we're building the future of home services with cutting-edge AI and automation."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AI_FEATURES.map((feature, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white/[0.03] backdrop-blur-sm rounded-2xl p-7 border border-white/[0.06] hover:border-teal-500/20 hover:bg-white/[0.06] transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-400 text-sm">
              <Zap className="w-4 h-4 text-teal-400" />
              More intelligent features launching throughout 2026
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

// ─── SERVICE AREAS ──────────────────────────────────────

const ServiceAreas = () => {
  const areas = [
    "Birmingham City Centre",
    "Solihull",
    "Edgbaston",
    "Harborne",
    "Moseley",
    "Kings Heath",
    "Sutton Coldfield",
    "Shirley",
    "Hall Green",
    "Yardley",
    "Acocks Green",
    "Olton",
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <SectionHeading
                overline="Service Areas"
                title="Proudly Serving Birmingham & Solihull"
                subtitle="From the city centre to the suburbs, we bring premium cleaning to homes and businesses across the West Midlands."
                align="left"
              />

              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-300"
                  >
                    <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-slate-700">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-teal-50 border border-teal-100">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-900 mb-1">
                      Not sure if we cover your area?
                    </h4>
                    <p className="text-sm text-teal-700">
                      Give us a call — we likely do, and we're always expanding
                      our reach across the West Midlands.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyMCwxODQsMTY2LDAuMTUpIi8+PC9zdmc+')]" />

                {/* Stylised Map */}
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-teal-50 border-4 border-teal-100 flex items-center justify-center">
                    <MapPin className="w-14 h-14 text-teal-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-2">
                    Birmingham & Solihull
                  </div>
                  <div className="text-slate-500">West Midlands, UK</div>

                  <div className="mt-8 flex items-center justify-center gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600">
                        12+
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">
                        Areas Covered
                      </div>
                    </div>
                    <div className="w-px h-12 bg-slate-200" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-teal-600">
                        30+
                      </div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">
                        Years Local
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// ─── FAQ ──────────────────────────────────────────────────

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading
          overline="Common Questions"
          title="Everything You Need to Know"
          subtitle="Quick answers to the questions we hear most often. Can't find what you're looking for? Just reach out."
        />

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

// ─── CONTACT ─────────────────────────────────────────────

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          dark
          overline="Get Your Free Quote"
          title="Let's Make Your Space Sparkle"
          subtitle="Whether it's a one-off deep clean or a regular service, we're ready to help."
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}

          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="flex gap-5 p-6 rounded-3xl bg-white/[0.04] border border-white/10">
                <Phone className="w-6 h-6 text-teal-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Call Us</h4>
                  <p className="text-slate-400">
                    Speak directly with our friendly team.
                  </p>
                  <a
                    href="tel:07553 827 298"
                    className="text-teal-400 font-semibold"
                  >
                    07553 827 298
                  </a>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-3xl bg-white/[0.04] border border-white/10">
                <Mail className="w-6 h-6 text-teal-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-slate-400">
                    We usually reply within a few hours.
                  </p>
                  <a
                    href="mailto:info@maidandmore.co.uk"
                    className="text-teal-400 font-semibold"
                  >
                    info@maidandmore.co.uk
                  </a>
                </div>
              </div>

              <div className="flex gap-5 p-6 rounded-3xl bg-white/[0.04] border border-white/10">
                <MapPin className="w-6 h-6 text-teal-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white mb-1">
                    Service Area
                  </h4>
                  <p className="text-slate-400">
                    BALAN BARN, BIRMINGHAM B38 0DN
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}

          <FadeIn direction="right">
            <form className="bg-white rounded-3xl p-8 shadow-2xl space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="john@email.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="01234 567890"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about your cleaning requirements..."
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-teal-600 hover:bg-teal-700 transition text-white font-semibold flex items-center justify-center gap-3"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

// ─── FOOTER ─────────────────────────────────────────────

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>

              <span className="text-2xl font-bold text-white">Maid & More</span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Premium domestic & commercial cleaning throughout Birmingham and
              Solihull.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Services</h4>

            <div className="space-y-3 text-slate-400">
              <p>Domestic Cleaning</p>
              <p>Commercial Cleaning</p>
              <p>Deep Cleaning</p>
              <p>End of Tenancy</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Company</h4>

            <div className="space-y-3 text-slate-400">
              <p>About Us</p>
              <p>Reviews</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-5">Follow Us</h4>

            <div className="flex gap-4">
              <SocialIcon
                url="https://www.instagram.com/maidandmore/"
                target="_blank"
                rel="noopener noreferrer"
                bgColor="transparent"
                fgColor="#ffffff"
                className="hover:scale-110 transition"
              />

              <SocialIcon
                url="https://www.facebook.com/people/Maidmore/100063662734502/"
                target="_blank"
                rel="noopener noreferrer"
                bgColor="transparent"
                fgColor="#ffffff"
                className="hover:scale-110 transition"
              />

              <SocialIcon
                url="https://wa.me/447553827298?text=Hi%20Maid%20%26%20More,%20I'd%20like%20to%20get%20a%20cleaning%20quote."
                target="_blank"
                rel="noopener noreferrer"
                bgColor="transparent"
                fgColor="#ffffff"
                className="hover:scale-110 transition"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Maid & More. All rights reserved.</p>

          <p>Designed with ❤️ for a cleaner future.</p>
        </div>
      </div>
    </footer>
  );
};

// ─── APP ────────────────────────────────────────────────

export default function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <BeforeAfter />
      <WhyChoose />
      <Awards />
      <Testimonials />
      <HowItWorks />
      <AIFeatures />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
