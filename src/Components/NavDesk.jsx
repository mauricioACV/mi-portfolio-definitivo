export default function NavDesk({ setSection }) {

  const handleSectionclick = (e) => {
    setSection(e.target.textContent.toUpperCase());
  };

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item" onClick={handleSectionclick}>
          <p>
            Sobre Mí
          </p>
        </li>
        <li className="nav__list-item active" onClick={handleSectionclick} >
          <p>
            Proyectos
          </p>
        </li>
        <li className="nav__list-item" onClick={handleSectionclick} >
          <p>
            Blog
          </p>
        </li>
        <li className="nav__list-item" onClick={handleSectionclick} >
          <p>
            Contacto
          </p>
        </li>
      </ul>
    </nav>
  );
}
