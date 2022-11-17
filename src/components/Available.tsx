import ExternalLink from "./Link";

const Available = () => {
	return (
			<div className="relative inline-flex">
				<div className="inline-flex items-center">
					<ExternalLink
						href="https://cal.com/bruna-bites-elhz1k/15min" 
						className="flex items-center justify-center rounded-md border border-transparent bg-teal-200/50
						px-2 py-2 text-base font-medium text-slate-900 hover:bg-teal-200/80
						md:py-2 md:px-5 md:text-lg whitespace-nowrap glow transition duration-300 ease-in-out"
					>
						I'm open to freelance, let's chat!
					</ExternalLink>
				</div>
				<span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-300 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-400"></span>
				</span>

			</div>
	);
};

export default Available;
