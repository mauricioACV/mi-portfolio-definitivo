export default function Footer() {
  return (
    <>
      <div className="footer-mobile">
        <div className="footer-l">
          <p>&copy; Todos los derechos reservados 2022</p>
        </div>
        <div className="footer-r">
          <div className="socialmedia-footer">
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
            <a href="#">
              <img
                className="socialmedia-img"
                src={require("../imgs/svg/email.svg").default}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
