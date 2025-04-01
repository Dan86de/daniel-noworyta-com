import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/podcasts/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Listen. Learn. Grow.
			</GradientTitle>
			<p>
				Podcasts are a window into <strong>new perspectives</strong> and
				knowledge. Through conversations and storytelling, I explore tech,
				development, and personal growth. Join me in these{" "}
				<strong>audio adventures</strong> as we learn together.
			</p>
		</div>
	);
}
