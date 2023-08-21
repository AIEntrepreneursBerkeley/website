import { type NextPage } from 'next';
import Head from 'next/head';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import FAQ from '~/components/sections/FAQ';
import Lines from '~/components/sections/Lines';
import Title from '~/components/sections/Title';

const FAQPage: NextPage = () => (
  <>
    <Head>
      <title>FAQ — AI Entrepreneurs at Berkeley</title>
    </Head>
    <Lines width="max-w-7xl" numberLines={4} />
    <SecondaryLayout color="purple">
      <Title
        title="Frequently Asked Questions"
        description="Answers to common inquiries about our incubator and club."
      />
      <FAQ />
    </SecondaryLayout>
  </>
);

export default FAQPage;
