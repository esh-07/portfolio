import { useEffect } from 'react';
import Lenis from 'lenis';

let lenisInstance = null;

// Programmatic scroll that routes through Lenis when it's driving the page,
// with a native fallback (reduced motion / teardown).
export const scrollToTarget = (target) => {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  if (lenisInstance) lenisInstance.scrollTo(el, { offset: -96 });
  else el.scrollIntoView({ block: 'start' });
};

export default function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => 1 - Math.pow(1 - t, 4),
    });
    lenisInstance = lenis;

    let raf = requestAnimationFrame(function loop(time) {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    });

    // Route same-page anchor clicks through Lenis
    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor || anchor.hash.length < 2) return;
      const el = document.querySelector(anchor.hash);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -96 });
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('click', onClick);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
