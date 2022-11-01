import { useState } from 'react';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { shimmer, toBase64 } from '@/utils/image-shimmer';
import { allPosts } from 'contentlayer/generated';
import { pick } from 'contentlayer/client';
import { Container, ExternalLink, WebWrapper } from '@/components';
import { config } from '@/config';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

const Posts = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter((post) => {
    const concat = post.title + post.summary;
    return concat.toLowerCase().includes(searchValue.toLowerCase());
  });

  const SEO_TITLE =
    'From the Desk of Bruna Bites » Digital, Design, Development Blog';
  const SEO_DESCRIPTION =
    'Explore the wandering mind of a seasoned marketing professional and evolving creative developer. Topics include design, development, and all things digital.';
  const router = useRouter();
  const CANONICAL_SLUG = router.pathname;
  console.log(CANONICAL_SLUG);
  return (
    <WebWrapper color="bg-yellow-300">
      <NextSeo
        title={SEO_TITLE}
        description={SEO_DESCRIPTION}
        canonical={`${config.seo.canonical}${CANONICAL_SLUG}`}
        openGraph={{
          url: config.seo.openGraph.url,
          title: SEO_TITLE,
          description: SEO_DESCRIPTION,
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
        <div className="flex flex-col items-start justify-start pt-40 lg:flex-row">
          <span className="max-w-sm pt-0 pb-4 mr-0 text-xl font-medium lg:pb-0 lg:pt-4 lg:mr-40 lg:w-28">
            work
          </span>
          <div className="flex flex-col items-start">
            <h2 className="max-w-sm mb-8 text-3xl font-medium lg:max-w-2xl lg:text-6xl">
              latest cases
            </h2>
            <div className="max-w-2xl mb-4 space-y-6 text-2xl">
              <p>
                Explore the wandering mind of a seasoned marketing professional and
                evolving creative developer. Topics include design, development,
                marketing, and all things digital.
              </p>
            </div>
            <div className="relative w-full mb-4">
              <input
                aria-label="Search all posts"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search all posts"
                className="hidden w-full px-4 py-2 text-gray-900 bg-white rounded-md focus:border-warning-500 focus:ring-warning-500"
              />
              <svg
                className="hidden absolute w-5 h-5 text-gray-500 right-3 top-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="flex flex-col items-start justify-start lg:flex-row">
            <span className="max-w-sm pt-0 pb-4 mr-0 text-xl font-medium lg:pb-0 lg:pt-4 lg:mr-40 lg:w-28"></span>
            <div className="flex flex-col items-start">
              <div className="max-w-2xl divide-y">
                {!filteredBlogPosts.length && (
                  <p className="font-medium">
                    Sorry, no cases were found. Please try your search again.
                  </p>
                )}
                {filteredBlogPosts.map((post, index) => (
                  <div key={index} className="py-8 border-yellow-700">
                    <ExternalLink href={`/posts/${post.slug}`} className="mt-2">
                      <h3 className="inline text-2xl font-medium animated-underline">
                        {post.title}
                      </h3>
                      <div className="mt-3">
                        <Image
                          src={post.cover_image}
                          height={410}
                          width={768}
                          alt={"Cover for " + post.title}
                          objectFit="cover"
                          objectPosition="top center"
                          className="rounded-lg brightness-110 hover:brightness-100 hover:-translate-y-0.5 transition duration-300 ease-in-out"
                          placeholder="blur"
                          blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(410, 768))}`}
                          priority
                        />
                      </div>
                    </ExternalLink>
                    <p className="mt-1 text-xl">{post.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </WebWrapper>
  );
};
export default Posts;

export async function getStaticProps() {
  const posts = await allPosts
    .map((post) =>
      pick(post, [
        '_id',
        'title',
        'slug',
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
