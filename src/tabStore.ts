import { atom } from "nanostores";

export type Tab = "projects" | "writing" | "work" | "contact" | "links";

export const selectedTab = atom<Tab>("projects");
