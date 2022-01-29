import SectionContentTitle from "./SectionContentTitle";

export default function ContactSection() {
  return (
    <>
      <SectionContentTitle title="Contacto" />
      <div className="contact-section">
        <form action="" className="contact-form">
          <input className="form-item" type="text" placeholder="Nombre" />
          <input className="form-item" type="text" placeholder="Email" />
          <textarea
            className="form-item"
            cols="30"
            rows="10"
            placeholder="Escribe un mensaje..."
          ></textarea>
          <button>Enviar mensaje</button>
        </form>
      </div>
    </>
  );
}
