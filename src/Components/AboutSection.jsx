import SectionContentTitle from "./SectionContentTitle";
import "../styles-about.css";

export default function AboutSection() {
  const objFigBike = {
    img1: {
      src: require("../imgs/png/bici1.png"),
      title: "Componentes de mí actual bicicleta",
    },
    img2: {
      src: require("../imgs/png/bici2.png"),
      title: "Mí actual bicicleta rodando (yo, sano y salvo)",
    },
  };

  const objFigTattoo = {
    img1: {
      src: require("../imgs/png/tattoo1.png"),
      title: "Plantilla presentada en piel sintética",
    },
    img2: {
      src: require("../imgs/png/tattoo2.png"),
      title: "Tatuaje terminado",
    },
  };

  const objFigGamer = {
    img1: {
      src: require("../imgs/png/arcade1.png"),
      title: "Pedestal y Raspberry Pi Model B",
    },
    img2: {
      src: require("../imgs/png/arcade2.png"),
      title: "Disfrutando un buen juego",
    },
  };

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
          sobre todo en el estudio de la programación computacional. <br />
          <br />
          Me considero un profesional entusiasta y comprometido. El aprendizaje
          constante y compartir conocimientos es algo que me gusta mucho, tanto
          en el ámbito profesional como personal.
        </p>
      </div>
      <SectionContentTitle title="Mí experiencia" />
      <div className="content-section">
        <p className="style-content exp-title">
          Web Developer- Subdir. de Obras Vialidad M.O.P.
        </p>
        <p className="style-content">Dic. 2019 – actualidad</p>
        <p className="style-content task-title">
          Responsable de implementar soluciones de software en procesos de
          gestión del Departamento de Contratos a nivel Nacional. Esta etapa fue
          un gran paso profesional, ya que me ha permitido participar
          activamente durante todo el ciclo de planificación e implementación de
          proyectos.
        </p>
        <p className="style-content task-title func-title">
          Principales funciones:
        </p>
        <ul className="task-list">
          <li>Desarrollo Front-End.</li>
          <li>Desarrollo Back-end.</li>
          <li>Gestión de Proyecto.</li>
          <li>
            Integración de servicios Institucionales (Alfresco, WebServices,
            interoperabilidad entre sistemas).
          </li>
          <li>Base de datos Oracle 11g.</li>
        </ul>
      </div>
      <div className="content-section">
        <p className="style-content exp-title">
          Profesional TI - Laboratorio de Vialidad M.O.P.
        </p>
        <p className="style-content">2009 – 2019</p>
        <p className="style-content task-title">
          Periodo de mucho aprendizaje, crecimiento y trabajo en equipo, en
          donde tuve la oportunidad de ser instructor de personal y de
          estudiantes externos, descubrí mi vocación de enseñar y también
          aprender de mis compañeros de equipo.
        </p>
        <p className="style-content task-title func-title">
          Principales funciones:
        </p>
        <ul className="task-list">
          <li>
            Desarrollo de interfaces de usuario para aplicación de escritorio y
            web.
          </li>
          <li>Gestión de Proyecto.</li>
          <li>
            Líder de equipo campañas de operación y mediciones con instrumentos
            de laboratorio (control e investigación).
          </li>
          <li>
            Actualización y mantención de rutinas embebidas en
            microcontroladores de equipos de medición.
          </li>
          <li>Administración Web de Portal Sitios SharePoint (Colabora).</li>
        </ul>
      </div>
      <SectionContentTitle title="Pasatiempos" />
      <div className="content-section">
        <p className="style-content">
          Mi gran pasión son las bicicletas, es mi medio de transporte preferido y
          más utilizado, me gusta conocer todo sobre ellas, de hecho, aprendí
          sobre armado y mecánica participando de un grupo con el que
          practicamos por más 3 años descenso en cerro (downhill). Con esta
          primera experiencia, obtuve las habilidades necesarias para poder
          obtener componentes de una bicicleta por separado y armarla
          completamente. De esta forma es que he tenido la oportunidad probar
          distintas disciplinas en el ciclismo aficionado, como bicicletas de pista
          y actualmente utilizo una de tipo ruta. Disfruto mucho el desafío que
          involucra armar una bicicleta y de hacerlo correctamente para sufrir
          accidentes al momento de probarla en terreno.
        </p>
        <AboutFigureContainer objFigure={objFigBike} />
      </div>
      <div className="content-section">
        <p className="style-content">
          Otro pasatiempo que disfruto mucho son los tatuajes. El intentar hacer
          un buen dibujo (aunque considero que me falta práctica), la
          concentración que se requiere para aplicar correctamente técnicas para
          trazar líneas y para saturar de color con una maquina alguna zona en
          específico, sumado a un ambiente con buena música y haciendo algo que
          me gusta, es algo que me relaja mucho.
        </p>
        <AboutFigureContainer objFigure={objFigTattoo} />
      </div>
      <div className="content-section">
        <p className="style-content">
          Por último quiero mostrar mi afición por los video juegos arcade. Esto
          es algo que también me gusta mucho, me recuerda mi infancia y las
          tardes de entretenimento con amigos intentando conseguir algun nuevo
          truco, compartiendo técnicas de juego y anotandolas en papel,
          discutiendo sobre escenarios secretos si era el caso, o simplemente
          divirtiendonos todos juntos. En mis tiempos libres arme un pedestal
          con palancas y botones, configuré el sistema operativo en una
          Raspberry Pi 3 Model B, conseguí una imagen con mas de 40 gb de
          juegos, y cada vez que recuerdo o leo algún título arcade por algún
          foro de internet, lo busco y cargo en mi máquina para jugarlo cuando
          el tiempo me lo permite.
        </p>
        <AboutFigureContainer objFigure={objFigGamer} />
      </div>
    </>
  );
}

function AboutFigureContainer({ objFigure }) {
  return (
    <div className="figure-container">
      <figure className="fig-hobbies">
        <img src={`${objFigure.img1.src}`} alt="" />
        <figcaption>{objFigure.img1.title}</figcaption>
      </figure>
      <figure className="fig-hobbies">
        <img src={`${objFigure.img2.src}`} alt="" />
        <figcaption>{objFigure.img2.title}</figcaption>
      </figure>
    </div>
  );
}
