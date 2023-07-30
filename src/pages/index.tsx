import { type FC } from 'react';
import { type GetStaticProps } from 'next';
import Head from 'next/head';
import Lines from '~/components/sections/Lines';
import Announcement from '~/components/sections/Announcement';
import Navbar from '~/components/sections/Navbar';
import Hero from '~/components/sections/Hero';
import Logos from '~/components/sections/Logos';
import About from '~/components/sections/About';
import Team from '~/components/sections/Team';
import Newsletter from '~/components/sections/Newsletter';
import Globe from '~/components/sections/Globe';
import Showcase from '~/components/sections/Showcase';
import Popup from '~/components/sections/Popup';
import FAQ from '~/components/sections/FAQ';
import Application from '~/components/sections/Application';
import { allMembers, type Member } from 'contentlayer/generated';

export const getStaticProps: GetStaticProps = async () => {
  const executiveTeam = allMembers.filter((member) =>
    member.role.includes('Executive Team')
  );
  const advisors = allMembers.filter((member) =>
    member.role.includes('Advisor')
  );
  return {
    props: {
      executiveTeam,
      advisors,
    },
    revalidate: 60,
  };
};

type HomeProps = {
  executiveTeam: Member[];
  advisors: Member[];
};

const Home: FC<HomeProps> = ({ executiveTeam, advisors }) => (
  <>
    <Head>
      <title>AI Entrepreneurs Berkeley</title>
    </Head>
    <Lines />
    <Announcement />
    <Navbar />
    <main>
      <Hero />
      <Logos />
      <Showcase />
      <About />
      <Popup />
      <Team executiveTeam={executiveTeam} advisors={advisors} />
      <Application />
      <FAQ />
      <Newsletter />
    </main>
    <footer>
      <Globe />
    </footer>
  </>
);

export default Home;
