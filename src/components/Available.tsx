import ExternalLink from "./Link";

const Available = () => {
	return (
			<span className="relative inline-flex">
				{/* <button type="button"
				className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 ring-1 ring-slate-900/10 dark:ring-slate-200/20">
					Transactions
				</button> */}
				<div className="inline-flex items-center">
				<ExternalLink
					href="https://cal.com/bruna-bites-elhz1k/15min" 
					className="flex items-center justify-center rounded-md border border-transparent bg-yellow-500
					px-6 py-1 text-base font-medium text-gray-900 hover:bg-yellow-600/30
					md:py-2 md:px-8 md:text-lg whitespace-nowrap glow transition duration-300 ease-in-out"
				>
					I'm open to freelance challenges, let's chat!
				</ExternalLink>
				</div>
				<span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
				</span>

			</span>
	);
};

export default Available;
