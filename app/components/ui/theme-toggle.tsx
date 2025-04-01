import { useTheme } from "@/lib/hooks/use-theme";
import { SunIcon, MoonIcon } from "lucide-react";
import { motion } from "motion/react";

export function ThemeToggle() {
	const { toggleTheme, theme } = useTheme();

	return (
		<>
			<motion.button
				transition={{
					type: "spring",
					visualDuration: 0.2,
					bounce: 0.2,
					duration: 0.3,
				}}
				onClick={toggleTheme}
				type="button"
				className="flex h-8 w-12 cursor-pointer items-center justify-center rounded-(--toggle-radius) border px-(--toggle-padding) [--toggle-padding:--spacing(1)] [--toggle-radius:var(--radius-2xl)]"
				style={{
					justifyContent: theme === "dark" ? "flex-start" : "flex-end",
				}}
			>
				<span className="touch-target" />

				<motion.div
					layout
					className="flex h-6 w-6 items-center justify-center rounded-[calc(var(--toggle-radius)-var(--toggle-padding))] bg-(--foreground) p-1"
				>
					{theme === "dark" ? (
						<MoonIcon className="fill-(--background) text-(--background)" />
					) : (
						<SunIcon className="fill-(--background) text-(--background)" />
					)}
				</motion.div>
				<span className="sr-only">Toggle theme</span>
			</motion.button>
		</>
	);
}
