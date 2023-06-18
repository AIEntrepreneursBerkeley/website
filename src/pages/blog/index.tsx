/* eslint-disable @typescript-eslint/require-await */

import { type GetStaticProps } from 'next';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, type Post } from 'contentlayer/generated';

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

type PostProps = {
  posts: Post[];
};

const PostLayout = ({ posts }: PostProps) => (
  <>
    {posts.map((post) => (
      <div key={post.slug}>
        <h1>{post.title}</h1>
      </div>
    ))}
  </>
);

export default PostLayout;
