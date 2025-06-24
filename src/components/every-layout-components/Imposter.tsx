import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface ImposterProps {
	children?: React.ReactNode;
	imposterMargin?: string;
	fixed?: boolean;
	breakout?: boolean;
	className?: string;
}

/**
 *
 * @param children - The content to be displayed within the Imposter component.
 * @param imposterMargin - The margin to be applied to the Imposter component.
 * @param fixed - Whether the Imposter component should be fixed.
 * @param breakout - Whether the Imposter component should break out of its container.
 * @param className - Additional CSS classes to be applied to the Imposter component.
 * @returns Imposter component.
 */
export const Imposter = ({
	children,
	imposterMargin,
	fixed,
	breakout,
	className,
}: ImposterProps) => {
	return (
		<div
			className={cn(
				"imposter",
				fixed && "fixed",
				breakout && "contain",
				className,
			)}
			style={{ "--imposter-margin": imposterMargin } as CSSProperties}
		>
			{children}
		</div>
	);
};
