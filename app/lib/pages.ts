import { linkOptions } from "@tanstack/react-router";

export const pages = linkOptions([
  { id: "home", label: "Home", to: "/", status: "active" },
  { id: "about", label: "About", to: "/about", status: "active" },
  { id: "articles", label: "Articles", to: "/articles", status: "draft" },
  { id: "newsletter", label: "Newsletter", to: "/newsletter", status: "draft" },
  { id: "projects", label: "Projects", to: "/projects", status: "draft" },
  { id: "podcasts", label: "Podcasts", to: "/podcasts", status: "draft" },
  { id: "uses", label: "Uses", to: "/uses", status: "draft" },
  { id: "investing", label: "Investing", to: "/investing", status: "draft" },
]);

export const activePages = pages.filter((page) => page.status === "active");
