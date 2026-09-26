import { useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { startSmoothScroll } from './lib/smoothScroll';
import Ambient from './components/Ambient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  useEffect(() => startSmoothScroll(), []);

  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Ambient />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </MotionConfig>
  );
}
