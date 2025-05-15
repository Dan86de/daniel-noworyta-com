import { Body } from "@/components/ui/Typography/Body";
import { GradientTitle } from "@/components/ui/gradient-title";
import { Link, createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div className="container mx-auto my-auto h-full max-w-3xl p-4 text-left">
			<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
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
