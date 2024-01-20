import {
  allCompanies,
  allMembers,
  type Company,
  type Member,
} from 'contentlayer/generated';
import { type GetStaticProps, type NextPage } from 'next';
import Head from 'next/head';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import Lines from '~/components/sections/Lines';
import Team from '~/components/sections/Team';
import Title from '~/components/sections/Title';
import CompanyCard from './CompanyCard';

type TeamPageProps = {
  companies: {
    company: Company;
    founders: Member[];
  }[];
};

const TeamPage: NextPage<TeamPageProps> = ({ companies }: TeamPageProps) => (
  <>
    <Head>
      <title>Portfolio — AI Entrepreneurs at Berkeley</title>
    </Head>
    <SecondaryLayout color="gray">
      <Title title="Portfolio" description="" />
      <div className="container mx-auto w-full p-4">
        <div className="flex flex-wrap justify-center gap-4 border">
          {companies.map((companyWithFounders) => (
            <CompanyCard
              key={companyWithFounders.company._id}
              company={companyWithFounders.company}
              founders={companyWithFounders.founders}
            />
          ))}
        </div>
      </div>
    </SecondaryLayout>
  </>
);

export const getStaticProps: GetStaticProps = () => {
  const activeCompanies: Company[] = allCompanies.filter(
    (company) => company.activeOnWebsite
  );

  // Loop through all active companies and store the founders
  type CompanyWithFounders = {
    [key in string]: Member[];
  };
  const companiesToFounders: CompanyWithFounders = {};

  activeCompanies.forEach((company) => {
    companiesToFounders[company._id] = allMembers.filter((member) =>
      company.founders.includes(member._id)
    );
  });

  const activeCompaniesWithFounders = activeCompanies.map((company) => ({
    company,
    founders: companiesToFounders[company._id],
  }));

  return {
    props: {
      companies: activeCompaniesWithFounders,
    },
  };
};

export default TeamPage;
