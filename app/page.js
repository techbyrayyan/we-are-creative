'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact'];
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

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans">
      <div className="sticky top-0 z-50 bg-[#050505]/95 backdrop-blur-md border-b border-white/5">
        <nav className="flex items-center justify-between px-8 py-4 max-w-[1400px] mx-auto transition-all duration-300">

        {/* Logo Section */}
        <div className="flex items-center cursor-pointer"> 
          {/* Please save the second image as logo.png in the public folder */}
          <img src="/img.png" alt="We Are Creative Logo" className="h-18 w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
        </div> 

        {/* Navigation Links */}
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
          <a href="#projects" className={`relative group transition-colors ${activeSection === 'projects' ? 'text-white' : 'hover:text-white'}`}>
            Projects
            {activeSection === 'projects' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d260]"></span>}
          </a>
          <a href="#contact" className={`relative group transition-colors ${activeSection === 'contact' ? 'text-white' : 'hover:text-white'}`}>
            Contact Us
            {activeSection === 'contact' && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#00d260]"></span>}
          </a>
        </div>

        {/* CTA Button */}
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:block rounded-full p-[1px] bg-gradient-to-r from-blue-600 via-teal-500 to-green-500 hover:opacity-90 transition-opacity">
          <div className="bg-[#050505] hover:bg-transparent transition-colors rounded-full px-7 py-2.5 text-sm font-semibold text-white tracking-wide">
            Let's Talk
          </div>
        </button>
        </nav>
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
            Websites That <span className="text-[#00d260]">Drive <br></br> Results</span>
          </h1>

          <p className="text-gray-400 mb-5 text-lg max-w-[500px] leading-relaxed">
            A creative web agency delivering fast, responsive and high-performing websites for startups, businesses and brands.
          </p>

          <div className="flex items-center mb-5 gap-6">
            <button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="relative overflow-hidden group bg-gradient-to-r from-teal-400 to-[#00d260] font-bold px-8 py-4 rounded-xl transition-all border border-transparent hover:border-gray-700">
              <div className="absolute inset-0 bg-[#050505] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2 text-black group-hover:text-white transition-colors duration-300">
                Our Services <span>→</span>
              </span>
            </button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="relative overflow-hidden group border border-gray-700 font-bold px-8 py-4 rounded-xl transition-all hover:border-transparent">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-[#00d260] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-black transition-colors duration-300">
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
      <section id="about" className="max-w-[1400px] mx-auto px-8 py-24 flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side - Image Placeholder Div */}
        <div className="flex-1 w-full h-[500px] rounded-3xl border border-[#00d260]/30 bg-[#111] relative group overflow-hidden">
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
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              We're a Creative Web <br />
              <span className="text-[#00d260]">Agency</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-[600px]">
              We combine creativity, technology and strategy to build digital experiences that help your business grow. From stunning websites to powerful web applications, we bring your ideas to life.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full border border-[#00d260]/30 flex items-center justify-center group-hover:bg-[#00d260] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] group-hover:text-black"><path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><circle cx="12" cy="12" r="10" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">50+</h3>
                <p className="text-gray-500 text-sm">Happy Clients</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full border border-[#00d260]/30 flex items-center justify-center group-hover:bg-[#00d260] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] group-hover:text-black"><path d="m12 14 4-4" /><path d="M3.34 19a10 10 0 1 1 17.32 0" /><path d="m9.05 14.87 2-2a2.41 2.41 0 0 1 3.4 0l1.1 1.1" /><path d="M7 21h10" /><path d="M8 21v-2" /><path d="M16 21v-2" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">120+</h3>
                <p className="text-gray-500 text-sm">Projects Completed</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-full border border-[#00d260]/30 flex items-center justify-center group-hover:bg-[#00d260] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] group-hover:text-black"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11" /></svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">5+</h3>
                <p className="text-gray-500 text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Services Section */}
      <section id="services" className="max-w-[1400px] mx-auto px-8 py-32">
        <div className="text-center mb-20 space-y-4">
          <span className="text-[#00d260] font-bold text-sm tracking-[0.2em] uppercase">OUR SERVICES</span>
          <h2 className="text-5xl lg:text-6xl font-bold tracking-tight">What We <span className="text-[#00d260]">Do</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Service 1: Web Development */}
          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-blue-500/5 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-2xl border border-blue-500/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">Custom websites built with modern technologies.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3.5 rounded-xl border border-white/10 text-sm font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Service 2: UI/UX Design */}
          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] hover:border-[#00d260]/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-[#00d260]/5 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#00d260]/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-2xl border border-[#00d260]/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] drop-shadow-[0_0_10px_rgba(0,210,96,0.8)]"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l5 2" /><path d="M2 2l2 5" /><path d="M11.5 11.5l3 3" /></svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">Beautiful, user-friendly designs that convert.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3.5 rounded-xl border border-white/10 text-sm font-bold group-hover:bg-[#00d260] group-hover:border-[#00d260] group-hover:text-black transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Service 3: React Development */}
          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] hover:border-cyan-400/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-cyan-400/5 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-2xl border border-cyan-400/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"><circle cx="12" cy="12" r="2" /><path d="M12 7a15.65 15.65 0 0 0-3.5 9.5" /><path d="M12 17a15.65 15.65 0 0 0 3.5-9.5" /><path d="M7 12a15.65 15.65 0 0 0 9.5 3.5" /><path d="M17 12a15.65 15.65 0 0 0-9.5-3.5" /></svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">React Development</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">Fast, scalable and dynamic web applications.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3.5 rounded-xl border border-white/10 text-sm font-bold group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Service 4: Backend Development */}
          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] hover:border-[#00d260]/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-[#00d260]/5 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-[#00d260]/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-2xl border border-[#00d260]/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#00d260] drop-shadow-[0_0_10px_rgba(0,210,96,0.8)]"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">Secure and robust backend solutions.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3.5 mt-6 rounded-xl border border-white/10 text-sm font-bold group-hover:bg-[#00d260] group-hover:border-[#00d260] group-hover:text-black transition-all duration-300">
              Learn More →
            </button>
          </div>

          {/* Service 5: Digital Marketing */}
          <div className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[2.5rem] hover:border-blue-500/40 transition-all duration-500 group relative flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-3xl bg-blue-500/5 flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform duration-500">
              <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative w-20 h-20 rounded-2xl border border-blue-500/30 flex items-center justify-center bg-[#0a0a0a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"><path d="M18 8a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3Z" /><path d="M10 8a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3Z" /><path d="M14 16a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3Z" /></svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-10">SEO, social media & ads that grow your brand.</p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full py-3.5 rounded-xl border border-white/10 text-sm font-bold group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="projects" className="max-w-[1400px] mx-auto px-8 py-32">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#00d260] font-bold text-sm tracking-[0.2em] uppercase">WHY CHOOSE US</span>
          <h2 className="text-4xl lg:text-5xl font-bold">We Deliver More Than <span className="text-[#00d260]">Just Code</span></h2>
        </div>

        {/* Unified Premium Container */}
        <div className="bg-[#080808] border border-white rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
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
            <div className="flex flex-col items-center text-center space-y-8 px-6 md:border-r border-white/10">
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
            <div className="flex flex-col items-center text-center space-y-8 px-6 md:border-r border-white/10">
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
            <div className="flex flex-col items-center text-center space-y-8 px-6 md:border-r border-white/10">
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
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-slow { animation: float 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 7s ease-in-out infinite; }
        .animate-bounce-delayed { animation: bounce-slow 7s ease-in-out infinite 2s; }
      `}</style>
      {/* Contact Section */}
      <section id="contact" className="max-w-[1400px] mx-auto px-8 py-32">
        <div className="bg-[#080808] border border-white/5 rounded-[4rem] p-12 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle Background Accent */}
          <div className="absolute top-0 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00d260]/20 to-transparent"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">

            {/* Left Column: Text Content */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-4 mt-7">
                <span className="text-[#00d260] font-bold text-sm  tracking-[0.2em] uppercase">GET IN TOUCH</span>
                <h2 className="text-2xl lg:text-3xl mt-8 font-bold leading-tight">
                  <span className="whitespace-nowrap ">Let's Start Your</span> <br />
                  <span className="text-[#00d260] whitespace-nowrap">Next Project</span>
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
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="bg-[#0f0f0f] border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-[#00d260]/30 transition-all text-sm w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="bg-[#0f0f0f] border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-[#00d260]/30 transition-all text-sm w-full"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Your Subject"
                  required
                  className="w-full bg-[#0f0f0f] border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-[#00d260]/30 transition-all text-sm"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows="4"
                  required
                  className="w-full bg-[#0f0f0f] border border-white/5 rounded-xl px-6 py-4 outline-none focus:border-[#00d260]/30 transition-all text-sm resize-none"
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
      <footer className="border-t border-white/5 bg-[#050505] py-8 mt-20">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <img src="/img.png" alt="We Are Creative Logo" className="h-16 w-auto object-contain" style={{ mixBlendMode: 'screen' }} />
            
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 We Are Creative. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00d260] hover:text-[#00d260] transition-colors bg-[#0a0a0a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00d260] hover:text-[#00d260] transition-colors bg-[#0a0a0a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* TikTok */}
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#00d260] hover:text-[#00d260] transition-colors bg-[#0a0a0a]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
