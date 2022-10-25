/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import ExternalLink from './Link';
import Logo from './Logo';
const navigation = [
	{ name: 'about.', href: '/about' },
	{ name: 'cases.', href: '/posts' },
];

export default function Header() {
	return (
		<Popover className="sticky top-0 z-10 bg-white/5 backdrop-blur">
			<div className="max-w-6xl px-4 mx-auto sm:px-6">
				<div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
					<div className="flex justify-start lg:w-0 lg:flex-1">
						<div>
							<span className="sr-only">bruna.design</span>
							<Logo />
						</div>
					</div>
					<div className="-my-2 -mr-2 md:hidden">
						<Popover.Button className="inline-flex items-center justify-center p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
							<span className="sr-only">Open menu</span>
							<RiMenuLine className="w-8 h-8" aria-hidden="true" />
						</Popover.Button>
					</div>
					<Popover.Group as="nav" className="hidden space-x-10 md:flex">
						{navigation.map((item) => (
							<ExternalLink
								href={item.href}
								className="text-base font-medium tracking-wide animated-underline"
								key={item.name}
							>
								{item.name}
							</ExternalLink>
						))}
					</Popover.Group>
					<div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
						<ExternalLink
							href="mailto:alo@bruna.design"
							className="inline-flex items-center justify-center rounded-md border border-transparent bg-yellow-500
							px-6 py-1 text-base font-medium text-gray-900 hover:bg-yellow-600/30 md:py-1 md:px-4 md:text-md
							glow whitespace-nowrap transition duration-300 ease-in-out"
						>
							<span className="pr-2">&rarr;</span> get in touch
						</ExternalLink>
					</div>
				</div>
			</div>

			<Transition
				as={Fragment}
				enter="duration-200 ease-out"
				enterFrom="opacity-0 scale-95"
				enterTo="opacity-100 scale-100"
				leave="duration-100 ease-in"
				leaveFrom="opacity-100 scale-100"
				leaveTo="opacity-0 scale-95"
			>
				<Popover.Panel
					focus
					className="absolute inset-x-0 top-0 z-40 p-2 transition origin-top-right transform md:hidden"
				>
					<div className="divide-y-2 rounded-sm shadow-lg bg-gray-50 divide-yellow-700 ring-1 ring-gray-800 ring-opacity-5">
						<div className="px-5 pt-5 pb-6">
							<div className="flex items-center justify-between">
								<div>
									<span className="sr-only">bruna.design</span>
									<Logo />
								</div>
								<div className="-mr-2">
									<Popover.Button className="inline-flex items-center justify-center p-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
										<span className="sr-only">Close menu</span>
										<RiCloseLine className="w-8 h-8" aria-hidden="true" />
									</Popover.Button>
								</div>
							</div>
							<p className="text-base tracking-wide text-gray-600">Product Design, Desing Systems</p>
						</div>
						<div className="px-5 py-6 space-y-6">
							<div className="grid grid-cols-2 gap-y-4 gap-x-8">
								{navigation.map((item) => (
									<ExternalLink
										href={item.href}
										className="text-base font-normal tracking-wide text-gray-800 hover:text-gray-700 hover:underline hover:underline-offset-2 hover:decoration-2"
										key={item.name}
									>
										{item.name}
									</ExternalLink>
								))}
							</div>
							<div>
								<ExternalLink
									href="mailto:alo@bruna.design"
									className="flex items-center justify-center w-full px-4 py-2 text-base font-medium tracking-wider text-white bg-gray-800 border border-transparent rounded-sm shadow-sm hover:bg-gray-600"
								>
									Contact Bruna
								</ExternalLink>
							</div>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
}
