import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface ClusterProps {
	children: React.ReactNode;
	clusterSpace?: string;
	className?: string;
}

/**
 *
 * @param children - The content to be displayed within the cluster.
 * @param clusterSpace - The space between the cluster items.
 * @param className - Additional CSS classes to apply to the cluster.
 * @returns The rendered cluster component.
 */
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
