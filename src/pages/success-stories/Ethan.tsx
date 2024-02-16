import { type NextPage, type GetStaticProps, type GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { allMembers, type Member } from 'contentlayer/generated';
import Profile from '~/components/sections/Profile';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import Lines from '~/components/sections/Lines';
import Head from 'next/head';

type ProfilePageProps = {
  member: Member | null; // Changed to focus on a single member
};

const ProfilePage: NextPage<ProfilePageProps> = ({ member }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <>
      <Head>
        <title>
          {member
            ? `${member.name} — AI Entrepreneurs at Berkeley`
            : 'Profile Not Found'}
        </title>
      </Head>
      <SecondaryLayout color="gray">
        {member && <Profile member={member} />}
      </SecondaryLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allMembers.map((member) => ({
    params: { id: member.name.toString() }, // Assuming each member has a unique `id`
  }));

  return { paths, fallback: false }; // or `true` or `blocking` for fallback behavior
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const member = allMembers.find((member) => member.name.toString() === id);

  return {
    props: {
      member: member || null,
    },
  };
};

export default ProfilePage;
