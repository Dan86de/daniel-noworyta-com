import { ContentContainer } from "@/components/ui/content-container";
import { FadeUp } from "@/components/ui/fade-up";
import { GradientTitle } from "@/components/ui/gradient-title";
import { Body } from "@/components/ui/Typography/Body";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
export const Route = createFileRoute("/about/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<ContentContainer>
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Developer. Father. Creator.
			</GradientTitle>
			<Body className="max-w-prose text-balance">
				From dreaming of becoming a programmer to{" "}
				<strong>making it a reality in 2020</strong>, I&apos;m now sharing my
				journey through teaching and creating. I help others transition into
				tech while building useful things along the way.
			</Body>
			<div className="mt:2 grid items-center gap-2 sm:grid-cols-3 sm:gap-6 md:items-center">
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
					className={cn("mx-auto aspect-square w-full rounded-lg object-cover")}
				/>

				<FadeUp delay={0.2} className="self-start sm:col-span-2">
					<Body className="max-w-prose">
						<strong>Hey, I&apos;m Daniel Noworyta.</strong> For most of my life,
						I pushed aside my dream of becoming a programmer and doing what I
						love. In 2020, I fulfilled that dream and became a programmer.
					</Body>
					<Body className="max-w-prose">
						I have a{" "}
						<a
							href="https://youtube.com/c/danielnoworyta"
							className="underline"
						>
							channel
						</a>{" "}
						on YouTube where I share my insights and experiences in learning
						programming, transitioning to new fields, and advancing my career in
						IT.
					</Body>
					<Body className="max-w-prose">
						I love dark mode and side projects. When I&apos;m not working, I
						like playing football, reading books, and eating pizza.
					</Body>
				</FadeUp>
			</div>
		</ContentContainer>
	);
}
