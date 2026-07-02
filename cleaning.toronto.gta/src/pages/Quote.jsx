import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  User,
  Phone,
  Mail,
  MapPin,
  Home,
  BedDouble,
  Bath,
  CalendarDays,
  MessageSquare,
  ClipboardList,
  Send,
  Clock,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Building2,
  Star,
  ShieldCheck,
  Leaf,
  MapPinned
} from 'lucide-react';

// ─── Animation Variants ───────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  })
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

// ─── Section Wrapper ──────────────────────────────────────────────
function Section({ children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={`w-full ${className}`}
    >
      {children}
    </motion.section>
  );
}

// ─── Custom Select Component ──────────────────────────────────────
function CustomSelect({ icon, label, value, onChange, options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  React.useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center gap-3 bg-white border rounded-xl px-4 py-3.5 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 ${
          value ? 'border-slate-200 text-slate-900' : 'border-slate-200 text-slate-400'
        }`}
      >
        {icon}
        <span className="flex-1">{value || placeholder}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-white border border-slate-100 rounded-xl shadow-xl overflow-hidden"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setIsOpen(false); }}
                className="w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Form Input Component ─────────────────────────────────────────
function FormInput({ icon, label, type = 'text', value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
        {required && <span className="text-rose-500 ml-0.5">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200"
        />
      </div>
    </div>
  );
}

// ─── Main Quote Component ───────────────────────────────────────
export default function Quote() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const services = [
    'Regular Cleaning',
    'Deep Cleaning',
    'Move In / Out Cleaning',
    'Commercial Cleaning',
    'Post Renovation Cleaning',
    'Sofa & Mattress Cleaning'
  ];

  const propertyTypes = ['House', 'Apartment / Condo', 'Townhouse', 'Commercial Space', 'Other'];
  const bedroomOptions = ['Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms'];
  const bathroomOptions = ['1 Bathroom', '2 Bathrooms', '3 Bathrooms', '4 Bathrooms', '5+ Bathrooms'];

  const contactCards = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      lines: ['+1 (647)834-2837', 'Mon–Sat 8am–7pm'],
      color: 'from-emerald-400 to-teal-500'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      lines: ['cleaningbyoksana@gmail.com', 'Replies within 2 hours'],
      color: 'from-sky-400 to-blue-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      lines: ['Mon–Fri: 8:00 AM – 7:00 PM', 'Sat–Sun: 9:00 AM – 5:00 PM'],
      color: 'from-amber-400 to-orange-500'
    },
    {
      icon: <MapPinned className="w-6 h-6" />,
      title: 'Service Areas',
      lines: ['Toronto, Mississauga, Brampton', 'Vaughan, Markham, Richmond Hill'],
      color: 'from-violet-400 to-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════
           HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.08),_transparent_50%)]" />
        <div className="absolute top-16 right-20 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-12 left-16 w-80 h-80 bg-blue-500/6 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Get a Free Quote</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Request Your
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Free Quote
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              Fill out the form below and we will get back to you with a transparent, 
              no-obligation quote within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
           FORM + ILLUSTRATION
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Form — 3 columns */}
            <motion.div variants={slideLeft} className="lg:col-span-3">
              <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Tell Us About Your Space</h2>
                <p className="text-slate-500 mb-8">The more details you share, the more accurate your quote.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormInput
                      icon={<User className="w-5 h-5" />}
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      placeholder="John Smith"
                      required
                    />
                    <FormInput
                      icon={<Phone className="w-5 h-5" />}
                      label="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      placeholder="(416) 555-0147"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormInput
                      icon={<Mail className="w-5 h-5" />}
                      label="Email Address"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      placeholder="john@example.com"
                      required
                    />
                    <FormInput
                      icon={<MapPin className="w-5 h-5" />}
                      label="Property Address"
                      value={formData.address}
                      onChange={(e) => updateField('address', e.target.value)}
                      placeholder="123 Main St, Toronto"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <CustomSelect
                      icon={<Sparkles className="w-5 h-5 text-slate-400" />}
                      label="Cleaning Service"
                      value={formData.service}
                      onChange={(v) => updateField('service', v)}
                      options={services}
                      placeholder="Select a service"
                    />
                    <CustomSelect
                      icon={<Building2 className="w-5 h-5 text-slate-400" />}
                      label="Property Type"
                      value={formData.propertyType}
                      onChange={(v) => updateField('propertyType', v)}
                      options={propertyTypes}
                      placeholder="Select property type"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <CustomSelect
                      icon={<BedDouble className="w-5 h-5 text-slate-400" />}
                      label="Bedrooms"
                      value={formData.bedrooms}
                      onChange={(v) => updateField('bedrooms', v)}
                      options={bedroomOptions}
                      placeholder="Select bedrooms"
                    />
                    <CustomSelect
                      icon={<Bath className="w-5 h-5 text-slate-400" />}
                      label="Bathrooms"
                      value={formData.bathrooms}
                      onChange={(v) => updateField('bathrooms', v)}
                      options={bathroomOptions}
                      placeholder="Select bathrooms"
                    />
                  </div>

                  <FormInput
                    icon={<CalendarDays className="w-5 h-5" />}
                    label="Preferred Date"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => updateField('preferredDate', e.target.value)}
                    placeholder=""
                  />

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Message</label>
                    <div className="relative">
                      <div className="absolute left-4 top-4 text-slate-400">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        value={formData.message}
                        onChange={(e) => updateField('message', e.target.value)}
                        placeholder="Any special requests, access instructions, or areas of concern..."
                        rows={4}
                        className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-400 transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                    >
                      <Send className="w-5 h-5" />
                      Submit Quote Request
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      className="mt-6 bg-emerald-50 border border-emerald-200 rounded-xl p-5 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-emerald-800 font-semibold">Quote Request Received!</p>
                        <p className="text-emerald-600 text-sm mt-0.5">We will review your details and get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Side Illustration — 2 columns */}
            <motion.div variants={slideRight} className="lg:col-span-2 sticky top-8">
              <div className="relative">
                {/* Main illustration card */}
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-100 shadow-2xl shadow-emerald-100/50">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.6),transparent_50%)]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.06),transparent_50%)]" />
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-xl mb-6">
                      <ClipboardList className="w-14 h-14 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-3">Your Quote, Simplified</h3>
                    <p className="text-slate-500 leading-relaxed max-w-xs mb-8">
                      No hidden fees. No surprises. Just honest, transparent pricing for premium cleaning services.
                    </p>

                    {/* Mini trust badges */}
                    <div className="space-y-3 w-full max-w-xs">
                      <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                        <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <Star className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-slate-800">4.9 Google Rating</p>
                          <p className="text-xs text-slate-400">From 500+ happy clients</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                        <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-slate-800">Fully Insured</p>
                          <p className="text-xs text-slate-400">Complete peace of mind</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/50">
                        <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <Leaf className="w-4 h-4 text-emerald-600" />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold text-slate-800">Eco-Friendly</p>
                          <p className="text-xs text-slate-400">Safe for family & pets</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-300 to-orange-400 rounded-2xl rotate-12 opacity-20 blur-sm" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full opacity-15 blur-sm" />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           CONTACT CARDS
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-24 sm:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div variants={fadeUp} custom={0} className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Prefer to Reach Out Directly?
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Our team is here to answer your questions and help you find the perfect cleaning solution.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactCards.map((card, i) => (
              <motion.div
                key={card.title}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                {card.lines.map((line, li) => (
                  <p key={li} className={`text-sm ${li === 0 ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>
                    {line}
                  </p>
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           LARGE CTA
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.1),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(255,255,255,0.06),_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/2 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2.5 mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white/90 text-sm font-medium">100% Satisfaction Guaranteed</span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Ready for a Spotless Home?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Join thousands of GTA homeowners who trust Working Hands for their cleaning needs. 
              Your first clean could be just days away.
            </motion.p>

            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:4165550147"
                className="group inline-flex items-center gap-2 bg-white text-emerald-700 font-bold px-10 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="mailto:cleaningbyoksana@gmail.com"
                className="group inline-flex items-center gap-2 bg-white/15 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </motion.div>

            <motion.div variants={fadeUp} custom={4} className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24-Hour Response</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Fully Insured</span>
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
