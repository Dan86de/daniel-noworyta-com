import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface FrameProps {
	children: ReactNode;
	width?: number;
	height?: number;
	className?: string;
}

/**
 *
 * @param children - The content to be displayed within the frame.
 * @param width - The width of the frame.
 * @param height - The height of the frame.
 * @param className - Additional CSS classes to apply to the frame.
 * @returns
 */
export const Frame = ({ children, width, height, className }: FrameProps) => {
	return (
		<div
			className={cn("frame", className)}
			style={
				{
					"--frame-n": width,
					"--frame-d": height,
				} as CSSProperties
			}
		>
			{children}
		</div>
	);
};
