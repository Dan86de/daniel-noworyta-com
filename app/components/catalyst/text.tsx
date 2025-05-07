import clsx from "clsx";
import { Link } from "./link";

export function Text({
	className,
	...props
}: React.ComponentPropsWithoutRef<"p">) {
	return (
		<p
			data-slot="text"
			{...props}
			className={clsx(className, "text-neutral-700 dark:text-neutral-300")}
		/>
	);
}

export function TextLink({
	className,
	...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
	return (
		<Link
			{...props}
			className={clsx(
				className,
				"text-neutral-950 underline decoration-neutral-950/50 data-hover:decoration-neutral-950 dark:text-white dark:decoration-white/50 dark:data-hover:decoration-white",
			)}
		/>
	);
}

export function Strong({
	className,
	...props
}: React.ComponentPropsWithoutRef<"strong">) {
	return (
		<strong
			{...props}
			className={clsx(
				className,
				"font-medium text-neutral-950 dark:text-white",
			)}
		/>
	);
}

export function Code({
	className,
	...props
}: React.ComponentPropsWithoutRef<"code">) {
	return (
		<code
			{...props}
			className={clsx(
				className,
				"rounded-sm border border-neutral-950/10 bg-neutral-950/[2.5%] px-0.5 font-medium text-neutral-950 text-sm sm:text-[0.8125rem] dark:border-white/20 dark:bg-white/5 dark:text-white",
			)}
		/>
	);
}
