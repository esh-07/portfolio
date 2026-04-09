import { NavLink } from 'react-router-dom';
import RBNavbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import ThemeToggle from './ThemeToggle';
import '../styles/navbar.css';

function Navbar({ theme, toggleTheme }) {
  return (
    <RBNavbar expand="lg" className="navbar-portfolio" sticky="top" role="navigation" aria-label="Main navigation">
      <Container fluid className="navbar-inner-portfolio">
        <RBNavbar.Brand as={NavLink} to="/" end className="navbar-logo">
          EC
        </RBNavbar.Brand>
        <RBNavbar.Toggle aria-controls="main-navbar-nav" aria-label="Toggle navigation menu" />
        <RBNavbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto navbar-nav-portfolio align-items-lg-center">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/projects">
              Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/guestbook">
              Guestbook
            </Nav.Link>
            <div className="navbar-theme-wrap">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </Nav>
        </RBNavbar.Collapse>
      </Container>
    </RBNavbar>
  );
}

export default Navbar;
