'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'pricing', 'projects', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section is near the top of the viewport or higher
          if (rect.top <= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to local storage
    const existingMessages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    const newMessage = {
      ...formData,
      id: Date.now(),
      date: new Date().toISOString()
    };

    localStorage.setItem('contactMessages', JSON.stringify([...existingMessages, newMessage]));

    // Optional: Show success message or clear form
    alert('Thank you! Your message has been saved locally.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Projects data
  const projects = [
    { title: "Makaan Real Estate", category: "Web Application", link: "https://real-estate-delta-indol.vercel.app/", image: "/project1.png" },
    { title: "Invoice Builder", category: "Web Application", link: "https://invoice-builder-ujch.vercel.app/", image: "/project2.png" },
    { title: "Tess Therapy", category: "Mental Health Care", link: "https://testherapy.com/", image: "/project3.png" },
    { title: "Sunset Motel", category: "Web Application", link: "https://motel-app-one.vercel.app/", image: "/project4.png" },
    { title: "VitalScale", category: "Web Application", link: "https://deit-plan-guide.vercel.app/", image: "/project5.png" },
    { title: "Modern Slider", category: "Web Application", link: "https://modern-slider-psi.vercel.app/", image: "/project6.png" }
  ];
  // Duplicate array for seamless infinite marquee loop
  const infiniteProjects = [...projects, ...projects];

  // Pricing Data
  const pricingData = [
    {
      title: "WordPress Development",
      plans: [
        { name: "Basic", price: "$300 - $600", features: "3–5 pages, Free theme, Mobile responsive, Basic SEO" },
        { name: "Standard", price: "$700 - $1,500", features: "6–10 pages, Premium theme, Speed optimization, Contact forms" },
        { name: "Premium", price: "$2,000 - $4,000", features: "Custom design, Advanced animations, SEO optimized, Security, CMS" }
      ]
    },
    {
      title: "Shopify Store",
      plans: [
        { name: "Basic", price: "$500 - $1,000", features: "Store setup, Free theme, 5–10 products, Payment gateway" },
        { name: "Standard", price: "$1,200 - $2,500", features: "Premium theme, 20–50 products, Conversion optimization, Apps integration" },
        { name: "Premium", price: "$3,000 - $6,000", features: "Custom design, Advanced UX, CRO optimization, Automation setup" }
      ]
    },
    {
      title: "Frontend (HTML/JS)",
      plans: [
        { name: "Basic", price: "$300 - $800", features: "Static website, Responsive design" },
        { name: "Standard", price: "$900 - $2,000", features: "Animations, API integration" },
        { name: "Premium", price: "$2,500 - $5,000", features: "Advanced UI, Dashboard UI" }
      ]
    },
    {
      title: "React / Next.js",
      plans: [
        { name: "Basic", price: "$800 - $1,500", features: "Simple React site" },
        { name: "Standard", price: "$1,800 - $4,000", features: "API integration, Dynamic UI" },
        { name: "Premium", price: "$5,000 - $10,000", features: "Full SaaS frontend, Scalable architecture" }
      ]
    },
    {
      title: "Backend (Node.js)",
      plans: [
        { name: "Basic", price: "$800 - $1,500", features: "Basic API, CRUD" },
        { name: "Standard", price: "$2,000 - $5,000", features: "Auth system, Database" },
        { name: "Premium", price: "$6,000 - $12,000", features: "Scalable backend, Payments, Security" }
      ]
    },
    {
      title: "UI/UX Design",
      plans: [
        { name: "Basic", price: "$200 - $500", features: "Landing page design" },
        { name: "Standard", price: "$600 - $1,500", features: "Full website design" },
        { name: "Premium", price: "$2,000 - $5,000", features: "App UI/UX, Interactive Prototypes" }
      ]
    },
    {
      title: "Full Web App",
      plans: [
        { name: "Basic", price: "$3,000 - $6,000", features: "Simple app, Admin panel" },
        { name: "Standard", price: "$7,000 - $15,000", features: "SaaS MVP, Dashboard" },
        { name: "Premium", price: "$20,000 - $50,000", features: "Full scalable SaaS, Multi-user, Payments" }
      ]
    },
    {
      title: "Monthly Maintenance",
      plans: [
        { name: "Basic", price: "$200 / mo", features: "Regular updates, Backups, Basic support" },
        { name: "Standard", price: "$500 / mo", features: "Priority support, Bug fixes, Performance optimization" },
        { name: "Premium", price: "$1,000+ / mo", features: "Dedicated dev, Feature additions, 24/7 priority support" }
      ]
    }
  ];


  return (
    <main className="min-h-screen w-full bg-[#050505] text-white font-sans">
      <div className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
        <nav className="flex items-center justify-between px-6 lg:px-8 py-4 max-w-[1400px] mx-auto transition-all duration-300 relative z-[60]">

          {/* Logo Section */}
          <div className="flex items-center cursor-pointer relative z-[70]">
            <img src="/logo2.png" alt="We Are Creative Logo" className="h-16  w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-gray-300">
            <a href="#home" className={`relative group transition-colors ${activeSection === 'home' ? 'text-white' : 'hover:text-white'}`}>
              Home
              {activeSection === 'home' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d260]"></span>}
            </a>
            <a href="#about" className={`relative group transition-colors ${activeSection === 'about' ? 'text-white' : 'hover:text-white'}`}>
              About
              {activeSection === 'about' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d260]"></span>}
            </a>
            <a href="#services" className={`relative group transition-colors ${activeSection === 'services' ? 'text-white' : 'hover:text-white'}`}>
              Services
              {activeSection === 'services' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d260]"></span>}
            </a>
            <a href="#pricing" className={`relative group transition-colors ${activeSection === 'pricing' ? 'text-white' : 'hover:text-white'}`}>
              Pricing
              {activeSection === 'pricing' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d260]"></span>}
            </a>
            <a href="#projects" className={`relative group transition-colors ${activeSection === 'projects' ? 'text-white' : 'hover:text-white'}`}>
              Projects
              {activeSection === 'projects' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d260]"></span>}
            </a>
            <a href="#contact" className={`relative group transition-colors ${activeSection === 'contact' ? 'text-white' : 'hover:text-white'}`}>
              Contact Us
              {activeSection === 'contact' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d260]"></span>}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4 relative z-[70]">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2 focus:outline-none" aria-label="Toggle Menu">
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
              )}
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:block rounded-full p-[1px] bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 hover:opacity-90 transition-opacity">
            <div className="bg-[#050505] hover:bg-transparent transition-colors rounded-full px-7 py-2.5 text-sm font-semibold text-white tracking-wide">
              Let's Talk
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Overlay - Moved outside sticky header for full-screen coverage */}
      <div className={`lg:hidden fixed inset-0 bg-[#050505] z-[100] flex flex-col items-center justify-start pt-32 gap-6 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        {/* Mobile Menu Header (Logo & Close Button) */}
        <div className="absolute top-0 left-0 w-full px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/img.png" alt="We Are Creative Logo" className="h-10 w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 focus:outline-none" aria-label="Close Menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-[#00d260] transition-colors">Home</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-[#00d260] transition-colors">About</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-[#00d260] transition-colors">Services</a>
        <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-[#00d260] transition-colors">Pricing</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-[#00d260] transition-colors">Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold hover:text-[#00d260] transition-colors">Contact Us</a>
        <button
          onClick={() => {
            setIsMenuOpen(false);
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="mt-6 rounded-full p-[1px] bg-gradient-to-r from-blue-600 via-teal-500 to-green-500"
        >
          <div className="bg-[#050505] rounded-full px-8 py-3 text-base font-semibold text-white">
            Let's Talk
          </div>
        </button>
      </div>

      {/* Hero Section */}
      <section id="home" className="max-w-[1400px] mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden">

        {/* Left Content */}
        <div className="flex-1 space-y-8 z-10">
          <div className="inline-block">
            <span className="text-[#00d260] font-bold  text-sm tracking-wider uppercase">
              WE BUILD DIGITAL SOLUTIONS
            </span>
          </div>

          <h1 className="text-5xl mb-5 font-bold leading-tight">
            We Create Modern <br />
            Websites That <span className="text-[#00d260]">Drive <br className="hidden md:block" /> Results</span>
          </h1>

          <p className="text-gray-400 mb-5 text-lg max-w-[500px] leading-relaxed">
            A creative web agency delivering fast, responsive and high-performing websites for startups, businesses and brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center mb-5 gap-6">
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto relative overflow-hidden group bg-gradient-to-r from-teal-400 to-[#00d260] font-bold px-8 py-4 rounded-xl transition-all border border-transparent hover:border-gray-700">
              <div className="absolute inset-0 bg-[#050505] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 text-black group-hover:text-white transition-colors duration-300">
                Our Services <span>→</span>
              </span>
            </button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto relative overflow-hidden group border border-gray-700 font-bold px-8 py-4 rounded-xl transition-all hover:border-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-[#00d260] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center justify-center gap-2 text-white group-hover:text-black transition-colors duration-300">
                View Portfolio <span>→</span>
              </span>
            </button>
          </div>

          {/* Trusted Section */}
          <div className="pt-8 ">
            <p className="text-gray-500 text-sm mb-4">Trusted by businesses worldwide</p>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <img src="/user1.png" alt="Client" className="w-12 h-12 rounded-full border-2 border-[#050505] object-cover" />
                <img src="/user2.png" alt="Client" className="w-12 h-12 rounded-full border-2 border-[#050505] object-cover" />
                <img src="/user3.png" alt="Client" className="w-12 h-12 rounded-full border-2 border-[#050505] object-cover" />
                <img src="/user4.png" alt="Client" className="w-12 h-12 rounded-full border-2 border-[#050505] object-cover" />
                <div className="w-12 h-12 rounded-full border-2 border-[#050505] bg-[#00d260]/20 flex items-center justify-center text-[#00d260] text-sm font-bold">
                  ~50
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-lg">50+</p>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Laptop & Floating Icons */}
        <div className="flex-1 relative">
          {/* Main Laptop Image */}
          <div className="relative z-10 animate-float max-w-[600px] mb-10  mx-auto">
            <img
              src="/laptop.png"
              alt="Website Showcase"
              className="w-full h-auto drop-shadow-[0_0_50px_rgba(0,210,96,0.3)]"
            />
          </div>
          {/* Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[#00d260]/5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>

      </section>

      {/* About Section */}
      <section id="about" className="max-w-[1400px] mx-auto px-8 py-16 flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Image Placeholder Div */}
        <div className="flex-1 w-full h-[300px] md:h-[500px] rounded-3xl border border-[#00d260]/30 bg-[#111] relative group overflow-hidden">
          {/* Main Image */}
          <img
            src="/laptopman.png"
            alt="About Us"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Subtle Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#00d260]/10 to-transparent opacity-60"></div>

          {/* Glowing Border effect like the image */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00d260]/30 transition-colors rounded-3xl pointer-events-none"></div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <span className="text-[#00d260] font-bold text-sm tracking-widest uppercase">ABOUT US</span>
            <h2 className="text-4xl font-bold mt-5 leading-tight">
              DevCodeX is a Web <br />
              <span className="text-[#00d260]">Agency</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-[600px]">
              We design and develop fast, responsive, and SEO-optimized websites, eCommerce stores, and web applications using modern technologies like WordPress, Shopify, React, and Next.js to help your business grow online.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* Stat 1 */}
            <div className="flex items-center gap-2 group">
              <div className="w-14 h-14 rounded-full border border-[#00d260]/30 flex items-center justify-center group-hover:bg-[#00d260] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] group-hover:text-black"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">50+</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-2 group">
              <div className="w-14 h-14 rounded-full border border-[#00d260]/30 flex items-center justify-center group-hover:bg-[#00d260] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] group-hover:text-black"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /><path d="m9.05 14.87 2-2a2.41 2.41 0 0 1 3.4 0l1.1 1.1" /><path d="M7 21h10" /><path d="M8 21v-2" /><path d="M16 21v-2" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">120+</h3>
                <p className="text-gray-500 text-sm">Projects Complete</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-2 group">
              <div className="w-14 h-14 rounded-full border border-[#00d260]/30 flex items-center justify-center group-hover:bg-[#00d260] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] group-hover:text-black"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">5+ </h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section id="services" className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="text-center mb-12 space-y-4">
          <span className="text-[#00d260] font-bold text-sm tracking-[0.2em] uppercase">OUR SERVICES</span>
          <h2 className="text-5xl mt-5 font-bold tracking-tight">What We <span className="text-[#00d260]">Do</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Service 1: Web Development */}
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:border-blue-500/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/5 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-xl border border-blue-500/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Web Development</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-8">Custom websites built with modern technologies.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Service 2: UI/UX Design */}
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:border-[#00d260]/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#00d260]/5 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#00d260]/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-xl border border-[#00d260]/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] drop-shadow-[0_0_10px_rgba(0,210,96,0.8)]"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l5 2" /><path d="M2 2l2 5" /><path d="M11.5 11.5l3 3" /></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-14">Beautiful, user-friendly designs that convert.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold group-hover:bg-[#00d260] group-hover:border-[#00d260] group-hover:text-black transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Service 3: React Development */}
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:border-cyan-400/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-cyan-400/5 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-xl border border-cyan-400/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-11.5 -10.23174 23 20.46348" className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                  <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1.2" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">React Development</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-8">Fast, scalable and dynamic web applications.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Service 4: Backend Development */}
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:border-[#00d260]/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#00d260]/5 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#00d260]/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-xl border border-[#00d260]/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] drop-shadow-[0_0_10px_rgba(0,210,96,0.8)]"><rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6" y2="6" /><line x1="6" y1="18" x2="6" y2="18" /></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Backend Development</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-6">Secure and robust backend solutions.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-2.5 mt-2 rounded-xl border border-white/10 text-xs font-bold group-hover:bg-[#00d260] group-hover:border-[#00d260] group-hover:text-black transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Service 5: Digital Marketing */}
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:border-blue-500/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/5 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-xl border border-blue-500/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"><path d="M3 11l18-5v12L3 13v-2z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Marketing</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-8">SEO, social media & ads that grow your brand.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-2.5 rounded-xl border border-white/10 text-xs font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="max-w-[1400px] mx-auto px-8 py-16 border-t border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#00d260]/30 to-transparent"></div>
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#00d260] font-bold text-sm tracking-[0.2em] uppercase">TRANSPARENT PRICING</span>
          <h2 className="text-4xl md:text-5xl mt-5 font-bold tracking-tight">Flexible Plans For <span className="text-[#00d260]">Every Need</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base mt-4 leading-relaxed">
            US-quality development at <span className="text-white font-semibold">70% lower cost</span>. These plans are set 60–80% lower to stay competitive while maintaining high profit margins and premium quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingData.map((category, idx) => (
            <div key={idx} className="bg-[#0a0a0a] border border-white/5 p-6 rounded-3xl hover:border-[#00d260]/40 transition-all duration-500 flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d260]/5 blur-3xl rounded-full pointer-events-none group-hover:bg-[#00d260]/10 transition-colors"></div>
              
              <h3 className="text-xl font-bold mb-6 text-white group-hover:text-[#00d260] transition-colors relative z-10">{category.title}</h3>
              
              <div className="space-y-4 flex-1 relative z-10">
                {category.plans.map((plan, pIdx) => (
                  <div key={pIdx} className="p-4 bg-white/[0.02] rounded-2xl border border-white/5 hover:bg-white/[0.04] hover:border-[#00d260]/20 transition-all duration-300">
                    <div className="flex justify-between items-center mb-2 gap-2">
                      <span className="font-semibold text-white text-sm">{plan.name}</span>
                      <span className="text-[#00d260] font-bold text-sm whitespace-nowrap">{plan.price}</span>
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{plan.features}</p>
                  </div>
                ))}
              </div>
              
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full mt-6 py-3 rounded-xl border border-white/10 text-xs font-bold group-hover:bg-[#00d260] group-hover:border-[#00d260] group-hover:text-black transition-all duration-300 relative z-10">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="text-center mb-12 space-y-4">
          <span className="text-[#00d260] font-bold text-sm tracking-[0.2em] uppercase">WHY CHOOSE US</span>
          <h2 className="text-4xl mt-3 font-bold">We Deliver More Than <span className="text-[#00d260]">Just Code</span></h2>
        </div>

        {/* Unified Premium Container */}
        <div className="bg-[#080808] border border-white rounded-[2rem] lg:rounded-[4rem] p-8 md:p-12 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00d260]/20 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 relative z-10">

            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center space-y-8 px-6 md:border-r border-white">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/30 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-20 h-20 rounded-full border border-blue-500/20 flex items-center justify-center bg-blue-500/5 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Fast Delivery</h4>
                <p className="text-gray-500 text-sm leading-relaxed">We deliver projects on time, every time.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center space-y-8 px-6 md:border-r border-white">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#00d260]/30 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-20 h-20 rounded-full border border-[#00d260]/20 flex items-center justify-center bg-[#00d260]/5 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] drop-shadow-[0_0_8px_rgba(0,210,96,0.6)]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">High Quality</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Clean code and modern designs guaranteed.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center space-y-8 px-6 md:border-r border-white">
              <div className="relative group">
                <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-20 h-20 rounded-full border border-cyan-400/20 flex items-center justify-center bg-cyan-400/5 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">SEO Friendly</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Optimized websites that rank on search engines.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center space-y-8 px-6 md:border-r border-white">
              <div className="relative group">
                <div className="absolute inset-0 bg-[#00d260]/30 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-20 h-20 rounded-full border border-[#00d260]/20 flex items-center justify-center bg-[#00d260]/5 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] drop-shadow-[0_0_8px_rgba(0,210,96,0.6)]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Responsive Design</h4>
                <p className="text-gray-500 text-sm leading-relaxed">Perfect display on all devices.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col items-center text-center space-y-8 px-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600/30 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity"></div>
                <div className="relative w-20 h-20 rounded-full border border-blue-500/20 flex items-center justify-center bg-blue-500/5 group-hover:scale-110 transition-transform duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold">24/7 Support</h4>
                <p className="text-gray-500 text-sm leading-relaxed">We're here whenever you need us.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="max-w-[1200px] mx-auto px-8 pt-16 pb-16 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4">
            <span className="text-[#00d260] mt-5 font-bold text-sm tracking-[0.2em] uppercase">OUR PORTFOLIO</span>
            <h2 className="text-4xl mt-3 font-bold tracking-tight">
              Some Of Our <span className="text-[#00d260]">Recent Work</span>
            </h2>
          </div>
        </div>

        <div className="relative overflow-hidden w-full group py-4">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-[max-content]">
            {infiniteProjects.map((project, index) => (
              <div key={index} className="flex flex-col space-y-3 w-[220px] lg:w-[260px] flex-shrink-0">
                {/* Image Container */}
                <div className="relative aspect-[4/5] rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] group/card">
                  {/* Image or Placeholder */}
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover/card:opacity-40 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                        <circle cx="9" cy="9" r="2" />
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                      </svg>
                    </div>
                  )}
                  {/* Blue Glowing Frame */}
                  <div className="absolute inset-0 border-2 border-blue-500/0 group-hover/card:border-blue-500/30 rounded-3xl transition-all duration-500 pointer-events-none"></div>
                  {/* Hover Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/card:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black font-bold px-6 py-2.5 text-xs rounded-full translate-y-4 group-hover/card:translate-y-0 transition-all duration-500 hover:bg-[#00d260] hover:text-white flex items-center gap-2">
                      View More
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* Text Content */}
                <div className="px-1 space-y-0.5">
                  <h3 className="text-lg font-bold hover:text-[#00d260] transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-xs font-medium">{project.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Adding custom animations in a style tag for this specific layout */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* 12px is half of the 24px (gap-6) */
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 7s ease-in-out infinite; }
        .animate-bounce-delayed { animation: bounce-slow 7s ease-in-out infinite 2s; }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
      {/* Contact Section */}
      <section id="contact" className="max-w-[1400px] mx-auto px-6 md:px-8 pt-16 pb-12">
        <div className="bg-[#080808] border border-white/5 rounded-[2rem] lg:rounded-[4rem] p-8 md:p-12 lg:p-20 shadow-2xl relative">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00d260]/20 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4 mt-7">
                <span className="text-[#00d260] font-bold text-sm  tracking-[0.2em] uppercase">GET IN TOUCH</span>
                <h2 className="text-2xl mt-8 font-bold leading-tight">
                  Let's Start Your <br />
                  <span className="text-[#00d260]">Next Project</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  Have a project in mind? Let's discuss how we can bring your ideas to life.
                </p>
              </div>
            </div>

            {/* Middle Column: Contact Info */}
            <div className="lg:col-span-4 space-y-10 py-4 lg:pr-10">
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full  border border-[#00d260]/30 flex items-center justify-center bg-[#00d260]/5 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute  inset-0 bg-[#00d260]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] relative"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-semibold">Email</h4>
                  <p className="text-white font-medium">devcodex.agency@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-[#00d260]/30 flex items-center justify-center bg-[#00d260]/5 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-[#00d260]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] relative"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-semibold">Phone</h4>
                  <p className="text-white font-medium">+92 3264734251</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full border border-[#00d260]/30 flex items-center justify-center bg-[#00d260]/5 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-[#00d260]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] relative"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm font-semibold">Location</h4>
                  <p className="text-white font-medium">Lahore, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-5 space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="bg-[#0f0f0f] border border-white/5 rounded-xl px-4 py-3 md:px-6 md:py-4 outline-none focus:border-[#00d260]/30 transition-all text-sm w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="bg-[#0f0f0f] border border-white/5 rounded-xl px-4 py-3 md:px-6 md:py-4 outline-none focus:border-[#00d260]/30 transition-all text-sm w-full"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Your Subject"
                  required
                  className="w-full bg-[#0f0f0f] border border-white/5 rounded-xl px-4 py-3 md:px-6 md:py-4 outline-none focus:border-[#00d260]/30 transition-all text-sm"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full bg-[#0f0f0f] border border-white/5 rounded-xl px-4 py-3 md:px-6 md:py-4 outline-none focus:border-[#00d260]/30 transition-all text-sm resize-none"
                ></textarea>

                <button type="submit" className="w-full bg-gradient-to-r from-[#00d260] to-[#05ff7a] text-black font-bold py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(0,210,96,0.3)]">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-[#080808] pt-20 pb-10 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

            {/* Column 1: Branding */}
            <div className="space-y-6">
              <div className="flex items-center">
                <img src="/logo2.png" alt="DevCodeX Logo" className="h-20 w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                We are a creative agency dedicated to building high-quality digital experiences that help businesses grow and succeed in the modern world.
              </p>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/profile.php?id=61579889000816&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#00d260] hover:border-[#00d260] hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
                <a href="https://www.instagram.com/devc_odex/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#00d260] hover:border-[#00d260] hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                </a>
                <a href="https://www.tiktok.com/@devc_odex" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-[#00d260] hover:border-[#00d260] hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">Services</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">Pricing</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">Portfolio</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg">Our Services</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">React Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">Backend Solutions</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#00d260] transition-colors text-sm">Digital Marketing</a></li>
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white font-bold text-lg">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] mt-0.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <span className="text-gray-400 text-sm">+92 3264734251</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  <span className="text-gray-400 text-sm">devcodex.agency@gmail.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] mt-0.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  <span className="text-gray-400 text-sm">Lahore, Pakistan</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-xs">
              © 2026 <span className="text-white font-semibold">DevCodeX</span>. All Rights Reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
