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
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center my-12">
          <h1 className="text-4xl font-bold mb-4">
            Safra — Backend + AI Engineer
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            I build scalable backend systems and AI-powered solutions with measurable impact.
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-accent hover:bg-accent-hover text-white rounded-lg shadow transition"
          >
            See My Work
          </a>
        </section>

      	{/* Amazon LP Style Projects */}
        <section id="projects" className="my-16">
          <h2 className="text-3xl font-bold mb-8">Amazon LP Style Projects</h2>
          <div className="space-y-6">
            {amazonProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </section>
      
      
	      {/* Google Narrative Style Projects */}
        <section id="projects-google" className="my-16">
          <h2 className="text-3xl font-bold mb-8">Google Narrative Style Projects</h2>
          <div className="space-y-6">
            {googleProjects.map((p, i) => (
              <ProjectCard key={i} project={p} />
            ))}
          </div>
        </section>


        {/* About */}
				<section id="about" className="my-16">
				   <h2 className="text-3xl font-bold mb-6">About Me</h2>
	           <p className="text-muted-foreground leading-relaxed max-w-3xl">
             Experienced engineer passionate about backend architecture, distributed systems, 
             machine learning pipelines, and high-impact product delivery. 
             Focused on building reliable, scalable systems that solve real problems.
	           </p>
        </section>

        
        {/* Contact */}
        <section id="contact" className="my-16 text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <a
              href="mailto:safra@example.com"
              className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors font-medium"
            >
              Email Me
            </a>
            <a
                          href="/personal-website/resume.pdf"
              download
              className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-md transition-colors font-medium"
            >
              Download Resume
            </a>
          </div>
        
        
      <div className="text-muted-foreground">
            <p className="mb-2">safra@example.com</p>
            <p>
              <a 
                href="https://linkedin.com/in/safra" 
                className="text-accent hover:text-accent-hover underline"
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