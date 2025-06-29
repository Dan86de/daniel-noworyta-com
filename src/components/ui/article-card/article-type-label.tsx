import { cn } from "@/lib/utils";
import { useCallback } from "react";

export const ArticleTypeLabel = ({
	type,
	size = "md",
}: {
	type: "article" | "tutorial";
	size?: "md" | "sm";
}) => {
	const getIcon = useCallback(() => {
		if (type === "article") {
			return (
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={cn("h-4 w-4", size === "sm" && "h-3 w-3")}
				>
					<title>Article</title>
					<path
						d="M7.25 4.75V19.25M12.25 4.75H5.75C5.19772 4.75 4.75 5.19771 4.75 5.75V18.25C4.75 18.8023 5.19772 19.25 5.75 19.25H13.25M14.75 16.25V6.75C14.75 5.64543 15.6454 4.75 16.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V16.25L17 19.25L14.75 16.25Z"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			);
		}
		return (
			<svg
				width="24"
				height="24"
				fill="none"
				viewBox="0 0 24 24"
				className={cn("h-4 w-4", size === "sm" && "h-3 w-3")}
			>
				<title>Map</title>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z"
				/>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z"
				/>
				<path
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="1.5"
					d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z"
				/>
			</svg>
		);
	}, [type, size]);

	return (
		<p
			className={cn(
				"inline-flex items-center gap-1 font-medium font-mono text-primary",
				size === "md" ? "pb-1.5 text-sm" : "pb-1 text-xs",
				"uppercase",
			)}
		>
			{getIcon()}
			{type}
		</p>
	);
};
