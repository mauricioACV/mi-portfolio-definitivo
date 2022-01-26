export default function Footer() {
  return (
    <>
      <div className="footer-mobile">
        <div className="footer-l">
          <p>&copy; Todos los derechos reservados 2022</p>
        </div>
        <div className="footer-r">
          <div className="socialmedia-footer">
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
        </div>
      </div>
    </>
  );
}
