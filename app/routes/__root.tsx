import type { ReactNode } from "react";
import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
	ScriptOnce,
} from "@tanstack/react-router";

import appCss from "@/lib/styles/app.css?url";
import { Header } from "@/components/header";
import { StackedLayout } from "@/components/catalyst/stacked-layout";
import { MobileMenu } from "@/components/ui/mobile-menu";
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
		<html lang="en" suppressHydrationWarning>
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
			</body>
		</html>
	);
}
