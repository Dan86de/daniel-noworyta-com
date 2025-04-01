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

// export default function LayoutAnimation() {
// 	const [isOn, setIsOn] = useState(false)

// 	const toggleSwitch = () => setIsOn(!isOn)

// 	return (
// 			<button
// 					className="toggle-container"
// 					style={{
// 							...container,
// 							justifyContent: "flex-" + (isOn ? "start" : "end"),
// 					}}
// 					onClick={toggleSwitch}
// 			>
// 					<motion.div
// 							className="toggle-handle"
// 							style={handle}
// 							layout
// 							transition={{
// 									type: "spring",
// 									visualDuration: 0.2,
// 									bounce: 0.2,
// 							}}
// 					/>
// 			</button>
// 	)
// }

// /**
// * ==============   Styles   ================
// */

// const container = {
// 	width: 100,
// 	height: 50,
// 	backgroundColor: "var(--hue-3-transparent)",
// 	borderRadius: 50,
// 	cursor: "pointer",
// 	display: "flex",
// 	padding: 10,
// }

// const handle = {
// 	width: 50,
// 	height: 50,
// 	backgroundColor: "#9911ff",
// 	borderRadius: "50%",
// }
