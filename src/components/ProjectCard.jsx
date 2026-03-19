function ProjectCard({ project, onClick }) {
  return (
    <article className="project-card" onClick={onClick} tabIndex={0} role="button"
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick(); }}
    >
      <div className="project-card-header">
        <h3 className="project-card-title">{project.title}</h3>
        <span className="project-card-category">{project.category}</span>
      </div>
      <p className="project-card-desc">{project.shortDescription}</p>
      <div className="project-card-tags">
        {project.techStack.map((tech) => (
          <span className="project-card-tag" key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
