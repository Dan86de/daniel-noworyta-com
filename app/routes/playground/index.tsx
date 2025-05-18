import { Box } from "@/components/every-layout-components/Box";
import { Center } from "@/components/every-layout-components/Center";
import { Cover } from "@/components/every-layout-components/Cover";
import { Frame } from "@/components/every-layout-components/Frame";
import { Imposter } from "@/components/every-layout-components/Imposter";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Cover className="flex-grow" minHeight="100%">
			<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
			<Center>
				<Frame className="relative mt-40 w-full border [--frame-d:1] [--frame-n:1] sm:[--frame-d:9] sm:[--frame-n:16]">
					<motion.img
						initial={{
							opacity: 0,
							filter: "blur(10px) brightness(20%) grayscale(100%)",
							scale: 0.7,
							rotate: -30,
						}}
						animate={{
							opacity: 1,
							filter: "blur(0px) brightness(130%) grayscale(100%)",
							scale: [0.7, 1.1, 1],
							rotate: 0,
						}}
						transition={{ duration: 0.4 }}
						alt="Daniel Noworyta"
						src="/images/avatar.webp"
						width="336"
						height="336"
						className={cn("w-full rounded-lg object-cover")}
					/>
					<Imposter>
						<Box>
							"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						</Box>
					</Imposter>
				</Frame>
			</Center>
		</Cover>
	);
}
