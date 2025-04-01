import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/uses/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Tools. Tech. Workflow.
			</GradientTitle>
			<p>
				Every developer&apos;s setup is unique. Here&apos;s a detailed look at
				the <strong>tools and technologies</strong> I use daily to stay
				productive. From hardware to software, these are the essentials that
				power my <strong>development workflow</strong>.
			</p>
		</div>
	);
}
