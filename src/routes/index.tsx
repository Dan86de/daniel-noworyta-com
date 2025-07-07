import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Box } from "@/components/every-layout-components/Box";
import { Center } from "@/components/every-layout-components/Center";
import { Cluster } from "@/components/every-layout-components/Cluster";
import { Cover } from "@/components/every-layout-components/Cover";
import { Stack } from "@/components/every-layout-components/Stack";
import { GradientTitle } from "@/components/ui/gradient-title";
import { D3Button } from "@/components/ui/playground/3d-button/3d-button";
import { Body } from "@/components/ui/Typography/Body";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const openYouTubeChannel = () => {
		window.open(
			"https://www.youtube.com/channel/UCfiwERhmAaYkYy_Hwfke_7w",
			"_blank",
		);
	};
	return (
		<Cover className="flex-grow" minHeight="100%">
			<div>
				<Center>
					<div className="-z-10 mask-radial-at-center mask-radial-from-10% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
					<Cluster>
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

						<D3Button
							label={"YouTube"}
							className={
								"mx-auto cursor-pointer select-none [--3d-button-color:var(--color-yt)] md:ml-44"
							}
							onClick={openYouTubeChannel}
						/>
					</Cluster>
				</Center>
			</div>
		</Cover>
	);
}
