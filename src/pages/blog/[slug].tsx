import { type GetStaticPaths, type GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { allPosts, type Post } from 'contentlayer/generated';
import Image from 'next/image';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPosts.map((post) => post.url!);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const foundPost = allPosts.find((post) => post.slug === params!.slug);
  return {
    props: {
      post: foundPost,
    },
  };
};

type PostProps = {
  post: Post;
};

const PostLayout = ({ post }: PostProps) => (
  <>
    <Head>
      <title>{post.title}</title>
    </Head>
    <article className="mx-auto max-w-2xl py-16">
      <div className="mb-6 text-center">
        <Link href="/blog">Back to blogs</Link>
      </div>
      <Image src={post.thumbnailImage[0]} height={400} width={600} />
      <div className="mb-6 text-center">
        <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
        <time className="text-sm text-slate-600">
          {format(parseISO(post.createdTime), 'LLLL d, yyyy')}
        </time>
        <time className="text-sm text-slate-600">
          {format(parseISO(post.lastEditedTime), 'LLLL d, yyyy')}
        </time>
      </div>
      <div>{post.description}</div>
      <div>{post.content}</div>
    </article>
  </>
);

export default PostLayout;
