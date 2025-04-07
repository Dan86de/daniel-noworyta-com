import { useMDXComponent } from "@content-collections/mdx/react";
import type * as React from "react";

import { cn } from "@/lib/utils";
import {
	GradientTitleMdx,
	type GradientTitleMdxProps,
} from "../ui/gradient-title";
import { Code, Strong, Text, TextLink } from "../catalyst/text";
import type { Link } from "@/components/catalyst/link";
import { Divider } from "../catalyst/divider";
import { Table, TableCell, TableHeader, TableRow } from "../catalyst/table";

const components = {
	h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h1
			className={cn(
				"mt-2 scroll-m-20 font-heading font-medium text-4xl tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h2
			className={cn(
				"mt-10 scroll-m-20 border-b pb-1 font-heading font-medium text-3xl tracking-tight first:mt-0",
				className,
			)}
			{...props}
		/>
	),
	h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h3
			className={cn(
				"mt-8 scroll-m-20 font-heading font-medium text-2xl tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h4
			className={cn(
				"mt-8 scroll-m-20 font-heading font-medium text-xl tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h5
			className={cn(
				"mt-8 scroll-m-20 font-heading font-medium text-lg tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
		<h6
			className={cn(
				"mt-8 scroll-m-20 font-heading font-medium text-base tracking-tight",
				className,
			)}
			{...props}
		/>
	),
	a: ({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) => (
		<TextLink className={className} {...props} />
	),
	p: ({ className, ...props }: React.ComponentPropsWithoutRef<"p">) => (
		<Text className={className} {...props} />
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
	hr: ({ ...props }: React.ComponentPropsWithoutRef<typeof Divider>) => (
		<Divider {...props} soft />
	),
	table: ({
		className,
		...props
	}: React.ComponentPropsWithoutRef<typeof Table>) => (
		<Table className={className} {...props} />
	),
	tr: ({
		className,
		...props
	}: React.ComponentPropsWithoutRef<typeof TableRow>) => (
		<TableRow className={className} {...props} />
	),
	th: ({
		className,
		...props
	}: React.ComponentPropsWithoutRef<typeof TableHeader>) => (
		<TableHeader className={className} {...props} />
	),
	td: ({
		className,
		...props
	}: React.ComponentPropsWithoutRef<typeof TableCell>) => (
		<TableCell className={className} {...props} />
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
	code: ({ className, ...props }: React.ComponentPropsWithoutRef<"code">) => (
		<Code className={className} {...props} />
	),
	strong: ({
		className,
		...props
	}: React.ComponentPropsWithoutRef<"strong">) => (
		<Strong className={className} {...props} />
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
