import { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SectionContent from "./Components/SectionContent";
import SectionIntro from "./Components/SectionIntro";

function App() {
  const [section, setSection] = useState("Proyectos");
  return (
    <>
      <Header setSection={setSection} />
      <main className="main-content">
        <SectionIntro/>
        <SectionContent section={section} />
      </main>
      <Footer/>
    </>
  );
}

export default App;
