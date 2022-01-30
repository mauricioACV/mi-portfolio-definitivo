import SectionContentTitle from "./SectionContentTitle";
import CardProyectDetails from "./CardProyectDetails";
import {projects} from '../Data/projects.js';

export default function ProjectsSection() {
  return (
    <>
      <SectionContentTitle title="Proyectos" />
      <div className="cards-block3-container">
        {projects.map(project=>(
          <CardProyectDetails key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
