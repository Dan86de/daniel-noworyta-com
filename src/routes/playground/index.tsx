import { createFileRoute } from "@tanstack/react-router";
import { Cover } from "@/components/every-layout-components/Cover";
import { D3Button } from "@/components/playground/3d-button/3d-button";

export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Cover className="flex-grow" minHeight="100%">
			<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
			<D3Button />
		</Cover>
	);
}

export default RouteComponent;
