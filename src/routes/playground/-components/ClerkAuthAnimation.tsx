import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Center } from "@/components/every-layout-components/Center";
import { Cluster } from "@/components/every-layout-components/Cluster";
import { Card } from "@/components/ui/card";
import { Body } from "@/components/ui/Typography/Body";
import { cn } from "@/lib/utils";

export const ClerkAuthAnimation = ({ digits }: { digits: number[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [fadeOut, setFadeOut] = useState(false);
	const [isHovering, setIsHovering] = useState(false);
	const [isTransitioning, setIsTransitioning] = useState(false);
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const fadeOutRef = useRef<NodeJS.Timeout | null>(null);

	const startAnimation = useCallback(() => {
		// Clear any existing timers first
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
		if (fadeOutRef.current) {
			clearTimeout(fadeOutRef.current);
			fadeOutRef.current = null;
		}

		// Reset fadeOut state when starting animation
		setFadeOut(false);

		// Reset the active index to start from the beginning
		setActiveIndex(0);

		// Only show glow if we're not in a transition state
		if (isTransitioning) {
			setIsTransitioning(false);
		}

		// Start a new timer that increments the activeIndex every 0.4 seconds
		timerRef.current = setInterval(() => {
			setActiveIndex((prev) => {
				// When we reach the last digit
				if (prev >= digits.length - 1) {
					// Clear the current interval to stop incrementing
					if (timerRef.current) {
						clearInterval(timerRef.current);
						timerRef.current = null;
					}

					// Set fadeOut to true to trigger the fade out animation
					setFadeOut(true);

					// After 1 second, reset and restart the animation if still hovering
					fadeOutRef.current = setTimeout(() => {
						// If still hovering, restart the cycle
						if (isHovering) {
							// Set transitioning state to hide the glow during position change
							setIsTransitioning(true);
							setFadeOut(false);
							setActiveIndex(0);
							// Small delay before starting the new animation to ensure glow is hidden during transition
							setTimeout(() => {
								startAnimation();
							}, 50);
						}
					}, 1000);

					return prev;
				}
				return prev + 1;
			});
		}, 400);
	}, [isHovering, isTransitioning, digits]);

	const resetAnimation = useCallback(() => {
		// Clear the interval timer
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
		// Clear any pending fadeOut Timeout
		if (fadeOutRef.current) {
			clearTimeout(fadeOutRef.current);
			fadeOutRef.current = null;
		}
		// Reset the states
		setActiveIndex(0);
		setFadeOut(false);
		setIsTransitioning(false);
	}, []);

	useEffect(() => {
		// Only run animation when hovering
		if (isHovering) {
			startAnimation();
		} else {
			// Clear timers when not hovering
			resetAnimation();
			setIsTransitioning(false);
		}

		// Cleanup function for when component unmounts or dependencies change
		return () => {
			if (timerRef.current) {
				clearInterval(timerRef.current);
				timerRef.current = null;
			}
			if (fadeOutRef.current) {
				clearTimeout(fadeOutRef.current);
				fadeOutRef.current = null;
			}
		};
	}, [isHovering, startAnimation, resetAnimation]);

	return (
		<Card
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
		>
			<Center>
				<Cluster clusterSpace="16px" className="relative pt-10 pb-16">
					{digits.map((digit, idx) => (
						<div
							key={digit}
							className={cn(
								"relative flex h-10 w-8 cursor-default items-center justify-center rounded-md bg-gradient-to-br from-neutral-100 to-neutral-50 dark:from-neutral-800 dark:to-neutral-800",
							)}
							style={{
								boxShadow:
									"0 10px 19px 4px rgb(0 0 0 / 0.16), 0 -10px 16px -4px rgb(255 255 255 / 0.04), 0 0 0 1px rgb(255 255 255 / 0.01), 0 1px 0 0 rgb(255 255 255 / 0.02)",
							}}
						>
							{activeIndex === digits.length - 1 && (
								<motion.div
									layout
									className="absolute inset-0 rounded-md border border-primary "
									initial={{
										opacity: 0,
										scale: 1.3,
										filter: "blur(0px)",
									}}
									animate={{
										opacity: [0, 1, 0],
										scale: [0.8, 1.3],
										filter: "blur(2px)",
									}}
									transition={{
										duration: 0.5,
										ease: "easeInOut",
										delay: 0.35,
									}}
									style={{
										boxShadow: "inset 0 0 2px rgba(242, 81, 24, 0.5)",
									}}
								/>
							)}

							{activeIndex === idx && isHovering && !isTransitioning && (
								<motion.div
									initial={{
										scale: 1.25,
										opacity: 0,
									}}
									animate={{
										scale: [1.25, 1, fadeOut ? 1 : 1.25],
										opacity: fadeOut ? 0 : 1,
									}}
									transition={{
										type: "spring",
										stiffness: 500,
										damping: 30,
										scale: {
											type: "keyframes",
											duration: fadeOut ? 0.35 : 0.5,
										},
									}}
									className="absolute inset-0 rounded-md border border-primary brightness-100 dark:bg-primary/25"
									style={{
										boxShadow: `
		                  inset 0 0 24px rgba(242, 81, 24, 0.2),
											0 0 12px rgba(242, 81, 24, 0.2),
											0 0 16px rgba(242, 81, 24, 0.4)
								`,
									}}
								>
									<svg
										viewBox=" 0 0 20 20"
										className="absolute inset-0 h-full w-full"
										strokeWidth="0.4"
									>
										<title>Glow</title>
										<path
											d="M 3 19 h 14"
											className=" stroke-0.5 stroke-primary brightness-150 dark:stroke-primary"
										/>
									</svg>
								</motion.div>
							)}
							<motion.span
								initial={{ opacity: 0, scale: 1 }}
								animate={{
									opacity: isHovering
										? fadeOut
											? 0
											: idx <= activeIndex
												? 1
												: 0
										: 0,
									scale: isHovering ? (fadeOut ? [1, 0.8, 1.25, 0.4] : 1) : 1,
								}}
								transition={{
									duration: 0.3,
									ease: "easeInOut",
									delay: fadeOut ? 0.1 : 0,
								}}
							>
								{digit}
							</motion.span>
						</div>
					))}
				</Cluster>
			</Center>

			<h3 className="text-pretty font-semibold text-primary lg:text-sm ">
				Multifactor Authentication
			</h3>
			<Body className="mt-2 text-pretty text-neutral-600 text-sm/5 lg:text-sm/5 dark:text-neutral-400">
				Each user's self-serve multifactor settings are enforced automatically
				during sign-in.
			</Body>
		</Card>
	);
};
