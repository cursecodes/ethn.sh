import Projects from "./Projects.tsx";
import Links from "./Links.tsx";
import Work from "./Work.tsx";
import Contact from "./Contact.tsx";
import { useStore } from "@nanostores/react";
import { selectedTab, type Tab } from "../tabStore";

export default function TabManager() {
  const $selectedTab = useStore(selectedTab);

  switch ($selectedTab) {
    case "projects":
      return <Projects />;
    case "work":
      return <Work />;
    case "contact":
      return <Contact />;
    case "links":
      return <Links />;
    default:
      return <div>Working on this...</div>;
  }
}
