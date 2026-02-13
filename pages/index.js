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
    unit: "%",
    principle: "Customer Obsession",
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
    unit: " events/day",
    narrative: "Built a distributed analytics platform to process 500k events/day with <50ms latency. Enabled product teams to make data-driven decisions in real time.",
    demo: "https://demo.analytics.com",
    github: "https://github.com/username/analytics-project",
  },
  {
    title: "NLP Chatbot System",
    metrics: 90,
    unit: "%",
    narrative: "Developed a chatbot using NLP and transformer models achieving 90% response accuracy. Integrated with customer service to reduce manual workload by 30%.",
    demo: "https://demo.chatbot.com",
    github: "https://github.com/username/chatbot-project",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Hero Section */}
        <section className="text-center my-16">
          <h1 className="text-5xl font-bold mb-4 text-white">
            Safra — Backend + AI Engineer
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            I build scalable backend systems and AI-powered solutions with measurable impact.
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-lg shadow-lg hover:shadow-xl transition-all font-medium"
          >
            See My Work
          </a>
        </section>

        {/* Amazon LP Style Projects */}
        <section id="projects" className="my-20">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Amazon LP Style Projects
          </h2>
          <div className="space-y-6">
            {amazonProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Google Narrative Style Projects */}
        <section id="projects-google" className="my-20">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Google Narrative Style Projects
          </h2>
          <div className="space-y-6">
            {googleProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="my-20">
          <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl">
            Experienced engineer passionate about backend architecture, distributed systems, 
            machine learning pipelines, and high-impact product delivery. 
            Focused on building reliable, scalable systems that solve real problems.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-20 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <a
              href="mailto:safra@example.com"
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors font-medium shadow-lg"
            >
              Email Me
            </a>
            <a
              href="/personal-website/resume.pdf"
              download
              className="px-8 py-4 border-2 border-zinc-700 hover:border-zinc-500 rounded-lg transition-colors font-medium shadow-lg"
            >
              Download Resume
            </a>
          </div>

          <div className="text-muted-foreground space-y-2">
            <p className="text-lg">safra@example.com</p>
            <p>
              <a 
                href="https://linkedin.com/in/safra" 
                className="text-accent hover:text-accent-hover underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/safra
              </a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}