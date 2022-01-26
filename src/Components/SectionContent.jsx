import CardProyectDetails from "./CardProyectDetails";

export default function SectionContent() {
  return (
    <section class="works-section overlap">
      <div class="cards-container">
        <CardsContainerTitle title="Proyectos"/>
        <div class="cards-block3-container">
          <CardProyectDetails />
          <CardProyectDetails />
          <CardProyectDetails />
        </div>
        <div class="cards-block3-container">
          <CardProyectDetails />
          <CardProyectDetails />
          <CardProyectDetails />
        </div>
        <div class="cards-block3-container">
          <CardProyectDetails />
          <CardProyectDetails />
        </div>
      </div>
    </section>
  );
}

function CardsContainerTitle({title}) {
  return (
    <div class="section-title-container">
      <p class="tag-section-title">&#60;&#62;</p>
      <h2 class="section-title">{title}</h2>
      <p class="tag-section-title">&#60;&#47;&#62;</p>
    </div>
  );
};