import type { ReactNode } from "@tanstack/react-router";
import type { CSSProperties } from "react";

interface SwitcherProps {
	children?: ReactNode;
	containerWidth?: string;
	gap?: string;
}

/**
 *
 * @param children - The children to be displayed within the switcher.
 * @param gap - The space between the children (CSS margin value).
 * @param containerWidth - The containerWidth for the switcher (CSS width value).
 * @returns
 */
export const Switcher = ({ children, gap, containerWidth }: SwitcherProps) => {
	return (
		<div
			className="switcher"
			style={
				{
					"--switcher-gap": gap,
					"--switcher-container-width": containerWidth,
				} as CSSProperties
			}
		>
			{children}
		</div>
	);
};
