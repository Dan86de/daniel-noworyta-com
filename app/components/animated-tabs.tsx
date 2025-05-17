import { activePages } from "@/lib/pages";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const AnimatedTabs = () => {
	const { pathname } = useLocation();
	const currentPage = pathname === "/" ? "home" : pathname.split("/").pop();

	const [activeTab, setActiveTab] = useState(currentPage);

	useEffect(() => {
		setActiveTab(currentPage);
	}, [currentPage]);

	return (
		<div className="flex space-x-4">
			{activePages.map(({ id, label, to }) => (
				<Link
					key={id}
					to={to}
					className={cn(
						"relative rounded-full pb-1.5 font-medium text-sm outline-primary/60 transition hover:text-primary focus-visible:outline-2",
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
							transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
						/>
					)}
					{label}
				</Link>
			))}
		</div>
	);
};
