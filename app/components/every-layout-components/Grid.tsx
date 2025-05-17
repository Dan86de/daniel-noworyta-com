import type { CSSProperties, ReactNode } from "react";

interface GridProps {
	children: ReactNode;
	minWidth?: string;
	gap?: string;
}

/**
 *
 * @param children - The content to be displayed within the grid.
 * @param minWidth - The minimum width of the grid (CSS width value).
 * @param gap - The gap between grid items (CSS gap value).
 * @returns
 */
export const Grid = ({ children, minWidth, gap }: GridProps) => {
	return (
		<div
			className="grid-utility"
			style={
				{ "--grid-min-width": minWidth, "--grid-space": gap } as CSSProperties
			}
		>
			{children}
		</div>
	);
};
