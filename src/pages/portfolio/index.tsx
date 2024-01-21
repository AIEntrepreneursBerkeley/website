import {
  allCompanies,
  allMembers,
  allVCs,
  type Company,
  type Member,
  type VCs,
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
    VCs: VCs[];
  }[];
};

const TeamPage: NextPage<TeamPageProps> = ({ companies }: TeamPageProps) => (
  <>
    <Head>
      <title>Portfolio — AI Entrepreneurs at Berkeley</title>
    </Head>
    <SecondaryLayout color="gray">
      <Title
        title="Portfolio"
        description="We back the next generation of AI entrepreneurs"
      />
      <div className="container mx-auto w-full pb-4">
        <div className="flex flex-wrap justify-center gap-4">
          {companies.map((company) => (
            <CompanyCard
              key={company.company._id}
              company={company.company}
              founders={company.founders}
              backers={company.VCs}
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

  // Loop through all active companies and store the founders and VCs
  type CompanyWithFounders = {
    [key in string]: Member[];
  };
  const companiesToFounders: CompanyWithFounders = {};

  type CompanyWithVCs = {
    [key in string]: VCs[];
  };
  const companiesToVCs: CompanyWithVCs = {};

  activeCompanies.forEach((company: Company) => {
    companiesToFounders[company._id] = allMembers.filter((member) =>
      company.founders.includes(member._id)
    );
    companiesToVCs[company._id] = allVCs.filter((vc) =>
      company.backers.includes(vc._id)
    );
  });

  const activeCompaniesWithFoundersAndVCs = activeCompanies.map((company) => ({
    company,
    founders: companiesToFounders[company._id],
    VCs: companiesToVCs[company._id],
  }));

  return {
    props: {
      companies: activeCompaniesWithFoundersAndVCs,
    },
  };
};

export default TeamPage;
