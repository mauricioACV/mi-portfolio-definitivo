import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SectionContent from "./Components/SectionContent";
import SectionIntro from "./Components/SectionIntro";

function App() {
  const [section, setSection] = useState("SOBRE MÍ");
  return (
    <>
      <Header section={section} setSection={setSection} />
      <main className="main-content">
        <SectionIntro setSection={setSection}/>
        <SectionContent section={section} />
      </main>
      <Footer/>
    </>
  );
}

export default App;
