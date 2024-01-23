import SectionContentTitle from "./SectionContentTitle";

export default function SkillsSection() {
  return (
    <>
      <SectionContentTitle title="Habilidades" />
      <div className="content-section skills-style">
        <div className="item-container">
          <h3>Avanzado: Uso diario</h3>
          <ul className="style-content">
            <li>- Javascript ES6</li>
            <li>- Node Js</li>
            <li>- Nest Js</li>
            <li>- AWS</li>
            <li>- Postman</li>
            <li>- Visual Studio Code</li>
            <li>- GitLab</li>
            <li>- Git</li>
          </ul>
        </div>
        <div className="item-container">
          <h3>Productivo: Uso Periódico</h3>
          <ul className="style-content">
            <li>- Angular Js</li>
            <li>- React Js</li>
            <li>- Nest Testing</li>
            <li>- Mongo DB</li>
            <li>- Express Js</li>
            <li>- Notion</li>
          </ul>
        </div>
        <div className="item-container">
          <h3>Intermedio: Uso Esporádico</h3>
          <ul className="style-content">
            <li>- Jest Testing Library</li>
            <li>- Google Firebase</li>
            <li>- MariaDB - MYSQL</li>
          </ul>
        </div>
      </div>
      <SectionContentTitle title="Interés Personal" />
      <div className="content-section skills-style">
        <div className="item-container">
          <h3>Tecnologías de interés</h3>
          <ul className="style-content">
            <li>- React Native</li>
          </ul>
          <br/>
          <h3>Libros de interés</h3>
          <ul className="style-content">
            <li>- Structure & Interpretation of Computer Programs</li>
            <li>- Composing Software by Eric Elliott</li>
            <li>- Domain Modeling Made Functional by Scott Wlaschin</li>
          </ul>
        </div>
      </div>
    </>
  );
}
