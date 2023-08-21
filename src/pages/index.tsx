import { type NextPage, type GetStaticProps } from 'next';
import Head from 'next/head';
import Lines from '~/components/sections/Lines';
import Hero from '~/components/sections/Hero';
import Logos from '~/components/sections/Logos';
import About from '~/components/sections/About';
import Showcase from '~/components/sections/Showcase';
import Popup from '~/components/sections/Popup';
import Application from '~/components/sections/Application';
import MainLayout from '~/components/layouts/MainLayout';
import Pillars from '~/components/sections/Pillars';
import Announcement from '~/components/sections/Announcement';
import { allFrontPages, type FrontPage } from 'contentlayer/generated';

type HomePageProps = {
  announcement: FrontPage;
  startups: number;
  vc: number;
  attendees: number;
};

const HomePage: NextPage<HomePageProps> = ({
  announcement,
  startups,
  vc,
  attendees,
}) => (
  <>
    <Head>
      <title>Home — AI Entrepreneurs at Berkeley</title>
    </Head>
    <Lines width="max-w-7xl" numberLines={3} />

    <Announcement announcement={announcement} />
    <MainLayout>
      <main>
        <Hero startups={startups} vc={vc} attendees={attendees} />
        <Logos />
        <Showcase />
        <About />
        <Popup />
      </main>
    </MainLayout>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const announcement = allFrontPages.find(
    (entity) => entity.name === 'Announcement'
  );
  const startups = allFrontPages.find(
    (entity) => entity.name === 'Startups'
  )?.number;
  const vc = allFrontPages.find((entity) => entity.name === 'VC')?.number;
  const attendees = allFrontPages.find(
    (entity) => entity.name === 'Attendees'
  )?.number;

  return {
    props: {
      announcement,
      startups,
      vc,
      attendees,
    },
  };
};

export default HomePage;
