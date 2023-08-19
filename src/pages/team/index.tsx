import { type NextPage, type GetStaticProps } from 'next';
import { allMembers, type Member } from 'contentlayer/generated';
import Team from '~/components/sections/Team';
import Layout from '~/components/layouts/MainLayout';

type TeamPageProps = {
  executiveTeam: Member[];
  advisors: Member[];
};

const TeamPage: NextPage<TeamPageProps> = ({ executiveTeam, advisors }) => (
  <Layout>
    <Team executiveTeam={executiveTeam} advisors={advisors} />
  </Layout>
);

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
  };
};

export default TeamPage;
