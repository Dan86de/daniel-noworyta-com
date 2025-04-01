import { Link, linkOptions, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const tabs = linkOptions([
	{ id: "about", label: "About", to: "/about" },
	{ id: "articles", label: "Articles", to: "/articles" },
	{ id: "projects", label: "Projects", to: "/projects" },
	{ id: "podcasts", label: "Podcasts", to: "/podcasts" },
	{ id: "uses", label: "Uses", to: "/uses" },
	{ id: "investing", label: "Investing", to: "/investing" },
]);

export const AnimatedTabs = () => {
	const { pathname } = useLocation();
	const currentPage = pathname.split("/").pop();

	const [activeTab, setActiveTab] = useState(currentPage);

	useEffect(() => {
		setActiveTab(currentPage);
	}, [currentPage]);

	return (
		<div className="flex space-x-1">
			{tabs.map((tab) => (
				<Link
					key={tab.id}
					to={`/${tab.id}`}
					className={`${
						activeTab === tab.id ? "" : "hover:text-primary"
					} relative rounded-full px-3 py-1.5 font-medium text-sm outline-primary/40 transition focus-visible:outline-2`}
					style={{
						WebkitTapHighlightColor: "transparent",
					}}
					viewTransition
				>
					{activeTab === tab.id && (
						<motion.span
							layoutId="bubble"
							className="absolute right-0 bottom-0 left-0 h-0.5 bg-primary"
							style={{ borderRadius: 2 }}
							transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
						/>
					)}
					{tab.label}
				</Link>
			))}
		</div>
	);
};
