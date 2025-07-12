import { linkOptions } from "@tanstack/react-router";

const isDev = process.env.NODE_ENV === "development";

export const pages = linkOptions([
	{ id: "home", label: "Home", to: "/", status: "active" },
	{ id: "about", label: "About", to: "/about", status: "active" },
	{ id: "articles", label: "Articles", to: "/articles", status: "draft" },
	{ id: "newsletter", label: "Newsletter", to: "/newsletter", status: "draft" },
	{ id: "projects", label: "Projects", to: "/projects", status: "draft" },
	{ id: "podcasts", label: "Podcasts", to: "/podcasts", status: "draft" },
	{ id: "uses", label: "Uses", to: "/uses", status: "draft" },
	{ id: "investing", label: "Investing", to: "/investing", status: "draft" },
	{ id: "process", label: "Process", to: "/process", status: "draft" },
	{
		id: "playground",
		label: "Playground",
		to: "/playground",
		status: isDev ? "active" : "draft",
	},
]);

export const activePages = pages.filter((page) => page.status === "active");
