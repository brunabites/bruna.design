import { PropsWithChildren } from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';
import { Post } from 'contentlayer/generated';

import {
  Container,
  SocialShare,
  PostTitle,
  TableOfContents,
  Tag,
  AuthorCard,
  ExternalLink,
} from '@/components';
import { RiArrowLeftLine } from 'react-icons/ri';

const PostLayout = ({ children, post }: PropsWithChildren<{ post: Post }>) => {
  return (
    <Container>
      <article className="prose prose-lg max-w-none flex flex-col items-center prose-headings:font-semibold prose-blockquote:font-mono prose-blockquote:gray-900 prose-blockquote:text-base prose-strong:font-medium prose-li:leading-4 prose-a:text-yellow-800">
        <div className="mx-auto mt-32 mb-16">
          <header className="justify-start mb-2 lg:text-center lg:mb-8">
            <div className="space-x-2 text-sm leading-6 text-gray-400 lg:text-base">
              <span aria-hidden="true">⥁</span>
              <span>{post.readingTime.text}</span>
            </div>
            <div>
              <PostTitle>{post.title}</PostTitle>
              <div>
                <Image
                  src={post.cover_image}
                  height={640}
                  width={1200}
                  alt={"Cover for " + post.title}
                  objectFit="cover"
                  objectPosition="top center"
                  className="rounded-md hover:-translate-y-0.5 transition duration-300 ease-in-out bg-yellow-500"
                  priority
                />
              </div>
              <p className="max-w-2xl mx-auto mt-1 font-light text-base text-gray-700 lg:text-xl">
                {post.summary}
              </p>
            </div>
          </header>

          <div className="max-w-3xl flex flex-col mx-auto pt-4 pb-8">
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
