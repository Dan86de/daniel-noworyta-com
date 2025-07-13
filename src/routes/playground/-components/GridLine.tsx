import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Example of component for highlighting things.
 * @returns
 */
export function GridLines() {
	return (
		<div className="relative aspect-square w-[200px]">
			<div className="absolute inset-0 bg-primary opacity-10"></div>
			<GridLine direction="horizontal" size={12} className="absolute inset-0" />
			<GridLine direction="vertical" size={12} className="absolute inset-0" />
			<GridLine
				direction="horizontal"
				size={12}
				className="absolute bottom-0"
			/>
			<GridLine direction="vertical" size={12} className="absolute right-0" />
		</div>
	);
}

export function GridLine({
	direction,
	color,
	className,
	size = 8,
}: {
	direction: "horizontal" | "vertical";
	className?: string;
	color?: string;
	size?: number;
}) {
	return (
		<div
			data-slot="grid-line"
			data-direction={direction}
			className={cn(`gridLine`, className)}
			style={
				{
					"--color": color,
					...(size && { "--size": `${size}px` }),
				} as CSSProperties
			}
		/>
	);
}
