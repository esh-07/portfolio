import { useEffect } from 'react';

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">✕</button>

        {project.images && project.images.length > 0 && (
          <div className="modal-images">
            {project.images.map((img, idx) => (
              <img key={idx} src={img} alt={`${project.title} screenshot ${idx + 1}`} />
            ))}
          </div>
        )}

        <div className="modal-body">
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-category">{project.category}</p>
          <p className="modal-description">{project.fullDescription}</p>

          <p className="modal-tech-title">Tech Stack</p>
          <div className="modal-tech-tags">
            {project.techStack.map((tech) => (
              <span className="modal-tech-tag" key={tech}>{tech}</span>
            ))}
          </div>

          <div className="modal-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link github-link">
                GitHub →
              </a>
            )}
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="modal-link demo-link">
                Live Demo →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
