import { cn } from "@/lib/utils";
import { ArticleTypeLabel } from "../article-card/article-type-label";
import { Avatar } from "@/components/catalyst/avatar";
import { Link } from "@/components/catalyst/link";

interface ArticleListItemProps {
	title: string;
	description: string;
	author: { name: string; avatarUrl: string };
	tags: string[];
	type: "article" | "tutorial";
	publishedAt: string;
	slug: string;
	className?: string;
}

export const ArticleListItem = ({
	title,
	description,
	author,
	tags,
	type,
	publishedAt,
	slug,
	className,
}: ArticleListItemProps) => {
	return (
		<Link
			to={"/articles/$slug"}
			params={{ slug }}
			className={cn(
				"w-full cursor-pointer bg-neutral-100",
				"flex space-x-8 p-4",
				"border-neutral-200 border-b last:border-b-0 dark:border-neutral-800",
				"dark:bg-neutral-950 dark:shadow-[inset_0_1px,inset_0_0_0_1px] dark:shadow-white/[0.025]",
				"hover:bg-neutral-200/20 dark:hover:bg-neutral-800/50",
				"transition-all duration-250 ease-in-out",
				className,
			)}
		>
			<div className="flex grow-1 flex-col space-y-2 p-0 transition-all duration-250 ease-in-out">
				<div className="flex flex-col space-y-0.5 p-0">
					<h3 className="fluid-lg font-semibold text-lg leading-tight tracking-tight">
						{title}
					</h3>
				</div>
				<div className="mt-2">
					<p className="max-w-prose text-xs opacity-75 sm:text-sm">
						{description}
					</p>
				</div>
				<div className="mt-2 flex items-center gap-2 font-normal">
					<Avatar
						src={author.avatarUrl}
						alt={author.name}
						className="h-8 w-8"
					/>
					<span className="text-sm">{author.name}</span>
					<div className="flex items-center gap-1">
						<div className="inline-flex items-center rounded-full border border-neutral-300 p-0.5 px-2 pt-1 font-semibold text-[10px] text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-neutral-600">
							{"# "}
							{tags[0]}
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className="mt-2 flex flex-col items-start justify-between gap-2 p-0 text-sm">
					<ArticleTypeLabel type={type} size="sm" />
					<span className="text-xs">{publishedAt}</span>
				</div>
			</div>
		</Link>
	);
};
