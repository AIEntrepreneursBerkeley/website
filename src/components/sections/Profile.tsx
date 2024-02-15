import { type Member } from 'contentlayer/generated';
import { type FC } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

type ProfileProps = {
  cofounders: Member[];
  executives: Member[];
  advisors: Member[];
};

const Profile: FC<ProfileProps> = ({ member }) => (
  <div style={{ width: '100vw', height: '100vh' }}>
    <Parallax pages={4}>
      <ParallaxLayer
        factor={2}
        style={{
          backgroundImage: `url(${member.image})`,
          backgroundSize: 'cover',
        }}
      >
        <h1>{member.name}</h1>
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.5} factor={4}>
        <h1>Where were you before AIEB?</h1>
        <p>In the Trenches</p>
      </ParallaxLayer>

      <ParallaxLayer offset={3}>
        <h1>What was your experience like within AIEB?</h1>
        <p>Amazing, AIEB made me</p>
      </ParallaxLayer>
    </Parallax>
  </div>
);

export default Profile;
