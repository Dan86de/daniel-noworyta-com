import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { activePages } from "@/lib/pages";
import { cn } from "@/lib/utils";

export const AnimatedTabs = () => {
	const { pathname } = useLocation();
	const currentPage = pathname === "/" ? "home" : pathname.split("/").pop();

	const [activeTab, setActiveTab] = useState(currentPage);

	useEffect(() => {
		setActiveTab(currentPage);
	}, [currentPage]);

	return (
		<div className="flex space-x-4 align-center">
			{activePages.map(({ id, label, to }) => (
				<Link
					key={id}
					to={to}
					className={cn(
						"-mb-3 relative rounded-xs pb-1 font-medium text-sm transition hover:text-primary",
						activeTab === id && "text-primary",
					)}
					style={{
						WebkitTapHighlightColor: "transparent",
					}}
					viewTransition
				>
					{activeTab === id && (
						<motion.span
							layoutId="animated-tabs"
							className="absolute right-0 bottom-0 left-0 h-0.5 bg-primary"
							style={{ borderRadius: 2 }}
							transition={{ type: "spring", stiffness: 200, damping: 20 }}
						/>
					)}
					{label}
				</Link>
			))}
		</div>
	);
};
