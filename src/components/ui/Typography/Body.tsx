import { cn } from "@/lib/utils";

export const Body = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return <p className={cn("text-base lg:text-lg", className)}>{children}</p>;
};

export const H1 = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h1 className={cn("font-bold text-4xl lg:text-5xl", className)}>
			{children}
		</h1>
	);
};

export const H2 = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h2 className={cn("font-semibold text-2xl lg:text-3xl", className)}>
			{children}
		</h2>
	);
};

export const H3 = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<h3 className={cn("font-medium text-xl lg:text-2xl", className)}>
			{children}
		</h3>
	);
};
