import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";

export default function Index() {
  useDocumentTitle(
    "Klyde — We Build Digital Experiences That Matter",
    "A modern software house crafting websites, SaaS platforms, AI systems, mobile apps and automation tools for ambitious teams.",
  );
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects compact />
      <FeaturedProject />
      <Team />
      <Testimonials />
      <BlogPreview />
      <TechStack />
      <Contact />
    </>
  );
}
