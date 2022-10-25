import Image from 'next/image';
import { shimmer, toBase64 } from '@/utils/image-shimmer';
import {
  AboutSection,
  ContactSection,
  Container,
  HeroSection,
  Available,
  ExternalLink,
  WebWrapper,
} from '@/components';

import { allPosts } from 'contentlayer/generated';
import { pick } from 'contentlayer/client';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import { config } from '@/config';

const MAX_DISPLAY = 3;

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <WebWrapper color="bg-yellow-300">
      <NextSeo
        title={config.seo.title}
        description={config.seo.description}
        canonical={config.seo.canonical}
        openGraph={{
          url: config.seo.openGraph.url,
          title: config.seo.title,
          description: config.seo.openGraph.description,
          type: config.seo.openGraph.type,
          site_name: config.site.sitename,
          images: [
            {
              url: config.seo.image,
              width: 1200,
              height: 630,
              alt: `Cover image for ${config.site.sitename}`,
            },
          ],
        }}
        twitter={{
          handle: config.seo.twitter.handle,
          site: config.seo.twitter.site,
          cardType: config.seo.twitter.cardType,
        }}
      />
      <Container>
        <HeroSection />
        <AboutSection />
        <Container>
          <div className="py-16">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between">
              <span className="max-w-sm pt-0 pb-4 mr-0 text-xl font-medium lg:pb-0 lg:pt-4 lg:mr-40 lg:w-28">
                work
              </span>
              <div className="flex flex-col items-start">
                <h2 className="max-w-sm mb-8 text-4xl font-medium lg:max-w-3xl lg:text-8xl">
                  latest cases
                </h2>

                <div className="max-w-3xl divide-y">
                  {posts.slice(0, MAX_DISPLAY).map((post, index) => (
                    <div key={index} className="py-4 border-yellow-700">
                      <ExternalLink href={`/posts/${post.slug}`} className="mt-2">
                        <h3 className="inline text-2xl font-medium animated-underline">
                          {post.title}
                        </h3>
                        <div className="">
                          <Image
                            src={post.cover_image}
                            height={410}
                            width={768}
                            alt={"Cover for " + post.title}
                            objectFit="cover"
                            objectPosition="top center"
                            className="rounded-lg opacity-40 grayscale mix-blend-multiply bg-yellow-500/30 hover:mix-blend-normal hover:filter-none hover:opacity-100 hover:-translate-y-0.5 transition duration-300 ease-in-out"
                            placeholder="blur"
                            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(410, 768))}`}
                            priority
                          />
                        </div>
                      </ExternalLink>
                      <p className="mt-1 text-xl text-gray-600">{post.summary}</p>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <ExternalLink
                    href="/posts"
                    className="text-xl font-medium lg:text-2xl animated-underline"
                  >
                    Read more cases <span className="pl-4">&rarr;</span>
                  </ExternalLink>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <ContactSection />
      </Container>
    </WebWrapper>
  );
};

export default Home;

export function getStaticProps() {
  const posts = allPosts
    .map((post) =>
      pick(post, [
        '_id',
        'slug',
        'title',
        'summary',
        'cover_image',
        'publish_date',
        'draft',
        'last_modified',
      ])
    )
    .filter((post) => post.draft === false)
    .sort(
      (a, b) => Number(new Date(b.publish_date)) - Number(new Date(a.publish_date))
    );
  return {
    props: { posts },
  };
}
