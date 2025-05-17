import { Box } from "@/components/every-layout-components/Box";
import { Center } from "@/components/every-layout-components/Center";
import { Cover } from "@/components/every-layout-components/Cover";
import { Grid } from "@/components/every-layout-components/Grid";
import { Sidebar } from "@/components/every-layout-components/Sidebar";
import { Switcher } from "@/components/every-layout-components/Switcher";
import { Body } from "@/components/ui/Typography/Body";
import { Card } from "@/components/ui/playground/card";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Cover className="flex-grow" minHeight="100%">
			<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
			<Grid minWidth="328px" gap="10px">
				<Box>
					<Card />
				</Box>
				<Box>
					<Card />
				</Box>
				<Box>
					<Card />
				</Box>
				<Box>
					<Card />
				</Box>
				<Box>
					<Card />
				</Box>
				<Box>
					<Card />
				</Box>
			</Grid>
		</Cover>
	);
}
