import { MDXContent } from "@content-collections/mdx/react";
import type * as React from "react";
import { cn } from "@/lib/utils";
import { Strong } from "../catalyst/text";
import { Divider } from "../catalyst/divider";

const components = {
	hr: ({ ...props }: React.ComponentPropsWithoutRef<typeof Divider>) => (
		<Divider {...props} soft />
	),
	pre: ({ ...props }: React.HTMLAttributes<HTMLPreElement>) => (
		<div className="sm:-mx-[2.5rem] relative grid grid-cols-[2.5rem_auto_2.5rem] grid-rows-[1px_auto_1px] [--pattern-fg:var(--color-neutral-950)]/5 dark:bg-neutral-950 dark:[--pattern-fg:var(--color-white)]/10">
			<div className="-right-px relative col-start-1 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:8px_8px] bg-fixed" />
			<div className="-left-px relative col-start-3 row-span-full row-start-1 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:8px_8px] bg-fixed" />
			<div className="-bottom-px relative col-span-full col-start-1 row-start-1 h-px bg-(--pattern-fg)" />
			<div className="-top-px relative col-span-full col-start-1 row-start-3 h-px bg-(--pattern-fg)" />
			<pre className={cn("col-start-2 row-start-2 overflow-x-auto")} {...props}>
				{props.children}
			</pre>
		</div>
	),
	strong: ({ ...props }: React.ComponentPropsWithoutRef<"strong">) => (
		<Strong {...props} />
	),
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	return (
		<div className="prose dark:prose-invert prose-neutral prose-lg lg:prose-xl">
			<MDXContent code={code} components={components} />
		</div>
	);
}
