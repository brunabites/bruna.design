import { writeFileSync } from 'fs';
import RSS from 'rss';
import { allPosts } from '../../.contentlayer/generated/index.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Bruna Bites',
    site_url: 'https://bruna.design',
    feed_url: 'https://bruna.design/feed.xml',
    description:
      'My name is Bruna Bites and I create modern digital experiences for humans using SEO, content, design, and code.',
  });
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://bruna.design/posts/${post.slug}`,
      date: post.publish_date,
      description: post.summary,
      categories: [post.tags],
    });
  });
  writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
generate();
