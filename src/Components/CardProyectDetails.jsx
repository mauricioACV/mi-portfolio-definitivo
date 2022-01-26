export default function CardProyectDetails() {
  return (
    <div className="wrapper">
      <div className="overviewInfo">
        <div className="productinfo">
          <div className="grouptext">
            <h3>Código Fuente</h3>
            <div className="grouptext-info">
              <img className="link-img" src={require("../imgs/png/link.png")} alt="" />
              <a
                href="https://github.com/mauricioACV/React-JS-Proyecto-GIFos-Acamica"
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
              <img className="link-img" src={require("../imgs/png/link.png")} alt="" />
              <a
                href="https://github.com/mauricioACV/React-JS-Proyecto-GIFos-Acamica"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a gifos app
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="productSpecifications">
        <h1>Proyecto GifOS</h1>
        <p>
          La aplicación, además de ofrecer la búsqueda de gifs, también dispone
          la opción de modo nocturno o “dark mode", y al iniciar muestra 15
          trending gif.
        </p>
        <div className="productFeatures">
          <div className="feature">
            <div className="featureIcon"></div>
            <div className="featureText">
              <p className="featureText-title">Lenguajes:</p>
              <img className="featureText-img" src={require("../imgs/png/css.png")} alt="" />
              <img className="featureText-img" src={require("../imgs/png/html.png")} alt="" />
              <img className="featureText-img" src={require("../imgs/png/js.png")}  alt="" />
            </div>
          </div>
          <div className="feature">
            <div className="featureIcon"></div>
            <div className="featureText">
              <p className="featureText-title">Librería:</p>
              <img className="featureText-img" src={require("../imgs/png/react.png")} alt="" />
            </div>
          </div>
          <div className="feature">
            <div className="featureIcon"></div>
            <div className="featureText">
              <p className="featureText-title">Api:</p>
              <p>Giphy Developers</p>
            </div>
          </div>
        </div>
        <div className="checkoutButton">
          <button className="button-82-pushable" role="button">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">
              <img className="button-img" src="./imgs/arrow-right_.svg" alt="" />
              <span>Ver más detalles</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
