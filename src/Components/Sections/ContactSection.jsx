import SectionContentTitle from "./SectionContentTitle";
import { contactNetwork } from "../../Data/contactNetwork.js";

export default function ContactSection() {
  return (
    <>
      <SectionContentTitle title="Contacto" />
      <div className="contact-section">
        {contactNetwork.map((item) => (
          <ContactItemContainer key={item.id} objContact={item} />
        ))}
      </div>
    </>
  );
}

function ContactItemContainer({ objContact }) {
  return (
    <div className="contact-item-container">
      <a href={objContact.hrefLink} target="_blank" rel="noopener noreferrer">
        <img className="socialmedia-img" src={objContact.srcImg} alt="" />
      </a>
      <a href={objContact.hrefLink} target="_blank" rel="noopener noreferrer">
        {objContact.title}
      </a>
    </div>
  );
}
