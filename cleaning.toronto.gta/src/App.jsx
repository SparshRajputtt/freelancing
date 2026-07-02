import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Sparkles,
  Home as HomeIcon,
  Info,
  ClipboardList,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Star,
  ShieldCheck,
  Leaf
} from 'lucide-react';

// ─── Lazy Load Pages ──────────────────────────────────────────────
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Quote = React.lazy(() => import('./pages/Quote'));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-10 h-10 border-3 border-emerald-200 border-t-emerald-500 rounded-full"
      />
    </div>
  );
}

// ─── Scroll to Top on Route Change ────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// ─── Navbar ───────────────────────────────────────────────────────
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home', icon: <HomeIcon className="w-4 h-4" /> },
    { to: '/about', label: 'About', icon: <Info className="w-4 h-4" /> },
    { to: '/services', label: 'Services', icon: <ClipboardList className="w-4 h-4" /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm shadow-slate-200/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled ? 'bg-gradient-to-br from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/20' : 'bg-white/15 backdrop-blur-sm border border-white/20'
              }`}>
                <Sparkles className={`w-5 h-5 ${scrolled ? 'text-white' : 'text-emerald-400'}`} />
              </div>
              <span className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}>
                Working Hands
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive(link.to)
                      ? scrolled
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-emerald-300 bg-white/10'
                      : scrolled
                        ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                  {isActive(link.to) && (
                    <motion.div
                      layoutId="nav-indicator"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${scrolled ? 'bg-emerald-500' : 'bg-emerald-400'}`}
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/quote"
                className={`ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5'
                    : 'bg-white text-emerald-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                }`}
              >
                <FileText className="w-4 h-4" />
                Get Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled
                  ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/15'
              }`}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl"
            >
              <div className="flex flex-col h-full p-6 pt-24">
                <div className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive(link.to)
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        {link.icon}
                        {link.label}
                        {isActive(link.to) && (
                          <ChevronRight className="w-4 h-4 ml-auto text-emerald-500" />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.24 }}
                  >
                    <Link
                      to="/quote"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20"
                    >
                      <FileText className="w-4 h-4" />
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>

                <div className="mt-auto pt-8 border-t border-slate-100">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <Phone className="w-4 h-4 text-emerald-500" />
                      <span>+1 (647) 834-2837</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <Mail className="w-4 h-4 text-emerald-500" />
                      <span>cleaningbyoksana@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Footer ───────────────────────────────────────────────────────
function Footer() {
  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/services', label: 'Our Services' },
    { to: '/quote', label: 'Get a Quote' },
  ];

  const services = [
    'Regular Cleaning',
    'Deep Cleaning',
    'Move In / Out',
    'Commercial Cleaning',
    'Post Renovation',
    'Sofa & Mattress'
  ];

  return (
    <footer className="w-full bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.06),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.04),_transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10">
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-500/20">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Working Hands</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Premium house cleaning services across the Greater Toronto Area. 
              Trusted by thousands of homeowners since 2014.
            </p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-slate-400 text-sm ml-2">4.9 on Google</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 text-sm transition-colors duration-200"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-emerald-400 transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">+1 (647) 834-2837</p>
                  <p className="text-slate-500 text-xs">Mon–Sat 8am–7pm</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">cleaningbyoksana@gmail.com</p>
                  <p className="text-slate-500 text-xs">Replies within 2 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Greater Toronto Area</p>
                  <p className="text-slate-500 text-xs">Toronto, Mississauga, Brampton & more</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Business Hours</p>
                  <p className="text-slate-500 text-xs">Mon–Fri 8am–7pm · Sat–Sun 9am–5pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Working Hands House Cleaning GTA. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Fully Insured
              </span>
              <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                <Leaf className="w-3.5 h-3.5 text-emerald-500" />
                Eco-Friendly
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page Wrapper ─────────────────────────────────────────────────
function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen"
    >
      {children}
    </motion.main>
  );
}

// ─── App ──────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1">
          <React.Suspense fallback={<PageLoader />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/services"
                element={
                  <PageWrapper>
                    <Services />
                  </PageWrapper>
                }
              />
              <Route
                path="/quote"
                element={
                  <PageWrapper>
                    <Quote />
                  </PageWrapper>
                }
              />
            </Routes>
          </React.Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
