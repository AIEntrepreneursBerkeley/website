import { useEffect } from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '~/components/layouts/MainLayout';
import Lines from '~/components/sections/Lines';
import { Gradient } from '~/lib/gradient';

const ProgramPage: NextPage = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('.gradient-canvas');
  });

  return (
    <>
      <Head>
        <title>FAQ — AI Entrepreneurs at Berkeley</title>
      </Head>
      <Lines />
      <MainLayout>
        <div>yes</div>
      </MainLayout>
    </>
  );
};

export default ProgramPage;
