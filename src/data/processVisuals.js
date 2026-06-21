import ideateImg from "../assets/process/ideate.webp";
import designImg from "../assets/process/design.webp";
import developImg from "../assets/process/develop.webp";
import testImg from "../assets/process/test.webp";
import launchImg from "../assets/process/launch.webp";
import supportImg from "../assets/process/support.webp";
import marketingImg from "../assets/process/marketing.webp";
import strategyImg from "../assets/process/strategy.webp";

export const processVisuals = {
  ideate: {
    image: ideateImg,
    overlay: "from-amber-600/70 via-orange-500/50 to-rose-500/30",
    glow: "group-hover:shadow-[0_24px_60px_-20px_rgba(251,146,60,0.45)]",
    ring: "group-hover:ring-amber-400/30",
  },
  design: {
    image: designImg,
    overlay: "from-violet-600/70 via-purple-500/50 to-fuchsia-500/30",
    glow: "group-hover:shadow-[0_24px_60px_-20px_rgba(168,85,247,0.45)]",
    ring: "group-hover:ring-purple-400/30",
  },
  develop: {
    image: developImg,
    overlay: "from-blue-600/70 via-cyan-500/50 to-teal-500/30",
    glow: "group-hover:shadow-[0_24px_60px_-20px_rgba(59,130,246,0.45)]",
    ring: "group-hover:ring-cyan-400/30",
  },
  test: {
    image: testImg,
    overlay: "from-emerald-600/70 via-green-500/50 to-lime-500/30",
    glow: "group-hover:shadow-[0_24px_60px_-20px_rgba(34,197,94,0.45)]",
    ring: "group-hover:ring-emerald-400/30",
  },
  launch: {
    image: launchImg,
    overlay: "from-indigo-600/70 via-blue-500/50 to-sky-500/30",
    glow: "group-hover:shadow-[0_24px_60px_-20px_rgba(99,102,241,0.45)]",
    ring: "group-hover:ring-indigo-400/30",
  },
  support: {
    image: supportImg,
    overlay: "from-cyan-600/70 via-teal-500/50 to-blue-500/30",
    glow: "group-hover:shadow-[0_24px_60px_-20px_rgba(20,184,166,0.45)]",
    ring: "group-hover:ring-teal-400/30",
  },
  marketing: {
    image: marketingImg,
    overlay: "from-pink-600/70 via-rose-500/50 to-orange-500/30",
    glow: "group-hover:shadow-[0_24px_60px_-20px_rgba(236,72,153,0.45)]",
    ring: "group-hover:ring-pink-400/30",
  },
  strategy: {
    image: strategyImg,
    overlay: "from-slate-600/70 via-indigo-500/50 to-violet-500/30",
    glow: "group-hover:shadow-[0_24px_60px_-20px_rgba(129,140,248,0.45)]",
    ring: "group-hover:ring-indigo-400/30",
  },
};

const visualOrder = ["ideate", "design", "develop", "test", "launch", "support", "marketing", "strategy"];

export function resolveProcessVisual(title, index = 0) {
  const text = title.toLowerCase();

  if (/campaign|marketing|ads|creative/.test(text)) return processVisuals.marketing;
  if (/test|qa|quality/.test(text)) return processVisuals.test;
  if (/support|partnership|maintain|ongoing/.test(text)) return processVisuals.support;
  if (/launch|deploy|release|growth/.test(text)) return processVisuals.launch;
  if (/optimiz|scale|report|analytics/.test(text)) return processVisuals.strategy;
  if (/design|prototype|wireframe|ux|ui|content|architecture/.test(text)) return processVisuals.design;
  if (/develop|implement|build|execution|engineering|coding/.test(text)) return processVisuals.develop;
  if (/strategy|planning|roadmap|consult/.test(text)) return processVisuals.strategy;
  if (/discovery|research|assessment|audit|ideate|analysis/.test(text)) return processVisuals.ideate;

  return processVisuals[visualOrder[index % visualOrder.length]];
}

export const homeProcessSteps = [
  {
    number: "01",
    title: "Ideate",
    description:
      "We collaborate with you to define the vision, strategy, and core objectives that will drive your product's success.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Expert UX/UI design that balances aesthetics with functionality, creating intuitive experiences users love.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Scalable, robust development using modern tech stacks, ensuring clean code and optimal performance.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "Rigorous quality assurance and testing across all platforms to ensure reliability and superior user experience.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Strategic deployment with optimization, monitoring, and launch marketing to maximize impact and reach.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "Ongoing maintenance, updates, and optimization to keep your product performing at peak levels.",
  },
];
