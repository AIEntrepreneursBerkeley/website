import { type Member } from 'contentlayer/generated';
import { type FC } from 'react';
import Card from '~/components/ui/Card';

type TeamProps = {
  cofounders: Member[];
  executives: Member[];
  advisors: Member[];
};

const Team: FC<TeamProps> = ({ cofounders, executives, advisors }) => (
  <section id="team" className="relative pb-36 md:pb-56">
    <div className="container grid grid-cols-1 gap-y-6 gap-x-3.5 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {cofounders.map((member) => (
        <Card
          name={member.name}
          image={member.image[0]}
          position={member.role[0]}
          linkedin={member.linkedin}
        />
      ))}
      {executives.map((member) => (
        <Card
          name={member.name}
          image={member.image[0]}
          position={member.role[0]}
          linkedin={member.linkedin}
        />
      ))}
    </div>
    <div className="container mt-32 grid grid-cols-1 gap-y-6 gap-x-3.5 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
