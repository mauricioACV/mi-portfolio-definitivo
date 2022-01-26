export default function HeaderSocialMedia() {
  return (
    <div className="socialmedia">
      <a href="#">
        <img
          className="socialmedia-img"
          src={require("../imgs/svg/linkedin.svg").default}
          alt=""
        />
      </a>
      <a href="#">
        <img
          className="socialmedia-img"
          src={require("../imgs/svg/github.svg").default}
          alt=""
        />
      </a>
      <a href="#">
        <img
          className="socialmedia-img"
          src={require("../imgs/svg/email.svg").default}
          alt=""
        />
      </a>
    </div>
  );
}
