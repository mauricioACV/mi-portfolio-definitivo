import React from "react";
import "../stylesModalProjectDetail.css";

export default function ModalProjectDetail({ setOpenModal }) {
  return (
    <div className="modalBackground animate__animated animate__backInDown">
      <div className="modalContainer">
        <div className="title">
          <h1>Proyecto GifOS</h1>
          {/* <img
            src={require("../imgs/svg/close.svg").default}
            onClick={() => {
              setOpenModal(false);
            }}
            alt=""
          /> */}
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
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
