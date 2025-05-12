import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/playground/card";
export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="relative flex h-full flex-1 flex-col items-center justify-center gap-4">
			<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
			<Card />
		</div>
	);
}
