const links = [
  {
    name: "read.cv",
    icon: "https://cdn.ethn.sh/readcv.svg",
    href: "https://read.cv",
  },
  {
    name: "GitHub",
    icon: "https://cdn.ethn.sh/github-mark-white.svg",
    href: "https://github.com/ethndotsh",
  },
];

export default function Links() {
  return (
    <div className="grid gap-2 grid-cols-2">
      {links.map((link) => {
        return (
          <a
            key={link.name}
            target="_blank"
            className="bg-transparent border border-neutral-600 rounded-lg p-2 px-3 hover:scale-[1.01] transition-transform ease"
            href={link.href}
          >
            <div className="flex items-center space-x-2">
              <img src={link.icon} className="w-5 h-5" alt={link.name} />
              <h3 className="text-lg font-medium text-neutral-200">
                {link.name}
              </h3>
            </div>
          </a>
        );
      })}
    </div>
  );
}
