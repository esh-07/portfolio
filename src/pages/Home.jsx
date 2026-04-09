import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import '../styles/home.css';

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="home-greeting">Hello, I&#39;m</p>
        <h1 className="home-name">Eshaan Chaturvedi</h1>
        <p className="home-tagline">
          Computer Science &amp; Data Science @ UW–Madison.
          Building software that scales — from low-latency systems to full-stack applications.
        </p>
        <Stack direction="horizontal" gap={3} className="home-links flex-wrap justify-content-center">
          <Button
            variant="primary"
            href="https://github.com/esh-07"
            target="_blank"
            rel="noopener noreferrer"
            as="a"
            className="home-btn-primary"
          >
            GitHub
          </Button>
          <Button
            variant="outline-primary"
            href="https://www.linkedin.com/in/eshaan-chaturvedi-9718851a1"
            target="_blank"
            rel="noopener noreferrer"
            as="a"
            className="home-btn-outline"
          >
            LinkedIn
          </Button>
          <Button
            variant="outline-secondary"
            href="mailto:eshaanchaturvedi@gmail.com"
            as="a"
            className="home-btn-outline"
          >
            Email Me
          </Button>
        </Stack>
      </div>
    </section>
  );
}

export default Home;
