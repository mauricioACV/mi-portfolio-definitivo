import Footer from "./Components/Footer";
import Header from "./Components/Header";
import SectionContent from "./Components/SectionContent";
import SectionIntro from "./Components/SectionIntro";

function App() {
  return (
    <>
      <Header/>
      <main className="main-content">
        <SectionIntro/>
        <SectionContent/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
