import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";
interface SidebarProps {
	children: React.ReactNode;
	sidebarGap?: string;
	sidebarWidth?: string;
	contentWidth?: string;
	noStretch?: boolean;
} /**
 *
 * @param sidebarWidth - The width of the sidebar (all possible values for flex-basis).
 * @param sidebarGap - The gap between the sidebar and the main content.
 * @param children - The content to be displayed inside the sidebar.
 * @param contentWidth - The minimum width of the main content (default 50%).
 * @param noStretch - Whether the sidebar should not stretch to fill the available space.
 * @returns
 */
export const Sidebar = ({
	children,
	sidebarGap,
	sidebarWidth,
	contentWidth,
	noStretch = false,
}: SidebarProps) => {
	return (
		<div
			className={cn("sidebar", noStretch && "items-start")}
			style={
				{
					"--sidebar-gap": sidebarGap,
					"--sidebar-width": sidebarWidth,
					"--sidebar-content-min": contentWidth,
				} as CSSProperties
			}
		>
			{children}
		</div>
	);
};
