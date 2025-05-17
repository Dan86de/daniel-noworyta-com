import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface CoverProps {
	children: React.ReactNode;
	className?: string;
	minHeight?: string;
}

export const Cover = ({ children, className, minHeight }: CoverProps) => {
	return (
		<div
			className={cn("cover", className && className)}
			style={{ "--cover-min-block-size": minHeight } as CSSProperties}
		>
			{children}
		</div>
	);
};
