import {
	Description,
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ThemeToggle } from "../theme-toggle";

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<motion.button
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				type="button"
				onClick={() => setIsOpen(true)}
				className="lg:hidden"
			>
				<span className="sr-only">Menu</span>
				<span className="touch-target" />
				<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
					<title className="sr-only">Menu</title>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4.75 5.75H19.25"
					/>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4.75 18.25H19.25"
					/>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4.75 12H19.25"
					/>
				</svg>
			</motion.button>
			<AnimatePresence>
				{isOpen && (
					<Dialog
						static
						open={isOpen}
						onClose={() => setIsOpen(false)}
						className="relative z-50"
					>
						<DialogBackdrop
							as={motion.div}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { delay: 0.2 } }}
							className="fixed inset-0 bg-(--foreground)/30 backdrop-blur-[2px]"
						/>
						<div className="fixed top-0 right-0 bottom-0 flex items-center justify-end">
							<DialogPanel
								as={motion.div}
								initial={{ x: 100 }}
								animate={{
									x: 0,
									transition: { duration: 0.3 },
								}}
								exit={{
									x: 100,
									transition: { duration: 0.2, delay: 0.2 },
								}}
								className="h-full w-full max-w-[300px] bg-(--background) p-4 sm:w-full"
							>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.3, delay: 0.3 },
									}}
									exit={{ opacity: 0, transition: { duration: 0.2 } }}
								>
									<DialogTitle className="flex items-center justify-between font-bold text-lg">
										<span />
										<button type="button" onClick={() => setIsOpen(false)}>
											<span className="sr-only">Close</span>
											<span className="touch-target" />
											<svg
												width="24"
												height="24"
												fill="inherit"
												viewBox="0 0 24 24"
												className="ml-auto fill-current text-foreground"
											>
												<title className="sr-only">Close</title>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M17.25 6.75L6.75 17.25"
												/>
												<path
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M6.75 6.75L17.25 17.25"
												/>
											</svg>
										</button>
									</DialogTitle>
									<Description>
										Use the menu button to navigate the site on mobile.
									</Description>
								</motion.div>
							</DialogPanel>
						</div>
					</Dialog>
				)}
			</AnimatePresence>
		</>
	);
};
