import { type Member } from 'contentlayer/generated';
import { type FC } from 'react';
import Card from '~/components/ui/Card';

type TeamProps = {
  executiveTeam: Member[];
  advisors: Member[];
};

const Team: FC<TeamProps> = ({ executiveTeam, advisors }) => (
  <section id="team" className="relative pb-36 md:pb-56">
    <h2 className="text-gradient mb-16 translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
      Executive Team
    </h2>
    <div className="container grid grid-cols-1 gap-y-6 gap-x-3.5 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {executiveTeam.map((member) => (
        <Card
          name={member.name}
          image={member.image[0]}
          position={member.role[0]}
          linkedin={member.linkedin}
        />
      ))}
    </div>
    <h2 className="text-gradient mb-16 translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
      Advisors
    </h2>
    <div className="container grid grid-cols-1 gap-y-6 gap-x-3.5 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {advisors.map((member) => (
        <Card
          name={member.name}
          image={member.image[0]}
          position={member.role[0]}
          linkedin={member.linkedin}
        />
      ))}
    </div>
  </section>
);

export default Team;
