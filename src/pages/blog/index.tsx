import { type NextPage, type GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { compareDesc } from 'date-fns';
import { allPosts, type Post } from 'contentlayer/generated';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import Title from '~/components/sections/Title';
import Lines from '~/components/sections/Lines';

export const getStaticProps: GetStaticProps = async () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdTime!), new Date(b.createdTime!))
  );
  return {
    props: {
      posts,
    },
  };
};

type BlogPageProps = {
  posts: Post[];
};

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => (
  <>
    <Head>
      <title>Blog — AI Entrepreneurs at Berkeley</title>
    </Head>
    <Lines width="max-w-5xl" numberLines={3} />
    <SecondaryLayout color="green">
      <Title
        title="Blog"
        description="Club announcements, founder stories, and more news from AIEB"
      />
      {posts.map((post) => (
        <div key={post.slug}>
          <h1>{post.title}</h1>
        </div>
      ))}
      <figure className="relative mx-auto mb-36 flex h-[280px] w-[280px]">
        <p className="text-center">No posts yet</p>
        <Image
          src="/images/404 Error-rafiki.png"
          fill
          className="h-full w-full object-cover"
        />
      </figure>
    </SecondaryLayout>
  </>
);

export default BlogPage;
