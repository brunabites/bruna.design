import React from 'react';

interface CaseCardProps {
role: string;
duration: string;
contribution: string;
platform: string;
children: React.ReactNode;
}

const CaseCard = ({ role, duration, contribution, platform, children }: CaseCardProps) => {
	return (
		<div>
		<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-base lg:text-lg">
			<div className="border-t border-yellow-800/30 pt-2">
				<p className="py-0 my-0">Role</p>
				<p className="py-0 my-0 font-medium">{role}</p>
			</div>
			<div className="border-t border-yellow-800/30 pt-2">
				<p className="py-0 my-0">Duration</p>
				<p className="py-0 my-0 font-medium">{duration}</p>
			</div>
			<div className="border-t border-yellow-800/30 pt-2">
				<p className="py-0 my-0">Contribution</p>
				<p className="py-0 my-0 font-medium">{contribution}</p>
			</div>
			<div className="border-t border-yellow-800/30 pt-2">
				<p className="py-0 my-0">Platform</p>
				<p className="py-0 my-0 font-medium">{platform}</p>
			</div>
		</div>
			<div className="max-w-full text-center text-yellow-800/30">&#9788;</div>
		</div>
	);
};

export default CaseCard;
