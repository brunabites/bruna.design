import {
	Container,
	Available,
	ExternalLink,

  } from '@/components';
  
const AboutSection = () => {
	return (
		<Container>
			<div className="py-12 lg:py-24">
				<div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between">
					<span className="pb-6 text-xl font-medium lg:pb-0">who i am</span>
					<div className="max-w-3xl space-y-8 font-medium leading-8 lg:leading-10">
						<p className='text-2xl lg:text-4xl'>
							A curious digital product designer who works to transform the way people use digital
							services.
						</p>
						<p className='text-lg lg:text-2xl'>
							Right now, I support companies by unlocking the power of Design Systems with continuous
							collaboration across teams, stakeholders, and users.
						</p>
						<div className="pt-4">
							<Available />
						</div>
						<div className="pt-8 text-lg lg:text-2xl">
							<ExternalLink href="/about" className="font-medium animated-underline">
								More about what I do <span className="pl-4">&rarr;</span>
							</ExternalLink>
						</div>

					</div>
				</div>
			</div>
		</Container>
	);
};

export default AboutSection;
