const work = [
  {
    name: "Glist",
    description:
      "Efficient traffic analysis and simulation software for traffic engineers, leveraging artificial intelligence and machine learning. Glist aims to reduce traffic congestion and improve traffic flow across North America.",
    time: "2023 - Present",
  },
  {
    name: "Unnamed Engineering",
    description:
      "A global product studio composed of four teenage programmers made to craft products & tools that make developers' lives more fun and more productive.",
    time: "2023 - Present",
  },
];

export default function Work() {
  return (
    <div className="grid gap-4 grid-cols-1">
      {work.map((work) => {
        return (
          <div className="flex">
            <div
              key={work.name}
              className="bg-transparent border border-neutral-600 rounded-lg p-4"
            >
              <h3 className="text-xl font-semibold text-neutral-200">
                {work.name}
                <span className="text-sm font-mono font-normal ml-2 text-neutral-500">
                  {work.time}
                </span>
              </h3>

              <p className="text-neutral-400 text-sm mt-1">
                {work.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
