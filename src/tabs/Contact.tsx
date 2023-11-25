export default function Contact() {
  return (
    <div className="flex flex-col justify-center w-full border rounded-md border-neutral-600 py-24 space-y-2 text-neutral-100">
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="block"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      </div>

      <p className="text-neutral-400 text-center">
        Reach out to me via email at{" "}
        <a href="mailto:me@ethn.sh" className="text-neutral-300">
          me@ethn.sh
        </a>
      </p>
    </div>
  );
}
