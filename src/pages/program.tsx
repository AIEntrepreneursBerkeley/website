import { type NextPage, type } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
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
        <title>PROGRAM 2025</title>
      </Head>
      <div className="relative h-screen">
        <canvas
          className="gradient-canvas absolute inset-0"
          data-js-darken-top
          data-transition-in
        />
      </div>
    </>
  );
};

export default ProgramPage;
