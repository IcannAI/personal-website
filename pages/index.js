import ProjectCard from "../components/ProjectCard";

const amazonProjects = [
  {
    title: "High-Throughput Backend System",
    metrics: 1200000,
    unit: " req/day",
    principle: "Dive Deep + Deliver Results",
    situation: "Legacy system failed under high load.",
    task: "Redesign backend for 1M+ RPS.",
    action: "Implemented microservices, async queues, Redis caching.",
    result: "Reduced latency 70%, handled 1.2M requests/day.",
    demo: "https://demo.backend.com",
    github: "https://github.com/username/backend-project",
  },
  {
    title: "AI Recommendation Engine",
    metrics: 95,
    situation: "Existing recommendations were generic.",
    task: "Build personalized recommendation engine.",
    action: "Collaborative filtering + Transformer models.",
    result: "Engagement +40%, model accuracy 95%.",
    demo: "https://demo.ai.com",
    github: "https://github.com/username/ai-project",
  },
];

const googleProjects = [
  {
    title: "Realtime Analytics Platform",
    metrics: 500000,
    narrative: "Built a distributed analytics platform to process 500k events/day with <50ms latency. Enabled product teams to make data-driven decisions in real time.",
    demo: "https://demo.analytics.com",
    github: "https://github.com/username/analytics-project",
  },
  {
    title: "NLP Chatbot System",
    metrics: 90,
    narrative: "Developed a chatbot using NLP and transformer models achieving 90% response accuracy. Integrated with customer service to reduce manual workload by 30%.",
    demo: "https://demo.chatbot.com",
    github: "https://github.com/username/chatbot-project",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <section className="text-center my-12">
        <h1 className="text-4xl font-bold mb-2">Safra – Backend + AI Engineer (Personal Website )</h1>
        <p className="text-lg text-gray-600 mb-4">
          I build scalable backend systems and AI-powered solutions with measurable impact.
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          See My Work
        </a>
      </section>

      <section id="projects" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Amazon LP Style Projects</h2>
        {amazonProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </section>

      <section id="projects-google" className="my-12">
        <h2 className="text-2xl font-bold mb-6">Google Narrative Style Projects</h2>
        {googleProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </section>

      <section id="about" className="my-12">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          Experienced engineer passionate about backend architecture and AI. Skilled in distributed systems, ML pipelines, and high-impact product delivery.
        </p>
      </section>

      <section id="contact" className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <p className="mb-2">Email: safra@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/safra" className="text-blue-500 underline">linkedin.com/in/janedoe</a></p>
      </section>
    </div>
  );
}