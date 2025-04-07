import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export const FadeUp = ({
	children,
	delay = 0,
	duration = 0.5,
	className,
}: {
	children: React.ReactNode;
	delay?: number;
	duration?: number;
	className?: string;
}) => {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 15 },
				visible: { opacity: 1, y: 0 },
			}}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ delay, type: "spring", duration }}
			className={cn(className)}
		>
			{children}
		</motion.div>
	);
};
