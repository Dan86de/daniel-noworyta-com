import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Box } from "@/components/every-layout-components/Box";
import { Center } from "@/components/every-layout-components/Center";
import { Cluster } from "@/components/every-layout-components/Cluster";
import { Stack } from "@/components/every-layout-components/Stack";
import { FadeUp } from "@/components/ui/fade-up";
import { GradientTitle } from "@/components/ui/gradient-title";
import { Body, H2, H3 } from "@/components/ui/Typography/Body";
import { cn } from "@/lib/utils";
export const Route = createFileRoute("/about/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Center className="mt-10">
			<Stack>
				<Stack>
					<GradientTitle primaryColor="#f12711" secondaryColor="#f5af19">
						Developer. Father. Creator.
					</GradientTitle>
					<Body>
						From dreaming of becoming a programmer to{" "}
						<strong>making it a reality in 2020</strong>, I&apos;m now sharing
						my journey through teaching and creating. I help others transition
						into tech while building useful things along the way.
					</Body>
				</Stack>

				<Cluster clusterSpace="calc(var(--spacing)*6)">
					<Box
						className="w-full bg-transparent sm:w-[calc(50%-(var(--cluster-space)/2))]"
						padding="0px"
						borderWidth="0"
					>
						<motion.img
							initial={{
								opacity: 0,
								filter: "blur(10px) brightness(20%) grayscale(100%)",
								scale: 0.7,
								rotate: -30,
							}}
							animate={{
								opacity: 1,
								filter: "blur(0px) brightness(130%) grayscale(100%)",
								scale: [0.7, 1.1, 1],
								rotate: 0,
							}}
							transition={{ duration: 0.4 }}
							alt="Daniel Noworyta"
							src="/images/avatar.webp"
							width="336"
							height="336"
							className={cn("w-full rounded-lg object-cover")}
						/>
					</Box>

					<Box
						className="w-full bg-transparent sm:w-[calc(50%-(var(--cluster-space)/2))]"
						borderWidth="0"
						padding="0px"
					>
						<FadeUp delay={0.2}>
							<Stack className="[--space:0.75rem] sm:[--space:2rem]">
								<Body>
									<strong>Hey, I&apos;m Daniel Noworyta.</strong> For most of my
									life, I pushed aside my dream of becoming a programmer and
									doing what I love. In 2020, I fulfilled that dream and became
									a programmer.
								</Body>
								<Body>
									I have a{" "}
									<a
										href="https://youtube.com/c/danielnoworyta"
										className="rounded-xs underline"
									>
										channel
									</a>{" "}
									on YouTube where I share my insights and experiences in
									learning programming, transitioning to new fields, and
									advancing my career in IT.
								</Body>
								<Body>
									I love dark mode and side projects. When I&apos;m not working,
									I like playing football, reading books, and eating pizza.
								</Body>
							</Stack>
						</FadeUp>
					</Box>
					<FadeUp delay={0.4}>
						<Stack className="[--space:0.5rem] sm:[--space:1rem]">
							<H2>My Personal Brand Story</H2>
							<Body>
								I used to live a life that, on the surface, looked successful
								but felt deeply unfulfilling. As a Class A surface modeler in
								the automotive industry, I spent my days working long hours in
								front of a computer, creating 3D models in specialized software.
								My routine was grueling: waking up at 6:00 AM, working from 8:00
								AM to 5:00 PM, and frequently traveling to production facilities
								in places like Detroit, Turin, Sweden, and Germany.
							</Body>
							<Body>
								The constant delegations kept me away from home, which became
								unbearable when I met my wife and dreamed of starting a family.
								I felt trapped, knowing I’d hit the ceiling of my career with no
								room to grow or earn more, and my true passion—creating web
								pages and solving problems through coding—was just a distant
								dream I lacked the courage to pursue.
							</Body>
							<Body>
								My mindset back then was a mix of hope and frustration. I
								believed I could change my life, inspired by YouTube creators
								and tech blogs, but I wasn’t sure if I could pull it off. I felt
								excited about the possibility of becoming a software developer,
								yet the demands of my job and the fear of failure held me back.
							</Body>
							<H3>My "rock bottom" moment</H3>
							<Body>
								The lowest point came when my son was born, and my company sent
								me to Detroit for a six-month project. Missing those precious
								early months with my newborn son was heartbreaking—it was my
								rock bottom. I knew I couldn’t keep living a life that kept me
								away from my family and my true calling. That moment, coupled
								with my desire to return to Poland and raise my son there, was
								the spark that pushed me to act.
							</Body>
							<Body>
								Determined to change my life, I committed to learning how to
								code. I started with online courses from Udemy and YouTube,
								focusing on HTML, CSS, and JavaScript. To make progress, I
								reshaped my routine, waking up at 5:30 AM—or even 4:30 AM—to
								study before my 8-to-5 job, then coding again in the evenings.
								It wasn’t easy.
							</Body>
							<Body>
								As a self-taught developer, I faced imposter syndrome and
								struggled to find well-structured resources. I often redid
								courses multiple times to solidify my knowledge, and without a
								mentor, I had to rely on sheer persistence. But my dream of
								working from home, building a SaaS product, and achieving
								financial independence kept me going. After two and a half years
								of relentless effort, I landed my first job as a full-stack
								developer in the TypeScript ecosystem.
							</Body>
							<H3>What I'm doing today</H3>
							<Body>
								Today, I work remotely for a German company, building
								applications for installers of heat pumps and gas boilers using
								React and React Native. With six years of professional coding
								experience, I earn a good living and have the freedom to be with
								my family in Poland. My life has transformed—I’m no longer
								tethered to constant travel or a career ceiling.{" "}
							</Body>
							<Body>
								I also run a YouTube channel with over 5,500 subscribers, where
								I share my coding journey and inspire others, recently switching
								to English to reach a broader audience. The key lesson I’ve
								learned is that with enough will and dedication, anyone can make
								a significant life change, no matter their circumstances. Two
								and a half years may seem long, but it’s a small price to pay
								for a lifetime of fulfillment.
							</Body>
							<Body>
								This journey fuels my current mission: to{" "}
								<strong>
									show others that they, too, can transform their lives by
									pursuing their passions, especially in the IT industry.
								</strong>{" "}
								In an era where AI is changing the landscape, I want to inspire
								people to embrace challenges, learn to code, and build careers
								that offer freedom and impact. My story is proof that with
								persistence, anyone can turn their dreams into reality.
							</Body>
						</Stack>
					</FadeUp>
					<FadeUp delay={0.6}>
						<Stack className="[--space:0.5rem] sm:[--space:1rem]">
							<H2 className="pb-4">My Core Beliefs</H2>
							<H3>Coding:</H3>
							<ul className="list-inside list-disc space-y-1">
								<li>
									Coding is a learnable skill that anyone can master with
									persistence, leading to a fulfilling career as a software
									developer.
								</li>
								<li>
									Coding offers unparalleled freedom, requiring only a laptop
									and internet to work from anywhere and solve real-world
									problems.
								</li>
								<li>
									Collaboration and feedback are critical to becoming a great
									coder—sharing your work with experienced developers
									accelerates growth.
								</li>
							</ul>
							<Body>
								<em className="text-primary text-shadow-primary">
									Debunking Myth:
								</em>{" "}
								You don’t need to be a math genius to be a good coder. Soft
								skills, problem-solving, and communication are just as
								important, if not more so.
							</Body>
							<H3>Developing a Career in IT:</H3>
							<ul className="list-inside list-disc space-y-1">
								<li>
									Anyone can break into the IT industry with dedication and
									passion, regardless of age or responsibilities like family.
								</li>
								<li>
									Soft skills, such as openness to criticism and collaboration,
									are as crucial as technical skills, especially in the AI era.
								</li>
							</ul>
							<Body>
								<em className="text-primary text-shadow-primary">
									Debunking Myth:
								</em>{" "}
								AI won’t take jobs from developers; it’s a powerful tool that
								coders should embrace to enhance their work (state for 2025).
							</Body>
							<H3>Personal Growth:</H3>
							<ul className="list-inside list-disc space-y-1">
								<li>
									Personal growth requires taking responsibility for your own
									path and embracing challenges and setbacks as opportunities to
									learn.
								</li>
								<li>
									Staying open-minded, seeking advice from those ahead of you,
									and building self-awareness through tools like assessments are
									key to growth.
								</li>
								<li>
									There’s no universal pace for personal growth—everyone must
									find their own path and remain open to others’ perspectives to
									accelerate progress.
								</li>
							</ul>
						</Stack>
					</FadeUp>
				</Cluster>
			</Stack>
		</Center>
	);
}
