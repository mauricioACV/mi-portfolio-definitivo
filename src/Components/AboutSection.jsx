import SectionContentTitle from "./SectionContentTitle";
import "../styles-about.css";

export default function AboutSection() {
  return (
    <>
      <SectionContentTitle title="Sobre Mí" />
      <div className="content-section">
        <p className="style-content">
          Por lo general me llaman Mauro o Mau, y he tenido la oportunidad de
          participar en variados proyectos dentro del servicio público,
          liderando algunos de ellos. Me motiva aportar a lo largo de todo el
          proceso de construcción de software, colaborando en la definición de
          la problemática y determinación de sus causas directas, para
          finalmente desarrollar y ver implementada la solución final. <br />
          <br />
          Mis mayores logros en el desarrollo de aplicaciones son la
          construcción e implementación de una solución que actualmente se
          utiliza para evaluar la excepción de multas por razones geométricas en
          la construcción de caminos, y el desarrollo de un sistema de gestión
          de contratos de obras, ambos con alcance a nivel nacional. <br />
          <br />
          En mis años de experiencia, el trabajo en equipo ha sido fundamental
          para lograr los objetivos definidos por la institución. He tenido la
          oportunidad de ser líder de grupo e instructor de personal. Me gusta
          mucho ayudar a mis compañeros de equipo y aprender de ellos también,
          sobre todo en el estudio de la programación computacional. Me
          considero un profesional entusiasta y a la vez disciplinado. El
          aprendizaje constante y compartir conocimientos es algo que me gusta
          mucho, tanto en el ámbito profesional como personal.
        </p>
      </div>
    </>
  );
}
