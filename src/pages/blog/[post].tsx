import { type GetStaticPaths, type GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { allPosts, type Post } from 'contentlayer/generated';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';
import rehypeToc from '@jsdevtools/rehype-toc';
import rehypePrism from 'rehype-prism-plus';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import ReactMarkdown from 'react-markdown';
import Lines from '~/components/sections/Lines';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => post.url!);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const foundPost = allPosts.find((post) => post.slug === params!.post);
  const content = await (await fetch(foundPost?.content[0])).text();

  return {
    props: {
      post: foundPost,
      content,
    },
  };
};

const blogColors = {
  'Featured Post': 'orange',
  Announcements: 'teal',
  Community: 'blue',
  Engineering: 'purple',
  Events: 'green',
  Incubator: 'gray',
};

type PostProps = {
  post: Post;
  content: string;
};

const PostLayout = ({ post, content }: PostProps) => (
  <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <Lines width="max-w-3xl" numberLines={3} />
    <SecondaryLayout color={blogColors[post.tags[0]]}>
      <header className="container flex justify-between">
        <section>
          <div className="fixed mt-6">
            <Link
              href="/blog"
              className="text-sm text-gray-500 transition-colors hover:text-gray-200"
            >
              &#8592; Go Back
            </Link>
            {post.createdBy?.avatarUrl && (
              <Image
                src={post.createdBy?.avatarUrl}
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </div>
        </section>
        <section className="max-w-3xl flex-grow px-4 md:px-6">
          <div className="mt-20 mb-6">
            <h1 className="font-serif text-5xl font-normal leading-tight">
              {post.title}
            </h1>
            <p className="mt-10 text-xl text-gray-400">{post.description}</p>
          </div>
          <figure className="relative flex h-96 overflow-hidden rounded-xl">
            <Image
              src={post.thumbnail[0]}
              unoptimized
              fill
              className="blog-image object-cover"
            />
          </figure>
          <time className="text-sm text-slate-600">
            {format(parseISO(post.createdTime), 'LLLL d, yyyy')}
          </time>
          <time className="text-sm text-slate-600">
            {format(parseISO(post.lastEditedTime), 'LLLL d, yyyy')}
          </time>
        </section>
        <div className="">
          <Link
            href="/blog"
            className="fixed mt-6 text-sm text-gray-500 transition-colors hover:text-gray-200"
          >
            &#8592; Back to Blog
          </Link>
        </div>
      </header>
      <section className="container prose prose-invert mx-auto my-16 max-w-3xl">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeToc, rehypePrism]}
        >
          {content}
        </ReactMarkdown>
      </section>
    </SecondaryLayout>
  </>
);

export default PostLayout;
