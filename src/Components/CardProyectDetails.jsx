import { useState } from "react";
import ModalProjectDetail from "./ModalProjectDetail";

export default function CardProyectDetails({ project }) {
  const [openModal, setOpenModal] = useState(false);
  const {
    title,
    shot_title,
    intro_description,
    description,
    languajes,
    libraries,
    extra,
    backend,
    link_app,
    link_repo,
  } = project;

  return (
    <div className="wrapper">
      <CardProjectHeader shot_title={shot_title} link_app={link_app} link_repo={link_repo} />
      <CardProjectBody
        title={title}
        intro_description={intro_description}
        languajes={languajes}
        libraries={libraries}
        extra={extra}
        backend={backend}
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

function CardProjectHeader({ shot_title, link_app, link_repo }) {
  const styleHeader = {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 7, 1), rgba(0, 0, 7, 0.9))
    ,url(${require("../imgs/png/projects/campcon.png")})`,
    backgroundBlendMode: "darken, luminosity",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    objectFit: 'cover',
    backgroundPosition: '50% 50%',
  };
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
              href={link_app.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a {shot_title} - {link_app.demo}
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
  extra,
  backend,
  setOpenModal,
}) {
  console.log(libraries);
  return (
    <div className="productSpecifications">
      <h1>{title}</h1>
      <p className="intro-description">{intro_description}</p>
      <div className="productFeatures">
        <div className="feature">
          <div className="featureIcon"></div>
          <div className="featureText">
            <p className="featureText-title">Lenguajes</p>
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
        {(libraries.img || libraries.text) && (
          <div className="feature">
            <div className="featureIcon"></div>
            <div className="featureText">
              <p className="featureText-title">{libraries.title}</p>
              {libraries.img ? (
                libraries.img.map(img=>(
                  <img
                    className="featureText-img"
                    src={require(`../imgs/png/${img}.png`)}
                    alt=""
                  />
                ))
              ) : (
                <p className="featureText-content">{libraries.text}</p>
              )}
            </div>
          </div>
        )}
        {extra.title && (
          <div className="feature">
            <div className="featureIcon"></div>
            <div className="featureText">
              <p className="featureText-title">{extra.title}</p>
              <div className="featureText-details">
                {extra.img && (
                  <img
                    className="featureText-img"
                    src={require(`../imgs/png/${extra.img}.png`)}
                    alt=""
                  />
                )}
                <p className="featureText-content">{extra.text}</p>
              </div>
            </div>
          </div>
        )}
        {backend && (
          <div className="feature">
            <div className="featureIcon"></div>
            <div className="featureText">
              <p className="featureText-title">Backend</p>
              <p className="featureText-content">{backend}</p>
            </div>
          </div>
        )}
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
