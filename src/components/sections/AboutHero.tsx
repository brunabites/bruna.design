import ExternalLink from '../Link';
import Container from '../Container';
import Available from '../Available';

const AboutHero = () => {
	return (
		<Container>
			<div className="py-16 md:pt-60 md:pb-20">
				<div className="flex flex-col items-start justify-start lg:flex-row moveUp">
					<span className="max-w-lg pt-0 pb-4 mr-0 text-xl font-medium lg:pb-0 lg:pt-4 lg:mr-40 lg:w-32">
						hey, I'm Bruna Bites
					</span>
					<div className="flex flex-col items-start">
						<h1 className="max-w-xl mb-8 text-2xl font-medium lg:max-w-3xl lg:text-5xl">
							<strong>Product Designer, crazy about Design Systems</strong> based in Brasilia, Brazil.
						</h1>
					</div>
				</div>
				<div className="flex flex-col items-start justify-start mt-4 lg:flex-row lg:mt-24">
					<span className="max-w-lg pt-12 pb-4 mr-0 text-xl font-medium lg:pb-0 lg:pt-4 lg:mr-40 lg:w-32">
						but, who is Bruna?
					</span>
					<div className="max-w-md space-y-2 text-lg lg:pr-24 lg:max-w-2xl lg:text-2xl">
						<p>
						👋 Born in Brasília, the capital of Brazil, I'm a self-taught Designer. I have a degree in Advertising, which was my kick-start in the world of art. Since college, I’ve been working either as an art director or designer (or something design related) in different companies. Also, I’m fascinated by how things works and I find great reading manuals.
						</p>
					</div>
				</div>
				<div className="flex flex-col items-start justify-start mt-4 lg:flex-row lg:mt-24">
					<span className="max-w-lg pt-12 pb-4 mr-0 text-xl font-medium lg:pb-0 lg:pt-4 lg:mr-40 lg:w-32">
						how did I get here?
					</span>
					<div className="max-w-md space-y-2 text-lg lg:pr-24 lg:max-w-2xl lg:text-xl">
						<p>
						I have been working for a little over 20 years. At first, I mainly worked as a Graphic Designer or Art Director, while struggling to find my true passion, which I realized later was the digital world.
						</p>
						<p>
						Then, in 2009, I joined TV1 as a Digital Designer and a while later I moved to São Paulo, with plenty of startups, with a completely different mindset. This is where I transformed into a UX Designer and later evolved into a Product Designer.</p>
						<p>
						Fast-forward to 2016, I moved back to Brasília, where I have been enjoying the outdoors, working for the government. That gave me the opportunity to develop my leadership and mentoring to younger designers. But I missed digital a lot! So I headed back to UX-related jobs working in companies of all sizes, like Capgemini, Banco do Brasil, <ExternalLink href="https://ifood.com.br/">
						iFood
						</ExternalLink>, and <ExternalLink href="https://pipefy.com/">
						Pipefy
						</ExternalLink>.
						</p>
						<p>
						I believe a designer's job is <strong>to advocate for the end user or customer</strong> with business and development alignment. Therefore, designers should work collaboratively with product managers, researchers, copywriters, and engineers to understand the business challenges and help to achieve better solutions meeting our platform end-users and customers’ needs.
						</p>
						<p>
						I'm curious and code-enthusiastic (as a system designer this is important, right?!), so I can create some stuff using HTML, CSS, JavaScript, and GitHub (like this portfolio).
						</p>
						<p>
						Today, I'm working at <ExternalLink href="https://www.actabl.com/">
						Actabl
						</ExternalLink>, converging 4 different products under the same brand, creating the first views of a Design System. Before that, I was a Design System ops at Pipefy and iFood.
						</p>
						<p>
						I try to engage with the community as much as possible, always learning from others and sometimes giving back some knowledge. So I mentor novice designers at Mentorama, and developed a website to gather Design Systems built in Brazil, encouraging the community to make libraries and files public.
						</p>
						<p>
						If you'd like to work with me <ExternalLink href="https://linkedin.com/in/brunabites">
						DM me on Linkedin
						</ExternalLink> or just <ExternalLink href="mailto:alo@bruna.design">
						email me</ExternalLink>.
						</p>
						<p className='pt-4'>
						<Available />
						</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default AboutHero;
