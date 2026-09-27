import { createContext, useContext } from 'react';

const INTRO_KEY = 'kr-intro-seen';

/** The cinematic intro plays once per browser session, never for reduced-motion users. */
export function shouldPlayIntro() {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  try {
    return !sessionStorage.getItem(INTRO_KEY);
  } catch {
    return false;
  }
}

export function markIntroSeen() {
  try {
    sessionStorage.setItem(INTRO_KEY, '1');
  } catch {
    // Storage unavailable: the intro may simply replay next visit.
  }
}

/** True once the intro has finished (or was skipped) — hero entrance animations wait for it. */
export const IntroContext = createContext(true);
export const useIntroDone = () => useContext(IntroContext);
