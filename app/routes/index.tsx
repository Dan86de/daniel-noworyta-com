import { Body } from "@/components/ui/Typography/Body";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GradientTitle } from "@/components/ui/gradient-title";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="container relative mx-auto my-auto h-full max-w-3xl p-4 text-left">
			<GradientTitle className="text-2xl md:text-5xl">
				Daniel Noworyta
			</GradientTitle>
			<Body className="mt-4">
				<strong>
					Currently making better software at{" "}
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
			</Body>
			<span className="-mt-3 block">
				Obsessed with good design and user experience.
			</span>
		</div>
	);
}
