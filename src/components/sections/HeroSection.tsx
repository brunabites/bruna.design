import Image from 'next/image';
import Container from '../Container';
import { shimmer, toBase64 } from '@/utils/image-shimmer';

const HeroSection = () => {
  return (
    <Container>
      <section className="flex flex-col-reverse justify-between gap-x-12 sm:flex-row py-16 md:pt-40 md:pb-20 z-10">
          <header>
            <div className="flex flex-col items-start justify-start lg:flex-row moveUp">
                <div className="flex flex-col items-start max-w-xs mr-0 lg:mr-10 lg:w-72 md:max-w-lg moveUp">
                  <span className="rounded-full ring-4 ring-teal-300">
                  <Image
                    src="/images/bruna-bites.png"
                    height={260}
                    width={260}
                    alt="Headshot of Bruna Bites"
                    objectFit="cover"
                    objectPosition="center center"
                    className="rounded-full brightness-110 hover:brightness-100 glow transition duration-300 ease-in-out inline-block bg-white"
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(220, 220))}`}
                    priority
                  />
                  </span>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="mt-8 text-4xl font-medium lg:max-w-xl lg:text-7xl">
                    Hi, I'm Bruna
                  </h1>
                  <h2 className="mt-1 max-w-xl mb-2 text-2xl font-medium lg:inline-flex leading-tight tracking-tight">
                  and I’m a Product Designer, crazy about Design Systems.
                  </h2>
                  <p className="mt-8 text-2xl font-medium lg:text-4xl">
                    <a href="#work" title="Check my work">&darr;</a>
                  </p>
                </div>
              </div>
          </header>
      </section>
    </Container>
  );
};

export default HeroSection;
