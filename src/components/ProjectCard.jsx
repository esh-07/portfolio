import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function ProjectCard({ project, onClick }) {
  return (
    <Card
      className="project-card h-100"
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <Card.Body className="project-card-body d-flex flex-column">
        <div className="project-card-header">
          <Card.Title as="h3" className="project-card-title h6 mb-0">
            {project.title}
          </Card.Title>
          <Badge
            bg="primary"
            pill
            className="project-card-category-badge text-uppercase"
          >
            {project.category}
          </Badge>
        </div>
        <Card.Text className="project-card-desc flex-grow-1">{project.shortDescription}</Card.Text>
        <div className="project-card-tags">
          {project.techStack.map((tech) => (
            <span className="project-card-tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
