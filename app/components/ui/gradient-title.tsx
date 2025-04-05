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
					"--primary": primaryColor ?? "var(--gradient-title-primary)",
					"--secondary": secondaryColor ?? "var(--gradient-title-secondary)",
				} as CSSProperties
			}
			className={clsx(
				"bg-[linear-gradient(135deg,var(--primary)_0%,var(--secondary)_100%)] bg-clip-text font-heading font-medium text-3xl text-transparent leading-8 md:text-5xl md:leading-16",
				className,
			)}
		>
			{children}
		</h1>
	);
};
