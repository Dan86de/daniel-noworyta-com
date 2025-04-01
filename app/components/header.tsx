import { Link } from "@tanstack/react-router";
import { AnimatedTabs } from "./animated-tabs";
export const Header = () => {
	return (
		<div className="flex items-center px-2 py-4">
			<Link to="/" className="flex items-center px-2">
				<img
					src="/images/logo.png"
					alt="Daniel Noworyta Logo"
					width={40}
					height={40}
				/>
			</Link>
			<div className="flex grow" />
			<section className="flex gap-5">
				<AnimatedTabs />
			</section>
			<div className="flex grow" />
			<section />
		</div>
	);
};
