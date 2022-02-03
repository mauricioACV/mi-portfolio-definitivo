import HeaderCubeLogo from "../HeaderCubeLogo";
import HeaderSocialMedia from "../HeaderSocialMedia";
import NavDesk from "../NavMenus/NavDesk";
import NavMobile from "../NavMenus/NavMobile";

export default function Header({section, setSection}) {
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
        <NavDesk section={section} setSection={setSection} />
        <HeaderSocialMedia />
        <NavMobile setSection={setSection} />
      </header>
    </>
  );
}
