// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import readingTime from "reading-time";
import remarkGfm from "remark-gfm";
import remarkFootnotes from "remark-footnotes";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrismPlus from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
var computedFields = {
  readingTime: { type: "json", resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: "number",
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/(\d{4})-(\d{2})-(\d{2})-/g, "").replace(/\.(mdx|md)|(\/index\.(mdx|md))/, "")
  }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/**/*.{mdx,md}",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    summary: { type: "string", required: true },
    draft: { type: "boolean", required: false },
    last_modified: { type: "date", required: false },
    publish_date: { type: "date", required: true },
    cover_image: { type: "string", required: true },
    tags: {
      type: "list",
      of: { type: "string" },
      default: [],
      required: false
    },
    seo_title: { type: "string", required: false },
    seo_description: { type: "string", required: false }
  },
  computedFields
}));
var contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm, [remarkFootnotes, { inline: true }]],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeCodeTitles,
      [rehypePrismPlus, { ignoreMissing: true }]
    ]
  }
});
var contentlayer_config_default = contentLayerConfig;
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-WASOA2KT.mjs.map
