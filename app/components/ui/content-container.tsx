import { cn } from "@/lib/utils";

export const ContentContainer = ({
	children,
	className,
}: { children: React.ReactNode; className?: string }) => {
	return (
		<div
			className={cn(
				"mx-auto mb-auto h-full w-full max-w-6xl p-2 md:p-5",
				className,
			)}
		>
			{children}
		</div>
	);
};
