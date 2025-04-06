import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { allArticles } from "content-collections";
import { GradientTitle } from "@/components/ui/gradient-title";
import { Mdx } from "@/components/mdx/mdx-components";
import { Badge } from "@/components/catalyst/badge";
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
					<Badge key={tag} color="primary" className="text-xs">
						{tag}
					</Badge>
				))}
			</div>
			<Mdx code={article?.mdx ?? ""} />
		</div>
	);
}
