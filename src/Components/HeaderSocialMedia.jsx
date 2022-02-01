export default function HeaderSocialMedia() {
  return (
    <div className="socialmedia">
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
