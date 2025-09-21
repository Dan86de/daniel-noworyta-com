import { createFileRoute } from "@tanstack/react-router";
import { Center } from "@/components/every-layout-components/Center";
import { Cluster } from "@/components/every-layout-components/Cluster";
import { Stack } from "@/components/every-layout-components/Stack";
import { FadeUp } from "@/components/ui/fade-up";
import { GradientTitle } from "@/components/ui/gradient-title";
import { Body, H2, H3 } from "@/components/ui/Typography/Body";

export const Route = createFileRoute("/core/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "My Core Values & Beliefs | Daniel Noworyta",
			},
			{
				name: "description",
				content:
					"Discover my core beliefs about coding, IT career development, and personal growth. Learn about my philosophy on software development, collaboration, and embracing challenges.",
			},
			{
				property: "og:title",
				content: "My Core Values & Beliefs | Daniel Noworyta",
			},
			{
				property: "og:description",
				content:
					"Discover my core beliefs about coding, IT career development, and personal growth. Learn about my philosophy on software development, collaboration, and embracing challenges.",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				name: "twitter:card",
				content: "summary",
			},
			{
				name: "twitter:title",
				content: "My Core Values & Beliefs | Daniel Noworyta",
			},
			{
				name: "twitter:description",
				content:
					"Discover my core beliefs about coding, IT career development, and personal growth. Learn about my philosophy on software development, collaboration, and embracing challenges.",
			},
		],
	}),
});

function RouteComponent() {
	return (
		<Center className="mt-10">
			<Stack>
				<header>
					<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
						Direction. Process. Values.
					</GradientTitle>
					<Body>Here you can find more about my core. What I believe in.</Body>
				</header>

				<main>
					<Cluster clusterSpace="calc(var(--spacing)*6)">
						<FadeUp delay={0.6}>
							<article className="[--space:0.5rem] sm:[--space:1rem]">
								<Stack>
									<H2 className="pb-4">My Core Beliefs</H2>

									<section aria-labelledby="coding-beliefs">
										<H3>Coding:</H3>
										<ul className="list-inside list-disc space-y-1">
											<li>
												Coding is a learnable skill that anyone can master with
												persistence, leading to a fulfilling career as a
												software developer.
											</li>
											<li>
												Coding offers unparalleled freedom, requiring only a
												laptop and internet to work from anywhere and solve
												real-world problems.
											</li>
											<li>
												Collaboration and feedback are critical to becoming a
												great coder—sharing your work with experienced
												developers accelerates growth.
											</li>
										</ul>
										<Body>
											<em className="text-primary text-shadow-primary">
												Debunking Myth:
											</em>{" "}
											You don't need to be a math genius to be a good coder.
											Soft skills, problem-solving, and communication are just
											as important, if not more so.
										</Body>
									</section>

									<section aria-labelledby="career-beliefs">
										<H3>Developing a Career in IT:</H3>
										<ul className="list-inside list-disc space-y-1">
											<li>
												Anyone can break into the IT industry with dedication
												and passion, regardless of age or responsibilities like
												family.
											</li>
											<li>
												Soft skills, such as openness to criticism and
												collaboration, are as crucial as technical skills,
												especially in the AI era.
											</li>
										</ul>
										<Body>
											<em className="text-primary text-shadow-primary">
												Debunking Myth:
											</em>{" "}
											AI won't take jobs from developers; it's a powerful tool
											that coders should embrace to enhance their work (state
											for 2025).
										</Body>
									</section>

									<section aria-labelledby="growth-beliefs">
										<H3>Personal Growth:</H3>
										<ul className="list-inside list-disc space-y-1">
											<li>
												Personal growth requires taking responsibility for your
												own path and embracing challenges and setbacks as
												opportunities to learn.
											</li>
											<li>
												Staying open-minded, seeking advice from those ahead of
												you, and building self-awareness through tools like
												assessments are key to growth.
											</li>
											<li>
												There's no universal pace for personal growth—everyone
												must find their own path and remain open to others'
												perspectives to accelerate progress.
											</li>
										</ul>
									</section>
								</Stack>
							</article>
						</FadeUp>
					</Cluster>
				</main>
			</Stack>
		</Center>
	);
}
