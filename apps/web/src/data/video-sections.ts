import {
  BarChart3,
  Bot,
  BrainCircuit,
  CloudUpload,
  Code2,
  Cpu,
  CpuIcon,
  CreditCard,
  Database,
  DatabaseZap,
  FileCode2,
  Gauge,
  Globe,
  HardDrive,
  HardDriveDownload,
  LayoutTemplate,
  PlusIcon,
  Server,
  Workflow,
} from "lucide-react";

export const videoSections = [
  {
    slug: "llm",
    tag: "LLM Providers",
    icon: Bot,
    description:
      "Explore tutorials on integrating and fine-tuning large language models for your AI apps and agents.",
  },
  {
    slug: "agents",
    tag: "AI Agents",
    icon: Cpu,
    description:
      "Learn how to build autonomous agents that reason, plan, and act using modern AI frameworks.",
  },
  {
    slug: "workflows",
    tag: "Workflows & Orchestration",
    icon: Workflow,
    description:
      "Visualize and automate multi-step AI workflows with tools for coordination and reasoning.",
  },
  {
    slug: "vector",
    tag: "Vector Databases",
    icon: DatabaseZap,
    description:
      "Implement semantic search, retrieval-augmented generation (RAG), and memory using vector databases.",
  },
  {
    slug: "memory",
    tag: "Memory & Context",
    icon: BrainCircuit,
    description:
      "Add persistent memory and contextual learning to your AI agents for richer interactions.",
  },
  {
    slug: "framework",
    tag: "Frameworks",
    icon: CpuIcon,
    description:
      "Step-by-step guides on using AI frameworks for model serving, orchestration, and pipeline building.",
  },
  {
    slug: "api",
    tag: "APIs & Integrations",
    icon: Code2,
    description:
      "Integrate AI features into your apps with robust API examples and SDK walkthroughs.",
  },
  {
    slug: "deployment",
    tag: "Deployment",
    icon: CloudUpload,
    description:
      "Deploy AI models and agents efficiently to production using scalable and cost-effective infrastructure.",
  },
  {
    slug: "monitoring",
    tag: "Monitoring & Observability",
    icon: BarChart3,
    description:
      "Track, debug, and optimize AI performance across applications and pipelines.",
  },
  {
    slug: "ratelimit",
    tag: "Rate Limiting",
    icon: Gauge,
    description:
      "Learn to control API consumption, protect resources, and manage quotas for LLM-heavy apps.",
  },
  {
    slug: "payments",
    tag: "Payments & Monetization",
    icon: CreditCard,
    description:
      "Add billing, subscription, and usage-based payment systems to your AI products.",
  },
  {
    slug: "ui",
    tag: "UI Components",
    icon: LayoutTemplate,
    description:
      "Design beautiful, intuitive interfaces for interacting with AI agents and models.",
  },
  {
    slug: "coding",
    tag: "AI Coding Tools",
    icon: FileCode2,
    description:
      "Watch coding tutorials and walkthroughs that teach building and optimizing AI-powered apps.",
  },
  {
    slug: "database",
    tag: "Databases",
    icon: Database,
    description:
      "Learn database best practices for storing embeddings, model data, and user interactions.",
  },
  {
    slug: "web",
    tag: "Web Search",
    icon: Globe,
    description:
      "Add real-time web access to your AI agents for up-to-date reasoning and insights.",
  },
];
