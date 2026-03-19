import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          EC
        </NavLink>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <ul className="navbar-links">
            <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
            <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
            <li><NavLink to="/guestbook" onClick={closeMenu}>Guestbook</NavLink></li>
          </ul>
          <div className="navbar-right">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
