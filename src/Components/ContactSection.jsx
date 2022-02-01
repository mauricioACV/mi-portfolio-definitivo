import SectionContentTitle from "./SectionContentTitle";

export default function ContactSection() {
  return (
    <>
      <SectionContentTitle title="Contacto" />
      <div className="contact-section">
        <div className="contact-item-container">
          <a href="#">
            <img
              className="socialmedia-img"
              src={require("../imgs/png/whatsapp.png")}
              alt=""
            />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=56942700513"
            target="_blank"
            rel="noopener noreferrer"
          >
            Puedes contactarme en Whatsapp
          </a>
        </div>
        <div className="contact-item-container">
          <a
            href="mailto:mauricio.campusano@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="socialmedia-img"
              src={require("../imgs/svg/email.svg").default}
              alt=""
            />
          </a>
          <a
            href="mailto:mauricio.campusano@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            mauricio.campusano@gmail.com
          </a>
        </div>
        <div className="contact-item-container">
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
            href="https://www.linkedin.com/in/mauricio-campusano-villarroel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita mi perfil en Linkedin
          </a>
        </div>
      </div>
    </>
  );
}
