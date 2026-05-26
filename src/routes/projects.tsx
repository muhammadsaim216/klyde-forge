import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/sections/Projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Klyde" },
      { name: "description", content: "Selected work from Klyde across web, mobile, AI, dashboards and commerce." },
      { property: "og:title", content: "Projects — Klyde" },
      { property: "og:description", content: "Selected work across web, mobile, AI and commerce." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: () => (
    <div className="pt-24">
      <Projects />
    </div>
  ),
});
