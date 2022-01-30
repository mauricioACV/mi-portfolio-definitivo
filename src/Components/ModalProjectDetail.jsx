import React from "react";
import "../stylesModalProjectDetail.css";

export default function ModalProjectDetail({ title, description, setOpenModal }) {
  return (
    <div className="modalBackground animate__animated animate__backInDown">
      <div className="modalContainer">
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="modal-body">
          <p>{description}</p>
        </div>
        <div className="modal-footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
