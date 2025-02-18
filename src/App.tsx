import './App.css'
import "tailwindcss";
import { ProjectList } from './data/ProjectList';
import Projectcard from './components/Projectcard';
import { AboutMe } from './data/AboutMe';
import React, { useEffect, useRef } from 'react';

function App() {
  const dotsRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const animationTimeout = useRef<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
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
    <div className="bg-gray-900 text-white min-h-screen font-mono">
      {/* Header */}
      <header className="sticky top-0 py-6 px-8 flex justify-between items-center border-b border-gray-700 bg-gray-900 z-10">
        <h1 className="text-xl font-bold">{AboutMe.name}</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <div className=' **mx-auto max-w-screen-xl** ' >
        {/* Hero Section */}
        <section ref={sectionRef} className="py-20 text-center">
          <h2 className="text-5xl font-bold mb-4">
            Hello, I'm {AboutMe.name}
            <span ref={dotsRef} className="inline-block ml-2">
              <span className="dot" style={{ display: 'inline-block' }}>.</span>
              <span className="dot" style={{ display: 'inline-block' }}>.</span>
              <span className="dot last-dot" style={{ display: 'inline-block' }}>.</span>
            </span>
          </h2>
          <p className="text-xl text-gray-400">Backend & Application Developer</p>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-8">
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <p className="text-gray-400">
            {AboutMe.about}
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-8">
          <h3 className="text-3xl font-bold mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {ProjectList.map((project, index) => {
              return <Projectcard key={index} {...project} />
            })}
          </div>
        </section>
      </div>



      {/* Contact Section */}
      <section id="contact" className="py-20 px-8">
        <h3 className="text-3xl font-bold mb-6">Contact</h3>
        <p className="text-gray-400">{`email: ` + `${AboutMe.email}`}</p>
        {/* You could add a contact form here */}
      </section>

      {/* Footer */}
      <footer className="py-6 px-8 text-center border-t border-gray-700">
        <p className="text-gray-500">© {new Date().getFullYear()} {AboutMe.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;