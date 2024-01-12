// import { type NextPage, type GetStaticProps } from 'next';
// import { allMembers, type Member } from 'contentlayer/generated';

// import Head from 'next/head';

// type TeamPageProps = {
//   cofounders: Member[];
//   executives: Member[];
//   advisors: Member[];
// };

// const TeamPage: NextPage<TeamPageProps> = ({
//   cofounders,
//   executives,
//   advisors,
// }) => (
//   <>
//     <Head>
//       <title>Team — AI Entrepreneurs at Berkeley</title>
//     </Head>
//     <SecondaryLayout color="gray">
//       <Title title="Team and Advisors" description="" />
//       <Lines width="max-w-7xl" numberLines={4} />
//       <Team
//         cofounders={cofounders}
//         executives={executives}
//         advisors={advisors}
//       />
//     </SecondaryLayout>
//   </>
// );

// export const getStaticProps: GetStaticProps = async () => {
//   const executiveTeam = allMembers.filter((member) =>
//     member.role.includes('Executive Team')
//   );
//   const cofounders = executiveTeam.filter((member) =>
//     member.role.includes('Co-Founder')
//   );
//   const executives = executiveTeam.filter(
//     (member) => !member.role.includes('Co-Founder')
//   );
//   const advisors = allMembers.filter((member) =>
//     member.role.includes('Advisor')
//   );
//   return {
//     props: {
//       cofounders,
//       executives,
//       advisors,
//     },
//   };
// };

// export default TeamPage;
