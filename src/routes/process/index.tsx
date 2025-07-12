import { createFileRoute } from "@tanstack/react-router";
import { Center } from "@/components/every-layout-components/Center";
import { Cover } from "@/components/every-layout-components/Cover";
import { Grid } from "@/components/every-layout-components/Grid";
import { Stack } from "@/components/every-layout-components/Stack";
import { Card } from "@/components/ui/card";
import { GradientTitle } from "@/components/ui/gradient-title";
import { Body } from "@/components/ui/Typography/Body";

export const Route = createFileRoute("/process/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Cover minHeight="auto" className="w-full">
			<Stack space="4rem">
				<Center className="mt-10">
					<Stack space="0.5rem">
						<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
							The Process.
						</GradientTitle>
						<Body>
							This is the process. Code snippets and ideas flying around in my
							dark green room. I hope they can inspire or help someone out
							there.
						</Body>
					</Stack>
				</Center>
				<div className="mx-auto w-full max-w-[1280px] px-4">
					<Grid className="grid-row-[repeat(2,minmax(0,1fr))]" minWidth="320px">
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
						<Card className="relative aspect-square">
							<p className="absolute top-3 left-3 font-heading font-light text-xs">
								2025/06/11
							</p>
							<p className="absolute top-3 right-3 font-heading font-light text-xs">
								ID 123
							</p>
						</Card>
					</Grid>
				</div>
			</Stack>
		</Cover>
	);
}
