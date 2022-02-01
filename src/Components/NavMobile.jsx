export default function NavMobile({ setSection }) {
  return (
    <nav className="mobile-menu">
      <input type="checkbox" id="check-van-mobile" />
      <BurguerMenuNav />
      <NavMobileOptions setSection={setSection} />
    </nav>
  );
}

function BurguerMenuNav() {
  return (
    <div className="mobile-menu-header">
      <label htmlFor="check-van-mobile">
        <div className="menu-line1"></div>
        <div className="menu-line2"></div>
        <div className="menu-line3"></div>
      </label>
    </div>
  );
}

function NavMobileOptions({ setSection }) {
  const handleSectionclick = (e) => {
    setSection(e.target.textContent.toUpperCase());
    document.getElementById("check-van-mobile").checked = false;
  };

  return (
    <ul className="nav-menu-movil">
      <div className="close-icon-container">
        <label htmlFor="check-van-mobile">
          <img src={require("../imgs/svg/close.svg").default} alt="" />
        </label>
      </div>
      <div className="nav-mobile-options">
        <li>
          <a href="#section-content" onClick={handleSectionclick}>
            SOBRE MÍ
          </a>
        </li>
        <li>
          <a href="#section-content" onClick={handleSectionclick}>
            PROYECTOS
          </a>
        </li>
        <li>
          <a href="#section-content" onClick={handleSectionclick}>
            SKILLS
          </a>
        </li>
        {/* <li>
          <a href="#section-content" onClick={handleSectionclick}>
            BLOG
          </a>
        </li> */}
        <li>
          <a href="#section-content" onClick={handleSectionclick}>
            CONTACTO
          </a>
        </li>
      </div>
      <SocialMediaNavMobile />
    </ul>
  );
}

function SocialMediaNavMobile() {
  return (
    <div className="socialmedia-nav-mobile">
      <a
        href="https://www.linkedin.com/in/mauricio-campusano-villarroel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="socialmedia-img"
          src={require("../imgs/svg/linkedin.svg").default}
          alt=""
        />
      </a>
      <a
        href="https://github.com/mauricioACV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="socialmedia-img"
          src={require("../imgs/svg/github.svg").default}
          alt=""
        />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=56942700513"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="socialmedia-img"
          src={require("../imgs/png/whatsapp.png")}
          alt=""
        />
      </a>
    </div>
  );
}
