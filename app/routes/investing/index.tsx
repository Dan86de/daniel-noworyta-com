import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/investing/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Research. Invest. Grow.
			</GradientTitle>
			<p>
				I believe in m aking informed financial decisions and{" "}
				<strong>growing wealth</strong> through smart investments. Here I share
				my research, strategies, and lessons learned from my journey in the{" "}
				<strong>investment world</strong>.
			</p>
		</div>
	);
}
