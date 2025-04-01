import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
export const Route = createFileRoute("/about/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="container mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Developer. Father. Creator.
			</GradientTitle>
			<p className={"text-neutral-300"}>
				From dreaming of becoming a programmer to{" "}
				<strong>making it reality</strong> in 2020. Now I&apos;m sharing my
				journey through <strong>teaching and creating</strong>, helping others
				transition into tech while building useful things along the way.
			</p>
			<div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center">
				<motion.img
					initial={{
						opacity: 0,
						filter: "blur(10px) brightness(20%) grayscale(100%)",
						scale: 0.9,
					}}
					animate={{
						opacity: 1,
						filter: "blur(0px) brightness(130%) grayscale(100%)",
						scale: [0.9, 1.2, 1],
					}}
					transition={{ duration: 0.3 }}
					alt="Daniel Noworyta"
					src="/images/avatar.webp"
					width="336"
					height="336"
					className="mx-auto aspect-square max-w-80 rounded-lg"
				/>
				<div className="leading-relaxed">
					<p className=" text-neutral-300">
						<strong>Hey, I&apos;m Daniel Noworyta.</strong> For most of my life,
						I pushed aside my dream of becoming a programmer and doing what I
						love. In 2020, I fulfilled that dream and became a programmer.
					</p>
					<p className=" text-neutral-300">
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
					</p>
					<p className=" text-neutral-300">
						I love dark mode and side projects. When I&apos;m not working, I
						like playing football, reading, and eating pizza.
					</p>
				</div>
			</div>
		</div>
	);
}
