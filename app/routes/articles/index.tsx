import { GradientTitle } from "@/components/ui/gradient-title";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/articles/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="mx-auto mb-auto h-full max-w-3xl p-5">
			<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
				Think. Write. Share.
			</GradientTitle>
			<p className={"text-neutral-300"}>
				Writing helps me <strong>organize my thoughts</strong> and share
				knowledge. Through articles, I document my journey, share technical
				insights, and help others learn from my experiences in programming and
				technology.
			</p>

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
