import AboutSection from "../Sections/AboutSection";
import ProjectsSection from "../Sections/ProjectsSection";
import BlogSection from "../Sections/BlogSection";
import ContactSection from "../Sections/ContactSection";
import SkillsSection from "../Sections/SkillsSection";

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
  if (section === "ACERCA DE") return <AboutSection />;
  if (section === "PROYECTOS") return <ProjectsSection/>;
  if (section === "SKILLS") return <SkillsSection/>;
  if (section === "BLOG") return <BlogSection />;
  if (section === "CONTACTO") return <ContactSection />;
  return "";
}
