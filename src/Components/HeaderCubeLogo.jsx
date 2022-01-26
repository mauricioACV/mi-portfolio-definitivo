export default function HeaderCubeLogo() {
  return (
    <div className="cube">
      <div className="top"></div>
      <div>
        <span className="cube-letter" style={{ "--i": 0 }}>
          <img
            className="cube-img"
            src={require("../imgs/png/html.png")}
            alt=""
          />
        </span>
        <span className="cube-letter" style={{ "--i": 1 }}>
          <img
            className="cube-img"
            src={require("../imgs/png/css.png")}
            alt=""
          />
        </span>
        <span className="cube-letter" style={{ "--i": 2 }}>
          <img
            className="cube-img"
            src={require("../imgs/png/js.png")}
            alt=""
          />
        </span>
        <span className="cube-letter" style={{ "--i": 3 }}>
          <img
            className="cube-img"
            src={require("../imgs/png/react.png")}
            alt=""
          />
        </span>
      </div>
    </div>
  );
}
