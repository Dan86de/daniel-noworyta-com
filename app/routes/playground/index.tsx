import { Box } from "@/components/every-layout-components/Box";
import { Center } from "@/components/every-layout-components/Center";
import { Cover } from "@/components/every-layout-components/Cover";
import { Grid } from "@/components/every-layout-components/Grid";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Cover className="flex-grow" minHeight="100%">
			<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
			<Grid minWidth="204px" className="mx-auto max-w-7xl px-2">
				<Box padding="0">
					<Box invert borderWidth="0">
						"Test Header"
					</Box>
					<Box borderWidth="0">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					</Box>
				</Box>
				<Box padding="0">
					<Box invert borderWidth="0">
						"Test Header"
					</Box>
					<Box borderWidth="0">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					</Box>
				</Box>
				<Box padding="0">
					<Box invert borderWidth="0">
						"Test Header"
					</Box>
					<Box borderWidth="0">
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					</Box>
				</Box>
			</Grid>
		</Cover>
	);
}
