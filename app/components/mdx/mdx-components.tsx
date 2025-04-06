import { useMDXComponent } from "@content-collections/mdx/react";
import type * as React from "react";

import { cn } from "@/lib/utils";
import {
	GradientTitleMdx,
	type GradientTitleMdxProps,
} from "../ui/gradient-title";

const components = {
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			className={cn(
				"mt-2 scroll-m-20 font-bold font-heading text-4xl tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn(
				"mt-10 scroll-m-20 border-b pb-1 font-heading font-semibold text-3xl tracking-tight first:mt-0",
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn(
				"mt-8 scroll-m-20 font-heading font-semibold text-2xl tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn(
				"mt-8 scroll-m-20 font-heading font-semibold text-xl tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h5
			className={cn(
				"mt-8 scroll-m-20 font-heading font-semibold text-lg tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h6
			className={cn(
				"mt-8 scroll-m-20 font-heading font-semibold text-base tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
		<a
			className={cn("font-medium underline underline-offset-4", className)}
			{...props}
		/>
	),
	p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
		<p
			className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		/>
	),
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
		<li className={cn("mt-2", className)} {...props} />
	),
	blockquote: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLQuoteElement>) => (
		<blockquote
			className={cn(
				"mt-6 border-l-2 pl-6 italic [&>*]:text-muted-foreground",
				className,
			)}
			{...props}
		/>
	),
	img: ({
		className,
		alt,
		...props
	}: React.ImgHTMLAttributes<HTMLImageElement>) => (
		<img
			{...props}
			alt={alt ?? ""}
			className={cn("rounded-md border", className)}
		/>
	),
	hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-y-auto">
			<table className={cn("w-full", className)} {...props} />
		</div>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={cn("m-0 border-t p-0 even:bg-muted", className)}
			{...props}
		/>
	),
	th: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
		<th
			className={cn(
				"border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	td: ({
		className,
		...props
	}: React.HTMLAttributes<HTMLTableDataCellElement>) => (
		<td
			className={cn(
				"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
			{...props}
		/>
	),
	pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
		<pre
			className={cn(
				" overflow-x-auto rounded-lg border bg-black py-4",
				className,
			)}
			{...props}
		/>
	),
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={cn(
				"relative rounded border px-[0.3rem] py-[0.2rem] font-mono text-sm",
				className,
			)}
			{...props}
		/>
	),
	GradientTitleMdx: ({ className, ...props }: GradientTitleMdxProps) => (
		<GradientTitleMdx className={cn(className)} {...props} />
	),
};

interface MdxProps {
	code: string;
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code);

	return <Component components={components} />;
}
