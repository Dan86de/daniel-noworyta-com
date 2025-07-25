/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as UsesIndexRouteImport } from './routes/uses/index'
import { Route as ProjectsIndexRouteImport } from './routes/projects/index'
import { Route as ProcessIndexRouteImport } from './routes/process/index'
import { Route as PodcastsIndexRouteImport } from './routes/podcasts/index'
import { Route as PlaygroundIndexRouteImport } from './routes/playground/index'
import { Route as NewsletterIndexRouteImport } from './routes/newsletter/index'
import { Route as InvestingIndexRouteImport } from './routes/investing/index'
import { Route as ContactIndexRouteImport } from './routes/contact/index'
import { Route as ArticlesIndexRouteImport } from './routes/articles/index'
import { Route as AboutIndexRouteImport } from './routes/about/index'
import { Route as ArticlesSlugRouteImport } from './routes/articles/$slug'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const UsesIndexRoute = UsesIndexRouteImport.update({
  id: '/uses/',
  path: '/uses/',
  getParentRoute: () => rootRouteImport,
} as any)
const ProjectsIndexRoute = ProjectsIndexRouteImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => rootRouteImport,
} as any)
const ProcessIndexRoute = ProcessIndexRouteImport.update({
  id: '/process/',
  path: '/process/',
  getParentRoute: () => rootRouteImport,
} as any)
const PodcastsIndexRoute = PodcastsIndexRouteImport.update({
  id: '/podcasts/',
  path: '/podcasts/',
  getParentRoute: () => rootRouteImport,
} as any)
const PlaygroundIndexRoute = PlaygroundIndexRouteImport.update({
  id: '/playground/',
  path: '/playground/',
  getParentRoute: () => rootRouteImport,
} as any)
const NewsletterIndexRoute = NewsletterIndexRouteImport.update({
  id: '/newsletter/',
  path: '/newsletter/',
  getParentRoute: () => rootRouteImport,
} as any)
const InvestingIndexRoute = InvestingIndexRouteImport.update({
  id: '/investing/',
  path: '/investing/',
  getParentRoute: () => rootRouteImport,
} as any)
const ContactIndexRoute = ContactIndexRouteImport.update({
  id: '/contact/',
  path: '/contact/',
  getParentRoute: () => rootRouteImport,
} as any)
const ArticlesIndexRoute = ArticlesIndexRouteImport.update({
  id: '/articles/',
  path: '/articles/',
  getParentRoute: () => rootRouteImport,
} as any)
const AboutIndexRoute = AboutIndexRouteImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRouteImport,
} as any)
const ArticlesSlugRoute = ArticlesSlugRouteImport.update({
  id: '/articles/$slug',
  path: '/articles/$slug',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/articles/$slug': typeof ArticlesSlugRoute
  '/about': typeof AboutIndexRoute
  '/articles': typeof ArticlesIndexRoute
  '/contact': typeof ContactIndexRoute
  '/investing': typeof InvestingIndexRoute
  '/newsletter': typeof NewsletterIndexRoute
  '/playground': typeof PlaygroundIndexRoute
  '/podcasts': typeof PodcastsIndexRoute
  '/process': typeof ProcessIndexRoute
  '/projects': typeof ProjectsIndexRoute
  '/uses': typeof UsesIndexRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/articles/$slug': typeof ArticlesSlugRoute
  '/about': typeof AboutIndexRoute
  '/articles': typeof ArticlesIndexRoute
  '/contact': typeof ContactIndexRoute
  '/investing': typeof InvestingIndexRoute
  '/newsletter': typeof NewsletterIndexRoute
  '/playground': typeof PlaygroundIndexRoute
  '/podcasts': typeof PodcastsIndexRoute
  '/process': typeof ProcessIndexRoute
  '/projects': typeof ProjectsIndexRoute
  '/uses': typeof UsesIndexRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/articles/$slug': typeof ArticlesSlugRoute
  '/about/': typeof AboutIndexRoute
  '/articles/': typeof ArticlesIndexRoute
  '/contact/': typeof ContactIndexRoute
  '/investing/': typeof InvestingIndexRoute
  '/newsletter/': typeof NewsletterIndexRoute
  '/playground/': typeof PlaygroundIndexRoute
  '/podcasts/': typeof PodcastsIndexRoute
  '/process/': typeof ProcessIndexRoute
  '/projects/': typeof ProjectsIndexRoute
  '/uses/': typeof UsesIndexRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/articles/$slug'
    | '/about'
    | '/articles'
    | '/contact'
    | '/investing'
    | '/newsletter'
    | '/playground'
    | '/podcasts'
    | '/process'
    | '/projects'
    | '/uses'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/articles/$slug'
    | '/about'
    | '/articles'
    | '/contact'
    | '/investing'
    | '/newsletter'
    | '/playground'
    | '/podcasts'
    | '/process'
    | '/projects'
    | '/uses'
  id:
    | '__root__'
    | '/'
    | '/articles/$slug'
    | '/about/'
    | '/articles/'
    | '/contact/'
    | '/investing/'
    | '/newsletter/'
    | '/playground/'
    | '/podcasts/'
    | '/process/'
    | '/projects/'
    | '/uses/'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  ArticlesSlugRoute: typeof ArticlesSlugRoute
  AboutIndexRoute: typeof AboutIndexRoute
  ArticlesIndexRoute: typeof ArticlesIndexRoute
  ContactIndexRoute: typeof ContactIndexRoute
  InvestingIndexRoute: typeof InvestingIndexRoute
  NewsletterIndexRoute: typeof NewsletterIndexRoute
  PlaygroundIndexRoute: typeof PlaygroundIndexRoute
  PodcastsIndexRoute: typeof PodcastsIndexRoute
  ProcessIndexRoute: typeof ProcessIndexRoute
  ProjectsIndexRoute: typeof ProjectsIndexRoute
  UsesIndexRoute: typeof UsesIndexRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/uses/': {
      id: '/uses/'
      path: '/uses'
      fullPath: '/uses'
      preLoaderRoute: typeof UsesIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/process/': {
      id: '/process/'
      path: '/process'
      fullPath: '/process'
      preLoaderRoute: typeof ProcessIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/podcasts/': {
      id: '/podcasts/'
      path: '/podcasts'
      fullPath: '/podcasts'
      preLoaderRoute: typeof PodcastsIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/playground/': {
      id: '/playground/'
      path: '/playground'
      fullPath: '/playground'
      preLoaderRoute: typeof PlaygroundIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/newsletter/': {
      id: '/newsletter/'
      path: '/newsletter'
      fullPath: '/newsletter'
      preLoaderRoute: typeof NewsletterIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/investing/': {
      id: '/investing/'
      path: '/investing'
      fullPath: '/investing'
      preLoaderRoute: typeof InvestingIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/contact/': {
      id: '/contact/'
      path: '/contact'
      fullPath: '/contact'
      preLoaderRoute: typeof ContactIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/articles/': {
      id: '/articles/'
      path: '/articles'
      fullPath: '/articles'
      preLoaderRoute: typeof ArticlesIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/articles/$slug': {
      id: '/articles/$slug'
      path: '/articles/$slug'
      fullPath: '/articles/$slug'
      preLoaderRoute: typeof ArticlesSlugRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  ArticlesSlugRoute: ArticlesSlugRoute,
  AboutIndexRoute: AboutIndexRoute,
  ArticlesIndexRoute: ArticlesIndexRoute,
  ContactIndexRoute: ContactIndexRoute,
  InvestingIndexRoute: InvestingIndexRoute,
  NewsletterIndexRoute: NewsletterIndexRoute,
  PlaygroundIndexRoute: PlaygroundIndexRoute,
  PodcastsIndexRoute: PodcastsIndexRoute,
  ProcessIndexRoute: ProcessIndexRoute,
  ProjectsIndexRoute: ProjectsIndexRoute,
  UsesIndexRoute: UsesIndexRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
