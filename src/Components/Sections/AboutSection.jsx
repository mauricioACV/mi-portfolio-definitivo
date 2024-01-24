import SectionContentTitle from "./SectionContentTitle";
import { hobbies } from "../../Data/hobbies.js";
import "../../styles-about.css";

export default function AboutSection() {
  return (
    <div className="about-container">
      <SectionContentTitle title="Sobre Mí" />
      <div className="content-section">
        <a
          href={require("../../doc/CV_Mauricio_Campusano_Villarroel.pdf")}
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
          Mi nombre es Mauricio Alejandro Campusano Villarroel, habitualmente me
          llaman Mauro o Mau. Cuento con más de 6 años de experiencia en el
          desarrollo de software, especializado en aplicaciones web y la
          implementación de APIs REST. Mi enfoque se basa en la aplicación de
          principios SOLID, patrones de diseño y buenas prácticas de
          programación. Me defino como un profesional entusiasta y comprometido,
          con gran interés en comprender a fondo los fundamentos de las
          tecnologías que me apasionan. <br />
          <br />
          Mi filosofía de aprendizaje incluye no solo la autodisciplina, sino
          también la apertura para aprender de mis compañeros más
          experimentados. <br />
        </p>
      </div>
      <SectionContentTitle title="Mí experiencia" />
      <div className="content-section">
        <p className="style-content exp-title">
          Líder equipo de desarrollo Full Stack, Open banking - Banco Estado de
          Chile:
        </p>
        <p className="style-content">Dic. 2022 – presente</p>
        <p className="style-content task-title func-title">Logros:</p>
        <ul className="task-list">
          <li>
            Construimos una API para acceso a datos financieros (cuentas, saldos
            y movimientos), con enfoque en crear un ecosistema abierto que
            permita la integración sencilla de Fintech locales.
          </li>
          <li>
            Implementación Backend For Frontend (BFF) en Nest.js para
            orquestación de micro servicios bancarios. Desempeña un papel
            central en la gestión del consentimiento del cliente para lograr una
            colaboración segura y eficiente con Fintechs, asegurando que los
            usuarios tengan un control claro sobre el acceso a sus datos
            financieros.
          </li>
          <li>
            Desarrollamos Front-end Angular para consentimiento del cliente,
            proporcionando una interfaz intuitiva para autorizar el compartir
            sus datos financieros.
          </li>
          <li>
            Actualmente, trabajamos en la expansión de servicios hacia la
            iniciación de pagos, abriendo nuevas oportunidades para la
            innovación en las Fintech, y fortaleciendo el papel del proyecto en
            el ecosistema financiero del país.
          </li>
          <li>
            Stack tecnológico:{" "}
            <strong>Node.js, JavaScript, Angular Js, NEST Js, AWS.</strong>
          </li>
        </ul>
      </div>
      <div className="content-section">
        <p className="style-content exp-title">
          Web Developer- Subdir. de Obras Vialidad M.O.P.
        </p>
        <p className="style-content">Dic. 2019 – Nov. 2022</p>
        <p className="style-content task-title func-title">Logros:</p>
        <ul className="task-list">
          <li>
            Lidero el desarrollo de nuevo sistema para administración de
            contratos nacional.
          </li>
          <li>
            Mantención, optimización y extensión de funcionalidades de sistemas
            heredados bajo tecnologías .NET.
          </li>
          <li>
            Desarrollo de API REST con Node.js y Framework Express.js
            (Arquitectura n-capas - Microservicios - middlewares - JWT).
          </li>
          <li>
            Stack tecnológico:{" "}
            <strong>
              Node.js, JavaScript, React Js, C#, Db Oracle 11g, TOAD.
            </strong>
          </li>
        </ul>
      </div>
      <div className="content-section">
        <p className="style-content exp-title">
          Consultor Técnico - Laboratorio Nacional de Vialidad M.O.P.
        </p>
        <p className="style-content">2009 – 2019</p>
        <p className="style-content task-title func-title">Logros:</p>
        <ul className="task-list">
          <li>
            Diseñé y desarrollé en conjunto con profesionales de obras civiles,
            aplicación para el recálculo de cotas a partir de datos en planos
            AutoCAD. Actualmente, es el mecanismo oficial para obtención de IRI
            teórico de un camino y evaluación de multas de acuerdo a los
            resultados.
          </li>
          <li>
            Stack tecnológico:{" "}
            <strong>HTML, CSS, JavaScript, Python, SQL Server.</strong>
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
