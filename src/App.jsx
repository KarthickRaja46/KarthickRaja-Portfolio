import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'motion/react';
import { setScrollLocked, startSmoothScroll } from './lib/smoothScroll';
import { IntroContext, shouldPlayIntro } from './lib/intro';
import Ambient from './components/Ambient';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Stats from './components/Stats';
import Process from './components/Process';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [introDone, setIntroDone] = useState(() => !shouldPlayIntro());
  const finishIntro = useCallback(() => setIntroDone(true), []);

  useEffect(() => startSmoothScroll(), []);

  // Hold the page still while the intro plays.
  useEffect(() => {
    setScrollLocked(!introDone);
    document.body.style.overflow = introDone ? '' : 'hidden';
  }, [introDone]);

  return (
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={introDone}>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>

        <AnimatePresence>{!introDone && <Preloader key="intro" onDone={finishIntro} />}</AnimatePresence>

        <Ambient />
        <Navbar />
        <main id="main">
          <Hero />
          <Marquee />
          <About />
          <Stats />
          <Process />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
      </IntroContext.Provider>
    </MotionConfig>
  );
}
