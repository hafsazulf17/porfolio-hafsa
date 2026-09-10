import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Code2,
  Server,
  ShoppingCart,
  Search,
  GraduationCap,
  BadgeCheck,
  MapPin,
  Layers,
  Terminal,
  Database,
  Cloud,
  Quote,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import profileAsset from "@/assets/hafsa.jpg.asset.json";
import codeBg from "@/assets/code-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hafsa Zulfiqar — Full Stack & CMS Developer" },
      {
        name: "description",
        content:
          "Full stack developer and CMS specialist across Magento, Joomla, WooCommerce, Moodle and WordPress — API integrations, React/Tailwind builds, cloud deployment and SEO performance.",
      },
      { property: "og:title", content: "Hafsa Zulfiqar — Full Stack & CMS Developer" },
      {
        property: "og:description",
        content: "Magento, Joomla, WooCommerce, Moodle and WordPress builds, plus React & Tailwind front-ends.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const cmsPlatforms = ["WordPress", "WooCommerce", "Magento", "Joomla", "Moodle"];

const competencies = [
  {
    icon: Layers,
    title: "CMS Development",
    items: ["WordPress", "WooCommerce", "Magento 2", "Joomla", "Moodle LMS", "Theme & plugin development"],
  },
  {
    icon: Server,
    title: "Backend & Integrations",
    items: ["PHP", "MySQL", "Node.js", "Moodle REST API", "Brancert API", "Role-based dashboards"],
  },
  {
    icon: ShoppingCart,
    title: "WordPress & WooCommerce",
    items: ["Custom child themes", "ACF", "Divi", "Avada", "Elementor Pro", "Custom checkout & pricing"],
  },
  {
    icon: Code2,
    title: "Cloud & DevOps",
    items: ["AWS EC2 / RDS / S3 / CloudFront", "Azure", "DigitalOcean", "Docker", "Jenkins CI/CD"],
  },
  {
    icon: Search,
    title: "SEO & Performance",
    items: ["Yoast / RankMath", "Schema & meta", "sitemap.xml", "Canonical tags", "Core Web Vitals", "WP Rocket"],
  },
];

const frontendSkills = ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "React.js", "Tailwind CSS"];

const stats = [
  { value: "3+", label: "Years Developing" },
  { value: "4", label: "Client Regions" },
  { value: "8+", label: "Certifications" },
  { value: "100%", label: "Remote Ready" },
];

const projects = [
  {
    name: "Azeem — Structural Engineer Portfolio",
    url: "https://hafsazulf17.github.io/azeem/",
    tag: "React + Tailwind CSS",
    desc: "Modern single-page portfolio for a structural engineer, built with React and Tailwind CSS — responsive sections, smooth scrolling and a clean component-driven layout.",
  },
  {
    name: "Targheeb",
    url: "https://targheeb.com/",
    tag: "LMS Integration",
    desc: "Connected Moodle LMS to WordPress via API and integrated the Brancert API for live class scheduling with automated student notifications.",
  },
  {
    name: "Gold Star Social Media",
    url: "https://goldstarsocialmedia.com/",
    tag: "WooCommerce",
    desc: "End-to-end WooCommerce digital product store with payment gateway integration and full checkout configuration.",
  },
  {
    name: "Eco2Bureau",
    url: "https://eco2.ca/",
    tag: "B2B / Quotes",
    desc: "Request-a-Quote system for retail and wholesale customers with role-based login, customer dashboards, custom pricing workflows and SuiteCRM setup.",
  },
  {
    name: "Unlock My Sim",
    url: "https://unlockmysim.com/",
    tag: "Front-end",
    desc: "Product pages, detail views and a custom checkout layout delivered through a bespoke child theme.",
  },
  {
    name: "e-Karnizai",
    url: "https://e-karnizai.lt/",
    tag: "SEO & Landing Pages",
    desc: "Elementor Pro landing pages plus Search Console fixes — canonical tags, sitemap updates and 301 redirects that cleared duplicate-URL issues.",
  },
  {
    name: "Acorn Health & Safety",
    url: "https://acornhealthandsafety.co.uk/",
    tag: "Genesis Framework",
    desc: "Corporate site built on the Genesis Framework with a fully custom child theme.",
  },
  {
    name: "TCBS Senior School",
    url: "https://senior.tcbs.sc.ke/",
    tag: "Education",
    desc: "School website built with WordPress and page-builder tooling.",
  },
  {
    name: "TCBS Junior School",
    url: "https://junior.tcbs.sc.ke/",
    tag: "Education",
    desc: "Companion junior-school site sharing the same design system and build approach.",
  },
  {
    name: "Ekelund",
    url: "https://ekelund.se/",
    tag: "Magento 2",
    desc: "Magento 2 theme customisation for a B2C and B2B store, with AWS infrastructure and Jenkins deployments.",
  },
];

const testimonials = [
  {
    name: "Mike Catignani",
    quote: "Hafsa did an amazing job for us, quick and efficient. Where we wanted to self-maintain we have been given training in how to do that, so we are delighted — good job.",
  },
  {
    name: "Nigel Pengelly",
    quote: "Hafsa is one of the best people I've worked with on People Per Hour. She is quick, reliable and pays attention to detail. I had some complex WordPress issues that Hafsa completed without issue. Highly recommended.",
  },
  {
    name: "Schez G",
    quote: "Hafsa is a true gem, highly skilled and professional.",
  },
  {
    name: "Janet Njau",
    quote: "Hafsa was amazing to work with. She delivered efficiently and promptly. Will work with her again. Amazing work by Hafsa!",
  },
  {
    name: "Awad Ahmed",
    quote: "Great job, worked well and adjusted with the changes needed to deliver a good product in the end.",
  },
  {
    name: "Constantin Militaru",
    quote: "Fantastic to work with. Very knowledgeable about WordPress customisation. She implemented our requests in record time perfectly. Highly recommended.",
  },
  {
    name: "Bader Nh",
    quote: "Very good freelancer. She is a master of WordPress!",
  },
  {
    name: "Joseph Hogan",
    quote: "Hafsa was very helpful with my project, and helped work through unforeseen problems. I hope to work with her on a future project.",
  },
  {
    name: "William A",
    quote: "Hafsa has provided a great service, would recommend her.",
  },
  {
    name: "Worktop Compare",
    quote: "Great job, thanks.",
  },
];

const certifications = [
  { name: "WordPress Essential Training", issuer: "LinkedIn Learning", url: "https://www.linkedin.com/learning/certificates/7561e47ae894f208bd1465b7acf7ff6b33625455110acff3a2e6165918b16f77?integrationType=lilApp" },
  { name: "Microsoft Azure Essentials", issuer: "LinkedIn Learning", url: "https://www.linkedin.com/learning/certificates/0ca5b3b865f8fd648752a69d0e3c73b53c2ef3bb4ec42ea5e4055c56561f7137?integrationType=lilApp" },
  { name: "JavaScript & jQuery + Vue Intro", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-660058d2-b574-4745-82cd-1632a023b89c/" },
  { name: "GitLab Ultimate Guide", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-feb6ccdf-eea3-4afa-a595-31226ba7be92/" },
  { name: "MERN Stack Deployment on Azure (CI/CD)", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-10f4432e-f335-4192-b24a-cde3059166e5/" },
  { name: "Nginx, Apache & SSL Certificates", issuer: "Udemy", url: "https://www.udemy.com/certificate/UC-e33a5efe-09d5-4f65-bc5d-c62e07c277a5/" },
  { name: "Microsoft Office", issuer: "Credly Badge", url: "https://www.credly.com/badges/3456a896-1cd0-4f63-a659-830eec83d196/public_url" },
  { name: "Google Cloud Qwiklabs — 5 Quests · Gen AI Intro", issuer: "Google Cloud", url: "https://www.cloudskillsboost.google/" },
];

const profiles = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/hafsa-zulfiqar-149812160/" },
  { label: "Upwork", url: "https://www.upwork.com/freelancers/~017d31b576065d8a33" },
  { label: "People Per Hour", url: "https://pph.me/hafsazulf" },
  { label: "Portfolio", url: "https://hafsazulf17.github.io/hafsazulf" },
];

const heroSlides = [
  {
    id: "intro",
    content: (
      <div className="flex flex-col items-center text-center">
        <div className="mx-auto mb-8 w-fit">
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-primary to-accent opacity-60 blur-lg" />
            <img
              src={profileAsset.url}
              alt="Hafsa Zulfiqar, full stack and CMS developer"
              width={160}
              height={160}
              className="relative h-32 w-32 rounded-full border-2 border-primary/50 object-cover shadow-2xl md:h-40 md:w-40"
            />
          </div>
        </div>
        <Badge variant="outline" className="mb-6 rounded-full border-primary/40 bg-primary/10 px-4 py-1.5 text-primary">
          <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse" /> Available — remote ready
        </Badge>
        <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-6xl lg:text-7xl">
          Full Stack Developer &amp; <span className="gradient-text">CMS specialist</span> across every platform.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground text-balance md:text-lg">
          I'm Hafsa — a full stack developer building with React, Tailwind CSS, PHP and MySQL, and a CMS developer across Magento, Joomla, WooCommerce, Moodle and WordPress.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="#work">View projects <ArrowUpRight className="ml-1 h-4 w-4" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>
      </div>
    ),
  },
  {
    id: "cms",
    content: (
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-primary/15 text-primary">
          <Layers className="h-10 w-10" />
        </div>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
          CMS &amp; e-commerce <span className="gradient-text">expertise</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          End-to-end development across WordPress, WooCommerce, Magento 2, Joomla and Moodle — from custom themes and plugins to checkout workflows and LMS integrations.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {cmsPlatforms.map((p) => (
            <span key={p} className="rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 font-mono text-xs text-primary">
              {p}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "projects",
    content: (
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-accent/15 text-accent">
          <Code2 className="h-10 w-10" />
        </div>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
          Live projects, <span className="gradient-text">real results</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          From React portfolios and WooCommerce stores to Magento 2 B2B builds and Moodle LMS integrations — shipped for clients in the US, UK, Canada and Lithuania.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {["React", "Tailwind CSS", "WooCommerce", "Magento 2", "Moodle"].map((t) => (
            <span key={t} className="rounded-full border border-border/60 bg-secondary/60 px-3.5 py-1.5 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "testimonial",
    content: (
      <div className="flex flex-col items-center text-center">
        <Quote className="mb-6 h-14 w-14 text-primary/40" />
        <blockquote className="max-w-3xl font-display text-2xl font-medium leading-relaxed text-balance md:text-4xl">
          “Hafsa is one of the best people I've worked with. She is quick, reliable and pays attention to detail. Highly recommended.”
        </blockquote>
        <div className="mt-8 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
            NP
          </div>
          <span className="font-medium">Nigel Pengelly</span>
        </div>
      </div>
    ),
  },
  {
    id: "contact",
    content: (
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 grid h-20 w-20 place-items-center rounded-3xl bg-primary/15 text-primary">
          <Mail className="h-10 w-10" />
        </div>
        <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-balance md:text-6xl">
          Let's build something <span className="gradient-text">exceptional</span>.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          Have a WordPress or WooCommerce project, an API integration, or a site that needs rescuing? I'd love to hear from you.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="mailto:zulfiqar277hafsa.ha@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email me</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-6">
            <a href="https://wa.me/923212578595" target="_blank" rel="noreferrer"><Phone className="mr-2 h-4 w-4" /> +92 321 2578595</a>
          </Button>
        </div>
      </div>
    ),
  },
];

function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setActive((i) => (i + 1) % heroSlides.length), []);
  const prev = useCallback(() => setActive((i) => (i - 1 + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <img
        src={codeBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-accent/20 blur-[110px]" />

      {/* Floating objects */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="float-y absolute left-[8%] top-40 grid h-14 w-14 place-items-center rounded-2xl glass border border-primary/30 text-primary">
          <Terminal className="h-6 w-6" />
        </div>
        <div className="float-slow absolute right-[10%] top-56 grid h-14 w-14 place-items-center rounded-2xl glass border border-accent/30 text-accent">
          <Database className="h-6 w-6" />
        </div>
        <div className="float-slow absolute left-[14%] bottom-16 rounded-full glass border border-primary/25 px-4 py-2 font-mono text-xs text-primary">
          &lt;/&gt; full-stack
        </div>
        <div className="float-y absolute right-[14%] bottom-24 grid h-12 w-12 place-items-center rounded-xl glass border border-primary/25 text-primary">
          <Cloud className="h-5 w-5" />
        </div>
      </div>

      <div className="relative mx-auto min-h-[480px] max-w-5xl px-6 md:min-h-[420px]">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className={`transition-all duration-700 ease-out ${
              i === active
                ? "pointer-events-auto relative opacity-100 translate-y-0"
                : "pointer-events-none absolute inset-0 opacity-0 translate-y-4"
            }`}
            aria-hidden={i !== active}
          >
            {slide.content}
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="relative mx-auto mt-10 flex max-w-6xl items-center justify-center gap-4 px-6">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background/70 text-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background/70 text-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
        >
          {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>

        <button
          onClick={next}
          aria-label="Next slide"
          className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-background/70 text-foreground backdrop-blur-md transition-colors hover:border-primary/50 hover:text-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="relative mx-auto mt-6 max-w-6xl px-6 text-center text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> 190 Visa (Australia) — full working rights</span>
      </div>
    </section>
  );
}

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
            <a href="#about" className="transition-colors hover:text-foreground">About</a>
            <a href="#skills" className="transition-colors hover:text-foreground">Skills</a>
            <a href="#work" className="transition-colors hover:text-foreground">Projects</a>
            <a href="#testimonials" className="transition-colors hover:text-foreground">Testimonials</a>
            <a href="#credentials" className="transition-colors hover:text-foreground">Credentials</a>
          </div>
          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Hire me <ArrowUpRight className="ml-1 h-4 w-4" /></a>
          </Button>
        </nav>
      </header>

      {/* Hero Slideshow */}
      <HeroSlideshow />


      {/* Stats */}
      <section className="border-y border-border/60 bg-surface/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="border-border/60 bg-card text-center transition-all hover:-translate-y-1 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="font-display text-4xl font-semibold gradient-text">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-primary">About</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight md:text-5xl">
              End-to-end WordPress work, from custom PHP to Core Web Vitals.
            </h2>
          </div>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>
              WordPress developer with 3+ years building and integrating CMS-based and e-commerce platforms. My work spans WooCommerce store architecture, REST API integrations, role-based checkout workflows, and CMS-to-LMS connections with Moodle and Brancert.
            </p>
            <p>
              That's backed by cloud infrastructure experience on AWS, Azure and Docker/Jenkins CI/CD — comfortable working from custom PHP and MySQL logic through to performance and SEO optimisation in fast-paced, fully remote agency environments.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {frontendSkills.map((t) => (
                <Badge key={t} variant="secondary" className="rounded-full bg-secondary/60 px-3 py-1">{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competencies */}
      <section id="skills" className="border-t border-border/60 bg-surface/20 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Core Competencies</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">What I bring to a build</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {competencies.map((c) => (
              <Card key={c.title} className="group border-border/60 bg-card transition-all hover:-translate-y-1 hover:border-primary/50">
                <CardContent className="p-7">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl">{c.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.items.map((i) => (
                      <span key={i} className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">{i}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Selected Work</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">Projects</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">Live sites I've built, integrated, or optimised for clients around the world.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 text-xs text-primary">{p.tag}</Badge>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{p.name}</h3>
              <div className="mt-1 text-xs text-muted-foreground">{new URL(p.url).hostname}</div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-border/60 bg-surface/20 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Client Feedback</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">What clients say</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.name} className="relative overflow-hidden border-border/60 bg-card transition-all hover:-translate-y-1 hover:border-primary/50">
                <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/20" />
                <CardContent className="flex h-full flex-col p-7">
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">“{t.quote}”</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border/60 pt-5">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 font-display text-sm font-semibold text-primary">
                      {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                    </div>
                    <div className="font-medium">{t.name}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="credentials" className="border-t border-border/60 bg-surface/20 py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Credentials</p>
            <h2 className="mt-4 font-display text-4xl font-medium md:text-5xl">Education &amp; certifications</h2>
          </div>
          <Card className="mt-12 border-border/60 bg-card">
            <CardContent className="flex items-start gap-4 p-7">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-xl">B.Sc. Computer Science (Hons)</h3>
                <p className="mt-1 text-sm text-muted-foreground">Fatima Jinnah Women University, Rawalpindi — 2020</p>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border md:grid-cols-2">
            {certifications.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 bg-card p-6 transition-colors hover:bg-secondary/60"
              >
                <div className="flex items-center gap-3">
                  <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-medium">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.issuer}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
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
              <p className="mt-5 text-muted-foreground">
                Have a WordPress or WooCommerce project, an API integration, or a site that needs rescuing? I'd love to hear from you.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="mailto:zulfiqar277hafsa.ha@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email me</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="https://wa.me/923212578595" target="_blank" rel="noreferrer"><Phone className="mr-2 h-4 w-4" /> +92 321 2578595</a>
                </Button>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Find me on</p>
              {profiles.map((l) => (
                <a
                  key={l.label}
                  href={l.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-border/60 bg-background/40 p-4 transition-all hover:border-primary/50 hover:bg-background/80"
                >
                  <div className="flex items-center gap-3">
                    {l.label === "LinkedIn" ? <Linkedin className="h-4 w-4 text-primary" /> : <Globe className="h-4 w-4 text-primary" />}
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
          <div>© {new Date().getFullYear()} Hafsa Zulfiqar. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/hafsa-zulfiqar-149812160/" target="_blank" rel="noreferrer" className="hover:text-foreground"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:zulfiqar277hafsa.ha@gmail.com" className="hover:text-foreground"><Mail className="h-4 w-4" /></a>
            <a href="https://hafsazulf17.github.io/hafsazulf" target="_blank" rel="noreferrer" className="hover:text-foreground"><Globe className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
