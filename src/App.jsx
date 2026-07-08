import { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Toolkit from './components/Toolkit.jsx';
import Contact from './components/Contact.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import Preloader from './components/Preloader.jsx';
import Cursor from './components/Cursor.jsx';
import useReveal from './hooks/useReveal.js';
import useTheme from './hooks/useTheme.js';
import useLenis from './hooks/useLenis.js';

const shouldBoot = () =>
  !sessionStorage.getItem('booted') &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [booting, setBooting] = useState(shouldBoot);
  const { theme, toggleTheme } = useTheme();
  useLenis();
  useReveal();

  // Lock scroll during boot; flag is-booted so load-in animations start
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = booting ? 'hidden' : '';
    if (!booting) root.classList.add('is-booted');
  }, [booting]);

  return (
    <>
      {booting && (
        <Preloader
          onExit={() => document.documentElement.classList.add('is-booted')}
          onDone={() => {
            sessionStorage.setItem('booted', '1');
            setBooting(false);
          }}
        />
      )}
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Cursor />
      <Nav theme={theme} toggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <Experience />
        <Projects />
        <Toolkit />
        <Contact />
      </main>
      <footer className="footer">
        <div className="footer__inner container">
          <p>© {new Date().getFullYear()} Eshaan Chaturvedi</p>
          <p className="footer__time">Madison, WI</p>
        </div>
      </footer>
      <CommandPalette
        open={paletteOpen}
        onOpen={() => setPaletteOpen(true)}
        onClose={() => setPaletteOpen(false)}
        toggleTheme={toggleTheme}
      />
    </>
  );
}

export default App;
