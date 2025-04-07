export const ContentContainer = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<div className="mx-auto mb-auto h-full w-full max-w-6xl p-2 md:p-5 ">
			{children}
		</div>
	);
};
