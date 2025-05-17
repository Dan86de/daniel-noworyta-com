import { Avatar } from "@/components/catalyst/avatar";
import { Link } from "@/components/catalyst/link";
import { ArticleTypeLabel } from "@/components/ui/article-card/article-type-label";
import { cn } from "@/lib/utils";

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
				"w-full cursor-pointer",
				"flex space-x-12 py-4",
				// "border-neutral-200 border-b last:border-b-0 dark:border-neutral-800",
				"dark:shadow-[inset_0_1px,inset_0_0_0_1px] dark:shadow-white/[0.025]",
				"hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50",
				"transition-all duration-250",
				className,
			)}
		>
			<div className="flex grow-1 flex-col space-y-2">
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
					<div className="hidden items-center gap-1 md:flex">
						{tags.map((tag) => (
							<div
								key={tag}
								className={cn(
									"flex items-center rounded-full border border-neutral-300 p-0.5 px-2 pt-1 font-semibold text-[10px] text-foreground",
									"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
									// DARK MODE
									"dark:border-neutral-600",
								)}
							>
								{"# "}
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
			<div>
				<div className="flex flex-col items-start justify-between gap-2 p-0 text-sm md:mt-2">
					<ArticleTypeLabel type={type} size="sm" />
					<span className="text-xs">{publishedAt}</span>
				</div>
			</div>
		</Link>
	);
};
