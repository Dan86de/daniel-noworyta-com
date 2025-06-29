import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { allArticles } from "content-collections";
import { Center } from "@/components/every-layout-components/Center";
import { Stack } from "@/components/every-layout-components/Stack";
import { GradientTitle } from "@/components/ui/gradient-title";
import { Body } from "@/components/ui/Typography/Body";
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
		<Center className="mt-10">
			<Stack>
				<Stack>
					<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
						Think. Write. Share.
					</GradientTitle>
					<Body>
						Writing helps me <strong>organize my thoughts</strong> and share
						knowledge. Through articles, I document my journey, share technical
						insights, and help others learn from my experiences in programming
						and technology.
					</Body>
				</Stack>

				{/* Featured articles section (need minimum 3 articles) */}
				{/* <FeaturedArticles articles={articles} /> */}

				{/* All articles */}
				<h2 className="font-medium text-2xl">All articles</h2>

				<AllArticles articles={articles} />
			</Stack>
		</Center>
	);
}
