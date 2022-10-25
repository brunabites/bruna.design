import Image from 'next/image';
import Container from '../Container';
import { shimmer, toBase64 } from '@/utils/image-shimmer';

const HeroSection = () => {
  return (
    <Container>

        <section className="flex flex-col-reverse justify-between gap-x-12 sm:flex-row">
          <header>
          <div className="flex flex-col items-start mt-10 md:mt-32 moveUp">
            <Image
              src="/images/bruna-bites.png"
              height={205}
              width={200}
              alt="Headshot of Bruna Bites"
              objectFit="cover"
              objectPosition="top center"
              className="rounded-full glow transition duration-300 ease-in-out bg-yellow-700"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(205, 200))}`}
              priority
            />
          </div>
            <h1 className="mt-8 text-4xl font-medium lg:max-w-2xl lg:text-7xl">Bruna Bites</h1>
            <h2 className="mt-1 max-w-lg mb-2 text-2xl font-medium lg:inline-flex leading-tight tracking-tight">
          Product Designer, crazy about Design Systems.
            </h2>
            <p className="text-2xl  lg:text-6xl">&darr;</p>
          </header>
        </section>
    </Container>
  );
};

export default HeroSection;
