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
          Mi nombre es Mauricio Alejandro Campusano Villarroel, pero
          generalmente me llaman Mauro o Mau. Soy desarrollador fullstack con 4
          años de experiencia en aplicaciones web, utilizando para el back end
          C# .NET o Node.js en la implementación de servicios REST, y en el
          front end, JavaScript con la librería React Js para desarrollo de
          interfaces de usuario, aplicando siempre que puedo, principios SOLID,
          patrones de diseño y buenas prácticas de programación. <br />
          <br />
          Me considero un profesional entusiasta y comprometido, con gran
          interés en estudiar y comprender los fundamentos de las tecnologías
          que me apasionan, aprender de personas con más conocimiento que yo, y
          prestar apoyo a mis compañeros de equipo. Actualmente, me encuentro
          probando nuevas tecnologías React Native. <br />
        </p>
      </div>
      <SectionContentTitle title="Mí experiencia" />
      <div className="content-section">
        <p className="style-content exp-title">
          Web Developer- Subdir. de Obras Vialidad M.O.P.
        </p>
        <p className="style-content">Dic. 2019 – Presente</p>
        <p className="style-content task-title func-title">Logros:</p>
        <ul className="task-list">
          <li>
            Lidero el desarrollo de nuevo sistema para administración de
            contratos nacional.
          </li>
          <li>
            Mantención, optimización y extensión de funcionalidades de sistema
            heredado.
          </li>
          <li>
            Reducción de un 40% la cantidad de solicitudes de soporte a usuarios
            respecto a errores en la carga y descarga de documentos del sistema
            de contratos durante el año 2021. Dicha cifra en lo que va del año
            2022 alcanza el 70%, mediante la implementación de un mecanismo de
            control en la UI de 4 módulos que se ejecuta previo al guardado en
            servidor documental.
          </li>
          <li>
            Disminución de un 60% el tiempo del proceso de confección mediante
            el desarrollo de un módulo para la generación de documentos para
            cambio de titular de un contrato que permite el llenado dinámico de
            datos provenientes de la base de datos.
          </li>
          <li>
            Reducción de un 80% el tiempo de respuesta en soporte a usuarios
            sobre documentos mal cargados en sistema, mediante el diseño e
            implementación de un programa de consola que rastrea todos los
            documentos de un código de contrato dado, indicando cuáles de estos
            se deben volver a cargar.
          </li>
          <li>
            Stack tecnológico:{" "}
            <strong>
              VB.NET, C#, JavaScript, React Js, Db Oracle 11g, TOAD.
            </strong>
          </li>
        </ul>
      </div>
      <div className="content-section">
        <p className="style-content exp-title">
          Profesional TI - Laboratorio Nacional de Vialidad M.O.P.
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
            Eliminé la dependencia con software de terceros utilizado para el
            registro de datos, confección e impresión de credenciales de
            laboratoristas viales, mediante el desarrollo de una aplicación de
            escritorio con Python y Tkinter.
          </li>
          <li>
            Agilicé el proceso de adaptación para nuevos integrantes del
            departamento mediante la escritura de documentos técnicos y material
            audiovisual sobre calibración, operación, extracción y proceso de
            datos de equipos de control de calidad vial.
          </li>
          <li>
            Reduje en un 50% el tiempo de respuesta a requerimientos de
            implementación de funcionalidades en plataforma Microsoft SharePoint
            mediante la realización de capacitaciones para convertirme en
            administrador del portal dentro del departamento.
          </li>
          <li>
            Stack tecnológico:{" "}
            <strong> HTML, CSS, JavaScript, Python, SQL Server.</strong>
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
