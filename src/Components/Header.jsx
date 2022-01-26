export default function Header() {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <div className="cube">
            <div className="top"></div>
            <div>
              <span className="cube-letter" style={{ "--i": 0 }}>
                <img
                  className="cube-img"
                  src={require("../imgs/png/html.png")}
                  alt=""
                />
              </span>
              <span className="cube-letter" style={{ "--i": 1 }}>
                <img
                  className="cube-img"
                  src={require("../imgs/png/css.png")}
                  alt=""
                />
              </span>
              <span className="cube-letter" style={{ "--i": 2 }}>
                <img
                  className="cube-img"
                  src={require("../imgs/png/js.png")}
                  alt=""
                />
              </span>
              <span className="cube-letter" style={{ "--i": 3 }}>
                <img
                  className="cube-img"
                  src={require("../imgs/png/react.png")}
                  alt=""
                />
              </span>
            </div>
          </div>
          <p className="text-logo">mauro.dev</p>
        </div>
        <div className="title-nav-mobile">
          <p className="text-logo-mobile">mauro.dev</p>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list-item">
              <p>Sobre Mí</p>
            </li>
            <li className="nav__list-item active">
              <p>Proyectos</p>
            </li>
            <li className="nav__list-item">
              <p>Blog</p>
            </li>
            <li className="nav__list-item">
              <p>Contacto</p>
            </li>
          </ul>
        </nav>
        <div className="socialmedia">
          <a href="#">
            <img
              className="socialmedia-img"
              src={require("../imgs/svg/linkedin.svg").default}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="socialmedia-img"
              src={require("../imgs/svg/github.svg").default}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="socialmedia-img"
              src={require("../imgs/svg/email.svg").default}
              alt=""
            />
          </a>
        </div>
        <nav className="mobile-menu">
          <input type="checkbox" id="check-van-mobile" />
          <div className="mobile-menu-header">
            <label htmlFor="check-van-mobile">
              <div className="menu-line1"></div>
              <div className="menu-line2"></div>
              <div className="menu-line3"></div>
            </label>
          </div>
          <ul className="nav-menu-movil">
            <div className="close-icon-container">
              <label htmlFor="check-van-mobile">
                <img src={require("../imgs/svg/close.svg").default} alt="" />
              </label>
            </div>
            <div className="nav-mobile-options">
              <li>
                <a href="#section-episodes">HOME</a>
              </li>
              <li>
                <a href="#section-aboutus">SOBRE MÍ</a>
              </li>
              <li>
                <a href="#section-interviews">PROYECTOS</a>
              </li>
              <li>
                <a href="#section-topics">BLOG</a>
              </li>
              <li>
                <a href="#section-topics">CONTACTO</a>
              </li>
            </div>
            <div className="socialmedia-nav-mobile">
              <img
                className="socialmedia-img"
                src={require("../imgs/svg/linkedin.svg").default}
                alt=""
              />
              <img
                className="socialmedia-img"
                src={require("../imgs/svg/github.svg").default}
                alt=""
              />
              <img
                className="socialmedia-img"
                src={require("../imgs/svg/email.svg").default}
                alt=""
              />
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}
