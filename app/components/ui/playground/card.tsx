import { Avatar } from "@/components/catalyst/avatar";
import { cn } from "@/lib/utils";

const Article = {
	title: "Vercel AI SDK Tutorial",
	description:
		"Build any LLM app in TypeScript with Vercel's AI SDK. Learn streaming, structured outputs, tool calls and agents.",
	author: {
		name: "Daniel Noworyta",
		avatarUrl: "/images/avatar_1.webp",
	},
	tags: ["Vercel AI SDK"],
	type: "article",
};

const Tutorial = {
	title: "Vercel AI SDK Tutorial",
	description:
		"Build any LLM app in TypeScript with Vercel's AI SDK. Learn streaming, structured outputs, tool calls and agents.",
	author: {
		name: "Daniel Noworyta",
		avatarUrl: "/images/avatar_1.webp",
	},
	tags: ["Vercel AI SDK"],
	type: "tutorial",
};

export const Card = () => {
	return (
		<div className="max-w-2xl">
			<div
				className={cn(
					"w-full rounded-xl bg-neutral-100",
					"shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
					"flex flex-col p-6",
					"dark:bg-neutral-900 dark:shadow-[inset_0_1px,inset_0_0_0_1px] dark:shadow-white/[0.025]",
				)}
			>
				<div>
					<div className="flex flex-col space-y-1.5 p-0">
						<p className="inline-flex items-center gap-1 pb-1.5 font-medium font-mono text-primary text-xs uppercase">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4"
							>
								<title>Article</title>
								<path
									d="M7.25 4.75V19.25M12.25 4.75H5.75C5.19772 4.75 4.75 5.19771 4.75 5.75V18.25C4.75 18.8023 5.19772 19.25 5.75 19.25H13.25M14.75 16.25V6.75C14.75 5.64543 15.6454 4.75 16.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V16.25L17 19.25L14.75 16.25Z"
									stroke="currentColor"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							{Article.type}
						</p>
						<h3 className="fluid-xl font-semibold text-lg leading-tight tracking-tight">
							{Article.title}
						</h3>
					</div>
					<div>
						<p className="text-balance pt-4 text-sm opacity-75 sm:text-base">
							{Article.description}
						</p>
					</div>
				</div>
				<div>
					<div className="mt-8 flex items-center justify-between gap-1.5 p-0 text-sm">
						<div className="flex items-center gap-2 font-normal">
							<Avatar
								src={Article.author.avatarUrl}
								alt={Article.author.name}
								className="h-10 w-10"
							/>
							<span className="text-muted-foreground">
								{Article.author.name}
							</span>
						</div>
						<div className="flex items-center gap-1">
							<div className="inline-flex items-center rounded-full border border-neutral-300 px-2.5 py-0.5 pt-1 font-semibold text-foreground text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:border-neutral-600">
								{"# "}
								{Article.tags[0]}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
