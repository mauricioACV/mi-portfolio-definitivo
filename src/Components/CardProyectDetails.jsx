import { useState } from "react";
import ModalProjectDetail from "./ModalProjectDetail";

export default function CardProyectDetails({ project }) {
  const [openModal, setOpenModal] = useState(false);
  const {
    title,
    intro_description,
    description,
    languajes,
    libraries,
    apis,
    link_app,
    link_repo,
  } = project;

  return (
    <div className="wrapper">
      <CardProjectHeader link_app={link_app} link_repo={link_repo} />
      <CardProjectBody
        title={title}
        intro_description={intro_description}
        languajes={languajes}
        libraries={libraries}
        apis={apis}
        setOpenModal={setOpenModal}
      />
      {openModal && (
        <ModalProjectDetail
          title={title}
          description={description}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}

function CardProjectHeader({ link_app, link_repo }) {
  return (
    <div className="overviewInfo">
      <div className="productinfo">
        <div className="grouptext">
          <h3>Código Fuente</h3>
          <div className="grouptext-info">
            <img
              className="link-img"
              src={require("../imgs/png/link.png")}
              alt=""
            />
            <a
              href={link_repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a repositorio Github
            </a>
          </div>
        </div>
        <div className="grouptext">
          <h3>Enlace App</h3>
          <div className="grouptext-info">
            <img
              className="link-img"
              src={require("../imgs/png/link.png")}
              alt=""
            />
            <a
              href={link_app}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a gifos app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardProjectBody({
  title,
  intro_description,
  languajes,
  libraries,
  apis,
  setOpenModal,
}) {
  return (
    <div className="productSpecifications">
      <h1>{title}</h1>
      <p className="intro-description">{intro_description}</p>
      <div className="productFeatures">
        <div className="feature">
          <div className="featureIcon"></div>
          <div className="featureText">
            <p className="featureText-title">Lenguajes:</p>
            {languajes?.map((lang) => (
              <img
                key={lang}
                className="featureText-img"
                src={require(`../imgs/png/${lang}.png`)}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="feature">
          <div className="featureIcon"></div>
          <div className="featureText">
            <p className="featureText-title">Librería:</p>
            {libraries?.map((lib) => (
              <img
                key={lib}
                className="featureText-img"
                src={require(`../imgs/png/${lib}.png`)}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="feature">
          <div className="featureIcon"></div>
          <div className="featureText">
            <p className="featureText-title">Api:</p>
            {apis?.map((api) => (
              <p key={api} className="featureText-content">
                {api}
              </p>
            ))}
          </div>
        </div>
      </div>
      <CardProjectDetailsBtn setOpenModal={setOpenModal} />
    </div>
  );
}

function CardProjectDetailsBtn({ setOpenModal }) {
  return (
    <div className="checkoutButton">
      <button className="button-82-pushable" role="button">
        <span className="button-82-shadow"></span>
        <span className="button-82-edge"></span>
        <span
          className="button-82-front text"
          onClick={() => setOpenModal(true)}
        >
          <img
            className="button-img"
            src={require("../imgs/svg/arrow-right_.svg").default}
          />
          <span>Ver más detalles</span>
        </span>
      </button>
    </div>
  );
}
