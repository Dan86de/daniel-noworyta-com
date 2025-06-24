/// <reference types="vite/client" />

import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from "@tanstack/react-router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import type { ReactNode } from "react";

import { StackedLayout } from "@/components/catalyst/stacked-layout";
import { Header } from "@/components/header";
import { MobileMenu } from "@/components/ui/mobile-menu";
import appCss from "@/lib/styles/app.css?url";
import { ThemeProvider } from "@/lib/styles/theme-provider";
export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Daniel Noworyta",
				description: "Obsessed with user and developer experience.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{ rel: "icon", href: "/favicon-light.ico", type: "image/x-icon" },
			{
				rel: "icon",
				href: "/favicon-dark.ico",
				type: "image/x-icon",
				media: "(prefers-color-scheme: light)",
			},
			{
				rel: "icon",
				href: "/favicon-light.ico",
				type: "image/x-icon",
				media: "(prefers-color-scheme: dark)",
			},
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased transition duration-250">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<StackedLayout navbar={<Header />} sidebar={<MobileMenu />}>
						{children}
					</StackedLayout>
				</ThemeProvider>
				<Scripts />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
