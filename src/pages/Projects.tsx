import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Projects as ProjectsSection } from "@/components/sections/Projects";

export default function ProjectsPage() {
  useDocumentTitle(
    "Projects — Klyde",
    "Selected work from Klyde across web, mobile, AI, dashboards and commerce.",
  );
  return (
    <div className="pt-24">
      <div className="mx-auto max-w-7xl px-5 pt-8">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
          Our portfolio of recent work.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Selected projects across web, mobile, AI and commerce — each shipped with a small team and strong opinions.
        </p>
      </div>
      <ProjectsSection />
    </div>
  );
}
