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
        <div className="home-links">
          <a
            href="https://github.com/esh-07"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link primary"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/Eshaan-Chaturvedi"
            target="_blank"
            rel="noopener noreferrer"
            className="home-link secondary"
          >
            LinkedIn
          </a>
          <a
            href="mailto:eshaanchaturvedi@gmail.com"
            className="home-link secondary"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
