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

	console.log(articles);

	return (
		<ContentContainer className="max-w-prose">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Think. Write. Share.
			</GradientTitle>
			<Body className="text-balance">
				Writing helps me <strong>organize my thoughts</strong> and share
				knowledge. Through articles, I document my journey, share technical
				insights, and help others learn from my experiences in programming and
				technology.
			</Body>

			{/* Featured articles section (need minimum 3 articles) */}
			{/* <FeaturedArticles articles={articles} /> */}

			{/* All articles */}
			<AllArticles articles={articles} />
		</ContentContainer>
	);
}
