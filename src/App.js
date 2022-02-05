import { useState } from "react";
import Footer from "./Components/MainPage/Footer";
import Header from "./Components/MainPage/Header";
import SectionContent from "./Components/MainPage/SectionContentRender";
import SectionIntro from "./Components/MainPage/CentralContent";
import useTitle from "./hooks/useTitle";

function App() {
  const [section, setSection] = useState("ACERCA DE");
  useTitle({ title: section });
  return (
    <>
      <Header section={section} setSection={setSection} />
      <main className="main-content">
        <SectionIntro setSection={setSection} />
        <SectionContent section={section} />
      </main>
      <Footer />
    </>
  );
}

export default App;
