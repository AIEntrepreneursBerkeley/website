import {
  allFrontPages,
  allTimelines,
  type FrontPage,
  type Timeline,
} from 'contentlayer/generated';
import { type GetStaticProps, type NextPage } from 'next';
import Head from 'next/head';
import MainLayout from '~/components/layouts/MainLayout';
import About from '~/components/sections/About';
import Announcement from '~/components/sections/Announcement';
import Hero from '~/components/sections/Hero';
import Lines from '~/components/sections/Lines';
import Logos from '~/components/sections/Logos';
import Popup from '~/components/sections/Popup';
import Showcase from '~/components/sections/Showcase';

type HomePageProps = {
  announcement: FrontPage;
  startups: number;
  vc: number;
  attendees: number;
  timeline: Timeline[];
};

const HomePage: NextPage<HomePageProps> = ({
  announcement,
  startups,
  vc,
  attendees,
  timeline,
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
        <About timeline={timeline} />
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
  const timeline = allTimelines.sort((a, b) => {
    const dateA = new Date(a.date?.start);
    const dateB = new Date(b.date?.start);
    return dateA - dateB;
  });

  return {
    props: {
      announcement,
      startups,
      vc,
      attendees,
      timeline,
    },
  };
};

export default HomePage;
