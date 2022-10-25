import { config } from '@/config';
import Container from '../Container';
import ExternalLink from '../Link';

const ContactSection = () => {
  return (
    <Container>
      <div className="max-w-4xl py-24">
        <div className="flex flex-row items-baseline justify-between max-w-3xl">
          <p className="w-40 pb-3 text-xl font-medium lg:pb-0">contact</p>
          <p className="w-40 pb-3 text-xl font-medium lg:pb-0">
            got a project in mind?
          </p>
          <p className="hidden w-40 pb-3 text-xl font-medium lg:pb-0 lg:inline-flex">
            let's talk about it.
          </p>
        </div>
        <div className="pt-12 lg:pt-20">
          <ExternalLink
            href="mailto:alo@bruna.design"
            className="text-3xl font-medium break-words lg:text-5xl animated-underline-contact"
          >
            {config.contact.email}
          </ExternalLink>
        </div>
      </div>
    </Container>
  );
};

export default ContactSection;
