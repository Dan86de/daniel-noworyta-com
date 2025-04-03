import { cn } from "@/lib/utils";

export const Body = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<p className={cn("my-5 text-base lg:text-lg", className)}>{children}</p>
	);
};
