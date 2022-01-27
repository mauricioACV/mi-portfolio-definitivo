import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import SkillsSection from "./SkillsSection";

export default function SectionContent({ section }) {
  return (
    <section className="section-container overlap" id="section-content">
      <div className="content-container">
        <RenderSection section={section} />
      </div>
    </section>
  );
}

function RenderSection({ section }) {
  if (section === "SOBRE MÍ") return <AboutSection />;
  if (section === "PROYECTOS") return <ProjectsSection/>;
  if (section === "SKILLS") return <SkillsSection/>;
  if (section === "BLOG") return <BlogSection />;
  if (section === "CONTACTO") return <ContactSection />;
  return "";
}
