import Button from './Button';
import Card from './Card';
const Project = () => {
  return (
    <div className="project-ctn">
      <div className="project-content">
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
            <p>React</p>
            <p>GraphQl</p>
            <p>Redux</p>
          </div>
        </div>
        <div className="showcase-ctn">
          <h2>Showcase Video</h2>
          <div className="preview">Preview</div>
          <div className="btn-container">
            <Button type="button" class="repo-btn" text="Repository" />
            <Button type="button" class="live-btn" text="Live Site" />
          </div>
        </div>
      </div>
      <Button class="details-btn" text="Details" />
    </div>
  );
};

export default Project;
