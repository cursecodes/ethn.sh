import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { selectedTab, type Tab } from "../tabStore";
import { useStore } from "@nanostores/react";

const tabs = [
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
  { id: "links", label: "Links" },
] as {
  id: Tab;
  label: string;
}[];

export function Tabs() {
  const $selectedTab = useStore(selectedTab);

  return (
    <div className="flex space-x-1 mt-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => selectedTab.set(tab.id)}
          className={`${
            $selectedTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
          id="button"
        >
          <span className="z-20 select-none">{tab.label}</span>
          {$selectedTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 -z-10 bg-lime-400/20"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
