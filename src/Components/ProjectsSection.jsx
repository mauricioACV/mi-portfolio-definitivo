import SectionContentTitle from "./SectionContentTitle";
import CardProyectDetails from "./CardProyectDetails";

export default function ProjectsSection() {
  return (
    <>
      <SectionContentTitle title="Proyectos" />
      <div className="cards-block3-container">
        <CardProyectDetails />
        <CardProyectDetails />
        <CardProyectDetails />
        <CardProyectDetails />
        <CardProyectDetails />
        <CardProyectDetails />
        <CardProyectDetails />
        <CardProyectDetails />
      </div>
    </>
  );
}
