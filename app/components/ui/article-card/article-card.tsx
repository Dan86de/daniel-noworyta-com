import { Avatar } from "@/components/catalyst/avatar";
import { ArticleTypeLabel } from "@/components/ui/article-card/article-type-label";
import { cn } from "@/lib/utils";

interface ArticleCardProps {
	title: string;
	description: string;
	author: {
		name: string;
		avatarUrl: string;
	};
	tags: string[];
	type: "article" | "tutorial";
	className?: string;
}

export const ArticleCard = ({
	title,
	description,
	author,
	tags,
	type,
	className,
}: ArticleCardProps) => {
	return (
		<div
			className={cn(
				"w-full cursor-pointer bg-neutral-100",
				"flex flex-col p-6",
				"border-neutral-200 border-b dark:border-neutral-800",
				"dark:bg-neutral-950 dark:shadow-[inset_0_1px,inset_0_0_0_1px] dark:shadow-white/[0.025]",
				className,
			)}
		>
			<div>
				<div className="flex flex-col space-y-1.5 p-0">
					<ArticleTypeLabel type={type} />
					<h3 className="fluid-xl font-semibold text-lg leading-tight tracking-tight">
						{title}
					</h3>
				</div>
				<div>
					<p className="text-balance pt-4 text-sm opacity-75 sm:text-base">
						{description}
					</p>
				</div>
			</div>
			<div>
				<div className="mt-8 flex items-center justify-between gap-1.5 p-0 text-sm">
					<div className="flex items-center gap-2 font-normal">
						<Avatar
							src={author.avatarUrl}
							alt={author.name}
							className="h-10 w-10"
						/>
						<span className="text-lg">{author.name}</span>
					</div>
					<div className="flex items-center gap-1">
						<div className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 pt-1 font-semibold text-foreground text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-neutral-600">
							{"# "}
							{tags[0]}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
