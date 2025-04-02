/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as IndexImport } from "./routes/index";
import { Route as UsesIndexImport } from "./routes/uses/index";
import { Route as ProjectsIndexImport } from "./routes/projects/index";
import { Route as PodcastsIndexImport } from "./routes/podcasts/index";
import { Route as InvestingIndexImport } from "./routes/investing/index";
import { Route as ArticlesIndexImport } from "./routes/articles/index";
import { Route as AboutIndexImport } from "./routes/about/index";

// Create/Update Routes

const IndexRoute = IndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => rootRoute,
} as any);

const UsesIndexRoute = UsesIndexImport.update({
	id: "/uses/",
	path: "/uses/",
	getParentRoute: () => rootRoute,
} as any);

const ProjectsIndexRoute = ProjectsIndexImport.update({
	id: "/projects/",
	path: "/projects/",
	getParentRoute: () => rootRoute,
} as any);

const PodcastsIndexRoute = PodcastsIndexImport.update({
	id: "/podcasts/",
	path: "/podcasts/",
	getParentRoute: () => rootRoute,
} as any);

const InvestingIndexRoute = InvestingIndexImport.update({
	id: "/investing/",
	path: "/investing/",
	getParentRoute: () => rootRoute,
} as any);

const ArticlesIndexRoute = ArticlesIndexImport.update({
	id: "/articles/",
	path: "/articles/",
	getParentRoute: () => rootRoute,
} as any);

const AboutIndexRoute = AboutIndexImport.update({
	id: "/about/",
	path: "/about/",
	getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/": {
			id: "/";
			path: "/";
			fullPath: "/";
			preLoaderRoute: typeof IndexImport;
			parentRoute: typeof rootRoute;
		};
		"/about/": {
			id: "/about/";
			path: "/about";
			fullPath: "/about";
			preLoaderRoute: typeof AboutIndexImport;
			parentRoute: typeof rootRoute;
		};
		"/articles/": {
			id: "/articles/";
			path: "/articles";
			fullPath: "/articles";
			preLoaderRoute: typeof ArticlesIndexImport;
			parentRoute: typeof rootRoute;
		};
		"/investing/": {
			id: "/investing/";
			path: "/investing";
			fullPath: "/investing";
			preLoaderRoute: typeof InvestingIndexImport;
			parentRoute: typeof rootRoute;
		};
		"/podcasts/": {
			id: "/podcasts/";
			path: "/podcasts";
			fullPath: "/podcasts";
			preLoaderRoute: typeof PodcastsIndexImport;
			parentRoute: typeof rootRoute;
		};
		"/projects/": {
			id: "/projects/";
			path: "/projects";
			fullPath: "/projects";
			preLoaderRoute: typeof ProjectsIndexImport;
			parentRoute: typeof rootRoute;
		};
		"/uses/": {
			id: "/uses/";
			path: "/uses";
			fullPath: "/uses";
			preLoaderRoute: typeof UsesIndexImport;
			parentRoute: typeof rootRoute;
		};
	}
}

// Create and export the route tree

export interface FileRoutesByFullPath {
	"/": typeof IndexRoute;
	"/about": typeof AboutIndexRoute;
	"/articles": typeof ArticlesIndexRoute;
	"/investing": typeof InvestingIndexRoute;
	"/podcasts": typeof PodcastsIndexRoute;
	"/projects": typeof ProjectsIndexRoute;
	"/uses": typeof UsesIndexRoute;
}

export interface FileRoutesByTo {
	"/": typeof IndexRoute;
	"/about": typeof AboutIndexRoute;
	"/articles": typeof ArticlesIndexRoute;
	"/investing": typeof InvestingIndexRoute;
	"/podcasts": typeof PodcastsIndexRoute;
	"/projects": typeof ProjectsIndexRoute;
	"/uses": typeof UsesIndexRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/": typeof IndexRoute;
	"/about/": typeof AboutIndexRoute;
	"/articles/": typeof ArticlesIndexRoute;
	"/investing/": typeof InvestingIndexRoute;
	"/podcasts/": typeof PodcastsIndexRoute;
	"/projects/": typeof ProjectsIndexRoute;
	"/uses/": typeof UsesIndexRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths:
		| "/"
		| "/about"
		| "/articles"
		| "/investing"
		| "/podcasts"
		| "/projects"
		| "/uses";
	fileRoutesByTo: FileRoutesByTo;
	to:
		| "/"
		| "/about"
		| "/articles"
		| "/investing"
		| "/podcasts"
		| "/projects"
		| "/uses";
	id:
		| "__root__"
		| "/"
		| "/about/"
		| "/articles/"
		| "/investing/"
		| "/podcasts/"
		| "/projects/"
		| "/uses/";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	IndexRoute: typeof IndexRoute;
	AboutIndexRoute: typeof AboutIndexRoute;
	ArticlesIndexRoute: typeof ArticlesIndexRoute;
	InvestingIndexRoute: typeof InvestingIndexRoute;
	PodcastsIndexRoute: typeof PodcastsIndexRoute;
	ProjectsIndexRoute: typeof ProjectsIndexRoute;
	UsesIndexRoute: typeof UsesIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
	IndexRoute: IndexRoute,
	AboutIndexRoute: AboutIndexRoute,
	ArticlesIndexRoute: ArticlesIndexRoute,
	InvestingIndexRoute: InvestingIndexRoute,
	PodcastsIndexRoute: PodcastsIndexRoute,
	ProjectsIndexRoute: ProjectsIndexRoute,
	UsesIndexRoute: UsesIndexRoute,
};

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about/",
        "/articles/",
        "/investing/",
        "/podcasts/",
        "/projects/",
        "/uses/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about/": {
      "filePath": "about/index.tsx"
    },
    "/articles/": {
      "filePath": "articles/index.tsx"
    },
    "/investing/": {
      "filePath": "investing/index.tsx"
    },
    "/podcasts/": {
      "filePath": "podcasts/index.tsx"
    },
    "/projects/": {
      "filePath": "projects/index.tsx"
    },
    "/uses/": {
      "filePath": "uses/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
