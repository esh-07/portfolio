import { useState, useMemo } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import projects, { categories, allTechStacks } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import '../styles/projects.css';

function Projects() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTech, setActiveTech] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleTech = (tech) => {
    setActiveTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSearch('');
    setActiveCategory('All');
    setActiveTech([]);
  };

  const hasFilters = search || activeCategory !== 'All' || activeTech.length > 0;

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        !search ||
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        project.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;

      const matchesTech =
        activeTech.length === 0 ||
        activeTech.every((tech) => project.techStack.includes(tech));

      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [search, activeCategory, activeTech]);

  return (
    <section className="projects">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A collection of things I&#39;ve built. Filter by category or tech stack to explore.
        </p>

        <div className="projects-controls">
          <Form.Group className="search-bar mb-3" controlId="projects-search">
            <Form.Label className="visually-hidden">Search projects</Form.Label>
            <InputGroup>
              <InputGroup.Text aria-hidden="true">🔍</InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <div className="filter-section">
            <span className="filter-label">Category</span>
            <div className="filter-chips">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <span className="filter-label">Tech Stack</span>
            <div className="filter-chips">
              {allTechStacks.map((tech) => (
                <button
                  key={tech}
                  className={`filter-chip ${activeTech.includes(tech) ? 'active' : ''}`}
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {hasFilters && (
            <Button variant="outline-danger" size="sm" className="clear-filters-btn mb-2" onClick={clearFilters}>
              Clear All Filters
            </Button>
          )}
        </div>

        <div className="projects-grid">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))
          ) : (
            <p className="projects-empty">
              No projects match your filters. Try adjusting your search or filters.
            </p>
          )}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

export default Projects;
