import SectionContentTitle from "./SectionContentTitle";

export default function BlogSection() {
  return (
    <>
      <SectionContentTitle title="Blog" />
      <div className="blog-items-container">
        <div className="item-container blog-post-container">
          <div className="post-img">
            <img src={require("../imgs/png/programming.png")} alt="" />
          </div>
          <div className="post-details">
            <a
              href="https://www.linkedin.com/posts/mauricio-campusano-villarroel_css-css3-frontend-activity-6892892729395752960-5bNb"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="post-title">¿Que es la programación funcional?</p>
            </a>
            <p className="post-date">24 de febrero 2022</p>
          </div>
        </div>
        <div className="item-container blog-post-container">
          <div className="post-img">
            <img
              src={require("../imgs/svg/logo-dark-socket.svg").default}
              alt=""
            />
          </div>
          <div className="post-details">
            <p className="post-title">
              Iniciando con Socket.io: Aplicaciones Web en Tiempo Real
            </p>
            <p className="post-date">24 de febrero 2022</p>
          </div>
        </div>
        <div className="item-container blog-post-container">
          <div className="post-img">
            <img src={require("../imgs/png/programming.png")} alt="" />
          </div>
          <div className="post-details">
            <p className="post-title">¿Que es la programación funcional?</p>
            <p className="post-date">24 de febrero 2022</p>
          </div>
        </div>
        <div className="item-container blog-post-container">
          <div className="post-img">
            <img
              src={require("../imgs/svg/logo-dark-socket.svg").default}
              alt=""
            />
          </div>
          <div className="post-details">
            <p className="post-title">
              Iniciando con Socket.io: Aplicaciones Web en Tiempo Real
            </p>
            <p className="post-date">24 de febrero 2022</p>
          </div>
        </div>
        <div className="item-container blog-post-container">
          <div className="post-img">
            <img
              src={require("../imgs/svg/logo-dark-socket.svg").default}
              alt=""
            />
          </div>
          <div className="post-details">
            <p className="post-title">
              Iniciando con Socket.io: Aplicaciones Web en Tiempo Real
            </p>
            <p className="post-date">24 de febrero 2022</p>
          </div>
        </div>
        <div className="item-container blog-post-container">
          <div className="post-img">
            <img
              src={require("../imgs/svg/logo-dark-socket.svg").default}
              alt=""
            />
          </div>
          <div className="post-details">
            <p className="post-title">
              Iniciando con Socket.io: Aplicaciones Web en Tiempo Real
            </p>
            <p className="post-date">24 de febrero 2022</p>
          </div>
        </div>
      </div>
    </>
  );
}
