import { createFileRoute } from "@tanstack/react-router";
import { Center } from "@/components/every-layout-components/Center";
import { Cover } from "@/components/every-layout-components/Cover";
import { Stack } from "@/components/every-layout-components/Stack";
import { Card } from "@/components/ui/playground/card";
import { cn } from "@/lib/utils";
import { Authentication } from "./-components/Authentication";

export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Cover className="flex-grow" minHeight="100%">
			<div
				className={cn(
					"-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full ",
					"bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]",
				)}
			/>
			<Center>
				<Stack className="max-w-lg">
					<Authentication digits={new Set([4, 2, 6, 6, 8, 9])} />
					<Card />
				</Stack>
			</Center>
		</Cover>
	);
}

export default RouteComponent;
