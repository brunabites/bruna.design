import { PropsWithChildren } from 'react';
import Image from 'next/image';
import { Post } from 'contentlayer/generated';

import {
  Container,
  SocialShare,
  PostTitle,
  TableOfContents,
  Tag,
  AuthorCard,
  ExternalLink,
  FullImage
} from '@/components';

const PostLayout = ({ children, post }: PropsWithChildren<{ post: Post }>) => {
  return (
    <Container>
      <article className="prose prose-lg max-w-none flex flex-col items-center prose-p:my-4 prose-ul:ml-8 prose-ul:my-1 prose-ol:ml-8 prose-ol:my-1 prose-li:my-1 prose-headings:font-semibold prose-blockquote:not-italic prose-blockquote:gray-900 prose-blockquote:text-xl prose-strong:font-semibold">
        <div className="mx-auto mt-32 mb-16">
          <header className="justify-start mb-2 lg:text-center lg:mb-6">
            <div className="space-x-2 text-sm leading-6 text-gray-400 lg:text-base">
              <span aria-hidden="true">⥁</span>
              <span>{post.readingTime.text}</span>
            </div>
            <div>
              <PostTitle>{post.title}</PostTitle>
              <p className="max-w-full mx-auto mt-1 font-light text-base text-gray-700 text-left md:text-lg lg:max-w-2xl lg:text-center lg:text-xl">
                {post.summary}
              </p>
              <div>
                <Image
                  src={post.cover_image}
                  height={640}
                  width={1200}
                  alt={"Cover for " + post.title}
                  objectFit="cover"
                  objectPosition="top center"
                  className="rounded-md hover:-translate-y-0.5 transition duration-300 ease-in-out bg-gray-400"
                  priority
                />

              </div>
            </div>
          </header>

          <div className="max-w-3xl flex flex-col mx-auto pt-4 pb-4">
            {children}
          </div>

          {/* POST TAGS */}
          <div>
            {post.tags && (
              <div className="py-4 lg:py-8">
                <h3 className="mb-2 text-sm font-light text-gray-900 uppercase">
                  Tags:
                </h3>
                <div className="flex flex-wrap">
                  {post.tags.map((tag: string) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
    </Container>
  );
};

export default PostLayout;
