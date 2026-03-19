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
          I&#39;m Eshaan, a junior at the University of Wisconsin–Madison studying Computer Science 
          and Data Science. I&#39;m passionate about building software that solves real problems — 
          whether that&#39;s a clean web app, a performant backend system, or a machine learning pipeline. 
          Outside of code, you&#39;ll find me exploring new music, playing basketball, or diving into 
          a good book.
        </p>

        <div className="about-section fade-in">
          <h2 className="about-section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">Meta</p>
              <p className="timeline-role">Software Engineering Intern</p>
              <p className="timeline-date">Summer 2025</p>
              <p className="timeline-desc">
                Worked on infrastructure tooling for internal developer platforms, 
                improving build pipeline efficiency and developer experience.
              </p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">Cohere</p>
              <p className="timeline-role">Machine Learning Intern</p>
              <p className="timeline-date">Summer 2024</p>
              <p className="timeline-desc">
                Contributed to NLP model evaluation and fine-tuning pipelines. 
                Built internal dashboards for monitoring model performance metrics.
              </p>
            </div>
            <div className="timeline-item fade-in">
              <div className="timeline-dot" />
              <p className="timeline-company">PlayStation</p>
              <p className="timeline-role">Software Engineering Intern</p>
              <p className="timeline-date">Summer 2023</p>
              <p className="timeline-desc">
                Developed features for an internal content management tool used by game studios. 
                Worked with React, Node.js, and PostgreSQL.
              </p>
            </div>
          </div>
        </div>

        <div className="about-section fade-in">
          <h2 className="about-section-title">Skills</h2>
          <div className="skills-grid stagger-children">
            <div className="skill-category fade-in">
              <p className="skill-category-title">Languages</p>
              <div className="skill-tags">
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">C</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>
            <div className="skill-category fade-in">
              <p className="skill-category-title">Frontend</p>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Vue.js</span>
                <span className="skill-tag">CSS Modules</span>
                <span className="skill-tag">Bootstrap</span>
              </div>
            </div>
            <div className="skill-category fade-in">
              <p className="skill-category-title">Backend &amp; Tools</p>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Flask</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
              </div>
            </div>
            <div className="skill-category fade-in">
              <p className="skill-category-title">Data &amp; ML</p>
              <div className="skill-tags">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">scikit-learn</span>
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Matplotlib</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
