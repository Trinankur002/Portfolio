import './App.css'
import "tailwindcss";
import { ProjectList } from './data/ProjectList';
import Projectcard from './components/Projectcard';
import ContactForm from './components/ContactForm';
import SkillsSection from './components/SkillsSection';
import TypewriterText from './components/TypewriterText';
import { AboutMe } from './data/AboutMe';
import { useEffect, useRef, useState } from 'react';

function App() {
  const dotsRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const aboutSectionRef = useRef<HTMLElement>(null);
  const animationTimeout = useRef<number | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [startTypewriter, setStartTypewriter] = useState(false);

  // Reset animation state on page load/reload
  useEffect(() => {
    setStartTypewriter(false);
    // Remove any existing animation classes
    if (aboutSectionRef.current) {
      aboutSectionRef.current.classList.remove('typewriter-animated');
    }
    if (sectionRef.current) {
      sectionRef.current.classList.remove('animated');
    }
  }, []);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!sectionRef.current?.classList.contains('animated')) {
              animateDots();
              sectionRef.current?.classList.add('animated');
            }
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    const aboutObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (!aboutSectionRef.current?.classList.contains('typewriter-animated')) {
              setStartTypewriter(true);
              aboutSectionRef.current?.classList.add('typewriter-animated');
            }
          }
        });
      },
      {
        threshold: 0.3
      }
    );

    if (sectionRef.current) {
      heroObserver.observe(sectionRef.current);
    }

    if (aboutSectionRef.current) {
      aboutObserver.observe(aboutSectionRef.current);
    }

    return () => {
      heroObserver.disconnect();
      aboutObserver.disconnect();
      if (animationTimeout.current) {
        clearTimeout(animationTimeout.current);
      }
    };
  }, []);

  const animateDots = () => {
    if (!dotsRef.current) return;

    const dots = dotsRef.current.querySelectorAll('span');
    dots.forEach((dot, index) => {
      (dot as HTMLElement).style.opacity = '0';
      (dot as HTMLElement).style.transform = 'translateY(0)';
      (dot as HTMLElement).style.animationDelay = `${index * 0.4}s`;
      (dot as HTMLElement).style.animationName = 'dotAppearInline';
      (dot as HTMLElement).style.animationDuration = '0.5s';
      (dot as HTMLElement).style.animationTimingFunction = 'ease-out';
      (dot as HTMLElement).style.animationFillMode = 'forwards';
    });

    const totalAppearTime = 0.4 * (dots.length - 1) * 1000 + 500;

    animationTimeout.current = window.setTimeout(() => {

      const lastDot = dots[dots.length - 1] as HTMLElement;
      if (lastDot) {
        lastDot.style.animationName = 'blinkInline';
        lastDot.style.animationDuration = '1s';
        lastDot.style.animationIterationCount = 'infinite';
      }
    }, totalAppearTime);
  };



  return (
    <div className="bg-gray-900 text-white min-h-screen font-mono max-w-dvw ">
      {/* Header */}
      <header className="sticky top-0 py-4 px-4 sm:px-8 flex justify-between items-center border-b border-gray-700 bg-gray-900/95 backdrop-blur-sm z-50 transition-all duration-300">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden ring-2 ring-teal-400/30">
            <img
              src="/profile-photo.jpg"
              alt={`${AboutMe.name} - Profile Photo`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to initials if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback initials (hidden by default) */}
            <div
              className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center"
              style={{ display: 'none' }}
            >
              <span className="text-sm font-bold text-white">
                {AboutMe.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          <h1 className="text-xl font-bold">{AboutMe.name}</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#about"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-teal-400 focus:outline-none focus:text-teal-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-8">
          <nav className="flex-1">
            <ul className="flex flex-col space-y-6 text-center">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium text-xl block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium text-xl block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium text-xl block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium text-xl block py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl">
        {/* Hero Section */}
        <section ref={sectionRef} className="py-12 sm:py-16 md:py-24 px-4 sm:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Profile Image */}
            <div className="mb-6 sm:mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden shadow-lg ring-4 ring-teal-400/30">
                <img
                  src="/profile-photo.jpg"
                  alt={`${AboutMe.name} - Profile Photo`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback initials (hidden by default) */}
                <div
                  className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center"
                  style={{ display: 'none' }}
                >
                  <span className="text-2xl sm:text-4xl font-bold text-white">
                    {AboutMe.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Hello, I'm {AboutMe.name}
              <span ref={dotsRef} className="inline-block ml-2">
                <span className="dot" style={{ display: 'inline-block' }}>.</span>
                <span className="dot" style={{ display: 'inline-block' }}>.</span>
                <span className="dot last-dot" style={{ display: 'inline-block' }}>.</span>
              </span>
            </h1>

            {/* Role & Description */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-400 mb-3 sm:mb-4">
                Backend & Application Developer
              </h2>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                Passionate about building efficient and reliable backend systems.
                I transform ideas into reality through clean code and innovative solutions.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Get In Touch
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="hidden sm:inline">Download Resume</span>
                <span className="sm:hidden">Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 sm:space-x-6">
              <a
                href={AboutMe.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {AboutMe.linkdin && (
                <a
                  href={AboutMe.linkdin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}

              <a
                href={`mailto:${AboutMe.email}`}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-300 transform hover:scale-110"
                aria-label="Email Contact"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutSectionRef} id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 bg-gray-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white">About Me</h3>
            <div className="max-w-3xl mx-auto">
              <div className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0 min-h-[8rem] flex items-start justify-center">
                <div className="terminal-window rounded-lg p-0 max-w-full w-full sm:max-w-3xl">
                  <div className="terminal-header px-4 py-3 rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        <div className="terminal-dot w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="terminal-dot w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="terminal-dot w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <span className="text-sm text-gray-400 font-mono">~/about-me</span>
                      <div className="w-12"></div> {/* Spacer for centering */}
                    </div>
                  </div>
                  <div className="p-4 sm:p-6 text-left bg-black/20 rounded-b-lg">
                    <div className="mb-3">
                      <span className="text-teal-400 font-mono">$ </span>
                      <span className="text-gray-300 font-mono">cat about.txt</span>
                    </div>
                    <div className="text-gray-300 font-mono text-sm sm:text-base leading-relaxed min-h-[4rem] overflow-hidden">
                      <TypewriterText
                        text={AboutMe.about}
                        speed={30}
                        startDelay={1500}
                        showCursor={true}
                        cursorChar="|"
                        className=""
                        startAnimation={startTypewriter}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Reliable</h4>
                  <p className="text-sm sm:text-base text-gray-400">Building robust and dependable systems</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Efficient</h4>
                  <p className="text-sm sm:text-base text-gray-400">Optimized solutions for better performance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">Innovative</h4>
                  <p className="text-sm sm:text-base text-gray-400">Creative solutions to complex problems</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* Projects Section */}
        <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h3>
              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
                A showcase of my recent work spanning mobile applications, backend systems, and web development
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <div className="inline-flex items-center justify-center bg-gray-700 rounded-full px-4 py-1 text-sm text-teal-400 font-medium">
                  {ProjectList.filter(p => p.status === 'completed').length} Completed
                </div>
                <div className="inline-flex items-center justify-center bg-gray-700 rounded-full px-4 py-1 text-sm text-yellow-400 font-medium">
                  {ProjectList.filter(p => p.status === 'in-progress').length} In Progress
                </div>
                <div className="inline-flex items-center justify-center bg-gray-700 rounded-full px-4 py-1 text-sm text-gray-400 font-medium">
                  {ProjectList.length} Total Projects
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setSelectedCategory('frontend')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'frontend'
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Frontend
              </button>
              <button
                onClick={() => setSelectedCategory('backend')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'backend'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Backend
              </button>
              <button
                onClick={() => setSelectedCategory('mobile')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'mobile'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Mobile
              </button>
              <button
                onClick={() => setSelectedCategory('fullstack')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'fullstack'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Full Stack
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {(showAllProjects
                ? ProjectList
                : ProjectList.slice(0, 4))
                .filter(project => selectedCategory === 'all' || project.category === selectedCategory)
                .map((project, index) => (
                <div
                  key={index}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Projectcard {...project} />
                </div>
              ))}
            </div>

            {/* Show More/Less Button */}
            {(() => {
              const filteredProjects = ProjectList.filter(project =>
                selectedCategory === 'all' || project.category === selectedCategory
              );
              return filteredProjects.length > 4 && (
                <div className="text-center mt-8 sm:mt-10">
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className={`px-6 sm:px-8 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 mx-auto text-sm sm:text-base ${
                      showAllProjects
                        ? 'bg-gray-700 text-teal-400 border border-teal-400 hover:bg-gray-600'
                        : 'bg-teal-600 hover:bg-teal-700 text-white'
                    }`}
                  >
                    {showAllProjects ? (
                      <>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        <span className="hidden sm:inline">Show Less</span>
                        <span className="sm:hidden">Less</span>
                        <span className="ml-1 bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                          {filteredProjects.length}/{filteredProjects.length}
                        </span>
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="hidden sm:inline">Show All {selectedCategory === 'all' ? 'Projects' : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</span>
                        <span className="sm:hidden">Show All</span>
                        <span className="ml-1 bg-teal-500 text-white text-xs px-2 py-1 rounded-full">
                          +{filteredProjects.length - 4} more
                        </span>
                      </>
                    )}
                  </button>
                </div>
              );
            })()}

          </div>
        </section>
      </div>



      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Get In Touch</h3>
          <p className="text-sm sm:text-base text-gray-400 text-center mb-6 sm:mb-8 px-4 sm:px-0">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
          <ContactForm recipientEmail={AboutMe.email} />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 sm:py-6 px-4 sm:px-8 text-center border-t border-gray-700">
        <p className="text-sm sm:text-base text-gray-500">© {new Date().getFullYear()} {AboutMe.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;