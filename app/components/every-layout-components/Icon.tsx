import type { CSSProperties } from "react";

interface IconProps {
	children?: React.ReactNode;
	className?: string;
	iconPath: string;
	label: string;
	space?: string;
}

/**
 *
 * @param children - Children to be displayed within the icon.
 * @param className - Additional CSS classes to apply to the icon.
 * @param iconPath - Path to the SVG icon file.
 * @param label - Label for the icon.
 * @param space - Space between icon and children.
 * Dev note. If you add to parent element .with-icon class, spacing would be applied automatically according to space property.
 * @returns
 */
export const Icon = ({
	children,
	className,
	iconPath,
	label,
	space,
}: IconProps) => {
	return (
		<svg className="icon" style={{ "--icon-space": space } as CSSProperties}>
			<title>{label}</title>
			<use href={iconPath} />
		</svg>
	);
};
