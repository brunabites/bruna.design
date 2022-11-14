import React from 'react';

interface CaseCardProps {
role: string;
timeline: string;
tools: string;
platform: string;
children: React.ReactNode;
}

const CaseCard = ({ children, role, timeline, tools, platform }: CaseCardProps) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-4 text-base lg:text-lg">
			<div className="md:col-span-3 mb-8 text-base lg:text-lg">
				<h4 className="border-b border-yellow-800/30">Project</h4>
				{children}
			</div>
			<div className="mb-8 text-base lg:text-lg">
				<h4 className="border-b border-yellow-800/30">
					Info
				</h4>
				<div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:mb-2 md:gap-3 text-base lg:text-lg">
					<div className="pt-2 not-prose">
						<p className="py-0 my-0 font-medium">Role</p>
						<p className="py-0 my-0">{role}</p>
					</div>
					<div className="pt-2 not-prose">
						<p className="py-0 my-0 font-medium">Timeline</p>
						<p className="py-0 my-0">{timeline}</p>
					</div>
					<div className="pt-2 not-prose">
						<p className="py-0 my-0 font-medium">Tools</p>
						<p className="py-0 my-0">{tools}</p>
					</div>
					<div className="pt-2 not-prose">
						<p className="py-0 my-0 font-medium">Platform</p>
						<p className="py-0 my-0">{platform}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseCard;
