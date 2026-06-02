import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Github, Linkedin, Globe, Code2, Server, Palette, Layers, Award, Briefcase, Users, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hafsa Zulfiqar — Full Stack Web Developer & WordPress Expert" },
      { name: "description", content: "Full-stack web developer, WordPress expert, and DevOps engineer. 5+ years building fast, beautiful, secure websites for clients worldwide." },
      { property: "og:title", content: "Hafsa Zulfiqar — Full Stack Web Developer" },
      { property: "og:description", content: "Full-stack web developer, WordPress expert, DevOps engineer." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Portfolio,
});

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "HTML / CSS", level: 92 },
  { name: "React.js", level: 78 },
  { name: "Vue.js", level: 72 },
  { name: "WordPress", level: 95 },
  { name: "PHP / Laravel", level: 80 },
  { name: "jQuery / AJAX", level: 82 },
  { name: "C# ASP.NET", level: 65 },
];

const services = [
  { icon: Code2, title: "Web Development", desc: "Custom websites with WordPress, Magento, Shopify, Laravel — built for performance and scale." },
  { icon: Server, title: "DevOps & Cloud", desc: "Azure, AWS, Google Cloud setup. CI/CD, deployments, monitoring, hardening." },
  { icon: Layers, title: "Responsive Design", desc: "Pixel-perfect layouts that look stunning on every device, from mobile to 4K." },
  { icon: Palette, title: "Graphic Design", desc: "Brand-aligned visuals, landing pages, and design systems with a polished finish." },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Briefcase },
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "10+", label: "Tech Stacks", icon: Sparkles },
];

const projects = [
  { name: "Targheeb", url: "https://targheeb.com/", tag: "WordPress" },
  { name: "Acorn Safety Services", url: "https://acornhealthandsafety.co.uk/", tag: "Corporate" },
  { name: "Unlock My Sim", url: "https://unlockmysim.com/", tag: "E-commerce" },
  { name: "Re-Pair", url: "https://re-pair.ie/", tag: "Service" },
  { name: "TCBS Senior School", url: "https://senior.tcbs.sc.ke/", tag: "Education" },
  { name: "Travel Parenthesis", url: "https://travelparenthesis.com/", tag: "Travel" },
  { name: "Gold Star Social Media", url: "https://goldstarsocialmedia.com/", tag: "Agency" },
  { name: "Portafoto", url: "https://portafoto.co.uk/", tag: "Photography" },
  { name: "H2O Natura", url: "https://h2onatura.net/", tag: "Brand" },
  { name: "Bren.one", url: "http://bren.one/", tag: "Personal" },
];

const testimonials = [
  { name: "Mike Catignani", text: "Hafsa did an amazing job for us — quick and efficient. We were given training to self-maintain. Delighted with the work." },
  { name: "Nigel Pengelly", text: "One of the best developers I've worked with. Quick, reliable, and pays attention to detail. Complex WordPress issues solved without issue." },
  { name: "Constantin Militaru", text: "Fantastic to work with. Very knowledgeable about WordPress customisation. Implemented our requests in record time, perfectly." },
  { name: "Bader Nh", text: "Very good freelance. She is a master of WordPress!" },
  { name: "Schez G", text: "Hafsa is a true gem — highly skilled and professional." },
  { name: "Janet Njau", text: "Amazing to work with. Delivered efficiently and promptly. Will work with her again." },
];

const links = [
  { label: "Upwork", url: "https://www.upwork.com/freelancers/~017d31b576065d8a33" },
  { label: "Freelancer", url: "https://www.freelancer.com/u/hafsazulf17" },
  { label: "PeoplePerHour", url: "https://www.peopleperhour.com/freelancer/technology-programming/hafsa-zulfiqar_sheikh-wordpress-magento-developer-all-xayvmmm" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-bold">HZ</span>
            <span>Hafsa Zulfiqar</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="hover:text-foreground transition-colors">Work</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          </div>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Hire me <ArrowUpRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden pt-40 pb-28">
        <div className="absolute inset-0 bg-grain opacity-40" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Badge variant="outline" className="mb-6 rounded-full border-primary/40 bg-primary/10 px-4 py-1.5 text-primary">
            <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" /> Available for freelance projects
          </Badge>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Crafting websites that <span className="gradient-text italic">perform</span> and <span className="gradient-text italic">delight</span>.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground text-balance">
            I'm Hafsa — a full-stack web developer, WordPress expert, and DevOps engineer helping brands ship fast, beautiful, secure products.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#work">View my work <ArrowUpRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6">
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>WordPress</span><span>•</span><span>React</span><span>•</span><span>Laravel</span><span>•</span><span>Shopify</span><span>•</span><span>AWS</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-10 text-center">
              <s.icon className="mx-auto mb-3 h-5 w-5 text-primary" />
              <div className="font-display text-4xl font-semibold gradient-text">{s.value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About + Skills */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary">About</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              Skills and passion, together, lead to results that last.
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a reliable, professional web and software developer with expert-level knowledge of WordPress, Magento, Squarespace, Wix, Weebly, and Shopify. I design, develop, maintain, update, and secure websites end-to-end.
              </p>
              <p>
                My aim has always been to produce websites that look beautiful and professional, are highly functional, fully responsive on every device, and load fast — without compromise.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {["WordPress", "Magento", "Laravel", "Shopify", "Azure", "AWS", "Google Cloud", "SSL / Nginx"].map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full bg-secondary/60 px-3 py-1">{t}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Skills</p>
            <h3 className="mt-4 font-display text-2xl">Tools I work with daily</h3>
            <div className="mt-8 space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border/60 bg-surface/20 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Services</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">What I can build for you</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Card key={s.title} className="group relative overflow-hidden border-border/60 bg-card transition-all hover:border-primary/50 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Selected Work</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">Recent projects</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">A glimpse of live sites I've designed, built, or rescued for clients around the world.</p>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-2">
          {projects.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noreferrer"
               className="group flex items-center justify-between bg-card p-7 transition-colors hover:bg-secondary/60">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                <div className="mt-2 font-display text-2xl">{p.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{new URL(p.url).hostname}</div>
              </div>
              <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-border/60 bg-surface/20 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Testimonials</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">Kind words from clients</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-border/60 bg-card">
                <CardContent className="p-7">
                  <Quote className="h-6 w-6 text-primary/60" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 font-semibold text-primary">
                      {t.name.charAt(0)}
                    </div>
                    <div className="text-sm font-medium">{t.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
        <Card className="relative overflow-hidden border-primary/30 bg-gradient-to-br from-surface to-card">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
          <CardContent className="relative grid gap-10 p-10 md:grid-cols-2 md:p-16">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-primary">Contact</p>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
                Let's build something <span className="gradient-text italic">exceptional</span>.
              </h2>
              <p className="mt-5 text-muted-foreground">Have a project in mind, or need an expert hand on your existing site? I'd love to hear from you.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="mailto:hafsazulf17@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email me</a>
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Find me on</p>
              {links.map((l) => (
                <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                   className="group flex items-center justify-between rounded-xl border border-border/60 bg-background/40 p-4 transition-all hover:border-primary/50 hover:bg-background/80">
                  <div className="flex items-center gap-3">
                    <Globe className="h-4 w-4 text-primary" />
                    <span className="font-medium">{l.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Hafsa Zulfiqar — HZ Tech. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="https://www.upwork.com/freelancers/~017d31b576065d8a33" target="_blank" rel="noreferrer" className="hover:text-foreground"><Briefcase className="h-4 w-4" /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/hafsazulf17" target="_blank" rel="noreferrer" className="hover:text-foreground"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
