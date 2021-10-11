import FadeInContainer from './FadeInContainer';
const projectsVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 2 },
};
const Projects = () => {
  return (
    <FadeInContainer
      variants={projectsVariants}
      id="projects"
      className="projects"
    >
      <h1>Projects</h1>
      <h2>Work in progress...</h2>
      {/* <Arrows href="#contact"></Arrows> */}
    </FadeInContainer>
  );
};

export default Projects;
