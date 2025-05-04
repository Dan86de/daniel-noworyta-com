"use client";

import * as Headless from "@headlessui/react";
import type React from "react";
import { useState } from "react";
import { NavbarItem } from "./navbar";
import { Footer } from "@/components/footer";

function OpenMenuIcon() {
	return (
		<svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
			<path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
		</svg>
	);
}

function MobileSidebar({
	open,
	close,
	children,
}: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
	return (
		<Headless.Dialog open={open} onClose={close} className="lg:hidden">
			<Headless.DialogBackdrop
				transition
				className="fixed inset-0 bg-(--foreground)/30 backdrop-blur-[1.5px] transition data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in"
			/>
			<Headless.DialogPanel
				transition
				className="fixed top-0 right-0 h-full w-full max-w-80 bg-(--background) transition-transform duration-300 ease-in-out data-closed:translate-x-full"
			>
				<div className="flex h-full flex-col shadow-xs ring-1 ring-neutral-950/5 dark:ring-white/10">
					{children}
				</div>
			</Headless.DialogPanel>
		</Headless.Dialog>
	);
}

export function StackedLayout({
	navbar,
	sidebar,
	children,
}: React.PropsWithChildren<{
	navbar: React.ReactNode;
	sidebar: React.ReactNode;
}>) {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<div className="relative isolate flex min-h-svh w-full flex-col">
			{/* Sidebar on mobile */}
			<MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
				{sidebar}
			</MobileSidebar>

			{/* Navbar */}
			<header className="flex items-center">
				<div className="min-w-0 flex-1">{navbar}</div>
				<div className="p-2 lg:hidden">
					<NavbarItem
						onClick={() => setShowSidebar(true)}
						aria-label="Open navigation"
					>
						<OpenMenuIcon />
					</NavbarItem>
				</div>
			</header>

			{/* Content */}
			<main className="flex flex-1 flex-col pb-2 lg:px-2">{children}</main>

			{/* Footer */}
			<Footer />
		</div>
	);
}
