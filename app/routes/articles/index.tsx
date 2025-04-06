import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute, useLoaderData } from "@tanstack/react-router";
import { Body } from "@/components/ui/Typography/Body";
import { allArticles } from "content-collections";
import { Link } from "@/components/catalyst/link";
import { Badge } from "@/components/catalyst/badge";

export const Route = createFileRoute("/articles/")({
	component: RouteComponent,
	loader: () => {
		const articles = allArticles;
		return articles;
	},
});

function RouteComponent() {
	const articles = useLoaderData({ from: "/articles/" });

	console.log({ articles });

	return (
		<div className="mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Think. Write. Share.
			</GradientTitle>
			<Body>
				Writing helps me <strong>organize my thoughts</strong> and share
				knowledge. Through articles, I document my journey, share technical
				insights, and help others learn from my experiences in programming and
				technology.
			</Body>

			<h2 className="my-4 font-medium text-2xl">Featured articles</h2>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{articles.map((article) => (
					<Link
						to={"/articles/$slug"}
						params={{ slug: article.slug }}
						key={article._meta.fileName}
					>
						<Card>
							<CardHeader>
								<CardTitle>{article.title}</CardTitle>
								<div className="mt-2 flex flex-wrap gap-2">
									{article.tags.map((tag) => (
										<Badge key={tag} color="primary">
											{tag}
										</Badge>
									))}
								</div>
								<CardDescription>{article.summary}</CardDescription>
							</CardHeader>
							<CardContent>
								<img
									className="h-40 w-full rounded-xl object-cover"
									src="/images/articles_example_images/cgn_1.webp"
									alt="Article 1"
									width={100}
									height={100}
								/>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
}
