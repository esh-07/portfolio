import { useEffect, useRef, useState } from 'react';

// Session-once boot screen: counter runs 0→100, then the panel wipes up.
// onExit fires as the wipe starts (hero animations begin underneath);
// onDone fires when the wipe finishes (component unmounts).
function Preloader({ onExit, onDone }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);
  const callbacks = useRef({ onExit, onDone });

  useEffect(() => {
    callbacks.current = { onExit, onDone };
  });

  useEffect(() => {
    const start = performance.now();
    const duration = 900;
    let raf = 0;
    let exitTimer = 0;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setExiting(true);
        callbacks.current.onExit();
        exitTimer = window.setTimeout(() => callbacks.current.onDone(), 650);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
    };
  }, []);

  return (
    <div className={`boot${exiting ? ' boot--exit' : ''}`} aria-hidden="true">
      <div className="boot__inner">
        <p className="boot__name">Eshaan Chaturvedi</p>
        <p className="boot__count">{String(count).padStart(3, '0')}</p>
      </div>
    </div>
  );
}

export default Preloader;
