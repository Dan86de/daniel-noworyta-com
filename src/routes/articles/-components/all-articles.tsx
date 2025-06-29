import { Stack } from "@/components/every-layout-components/Stack";
import { ArticleListItem } from "@/components/ui/article-list-item/article-list-item";
import type { Article } from "content-collections";

export const AllArticles = ({ articles }: { articles: Article[] }) => {
	return (
		<Stack space="0">
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
		</Stack>
	);
};
