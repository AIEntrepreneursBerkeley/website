import { type Member } from 'contentlayer/generated';
import { type FC } from 'react';

type ProfileProps = {
  cofounders: Member[];
  executives: Member[];
  advisors: Member[];
};

const Profile: FC<ProfileProps> = ({ member }) => (
  <section className="relative pb-36 md:pb-56">
    <div className="container grid grid-cols-1 gap-y-6 gap-x-3.5 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <h1>{member.name}</h1>
      <img src={member.image} alt="profile image" />
    </div>
  </section>
);

export default Profile;
