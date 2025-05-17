import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface CenterProps {
	children: ReactNode;
	maxWidth?: string | number;
	centerText?: boolean;
	gutters?: string | number;
	intrinsic?: boolean;
	className?: string;
}

/**
 *
 * @param children - The content to be centered.
 * @param centerText - Whether to center the text.
 * @param intrinsic - Whether to use intrinsic sizing.
 * @param maxWidth - The maximum width of the center.
 * @param className - Additional CSS classes.
 * @returns The centered content.
 */
export const Center = ({
	children,
	gutters,
	centerText = false,
	intrinsic = false,
	maxWidth,
	className,
}: CenterProps) => {
	return (
		<div
			className={cn(
				"center",
				centerText && "text-center",
				intrinsic && "flex flex-col items-center",
				className,
			)}
			style={
				{
					"--center-padding": gutters,
					"--center-max-width": maxWidth,
				} as CSSProperties
			}
		>
			{children}
		</div>
	);
};
