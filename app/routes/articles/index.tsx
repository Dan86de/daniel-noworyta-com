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
import { Text, TextLink } from "@/components/catalyst/text";
import { Divider } from "@/components/catalyst/divider";

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

			{/* Featured articles */}
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
										<Badge key={tag}>{tag}</Badge>
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

			{/* All articles */}
			<div className="mx-auto max-w-7xl">
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<div className="mt-16 space-y-12 lg:mt-20">
						<h2 className="my-4 font-medium text-2xl">All articles</h2>
						{articles.map((article) => (
							<>
								<article
									key={article._meta.fileName}
									className="relative isolate flex flex-col gap-8 lg:flex-row"
								>
									<div className="relative aspect-video sm:aspect-2/1 lg:w-64 lg:shrink-0">
										<img
											alt=""
											// TODO: Change this!
											src={"/images/articles_example_images/cgn_1.webp"}
											className="absolute inset-0 size-full rounded-2xl object-cover"
										/>
									</div>
									<div>
										<div className="flex items-center gap-x-4 text-xs">
											<time dateTime={article.date} className="opacity-75">
												{article.date}
											</time>
											<Badge>{article.tags[0]}</Badge>
										</div>
										<div className="group relative max-w-xl">
											<h3 className="mt-3 font-semibold text-lg/6">
												<a href={`/articles/${article.slug}`}>
													<span className="absolute inset-0" />
													{article.title}
												</a>
											</h3>
											<Text className="mt-5 text-sm/6">{article.summary}</Text>
										</div>
									</div>
								</article>
								<Divider key={article._meta.fileName} soft />
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
