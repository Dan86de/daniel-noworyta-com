import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface BoxProps {
	children: ReactNode;
	padding?: string;
	borderWidth?: string;
	invert?: boolean;
	className?: string;
}

/**
 * The Box component is a generic container that provides padding, border width,
 * and an optional inverted theme.
 * @param children - The content to be placed inside the box.
 * @param padding - The padding to apply to the box.
 * @param borderWidth - The border width to apply to the box (must be with unit like 1px).
 * @param className - The class name to apply to the box.
 *
 * More on Every Layout [Box](https://every-layout.dev/layouts/box/).
 **/
export const Box = ({
	children,
	padding,
	borderWidth,
	invert,
	className,
}: BoxProps) => {
	return (
		<div
			className={cn(invert ? "box-invert" : "box", className)}
			style={
				{
					"--box-padding": padding,
					"--box-border-width": borderWidth,
				} as CSSProperties
			}
		>
			{children}
		</div>
	);
};
