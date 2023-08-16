import { type NextPage } from 'next';
import Head from 'next/head';
import Lines from '~/components/sections/Lines';
import Hero from '~/components/sections/Hero';
import Logos from '~/components/sections/Logos';
import About from '~/components/sections/About';
import Showcase from '~/components/sections/Showcase';
import Popup from '~/components/sections/Popup';
import Application from '~/components/sections/Application';
import Layout from '~/components/layouts/Layout';

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>AI Entrepreneurs Berkeley</title>
    </Head>
    <Lines />
    <Layout>
      <main>
        <Hero />
        <Logos />
        <Showcase />
        <About />
        <Popup />
        <Application />
      </main>
    </Layout>
  </>
);

export default HomePage;
