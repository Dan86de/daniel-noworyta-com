import { useEffect, useState } from "react";
import { Cluster } from "@/components/every-layout-components/Cluster";
import { SVGDark } from "./SVGDark";
import { SVGLight } from "./SVGLight";
import { SVGLinesDark } from "./SVGLinesDark";
import { SVGLinesLight } from "./SVGLinesLight";

export const Rectangles = () => {
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsHovering(true);
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<Cluster clusterSpace="24px" className="stacking mx-auto">
			{/* FIRST */}
			<SVGDark />
			<SVGLight />

			{/* SECOND */}
			<SVGLinesDark isHovering={isHovering} />
			<SVGLinesLight isHovering={isHovering} />
		</Cluster>
	);
};
