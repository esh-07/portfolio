import { useState } from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Toolkit from './components/Toolkit.jsx';
import Contact from './components/Contact.jsx';
import CommandPalette from './components/CommandPalette.jsx';
import useTheme from './hooks/useTheme.js';

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="sheet">
      <a className="skip-link" href="#main">
        SKIP TO CONTENT
      </a>
      <Nav theme={theme} toggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Experience />
        <Projects />
        <Toolkit />
        <Contact />
      </main>
      <footer className="bfooter">
        <span>(C) 2026 ESHAAN CHATURVEDI · NO COOKIES · NO TRACKING · SELF-HOSTED FONTS</span>
        <span>LAST_DEPLOY: {__BUILD_DATE__}</span>
      </footer>
      <CommandPalette
        open={paletteOpen}
        onOpen={() => setPaletteOpen(true)}
        onClose={() => setPaletteOpen(false)}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}

export default App;
