import SectionContentTitle from "./SectionContentTitle";
import { hobbies } from '../../Data/hobbies.js';
import "../../styles-about.css";

export default function AboutSection() {
  return (
    <div className="about-container">
      <SectionContentTitle title="Sobre Mí" />
      <div className="content-section">
        <a
          href={require("../../imgs/doc/mcamp-resume2022.pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-container"
        >
          <img
            src={require("../../imgs/svg/download.svg").default}
            alt="download"
            className="donwload-icon"
          />
          <p>Download Resume</p>
        </a>
        <p className="style-content top-content">
          Mi nombre es Mauricio Alejandro Campusano Villarroel, pero
          generalmente me llaman Mauro o Mau. Cuento con más de 10 años de
          experiencia en proyectos informáticos de distinta índole dentro del
          servicio público. Mis competencias se basan en 3 pilares: mi
          experiencia en la gestión e implementación de tecnologías únicas en el
          país (algunas incluso en LATAM), mi personalidad curiosa y
          concienzuda, y mi motivación y proactividad para adquirir nuevos
          conocimientos. Me caracterizo por ser metódico, comprometido y
          entusiasta, de muy buen desempeño y adaptabilidad para trabajar en
          equipos multidisciplinarios. <br />
          <br />
          Mis mayores logros en el desarrollo de aplicaciones son la
          construcción e implementación de una solución que actualmente se
          utiliza para evaluar la excepción de multas por razones geométricas en
          la construcción de caminos, y el desarrollo de un sistema de gestión
          de contratos de obras, ambos con alcance a nivel nacional. <br />
        </p>
      </div>
      <SectionContentTitle title="Mí experiencia" />
      <div className="content-section">
        <p className="style-content exp-title">
          Web Developer- Subdir. de Obras Vialidad M.O.P.
        </p>
        <p className="style-content">Dic. 2019 – actualidad</p>
        <p className="style-content task-title">
          Desarrollador Web en el Departamento de Adm. y Gestión de Contratos.
          Los desafíos más importantes son implementar metodología de trabajo
          para la gestión del proyecto, priorización de requerimientos, y
          desarrollo de funcionalidades. Adaptarme a framework de Front End ya
          definido (MCV5 .Net), y aportar mejoras e innovaciones para la
          transformación digital de procesos administrativos del departamento.
        </p>
        <p className="style-content task-title func-title">Logros:</p>
        <ul className="task-list">
          <li>
            Implementar parte del framework de scrum, basándose en el contexto
            del departamento, obteniendo muy buenos resultados.
          </li>
          <li>
            Dar solución a problemas de interfaces de usuario en sistema
            heredado.
          </li>
          <li>
            Logro mejorar la mala percepción de experiencia de usuario con la
            aplicación.
          </li>
          <li>
            Desarrollo de nuevo sistema para administración de contratos
            nacional.
          </li>
          <li>
            Definición de problemas, objetivos específicos, y métricas de
            cumplimiento en el desarrollo de nuevas funcionalidades.
          </li>
          <li>
            Llevar a cabo las transformaciones digitales exigidas al
            departamento por la Controlaría General de la República.
          </li>
          <li>Interoperabilidad entre sistemas institucionales.</li>
          <li>
            Confeccionar épicas, historias de usuario, desglose de tareas, y
            estimación de esfuerzos.
          </li>
          <li>
            Aplicar conjunto de técnicas, principios y metodologías de buenas
            prácticas de programación.
          </li>
        </ul>
      </div>
      <div className="content-section">
        <p className="style-content exp-title">
          Profesional TI - Laboratorio Nacional de Vialidad M.O.P.
        </p>
        <p className="style-content">2009 – 2019</p>
        <p className="style-content task-title">
          Etapa profesional en la que fui responsable de liderar proyectos de
          implementaciones tecnológicas únicas en al país, en algunos casos en
          base solo a documentación técnica en inglés, y en otros, en conjunto
          con técnicos pertenecientes a proveedores internacionales. Además,
          participo en proyectos dentro de equipos multidisciplinarios para el
          desarrollo de aplicaciones que facilitan la fiscalización, en
          controles de calidad de parámetros geométricos y estudios teóricos.
        </p>
        <p className="style-content task-title func-title">Logros:</p>
        <ul className="task-list">
          <li>
            Desarrollo de software stack HTML, CSS y JavaScript, coordinando
            requerimientos de 6 sub departamentos del Laboratorio de Vialidad
            con metodología ágil (SCRUM).
          </li>
          <li>
            Desarrollo de aplicación de escritorio para el recálculo de cotas a
            partir de datos en planos AutoCAD (mecanismo de evaluación de multas
            vigente en 2022 a nivel nacional).
          </li>
          <li>
            Responsable de recibir capacitación de equipos (hardware y
            software), interactuando con proveedores de Inglaterra, Canadá y
            Australia, para posteriormente ser responsable del stack y/o
            capacitar personal interno.
          </li>
          <li>
            Líder de equipo en campañas de extracción, automatización en
            procesos de datos, y desarrollo de entregables al área de análisis
            estadístico.
          </li>
          <li>
            Supervisión en instalación de estaciones colectoras de datos,
            insertas en tramos de prueba (pavimento) en varias regiones del
            país, para estudios y proyecciones estadísticas.
          </li>
        </ul>
      </div>
      <SectionContentTitle title="Pasatiempos" />
      <div className="content-section">
        <p className="style-content">
          Mi gran pasión son las bicicletas, es mi medio de transporte preferido
          y más utilizado, me gusta conocer todo sobre ellas. Aprendí sobre
          armado y mecánica participando en un grupo con el que practicamos por
          más de 3 años descenso en cerro (downhill). Gracias a esta primera
          experiencia, adquirí los conocimientos necesarios para buscar
          componentes de una bicicleta por separado y armarla completamente. De
          esta forma he tenido la oportunidad de conocer distintas disciplinas
          en el ciclismo aficionado, como bicicletas de pista y actualmente
          utilizo una de tipo ruta. Disfruto mucho el desafío que involucra
          armar una bicicleta y de hacerlo correctamente para no sufrir
          accidentes al momento de probarla en terreno.
        </p>
        <AboutFigureContainer objFigure={hobbies.bike} />
      </div>
      <div className="content-section">
        <p className="style-content">
          Otro pasatiempo que disfruto mucho son los tatuajes. El intentar hacer
          un buen dibujo (aunque considero que me falta práctica), estudiar
          técnicas y métodos para aplicar trazado de líneas y saturación de
          color correctamente (algo que requiere mucha concentración), junto a
          un ambiente con buena música, es algo que me relaja mucho.
        </p>
        <AboutFigureContainer objFigure={hobbies.tattoo} />
      </div>
      <div className="content-section">
        <p className="style-content">
          Por último quiero mostrar mi afición por los juegos arcade. Esto es
          algo que también me gusta mucho, me recuerda mi infancia y las tardes
          de entretenimento con amigos intentando conseguir algun nuevo truco,
          compartiendo técnicas de juego y anotandolas en papel, discutiendo
          sobre escenarios secretos si era el caso, o simplemente divirtiendonos
          todos juntos. En mis tiempos libres arme un pedestal con palancas y
          botones, configuré el sistema operativo en una Raspberry Pi 3 Model B,
          conseguí una imagen con mas de 40 gb de juegos, y cada vez que
          recuerdo o leo algún título arcade por algún foro de internet, lo
          busco y cargo en mi máquina para jugarlo cuando el tiempo me lo
          permite.
        </p>
        <AboutFigureContainer objFigure={hobbies.gamer} />
      </div>
    </div>
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
