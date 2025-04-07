import { ArticleListItem } from "@/components/ui/article-list-item/article-list-item";
import type { Article } from "content-collections";

export const AllArticles = ({ articles }: { articles: Article[] }) => {
	return (
		<div className="mt-8">
			<h2 className="font-medium text-2xl">All articles</h2>

			<div className="mt-4 flex flex-col divide-neutral-200 border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
				{articles.map((article) => (
					<ArticleListItem
						key={article.slug}
						title={article.title}
						description={article.summary}
						author={{
							name: article.author,
							avatarUrl: article.authorAvatar,
						}}
						tags={article.tags}
						type={article.type}
						publishedAt={article.date}
						slug={article.slug}
					/>
				))}
			</div>
		</div>
	);
};
