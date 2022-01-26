import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";

export default function SectionContent({ section }) {
  console.log(section);
  return (
    <section className="section-container overlap">
      <div className="content-container">
        <RenderSection section={section} />
      </div>
    </section>
  );
}

function RenderSection({ section }) {
  if (section === "PROYECTOS") return <ProjectsSection/>;
  if (section === "SOBRE MÍ") return <AboutSection />;
  if (section === "BLOG") return <BlogSection />;
  if (section === "CONTACTO") return <ContactSection />;
  return "";
}
