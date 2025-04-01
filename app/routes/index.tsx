import { createFileRoute, Link } from "@tanstack/react-router";
import { GradientTitle } from "@/components/ui/gradient-title";
import { motion } from "framer-motion";
export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="container mx-auto my-auto h-full max-w-3xl p-4 text-left">
			<GradientTitle className="text-xl md:text-5xl">
				Daniel Noworyta
			</GradientTitle>
			<p className="mt-4">
				<strong>
					Software Developer at{" "}
					<motion.a
						initial={{ opacity: 0, filter: "blur(10px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						transition={{ duration: 0.3 }}
						href="https://vaillant.com"
						target="blank"
						className="text-vaillant"
					>
						Vaillant
					</motion.a>
				</strong>
			</p>
			<span className="-mt-3 block">
				Obsessed with user and developer experience
			</span>
		</div>
	);
}
