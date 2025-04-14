import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Body } from "@/components/ui/Typography/Body";
import { allArticles } from "content-collections";
import { ContentContainer } from "@/components/ui/content-container";
import { FeaturedArticles } from "./-components/featured-articles";
import { AllArticles } from "./-components/all-articles";

export const Route = createFileRoute("/articles/")({
	component: RouteComponent,
	loader: () => {
		const articles = allArticles;
		return articles;
	},
});

function RouteComponent() {
	const articles = useLoaderData({ from: "/articles/" });

	return (
		<ContentContainer>
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Think. Write. Share.
			</GradientTitle>
			<Body className="max-w-prose text-balance">
				Writing helps me <strong>organize my thoughts</strong> and share
				knowledge. Through articles, I document my journey, share technical
				insights, and help others learn from my experiences in programming and
				technology.
			</Body>

			<FeaturedArticles articles={articles} />

			{/* All articles */}
			<AllArticles articles={articles} />
		</ContentContainer>
	);
}
