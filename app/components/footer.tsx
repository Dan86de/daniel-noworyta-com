import { Link } from "@tanstack/react-router";
const links = [
	{
		title: "Email",
		url: "/contact",
	},
	{
		title: "Twitter",
		url: "https://twitter.com/danielnoworyta",
	},
	{
		title: "GitHub",
		url: "https://github.com/dan86de",
	},
	{
		title: "LinkedIn",
		url: "https://linkedin.com/in/danielnoworyta",
	},
	{
		title: "Instagram",
		url: "https://instagram.com/programistafrontend",
	},
	{
		title: "YouTube",
		url: "https://youtube.com/@danielnoworyta",
	},
];

export const Footer = () => {
	return (
		<footer className="grid w-full grid-cols-3 p-4">
			<div className="mr-auto" />
			<ul className="flex items-center justify-center gap-8">
				{links.map((link) => (
					<li key={link.title}>
						<Link to={link.url}>{link.title}</Link>
					</li>
				))}
			</ul>
			<span className="ml-auto flex items-center text-xs">© 2025</span>
		</footer>
	);
};
