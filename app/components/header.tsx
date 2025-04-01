import { Link } from "@tanstack/react-router";
import { AnimatedTabs } from "./animated-tabs";
import { ThemeToggle } from "./ui/theme-toggle";

export const Header = () => {
	return (
		<div className="container mx-auto flex items-center px-2 py-4">
			<Link to="/" className="flex items-center px-2">
				<svg
					width="82"
					height="70"
					viewBox="0 0 82 70"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10"
				>
					<title>Daniel Noworyta Logo</title>
					<g clipPath="url(#clip0_1185_138)">
						<path
							d="M49.9939 49.3047L51.6454 51.8779C48.8207 57.7859 44.0613 62.5524 38.1568 65.3841C33.8635 67.4385 29.2412 68.7136 24.5029 69.1498C22.5646 69.3539 20.6158 69.4541 18.6653 69.4506H0.375V16.8892H14.2382V57.4552H19.1542C20.9465 57.464 22.737 57.3057 24.4994 56.9856C30.6782 55.8389 35.4025 52.578 38.1128 47.2504C39.7855 43.9666 41.5197 40.7251 41.5197 35.8759C41.5197 35.788 41.5197 35.7 41.5162 35.6156L49.9939 49.3065V49.3047Z"
							fill="#F05924"
						/>
						<path
							d="M81.625 0.625V69.4487H67.8603L53.5045 47.0533L42.5012 28.9231C42.4484 28.8264 42.4009 28.7279 42.3446 28.6188C40.9534 26.1899 39.4144 23.8471 37.7365 21.6063C36.3716 19.7859 34.7552 18.1695 32.933 16.8064L32.0096 16.1609C29.8955 14.7908 27.5457 13.8269 25.078 13.3169C24.8898 13.2746 24.6981 13.2377 24.4994 13.2008C23.1239 12.9405 21.7292 12.7857 20.3309 12.7382C19.9439 12.7259 19.55 12.7171 19.156 12.7171H0.375V0.625H18.6635C19.2263 0.625 19.7804 0.633794 20.3309 0.649624C21.7556 0.691836 23.1451 0.785055 24.4994 0.932798C36.0409 2.18334 44.8387 7.23299 49.9851 15.3729L50.0009 15.4028L51.5733 18.2205L67.9605 47.6214V0.625H81.625Z"
							fill="var(--foreground)"
						/>
					</g>
				</svg>
			</Link>
			<div className="flex grow" />
			<section className="flex gap-5">
				<AnimatedTabs />
			</section>
			<div className="flex grow" />
			<section className="pr-12">
				<ThemeToggle />
			</section>
		</div>
	);
};
