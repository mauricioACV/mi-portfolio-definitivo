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
        <li onClick={handleSectionclick}>
          <a href="#section-content">SOBRE MÍ</a>
        </li>
        <li onClick={handleSectionclick}>
          <a href="#section-content">PROYECTOS</a>
        </li>
        <li onClick={handleSectionclick}>
          <a href="#section-content">SKILLS</a>
        </li>
        <li onClick={handleSectionclick}>
          <a href="#section-content">BLOG</a>
        </li>
        <li onClick={handleSectionclick}>
          <a href="#section-content">CONTACTO</a>
        </li>
      </div>
      <SocialMediaNavMobile />
    </ul>
  );
}

function SocialMediaNavMobile() {
  return (
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
  );
}
