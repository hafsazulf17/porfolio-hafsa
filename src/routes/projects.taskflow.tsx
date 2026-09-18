import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Filter,
  TrendingUp,
  Layers,
  MousePointerClick,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/projects/taskflow")({
  head: () => ({
    meta: [
      { title: "TaskFlow — React + Tailwind CSS Demo | Hafsa Zulfiqar" },
      {
        name: "description",
        content:
          "An interactive dashboard demo built with React and Tailwind CSS — live task management, animated stats, custom SVG charting and a responsive dark UI.",
      },
      { property: "og:title", content: "TaskFlow — React + Tailwind CSS Demo | Hafsa Zulfiqar" },
      {
        property: "og:description",
        content:
          "Interactive React dashboard with live task management, animated counters and custom charting — showcasing modern React and Tailwind CSS skills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TaskFlow,
});

/* ---------- data ---------- */

const weeklyData = [
  { day: "Mon", completed: 6, created: 8 },
  { day: "Tue", completed: 9, created: 7 },
  { day: "Wed", completed: 4, created: 9 },
  { day: "Thu", completed: 11, created: 10 },
  { day: "Fri", completed: 8, created: 6 },
  { day: "Sat", completed: 3, created: 4 },
  { day: "Sun", completed: 7, created: 5 },
];

const initialTasks = [
  { id: 1, title: "Design dashboard component library", done: true, priority: "High" },
  { id: 2, title: "Wire up React hooks state management", done: true, priority: "High" },
  { id: 3, title: "Build responsive card grid with Tailwind", done: true, priority: "Medium" },
  { id: 4, title: "Add animated progress indicators", done: false, priority: "Medium" },
  { id: 5, title: "Implement keyboard-accessible filters", done: false, priority: "Low" },
  { id: 6, title: "Optimise bundle with code splitting", done: false, priority: "Low" },
];

const techStack = [
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "useState / useEffect / useMemo",
  "Component composition",
  "Responsive design",
  "Accessible controls",
  "Dark UI theming",
];

/* ---------- hooks & helpers ---------- */

function useCountUp(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

const priorityStyles: Record<string, string> = {
  High: "border-rose-500/30 bg-rose-500/10 text-rose-400",
  Medium: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Low: "border-sky-500/30 bg-sky-500/10 text-sky-400",
};

/* ---------- components ---------- */

function StatCard({ label, target, suffix = "" }: { label: string; target: number; suffix?: string }) {
  const value = useCountUp(target);
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
      <div className="font-display text-4xl font-semibold text-primary">
        {value}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function BarChart() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);
  const max = Math.max(...weeklyData.map((d) => d.completed));
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-7">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-4 w-4 text-primary" />
        <h3 className="font-display text-lg">Weekly throughput</h3>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">Tasks completed per day — animated CSS bars</p>
      <div className="mt-8 flex h-44 items-end gap-3">
        {weeklyData.map((d, i) => (
          <div key={d.day} className="group flex flex-1 flex-col items-center gap-2">
            <span className="text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
              {d.completed}
            </span>
            <div
              className="w-full rounded-t-md bg-gradient-to-t from-primary/30 to-primary/80 transition-all duration-700 ease-out group-hover:from-primary/50 group-hover:to-primary"
              style={{
                height: mounted ? `${(d.completed / max) * 130}px` : "0px",
                transitionDelay: `${i * 60}ms`,
              }}
            />
            <span className="text-xs text-muted-foreground">{d.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaskBoard() {
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "done">("all");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");

  const doneCount = useMemo(() => tasks.filter((t) => t.done).length, [tasks]);
  const progress = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;
  const visible = useMemo(
    () =>
      tasks.filter((t) =>
        filter === "all" ? true : filter === "active" ? !t.done : t.done
      ),
    [tasks, filter]
  );

  const addTask = () => {
    const title = input.trim();
    if (!title) return;
    setTasks([{ id: Date.now(), title, done: false, priority }, ...tasks]);
    setInput("");
  };

  return (
    <div className="rounded-2xl border border-border/60 bg-card p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MousePointerClick className="h-4 w-4 text-primary" />
          <h3 className="font-display text-lg">Try it — live task manager</h3>
        </div>
        <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 text-xs text-primary">
          {doneCount}/{tasks.length} done
        </Badge>
      </div>

      {/* progress */}
      <div className="mt-5 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary/60 to-primary transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-muted-foreground">{progress}% complete</p>

      {/* add task */}
      <div className="mt-6 flex flex-wrap gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a task and press Enter…"
          className="min-w-0 flex-1 rounded-lg border border-border/60 bg-background px-4 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as "High" | "Medium" | "Low")}
          className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm outline-none focus:border-primary/60"
          aria-label="Task priority"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <Button size="sm" onClick={addTask} className="gap-1">
          <Plus className="h-4 w-4" /> Add
        </Button>
      </div>

      {/* filters */}
      <div className="mt-5 flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        {(["all", "active", "done"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium capitalize transition-colors ${
              filter === f
                ? "bg-primary/15 text-primary border border-primary/40"
                : "text-muted-foreground border border-border/60 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* task list */}
      <ul className="mt-5 space-y-2">
        {visible.map((t) => (
          <li
            key={t.id}
            className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/60 px-4 py-3 transition-colors hover:border-primary/40"
          >
            <button
              onClick={() =>
                setTasks(tasks.map((x) => (x.id === t.id ? { ...x, done: !x.done } : x)))
              }
              aria-label={t.done ? `Mark "${t.title}" as active` : `Mark "${t.title}" as done`}
              className="shrink-0 text-primary transition-transform hover:scale-110"
            >
              {t.done ? <CheckCircle2 className="h-5 w-5" /> : <Circle className="h-5 w-5" />}
            </button>
            <span
              className={`flex-1 text-sm ${t.done ? "text-muted-foreground line-through" : ""}`}
            >
              {t.title}
            </span>
            <Badge
              variant="outline"
              className={`hidden rounded-full text-[10px] sm:inline-flex ${priorityStyles[t.priority]}`}
            >
              {t.priority}
            </Badge>
            <button
              onClick={() => setTasks(tasks.filter((x) => x.id !== t.id))}
              aria-label={`Delete "${t.title}"`}
              className="shrink-0 text-muted-foreground transition-colors hover:text-rose-400"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
        {visible.length === 0 && (
          <li className="rounded-xl border border-dashed border-border/60 px-4 py-8 text-center text-sm text-muted-foreground">
            Nothing here — add a task or switch filters.
          </li>
        )}
      </ul>
    </div>
  );
}

/* ---------- page ---------- */

function TaskFlow() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to portfolio
          </Link>
          <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 text-xs text-primary">
            Live demo
          </Badge>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14">
        {/* hero */}
        <div className="max-w-2xl">
          <Badge variant="outline" className="rounded-full border-primary/30 bg-primary/10 text-xs text-primary">
            React + Tailwind CSS
          </Badge>
          <h1 className="mt-5 font-display text-4xl font-medium md:text-5xl">
            TaskFlow <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            A fully interactive demo project built to showcase modern React and Tailwind CSS
            skills — component composition, hooks-driven state, animated data visualisation and a
            responsive dark interface. Everything on this page is live: add tasks, toggle
            completion, filter the list and watch the stats update in real time.
          </p>
        </div>

        {/* animated stats */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <StatCard label="Tasks completed this week" target={48} />
          <StatCard label="Components in the library" target={24} />
          <StatCard label="Lighthouse performance" target={99} suffix="%" />
        </div>

        {/* board + chart */}
        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <TaskBoard />
          </div>
          <div className="lg:col-span-2">
            <BarChart />
          </div>
        </div>

        {/* what it demonstrates */}
        <div className="mt-6 rounded-2xl border border-border/60 bg-card p-7">
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            <h3 className="font-display text-lg">What this demo demonstrates</h3>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {techStack.map((t) => (
              <Badge
                key={t}
                variant="outline"
                className="rounded-full border-border/60 bg-background/60 text-xs text-muted-foreground"
              >
                {t}
              </Badge>
            ))}
          </div>
          <div className="mt-6 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
            <p>
              <span className="text-foreground">State &amp; hooks.</span> The task board is driven
              entirely by React state — <span className="font-mono text-xs text-primary">useState</span>,{" "}
              <span className="font-mono text-xs text-primary">useEffect</span> and{" "}
              <span className="font-mono text-xs text-primary">useMemo</span> keep filtering and
              progress calculations fast.
            </p>
            <p>
              <span className="text-foreground">Tailwind UI.</span> Every card, badge, chart bar
              and control is styled with Tailwind utility classes — gradients, hover transitions
              and staggered entrance animations included.
            </p>
            <p>
              <span className="text-foreground">Responsive layout.</span> CSS grid reflows from a
              single column on mobile to a dashboard layout on desktop, exactly like a production
              admin panel.
            </p>
            <p>
              <span className="text-foreground">Accessibility.</span> Labelled buttons, keyboard
              input support (press Enter to add) and semantic list markup throughout.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        TaskFlow — a React + Tailwind CSS demo by Hafsa Zulfiqar
      </footer>
    </div>
  );
}
