import HeaderCubeLogo from "./HeaderCubeLogo";
import HeaderSocialMedia from "./HeaderSocialMedia";
import NavDesk from "./NavDesk";
import NavMobile from "./NavMobile";

export default function Header({setSection}) {
  return (
    <>
      <header className="header">
        <div className="logo-container">
          <HeaderCubeLogo />
          <p className="text-logo">mauro.dev</p>
        </div>
        <div className="title-nav-mobile">
          <p className="text-logo-mobile">mauro.dev</p>
        </div>
        <NavDesk setSection={setSection} />
        <HeaderSocialMedia />
        <NavMobile setSection={setSection} />
      </header>
    </>
  );
}
