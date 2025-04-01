import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Ideas Made Real.
			</GradientTitle>
			<p>
				Every idea has potential to become something{" "}
				<strong>meaningful and impactful</strong>. Here I showcase my journey of
				turning concepts into reality through{" "}
				<strong>code and creativity</strong>. These projects represent my
				continuous learning and growth as a developer.
			</p>
		</div>
	);
}
