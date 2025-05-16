import { Stack } from "@/components/every-layout-components/Stack";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="relative flex h-full flex-1 flex-col items-center justify-center gap-4">
			<div className="-z-10 mask-radial-at-center mask-radial-from-20% absolute inset-0 h-full w-full bg-[radial-gradient(circle,#73737350_0.1px,transparent_1px)] bg-[size:8px_8px]" />
			<Stack space={"1rem"}>
				<div>{"<!-- child 1 -->"}</div>
				<div>{"<!-- child 2 -->"}</div>
				<div>{"<!-- child 3 -->"}</div>
				<div>{"<!-- child 4 -->"}</div>
				<div>{"<!-- child 5 -->"}</div>
				<Stack space={"5rem"}>
					<div>{"<!-- child 1.1 -->"}</div>
					<div>{"<!-- child 1.2 -->"}</div>
					<div>{"<!-- child 1.3 -->"}</div>
					<div>{"<!-- child 1.4 -->"}</div>
				</Stack>
			</Stack>
		</div>
	);
}
