import { Center } from "@/components/every-layout-components/Center";
import { Cover } from "@/components/every-layout-components/Cover";
import { Stack } from "@/components/every-layout-components/Stack";
import { Card } from "@/components/ui/playground/card";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Cover className="flex-grow" minHeight="100%">
			<Center gutters={2}>
				<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
				<Stack>
					<Card />
				</Stack>
			</Center>
		</Cover>
	);
}
