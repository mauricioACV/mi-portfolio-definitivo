import { Typewriter } from 'react-simple-typewriter'

export default function SectionIntro({ setSection }) {
  return (
    <>
      <section className="intro-section">
        <div className="intro-section-l">
          <div className="section-l-up">
            <p className="intro-name">Mauro C.</p>
            <p className="intro-pro">[web developer]</p>
          </div>
          <div className="section-l-down">
            <div className="intro-foot-text">
              <p className="p-foot-text">&#60;p&#62;</p>
              <p className="foot-text">
                <Typewriter
                  words={["Front end | Back end | agile methodologies"]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={100000}
                />
              </p>
              <p className="p-foot-text f-end">&#60;&#47;p&#62;</p>
            </div>
            <a
              className="btn-about btn-about-a"
              href="#section-content"
              onClick={() => setSection("ACERCA DE")}
            >
              <p>Conoce más sobre mí</p>
              <img
                className="btn-about-img"
                src={require("../imgs/svg/arrow-circle-right.svg").default}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="intro-section-r">
          <div className="section-r-card">
            <h2 className="section-r-title">Publicaciones recientes</h2>
            <div className="post-container">
              <div className="post-img">
                <img src={require("../imgs/png/css.png")} alt="" />
              </div>
              <div className="post-details">
                <a
                  href="https://www.linkedin.com/pulse/conceptos-b%C3%A1sicos-de-css-y-preguntas-entrevistas-mauricio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="post-title">
                    Conceptos CSS y preguntas en entrevistas
                  </p>
                </a>
                <p className="post-date">28 de enero 2022</p>
              </div>
            </div>
            <div className="post-container">
              <div className="post-img">
                <img src={require("../imgs/png/html.png")} alt="" />
              </div>
              <div className="post-details">
                <a
                  href="https://www.linkedin.com/pulse/conceptos-b%C3%A1sicos-de-html-y-preguntas-entrevistas-mauricio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="post-title">
                    Conceptos Html y preguntas en entrevistas
                  </p>
                </a>
                <p className="post-date">27 de enero 2022</p>
              </div>
            </div>
            <div className="post-container">
              <div className="post-img">
                <img src={require("../imgs/png/function-post.png")} alt="" />
              </div>
              <div className="post-details">
                <a
                  href="https://www.linkedin.com/pulse/qu%C3%A9-es-la-programaci%C3%B3n-funcional-mauricio-campusano-villarroel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="post-title">
                    ¿Qué es la Programación Funcional?
                  </p>
                </a>
                <p className="post-date">1 de diciembre 2022</p>
              </div>
            </div>
            <div className="post-container">
              <div className="post-img">
                <img
                  src={require("../imgs/svg/logo-dark-socket.svg").default}
                  alt=""
                />
              </div>
              <div className="post-details">
                <a
                  href="https://www.linkedin.com/pulse/iniciando-con-socketio-aplicaciones-web-en-tiempo-mauricio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="post-title">
                    Iniciando con Socket.io: Aplicaciones Web en Tiempo Real
                  </p>
                </a>
                <p className="post-date">1 de diciembre 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
