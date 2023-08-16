import { type GetStaticPaths, type GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { allPosts, type Post } from 'contentlayer/generated';
import Image from 'next/image';
import Layout from '~/components/layouts/Layout';
import ReactMarkdown from 'react-markdown';
import { BlogLines } from '~/components/sections/Lines';

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
  'Featured Post': ['#000', '#fff'],
  Announcements: ['#000', '#fff'],
  Community: ['#000', '#fff'],
  Engineering: ['#000', '#fff'],
  VC: ['#000', '#fff'],
  Incubator: ['#000', '#fff'],
  'Founder Stories': ['#000', '#fff'],
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
    <BlogLines />
    <Layout>
      <article className="-mt-[85px]">
        <header className="blog-header mb-6 pb-6 pt-[85px]">
          <section className="mx-auto max-w-4xl px-4 md:px-6">
            <Link href="/blog" className="text-sm text-gray-500">
              &#8592; Back to Blog
            </Link>
            <div className="mt-16">
              <h1 className="text-5xl font-bold leading-5 tracking-tighter text-gray-50">
                {post.title}
              </h1>
              <p className="mt-10 text-xl text-gray-400">{post.description}</p>
            </div>
            <Image
              src={post.thumbnailImage[0]}
              unoptimized
              height={400}
              width={600}
            />
            <time className="text-sm text-slate-600">
              {format(parseISO(post.createdTime), 'LLLL d, yyyy')}
            </time>
            <time className="text-sm text-slate-600">
              {format(parseISO(post.lastEditedTime), 'LLLL d, yyyy')}
            </time>
          </section>
        </header>
        <section className="prose prose-invert">
          <ReactMarkdown>{content}</ReactMarkdown>
        </section>
      </article>
    </Layout>
  </>
);

export default PostLayout;
