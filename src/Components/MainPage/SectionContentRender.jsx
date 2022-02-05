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
  switch (section) {
    case "ACERCA DE":
      return <AboutSection />;
    case "PROYECTOS":
      return <ProjectsSection />;
    case "SKILLS":
      return <SkillsSection />;
    case "BLOG":
      return <BlogSection />;
    case "CONTACTO":
      return <ContactSection />;
  }
}
