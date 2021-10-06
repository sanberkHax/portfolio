import Card from './Card';
import Button from './Button';
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h1>Projects</h1>
      <div className="projects-content">
        <div className="project-info-ctn">
          <div className="project-name-ctn">
            <h2>Project Name</h2>
            <Card>Project</Card>
          </div>
          <div className="project-description-ctn">
            <h2>Description</h2>
            <Card>Project Description</Card>
          </div>
          <div className="techstack-ctn">
            <h2>Tech Stack</h2>
          </div>
        </div>
        <div className="showcase-ctn">
          <h2>Showcase Video</h2>
          <div className="preview">Preview</div>
          <div className="btn-container">
            <Button type="button" class="repository-btn" text="Repository" />
            <Button type="button" class="live-btn" text="Live Site" />
          </div>
        </div>
      </div>
      <Button class="details-btn" text="Details" />
      <div className="arrow-ctn">
        <a href="#about">
          <i className="arrow"></i>
        </a>
      </div>
      <div className="skew-1"></div>
      <div className="skew-2"></div>
    </section>
  );
};

export default Projects;
