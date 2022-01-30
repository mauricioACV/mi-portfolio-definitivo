export default function SectionIntro({ setSection }) {
  return (
    <>
      <section className="intro-section">
        <div className="intro-section-l">
          <div className="section-l-up">
            <p className="intro-name">Mauro C.</p>
            <p className="intro-pro">[ web developer ]</p>
          </div>
          <div className="section-l-down">
            <div className="intro-foot-text">
              <p className="p-foot-text">&#60;p&#62;</p>
              <p className="foot-text">
                Front end | Back end | agile methodologies
              </p>
              <p className="p-foot-text f-end">&#60;&#47;p&#62;</p>
            </div>
            <a
              className="btn-about btn-about-a"
              href="#section-content"
              onClick={() => setSection("SOBRE MÍ")}
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
                <img src={require("../imgs/png/programming.png")} alt="" />
              </div>
              <div className="post-details">
                <p className="post-title">¿Que es la programación funcional?</p>
                <p className="post-date">24 de febrero 2022</p>
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
                <p className="post-title">
                  Iniciando con Socket.io: Aplicaciones Web en Tiempo Real
                </p>
                <p className="post-date">24 de febrero 2022</p>
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
                <p className="post-title">
                  Iniciando con Socket.io: Aplicaciones Web en Tiempo Real
                </p>
                <p className="post-date">24 de febrero 2022</p>
              </div>
            </div>
          </div>
          <div className="section-r-mobile-cards">
            <h2 className="section-r-title">Publicaciones recientes</h2>
            <div className="post-container">
              <div className="post-img">
                <img src={require("../imgs/png/programming.png")} alt="" />
              </div>
              <div className="post-details">
                <p className="post-title">¿Que es la programación funcional?</p>
                <p className="post-date">24 de febrero 2022</p>
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
                <p className="post-title">
                  Iniciando con Socket.io: Aplicaciones Web en Tiempo Real
                </p>
                <p className="post-date">24 de febrero 2022</p>
              </div>
            </div>
            <div className="post-container">
              <div className="post-img">
                <img src={require("../imgs/png/programming.png")} alt="" />
              </div>
              <div className="post-details">
                <p className="post-title">¿Que es la programación funcional?</p>
                <p className="post-date">24 de febrero 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
