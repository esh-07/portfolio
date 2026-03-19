import { useEffect, useRef } from 'react';
import '../styles/about.css';

function About() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="about">
      <div className="container">
        <h1 className="page-title fade-in">About Me</h1>
        <p className="about-intro fade-in">
          I&#39;m Eshaan — a junior at UW–Madison studying Computer Science and Data Science.
          I&#39;ve interned at companies ranging from startups to big tech, working across
          infrastructure, ML systems, and full-stack development. I enjoy building things
          that are fast, reliable, and actually useful.
        </p>

        <div className="about-section fade-in">
          <h2 className="about-section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">Snowflake</p>
              <p className="timeline-role">Incoming Software Engineer Intern</p>
              <p className="timeline-date">Fall 2026</p>
              <p className="timeline-desc">
                Core infrastructure team working on the datalake platform.
              </p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">Meta</p>
              <p className="timeline-role">Incoming Production Engineer Intern</p>
              <p className="timeline-date">Summer 2026</p>
              <p className="timeline-desc">
                Production engineering focused on infrastructure reliability and performance.
              </p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">Cohere</p>
              <p className="timeline-role">Software Engineer Intern</p>
              <p className="timeline-date">2025 – 2026</p>
              <p className="timeline-desc">
                Worked on the foundational LLM inference team — built benchmarking
                infrastructure, automated deployment pipelines, and performance monitoring systems.
              </p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">PlayStation (Sony Interactive Entertainment)</p>
              <p className="timeline-role">Software Engineer Intern</p>
              <p className="timeline-date">Summer 2025</p>
              <p className="timeline-desc">
                Developer infrastructure team — built CI/CD pipelines and automated release
                systems used across the organization.
              </p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">RIPPLR</p>
              <p className="timeline-role">Software Engineer Intern</p>
              <p className="timeline-date">2024</p>
              <p className="timeline-desc">
                Built real-time dashboards and high-performance backend systems
                with a focus on low-latency data processing.
              </p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">Infosys</p>
              <p className="timeline-role">Software Engineer Intern</p>
              <p className="timeline-date">Late 2023</p>
              <p className="timeline-desc">
                Developed web applications and REST APIs for fintech use cases.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section fade-in">
          <h2 className="about-section-title">Education</h2>
          <div className="education-card fade-in">
            <p className="timeline-company">University of Wisconsin–Madison</p>
            <p className="timeline-role">B.S. in Computer Science &amp; Data Science</p>
            <p className="timeline-date">Expected May 2027 &nbsp;·&nbsp; 3.9 / 4.0 GPA</p>
            <p className="timeline-desc">
              Coursework: Data Structures &amp; Algorithms, OOP, Linear Algebra,
              Artificial Intelligence, Machine Learning, Computer Systems, Advanced Statistics
            </p>
          </div>
        </div>

        <div className="about-section fade-in">
          <h2 className="about-section-title">Skills</h2>
          <div className="skills-grid stagger-children">
            <div className="skill-category fade-in">
              <p className="skill-category-title">Languages</p>
              <div className="skill-tags">
                <span className="skill-tag">C++</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">Go</span>
                <span className="skill-tag">R</span>
              </div>
            </div>
            <div className="skill-category fade-in">
              <p className="skill-category-title">Frontend</p>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">HTML/CSS</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">WebRTC</span>
              </div>
            </div>
            <div className="skill-category fade-in">
              <p className="skill-category-title">Backend &amp; Infra</p>
              <div className="skill-tags">
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Redis</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">GitHub Actions</span>
              </div>
            </div>
            <div className="skill-category fade-in">
              <p className="skill-category-title">Data &amp; ML</p>
              <div className="skill-tags">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">SciPy</span>
                <span className="skill-tag">Pandas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
