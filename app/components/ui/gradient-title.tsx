import clsx from "clsx";
import type { CSSProperties, ReactNode } from "react";
import type { PropsWithChildren } from "react";
interface GradientTitleProps {
	primaryColor?: string;
	secondaryColor?: string;
	className?: string;
}

export const GradientTitle = ({
	children,
	primaryColor,
	secondaryColor,
	className,
}: PropsWithChildren<GradientTitleProps>) => {
	return (
		<h1
			style={
				{
					"--primary": primaryColor ?? "#ededed",
					"--secondary": secondaryColor ?? "#c7c7c7",
				} as CSSProperties
			}
			className={clsx(
				"bg-[linear-gradient(135deg,var(--primary)_0%,var(--secondary)_100%)] bg-clip-text font-heading font-medium text-5xl text-transparent leading-16",
				className,
			)}
		>
			{children}
		</h1>
	);
};
