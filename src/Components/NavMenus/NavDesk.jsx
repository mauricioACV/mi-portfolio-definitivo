export default function NavDesk({ section, setSection }) {
  const handleSectionclick = (e) => {
    setSection(e.target.textContent.toUpperCase());
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className={`nav__list-item ${section==="ACERCA DE" ? "active":""}`}>
          <a href="#section-content" onClick={handleSectionclick}>
            Acerca de
          </a>
        </li>
        <li className={`nav__list-item ${section==="PROYECTOS" ? "active":""}`}>
          <a href="#section-content" onClick={handleSectionclick}>
            Proyectos
          </a>
        </li>
        <li className={`nav__list-item ${section==="SKILLS" ? "active":""}`}>
          <a href="#section-content" onClick={handleSectionclick}>
            Skills
          </a>
        </li>
        {/* <li className={`nav__list-item ${section==="BLOG" ? "active":""}`}>
          <a href="#section-content" onClick={handleSectionclick}>
            Blog
          </a>
        </li> */}
        <li className={`nav__list-item ${section==="CONTACTO" ? "active":""}`}>
          <a href="#section-content" onClick={handleSectionclick}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
