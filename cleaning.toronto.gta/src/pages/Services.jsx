import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Home,
  Building2,
  Truck,
  Sofa,
  Paintbrush,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.94 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Section Wrapper ──────────────────────────────────────────────
function Section({ children, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
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

// ─── FAQ Accordion Item ───────────────────────────────────────────
function FAQItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="border border-slate-100 rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 text-left group"
      >
        <span className="text-slate-900 font-semibold text-base sm:text-lg pr-4">
          {question}
        </span>
        <div
          className={`shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-50 ${isOpen ? "bg-emerald-50" : ""}`}
        >
          <ChevronDown
            className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-500" : ""}`}
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-slate-500 leading-relaxed text-[15px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Services Component ────────────────────────────────────
export default function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  // const services = [
  //   {
  //     icon: <Sparkles className="w-7 h-7" />,
  //     title: 'Regular Cleaning',
  //     description: 'Our signature maintenance service designed to keep your home consistently fresh, organized, and welcoming week after week.',
  //     bullets: [
  //       'Dusting and wiping all surfaces',
  //       'Vacuuming carpets and mopping floors',
  //       'Kitchen and bathroom sanitization',
  //       'Trash removal and bed making',
  //       'Customizable cleaning checklist'
  //     ],
  //     color: 'from-amber-400 to-orange-400',
  //     gradient: 'from-amber-50 to-orange-50',
  //     imageLabel: 'Regular Cleaning'
  //   },
  //   {
  //     icon: <Home className="w-7 h-7" />,
  //     title: 'Deep Cleaning',
  //     description: 'An intensive, top-to-bottom cleaning that reaches every hidden corner. Perfect for seasonal refreshes and first-time clients.',
  //     bullets: [
  //       'Inside cabinets, drawers, and appliances',
  //       'Baseboards, door frames, and light switches',
  //       'Grout scrubbing and tile restoration',
  //       'Ceiling fans and vent cleaning',
  //       'Behind and under furniture'
  //     ],
  //     color: 'from-sky-400 to-blue-500',
  //     gradient: 'from-sky-50 to-blue-50',
  //     imageLabel: 'Deep Cleaning'
  //   },
  //   {
  //     icon: <Truck className="w-7 h-7" />,
  //     title: 'Move In / Out',
  //     description: 'Comprehensive cleaning for property transitions. We ensure your old place is spotless and your new home is move-in ready.',
  //     bullets: [
  //       'Full kitchen and appliance deep clean',
  //       'Bathroom disinfection and descaling',
  //       'Closet and storage area cleaning',
  //       'Wall spot cleaning and touch-ups',
  //       'Guaranteed deposit return support'
  //     ],
  //     color: 'from-violet-400 to-purple-500',
  //     gradient: 'from-violet-50 to-purple-50',
  //     imageLabel: 'Move In / Out'
  //   },
  //   {
  //     icon: <Building2 className="w-7 h-7" />,
  //     title: 'Commercial Cleaning',
  //     description: 'Professional cleaning tailored for offices, retail spaces, and commercial properties across the GTA. Flexible scheduling available.',
  //     bullets: [
  //       'Office desks, chairs, and common areas',
  //       'Reception and waiting room maintenance',
  //       'Restroom restocking and sanitization',
  //       'Floor care and window cleaning',
  //       'After-hours and weekend availability'
  //     ],
  //     color: 'from-emerald-400 to-teal-500',
  //     gradient: 'from-emerald-50 to-teal-50',
  //     imageLabel: 'Commercial Cleaning'
  //   },
  //   {
  //     icon: <Paintbrush className="w-7 h-7" />,
  //     title: 'Post Renovation',
  //     description: 'Remove construction dust, debris, and residue to reveal the true beauty of your newly renovated space.',
  //     bullets: [
  //       'Construction dust and debris removal',
  //       'Paint splatter and adhesive cleanup',
  //       'Window and fixture polishing',
  //       'Air vent and filter cleaning',
  //       'Final walkthrough inspection'
  //     ],
  //     color: 'from-rose-400 to-pink-500',
  //     gradient: 'from-rose-50 to-pink-50',
  //     imageLabel: 'Post Renovation'
  //   },
  //   {
  //     icon: <Sofa className="w-7 h-7" />,
  //     title: 'Sofa & Mattress',
  //     description: 'Deep extraction cleaning for upholstered furniture and mattresses, eliminating allergens, stains, and odors.',
  //     bullets: [
  //       'Hot water extraction deep clean',
  //       'Stain and odor treatment',
  //       'Dust mite and allergen removal',
  //       'Fabric protection application',
  //       'Quick-dry technology included'
  //     ],
  //     color: 'from-cyan-400 to-indigo-400',
  //     gradient: 'from-cyan-50 to-indigo-50',
  //     imageLabel: 'Sofa & Mattress'
  //   }
  // ];
  const services = [
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Regular Cleaning",
      image: "/regular-cleaning.png",
      description:
        "Our signature maintenance service designed to keep your home consistently fresh, organized, and welcoming week after week.",
      bullets: [
        "Dusting and wiping all surfaces",
        "Vacuuming carpets and mopping floors",
        "Kitchen and bathroom sanitization",
        "Trash removal and bed making",
        "Customizable cleaning checklist",
      ],
      color: "from-amber-400 to-orange-400",
    },
    {
      icon: <Home className="w-7 h-7" />,
      title: "Deep Cleaning",
      image: "/deep-cleaning.png",
      description:
        "An intensive, top-to-bottom cleaning that reaches every hidden corner. Perfect for seasonal refreshes and first-time clients.",
      bullets: [
        "Inside cabinets, drawers, and appliances",
        "Baseboards, door frames, and light switches",
        "Grout scrubbing and tile restoration",
        "Ceiling fans and vent cleaning",
        "Behind and under furniture",
      ],
      color: "from-sky-400 to-blue-500",
    },
    {
      icon: <Truck className="w-7 h-7" />,
      title: "Move In / Out",
      image: "/move-in-out-cleaning.png",
      description:
        "Comprehensive cleaning for property transitions. We ensure your old place is spotless and your new home is move-in ready.",
      bullets: [
        "Full kitchen and appliance deep clean",
        "Bathroom disinfection and descaling",
        "Closet and storage area cleaning",
        "Wall spot cleaning and touch-ups",
        "Guaranteed deposit return support",
      ],
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: <Building2 className="w-7 h-7" />,
      title: "Commercial Cleaning",
      image: "/commercial.png",
      description:
        "Professional cleaning tailored for offices, retail spaces, and commercial properties across the GTA. Flexible scheduling available.",
      bullets: [
        "Office desks, chairs, and common areas",
        "Reception and waiting room maintenance",
        "Restroom restocking and sanitization",
        "Floor care and window cleaning",
        "After-hours and weekend availability",
      ],
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: <Paintbrush className="w-7 h-7" />,
      title: "Post Renovation",
      image: "/post-renovation.png",
      description:
        "Remove construction dust, debris, and residue to reveal the true beauty of your newly renovated space.",
      bullets: [
        "Construction dust and debris removal",
        "Paint splatter and adhesive cleanup",
        "Window and fixture polishing",
        "Air vent and filter cleaning",
        "Final walkthrough inspection",
      ],
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: <Sofa className="w-7 h-7" />,
      title: "Sofa & Mattress",
      image: "/sofa.png",
      description:
        "Deep extraction cleaning for upholstered furniture and mattresses, eliminating allergens, stains, and odors.",
      bullets: [
        "Hot water extraction deep clean",
        "Stain and odor treatment",
        "Dust mite and allergen removal",
        "Fabric protection application",
        "Quick-dry technology included",
      ],
      color: "from-cyan-400 to-indigo-400",
    },
  ];

  const faqs = [
    {
      question: "What areas do you serve in the GTA?",
      answer:
        "We proudly serve the entire Greater Toronto Area including Toronto, Mississauga, Brampton, Vaughan, Markham, Richmond Hill, Oakville, Burlington, Hamilton, and surrounding communities. If you are unsure whether we cover your area, simply reach out and we will be happy to confirm.",
    },
    {
      question: "Do I need to provide cleaning supplies or equipment?",
      answer:
        "Not at all. Working Hands arrives fully equipped with all necessary cleaning supplies, professional-grade equipment, and eco-friendly products. Everything is included in your service price. If you have specific product preferences or allergies, just let us know in advance and we will accommodate your needs.",
    },
    {
      question:
        "How do you ensure the safety and trustworthiness of your staff?",
      answer:
        "Every member of our team undergoes a comprehensive background check, reference verification, and in-person interview before joining Working Hands. We also provide extensive training on cleaning techniques, customer service, and safety protocols. Additionally, we are fully insured and bonded for your complete peace of mind.",
    },
    {
      question: "What is your cancellation and rescheduling policy?",
      answer:
        "We understand that life happens. You can reschedule or cancel your appointment free of charge up to 24 hours before your scheduled service. For cancellations within 24 hours, a small fee may apply to cover our team's reserved time. We always strive to be as flexible and accommodating as possible.",
    },
    {
      question: "What if I am not satisfied with the cleaning?",
      answer:
        "Your satisfaction is our top priority. If you are not completely happy with any aspect of our service, contact us within 24 hours and we will return to re-clean the specific areas at no additional cost. We stand behind our work with a 100% satisfaction guarantee on every single visit.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════
           HERO
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.12),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.08),_transparent_50%)]" />
        <div className="absolute top-20 right-12 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-16 left-16 w-96 h-96 bg-blue-500/6 rounded-full blur-3xl" />

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
                Our Services
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
            >
              Premium Cleaning,
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Tailored to You
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              From routine maintenance to specialized deep cleans, we offer a
              comprehensive range of professional cleaning services designed
              around your lifestyle and needs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
           SERVICES GRID
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-28 sm:py-36 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-20"
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
              Our Cleaning Services
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              Each service is delivered with the same meticulous attention to
              detail that has made Working Hands the trusted choice across the
              GTA.
            </p>
          </motion.div>

          <div className="space-y-20 lg:space-y-28">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className={`grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center`}
              >
                {/* Image */}
                <motion.div
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                  className={`${i % 2 === 1 ? "lg:order-2" : ""} flex justify-center`}
                >
                  <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-3xl shadow-xl border border-slate-200 transition-transform duration-300 hover:scale-[1.02]"
                      draggable={false}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={i % 2 === 0 ? slideRight : slideLeft}
                  className={`${i % 2 === 1 ? "lg:order-1" : ""} text-center lg:text-left`}
                >
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-6`}
                  >
                    {service.icon}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="flex items-start gap-3 justify-center lg:justify-start"
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-slate-600 text-left">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/quote"
                    className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           FAQ ACCORDION
      ═══════════════════════════════════════════════════════════════ */}
      <Section className="py-28 sm:py-36 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(16,185,129,0.03)_1px,_transparent_0)] bg-[length:48px_48px]" />
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            variants={fadeUp}
            custom={0}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to know before booking your first clean.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════════
           BOTTOM CTA
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
                Start your journey to a cleaner home
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Get Free Quote
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Tell us about your space and we will provide a transparent,
              no-obligation quote tailored to your exact needs. Most quotes are
              delivered within hours.
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
                Get Free Quote
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
