import { Calendar, Github, Linkedin, Mail, MapPin, Send, Twitter } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Let's talk"
          title="Tell us about your project."
          description="We reply within one business day. No sales theatre — just a real conversation about whether we're a fit."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="relative overflow-hidden rounded-3xl glass-strong gradient-border p-6 md:p-10"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Name" name="name" placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
                <Field label="Project type" name="projectType" placeholder="Web app, SaaS, AI…" />
                <Field label="Budget" name="budget" placeholder="$25k – $100k+" />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  name="message" rows={5} placeholder="Tell us what you're building…"
                  className="w-full resize-none rounded-2xl bg-background/40 px-4 py-3 text-sm outline-none ring-1 ring-white/10 transition focus:ring-2 focus:ring-neon-cyan/60"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white"
                style={{ background: "linear-gradient(120deg, oklch(0.65 0.22 265), oklch(0.62 0.24 295))" }}
              >
                {sent ? "Sent — talk soon" : <>Send message <Send className="size-4" /></>}
              </button>
            </form>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4">
              <InfoCard icon={Mail} label="Email" value="hello@klyde.studio" />
              <InfoCard icon={MapPin} label="Office" value="San Francisco · Remote-first" />
              <a href="#" className="block">
                <div className="group flex items-center gap-4 rounded-2xl glass gradient-border p-5 transition hover:bg-white/5">
                  <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30">
                    <Calendar className="size-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Or just</div>
                    <div className="text-sm font-semibold">Book a 30-min intro on Calendly →</div>
                  </div>
                </div>
              </a>
              <div className="flex gap-2 pt-2">
                {[Twitter, Github, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social"
                     className="inline-flex size-10 items-center justify-center rounded-full glass hover:bg-white/10">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type} name={name} placeholder={placeholder}
        className="w-full rounded-2xl bg-background/40 px-4 py-3 text-sm outline-none ring-1 ring-white/10 transition focus:ring-2 focus:ring-neon-cyan/60"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl glass gradient-border p-5">
      <div className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-semibold">{value}</div>
      </div>
    </div>
  );
}
