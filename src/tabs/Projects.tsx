const projects = [
  {
    name: "Openbin",
    description:
      "A simple, open-source pastebin alternative. Built for the Supabase LW8 Hackathon.",
    href: "https://openbin.dev",
  },
  {
    name: "TikTok TTS",
    description:
      "A fast and efficient web tool to generate text-to-speech audio using TikTok APIs.",
    href: "https://tts.ethn.sh",
  },
  {
    name: "Metrik",
    description: "An automated operations platform for Roblox developers.",
    href: "https://metrik.app",
  },
];

export default function Projects() {
  return (
    <div className="grid gap-4 grid-cols-2">
      {projects.map((project) => {
        return (
          <a
            key={project.name}
            target="_blank"
            className="bg-transparent border border-neutral-600 rounded-lg p-4 hover:scale-[1.01] transition-transform ease"
            href={project.href}
          >
            <h3 className="text-xl font-semibold text-neutral-200">
              {project.name}
            </h3>
            <p className="text-neutral-400 text-sm mt-1">
              {project.description}
            </p>
          </a>
        );
      })}
      <div className="bg-transparent flex items-center justify-center text-sm italic opacity-60">
        <p>And I'm always working on something new...</p>
      </div>
    </div>
  );
}
