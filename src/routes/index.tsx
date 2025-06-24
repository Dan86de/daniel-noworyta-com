import { Strong } from "@/components/catalyst/text";
import { Box } from "@/components/every-layout-components/Box";
import { Center } from "@/components/every-layout-components/Center";
import { Cluster } from "@/components/every-layout-components/Cluster";
import { Cover } from "@/components/every-layout-components/Cover";
import { Stack } from "@/components/every-layout-components/Stack";
import { Body } from "@/components/ui/Typography/Body";
import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<Cover className="flex-grow" minHeight="100%">
			<div>
				<Center>
					<div className="-z-10 mask-radial-at-center mask-radial-from-10% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
					<Stack>
						<GradientTitle className="text-2xl md:text-5xl">
							Daniel Noworyta
						</GradientTitle>
						<Stack space="1rem">
							<Box borderWidth="0" padding="0" className="bg-transparent">
								<Body>
									<strong>
										Making better software at{" "}
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
							</Box>
							<Box borderWidth="0" padding="0" className="bg-transparent">
								<span className="-mt-3 block text-balance font-light text-sm opacity-80">
									Obsessed with good design and user experience.
								</span>
							</Box>
						</Stack>
					</Stack>
				</Center>
			</div>
		</Cover>
	);
}
