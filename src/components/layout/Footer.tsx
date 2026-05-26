import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-background">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-neon-violet to-transparent animate-pulse" />
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl font-bold tracking-[0.3em] text-gradient">KLYDE</div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              A modern software house building category-defining digital products for ambitious teams worldwide.
            </p>
            <form className="mt-6 flex max-w-sm items-center gap-2 rounded-full glass p-1.5">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-white"
                style={{ background: "linear-gradient(120deg, oklch(0.65 0.22 265), oklch(0.62 0.24 295))" }}
              >
                Join <ArrowRight className="size-4" />
              </button>
            </form>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>hello@klyde.studio</li>
              <li>San Francisco · Remote</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="inline-flex size-9 items-center justify-center rounded-full glass hover:bg-white/10">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Klyde Studio. All rights reserved.</p>
          <p>Crafted with obsession in the dark.</p>
        </div>
      </div>
    </footer>
  );
}
