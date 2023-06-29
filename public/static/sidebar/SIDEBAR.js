import { HomeIcon } from "@heroicons/react/20/solid";

// this is to store the data for the sidebar

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
];
export const teams = [
  {
    id: 1,
    name: "Your GitHub Projects",
    href: "dashboard/github",
    initial: "G",
    current: false,
  },
];

export const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];
