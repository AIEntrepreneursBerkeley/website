import { type GetStaticProps } from 'next';
import { compareDesc } from 'date-fns';
import { allPosts, type Post } from 'contentlayer/generated';
import Layout from '~/components/layouts/MainLayout';

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
  <Layout>
    {posts.map((post) => (
      <div key={post.slug}>
        <h1>{post.title}</h1>
      </div>
    ))}
  </Layout>
);

export default PostLayout;
