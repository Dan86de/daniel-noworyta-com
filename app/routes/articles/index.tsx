import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute } from "@tanstack/react-router";
import { Body } from "@/components/ui/Typography/Body";

export const Route = createFileRoute("/articles/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Think. Write. Share.
			</GradientTitle>
			<Body>
				Writing helps me <strong>organize my thoughts</strong> and share
				knowledge. Through articles, I document my journey, share technical
				insights, and help others learn from my experiences in programming and
				technology.
			</Body>

			<h2 className="my-4 font-medium text-2xl">Featured articles</h2>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<Card>
					<CardHeader>
						<CardTitle>UI Components</CardTitle>
						<CardDescription>
							Some short description about the article. It can be longer. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<img
							className="h-40 w-full rounded-xl object-cover"
							src="/images/articles_example_images/cgn_1.webp"
							alt="Article 1"
							width={100}
							height={100}
						/>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>UI Components</CardTitle>
						<CardDescription>
							Some short description about the article. It can be longer. Lorem
							ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
						</CardDescription>
					</CardHeader>
					<CardContent>
						<img
							className="h-40 w-full rounded-xl object-cover"
							src="/images/articles_example_images/cgn_2.webp"
							alt="Article 1"
							width={100}
							height={100}
						/>
					</CardContent>
				</Card>
			</div>

			{/* <TextHeading2>Featured articles</TextHeading2> */}
			{/* <HoverEffect items={featuredArticles} /> */}

			{/* <TextHeading2>All articles</TextHeading2> */}
			{/* <ul>
    <Link href='/articles/devreel' title='On Developer Relations' className='block'>
      On Developer Relations
    </Link>
    <Link href='/articles/ai' title='On AI' className='block'>
      On AI
    </Link>
  </ul> */}
		</div>
	);
}
