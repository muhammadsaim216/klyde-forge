import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { stats } from "@/data";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="About Klyde"
          title="Innovation, scaled with obsession."
          description="We pair Silicon-Valley engineering with brand-agency design to ship products that feel inevitable — scalable systems, considered UX, and AI woven in where it counts."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-2xl glass gradient-border p-6 text-center">
                <div className="text-4xl md:text-5xl font-semibold text-gradient">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
