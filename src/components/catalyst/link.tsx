import * as Headless from "@headlessui/react";
import { type LinkProps, Link as RouterLink } from "@tanstack/react-router";
import type React from "react";
import { forwardRef } from "react";

export const Link = forwardRef(function Link(
	props: LinkProps & React.ComponentPropsWithoutRef<"a">,
	ref: React.ForwardedRef<HTMLAnchorElement>,
) {
	return (
		<Headless.DataInteractive>
			<RouterLink {...props} ref={ref} />
		</Headless.DataInteractive>
	);
});
