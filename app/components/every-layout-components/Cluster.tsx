import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface ClusterProps {
	children: React.ReactNode;
	clusterSpace?: string;
	className?: string;
}

export const Cluster = ({
	children,
	clusterSpace,
	className,
}: ClusterProps) => {
	return (
		<div
			className={cn("cluster", className)}
			style={{ "--cluster-space": clusterSpace } as CSSProperties}
		>
			{children}
		</div>
	);
};
