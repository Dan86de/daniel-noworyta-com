import { useTheme } from "@/lib/hooks/use-theme";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function ThemeToggle({ className }: { className?: string }) {
	const { toggleTheme, theme } = useTheme();

	return (
		<motion.button
			initial={{
				opacity: 0,
				style: {
					justifyContent: theme === "dark" ? "flex-start" : "flex-end",
				},
			}}
			animate={{
				opacity: 1,
			}}
			transition={{
				type: "spring",
				visualDuration: 0.2,
				bounce: 0.2,
				duration: 0.3,
			}}
			onClick={toggleTheme}
			type="button"
			className={cn(
				"relative flex h-6 w-10 cursor-pointer items-center justify-center rounded-(--toggle-radius) border-[1.5px] px-(--toggle-padding) [--toggle-padding:--spacing(0.75)] [--toggle-radius:var(--radius-2xl)]",
				className,
			)}
			style={{
				justifyContent: theme === "dark" ? "flex-start" : "flex-end",
			}}
		>
			<span className="touch-target" />
			<motion.div
				layout
				className="flex h-4 w-4 items-center justify-center rounded-[calc(var(--toggle-radius)-var(--toggle-padding))] bg-(--foreground) p-0.5"
			>
				{theme === "dark" ? (
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="fill-(--background) text-(--background)"
					>
						<title>Moon</title>
						<path
							d="M18.25 15.0314C17.7575 15.1436 17.2459 15.2027 16.7209 15.2027C12.8082 15.2027 9.63607 11.9185 9.63607 7.86709C9.63607 6.75253 9.87614 5.69603 10.3057 4.75C7.12795 5.47387 4.75 8.40659 4.75 11.9143C4.75 15.9657 7.9221 19.25 11.8348 19.25C14.6711 19.25 17.1182 17.5242 18.25 15.0314Z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				) : (
					<svg
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
						className="fill-(--background) text-(--background)"
					>
						<title>Sun</title>
						<circle
							cx="12"
							cy="12"
							r="3.25"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
						/>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M12 2.75V4.25"
						/>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M17.25 6.75L16.0659 7.93416"
						/>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M21.25 12.0001L19.75 12.0001"
						/>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M17.25 17.2501L16.0659 16.066"
						/>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M12 19.75V21.25"
						/>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M7.9341 16.0659L6.74996 17.25"
						/>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M4.25 12.0001L2.75 12.0001"
						/>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M7.93405 7.93423L6.74991 6.75003"
						/>
					</svg>
				)}
			</motion.div>
			<span className="sr-only">Toggle theme</span>
		</motion.button>
	);
}
