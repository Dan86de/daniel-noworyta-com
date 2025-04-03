import { cn } from "@/lib/utils";

export const Card = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div
			className={cn(
				"w-full rounded-xl bg-neutral-100",
				"shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
				"flex flex-col p-6",
				"dark:bg-neutral-900 dark:shadow-[inset_0_1px,inset_0_0_0_1px] dark:shadow-white/[0.025]",
			)}
		>
			{children}
		</div>
	);
};

export const CardHeader = ({ children }: { children?: React.ReactNode }) => {
	return <div className="flex flex-col">{children}</div>;
};

export const CardTitle = ({ children }: { children?: React.ReactNode }) => {
	return <h2 className="font-bold">{children}</h2>;
};

export const CardDescription = ({
	children,
}: { children?: React.ReactNode }) => {
	return (
		<p className="mt-2 text-[12px] text-neutral-700 dark:text-neutral-300">
			{children}
		</p>
	);
};

export const CardContent = ({ children }: { children?: React.ReactNode }) => {
	return <div className="mt-4">{children}</div>;
};

export const CardFooter = ({ children }: { children?: React.ReactNode }) => {
	return <div className="mt-4">{children}</div>;
};
