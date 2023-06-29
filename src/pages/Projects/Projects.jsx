import Sidebar from "../../components/Sidebar/Sidebar";
import { projectData } from "../../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="container">
      <div className="main-container-inner">
        <div className="left">
          <h2 className="heading">my projects.</h2>
        </div>
        <div className="right">
          <Sidebar className="nav-links-row" />
        </div>
      </div>
      <div className="projects">
        {projectData.map((project) => (
          // eslint-disable-next-line react/jsx-key
          <div className="project-card" key={project.id}>
            <img className="image" src={project.image} />
            <p>{project.title}</p>
            <p>{project.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
