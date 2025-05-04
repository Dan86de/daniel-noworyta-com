import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { allArticles } from "content-collections";
import { GradientTitle } from "@/components/ui/gradient-title";
import { Mdx } from "@/components/mdx/mdx-components";
import { Badge } from "@/components/catalyst/badge";
import { cn } from "@/lib/utils";
export const Route = createFileRoute("/articles/$slug")({
	component: RouteComponent,
	loader: ({ params }) => {
		const article = allArticles.find((article) => article.slug === params.slug);
		return article;
	},
	notFoundComponent: () => <div>Article not found</div>,
});

function RouteComponent() {
	const article = useLoaderData({ from: "/articles/$slug" });

	return (
		<div className="mx-auto mb-auto h-full max-w-3xl p-4">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				{article?.title}
			</GradientTitle>
			<div className="my-2 flex flex-wrap gap-2">
				{article?.tags.map((tag) => (
					<div
						key={tag}
						className={cn(
							"flex items-center rounded-full border border-neutral-300 p-0.5 px-2 pt-1 font-semibold text-[10px] text-foreground transition-colors ",
							"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
							// DARK MODE
							"dark:border-neutral-600",
						)}
					>
						{"# "}
						{tag}
					</div>
				))}
			</div>
			<Mdx code={article?.mdx ?? ""} />
		</div>
	);
}
