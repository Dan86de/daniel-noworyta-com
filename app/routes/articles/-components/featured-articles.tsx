import { ArticleCard } from "@/components/ui/article-card/article-card";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import type { Article } from "content-collections";
import { Link } from "@/components/catalyst/link";
export const FeaturedArticles = ({ articles }: { articles: Article[] }) => {
	return (
		<>
			{/* Featured articles */}
			<h2 className="my-4 font-medium text-2xl">Featured articles</h2>

			<div className="grid grid-cols-1 divide-neutral-200 border-neutral-200 border-x md:grid-cols-2 md:divide-x dark:divide-neutral-800 dark:border-neutral-800">
				<div className="relative overflow-hidden">
					<div className="-z-10 absolute inset-0 flex items-center justify-center ">
						<div className="absolute z-10 h-[97%] w-[98%] bg-background md:w-[97%]" />
						<div
							style={
								{
									position: "absolute",
									height: "100%",
									width: "100%",
									inset: "0px",
									color: "transparent",
									"--primary": "#f12711",
									"--secondary": "#f5af19",
								} as CSSProperties
							}
							className={cn(
								"bg-[linear-gradient(135deg,var(--primary)_0%,var(--secondary)_100%)] ",
							)}
						/>
					</div>
					<Link
						to={"/articles/$slug"}
						params={{ slug: articles[0].slug }}
						key={articles[0]._meta.fileName}
						className="group relative inset-0 block h-full w-full p-2 transition duration-300 ease-in-out hover:bg-neutral-200/20 dark:hover:bg-neutral-800/50"
					>
						<ArticleCard
							title={articles[0].title}
							description={articles[0].summary}
							author={{
								name: articles[0].author,
								avatarUrl: articles[0].authorAvatar,
							}}
							tags={articles[0].tags}
							type={articles[0].type}
							className="mx-auto flex h-full w-full flex-col justify-between rounded-none border-0 p-4 shadow-none "
						/>
					</Link>
				</div>
				<div className="flex flex-col">
					<Link
						to={"/articles/$slug"}
						params={{ slug: articles[1].slug }}
						key={articles[1]._meta.fileName}
						className="group h-full w-full"
					>
						<ArticleCard
							title={articles[1].title}
							description={articles[1].summary}
							author={{
								name: articles[1].author,
								avatarUrl: articles[1].authorAvatar,
							}}
							tags={articles[1].tags}
							type={articles[1].type}
							className="transition duration-300 ease-in-out group-hover:bg-neutral-200/20 md:border-t dark:group-hover:bg-neutral-800/50"
						/>
					</Link>
					<Link
						to={"/articles/$slug"}
						params={{ slug: articles[2].slug }}
						key={articles[2]._meta.fileName}
						className="group h-full w-full"
					>
						<ArticleCard
							title={articles[2].title}
							description={articles[2].summary}
							author={{
								name: articles[2].author,
								avatarUrl: articles[2].authorAvatar,
							}}
							tags={articles[2].tags}
							type={articles[2].type}
							className="transition duration-300 ease-in-out group-hover:bg-neutral-200/20 dark:group-hover:bg-neutral-800/50"
						/>
					</Link>
				</div>
			</div>
		</>
	);
};
