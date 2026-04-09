import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import '../styles/projects.css';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <Modal
      show
      onHide={onClose}
      size="lg"
      centered
      className="project-bs-modal"
      contentClassName="project-modal-content"
      aria-labelledby="project-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="project-modal-title">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="pt-0">
        {project.images && project.images.length > 0 && (
          <div className="modal-images mb-3">
            {project.images.map((img, idx) => (
              <img key={idx} src={img} alt={`${project.title} screenshot ${idx + 1}`} />
            ))}
          </div>
        )}

        <p className="modal-category mb-3">{project.category}</p>
        <p className="modal-description">{project.fullDescription}</p>

        <p className="modal-tech-title">Tech Stack</p>
        <div className="modal-tech-tags mb-4">
          {project.techStack.map((tech) => (
            <Badge key={tech} bg="secondary" pill className="modal-tech-badge me-1 mb-1">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="modal-links d-flex flex-wrap gap-2">
          {project.github && (
            <Button
              variant="outline-primary"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              as="a"
            >
              GitHub →
            </Button>
          )}
          {project.liveDemo && (
            <Button variant="primary" href={project.liveDemo} target="_blank" rel="noopener noreferrer" as="a">
              Live Demo →
            </Button>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ProjectModal;
