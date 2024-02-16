import { allMembers, type Member } from 'contentlayer/generated';
import {
  type GetStaticPaths,
  type GetStaticProps,
  NextPageContext,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import Lines from '~/components/sections/Lines';
import Profile from '~/components/sections/Profile';

const SuccessesPage: NextPage<ProfilePageProps> = () => {
  const router = useRouter();

  return (
    <SecondaryLayout>
      <h1>hi</h1>
    </SecondaryLayout>
  );
};

export default SuccessesPage;
