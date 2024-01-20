import { allCompanies, type Company } from 'contentlayer/generated';
import { type GetStaticProps, type NextPage } from 'next';
import Head from 'next/head';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import Lines from '~/components/sections/Lines';
import Team from '~/components/sections/Team';
import Title from '~/components/sections/Title';
import CompanyCard from './CompanyCard';

type TeamPageProps = {
  companies: Company[];
};

const TeamPage: NextPage<TeamPageProps> = ({ companies }) => (
  <>
    <Head>
      <title>Portfolio — AI Entrepreneurs at Berkeley</title>
    </Head>
    <SecondaryLayout color="gray">
      <Title title="Portfolio" description="" />
      <div className="container mx-auto w-full p-4">
        <div className="flex flex-wrap justify-center gap-4 border">
          {companies.map((company) => (
            <CompanyCard key={company._id} company={company} />
          ))}
        </div>
      </div>
    </SecondaryLayout>
  </>
);

export const getStaticProps: GetStaticProps = () => {
  const activeCompanies = allCompanies.filter(
    (company) => company.activeOnWebsite
  );
  return {
    props: {
      companies: activeCompanies,
    },
  };
};

export default TeamPage;
