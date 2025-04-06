import { ThemeSwitcher } from "@/components/ui/playground/theme-switcher";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/playground/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex h-full flex-1 flex-col items-center justify-center gap-4">
			<ThemeSwitcher />
		</div>
	);
}
