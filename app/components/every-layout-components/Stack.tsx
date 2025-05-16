import type { CSSProperties, ReactNode } from "react";

interface StackProps {
	children: ReactNode;
	space?: string;
}

/**
 * A custom element for injecting white space (margin) between flow
 * (block) elements along a vertical axis.
 *
 * More on Every Layout [Stack](https://every-layout.dev/layouts/stack/)
 */
export const Stack = ({ children, space = "1.5rem" }: StackProps) => {
	return (
		<div className="stack" style={{ "--space": space } as CSSProperties}>
			{children}
		</div>
	);
};
