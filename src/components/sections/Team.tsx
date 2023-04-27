import { type FC } from 'react';
import Card from '~/components/ui/Card';
import Spotlight from '~/components/ui/Spotlight';

const Team: FC = () => (
  <section id="team" className="relative pb-36 md:pb-56">
    <Spotlight color="160,77,234" colorDark="30,43,67">
      <h2 className="text-gradient mb-16 translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
        Executive Team
      </h2>
      <div className="container grid grid-cols-1 gap-y-6 gap-x-3.5 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          name="Julius Ritter"
          image="/images/julius.jpg"
          position="Co-Founder"
          linkedin="https://www.linkedin.com/in/juliusritter"
        />
        <Card
          name="Dhruv Kulkarni"
          image="/images/dhruv.jpg"
          position="Co-Founder"
          linkedin="https://www.linkedin.com/in/dhruv-kulkarni-dsk"
        />
        <Card
          name="Ethan Hou"
          image="/images/ethan.jpg"
          position="VP of Communication"
          linkedin="https://www.linkedin.com/in/ethan-hou10"
        />
        <Card
          name="Jyoti Rani"
          image="/images/jyoti.jpg"
          position="VP of Projects"
          linkedin="https://www.linkedin.com/in/jyotiinar"
        />
        <Card
          name="Jatin Gupta"
          image="/images/jatin.jpg"
          position="VP of Projects"
          linkedin="https://www.linkedin.com/in/jatingupta16"
        />
        <Card
          name="Emily Park"
          image="/images/emily.jpg"
          position="VP of Partnerships"
          linkedin="https://www.linkedin.com/in/mlapark"
        />
        <Card
          name="Vardaan Tekriwal"
          image="/images/vardaan.jpg"
          position="VP of Finance"
          linkedin="https://www.linkedin.com/in/vtekriwal2211"
        />
        <Card
          name="Victoria Raulet"
          image="/images/victoria.jpg"
          position="VP of Marketing"
          linkedin="https://www.linkedin.com/in/victoria-raulet-2b710b204"
        />
        <Card
          name="Anthony Kuang"
          image="/images/anthony.jpg"
          position="VP of Software"
          linkedin="https://www.linkedin.com/in/kuanganthony"
        />
      </div>
    </Spotlight>
    <Spotlight color="70,112,219" colorDark="34,25,60">
      <h2 className="text-gradient mb-16 translate-y-[40%] text-center [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] [.is-visible_&]:translate-y-0">
        Advisors
      </h2>
      <div className="container grid grid-cols-1 gap-y-6 gap-x-3.5 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <Card
          name="Stuart Russell"
          image="/images/stuart russell.jpg"
          position="Senior Advisor"
          linkedin="https://www.linkedin.com/in/stuartjonathanrussell/"
        />
        <Card
          name="Blaze Harrison"
          image="/images/blaze.jpeg"
          position="Senior Investment Partner"
          linkedin="https://www.linkedin.com/in/blazeharrison/"
        />
        <Card
          name="Ghita Alami"
          image="/images/ghita alami.jpeg"
          position="Event Director"
          linkedin="https://www.linkedin.com/in/ghita-houir-alami/"
        />
        <Card
          name="Marcus Lannie"
          image="/images/marcus.jpeg"
          position="Community Advisor"
          linkedin="https://www.linkedin.com/in/marcuslannie/"
        />
        <Card
          name="Olaf Groth, PhD"
          image="/images/olaf.jpeg"
          position="Senior Advisor"
          linkedin="https://www.linkedin.com/in/olafgroth/"
        />
        <Card
          name="Janik Sauerbier"
          image="/images/janik.jpeg"
          position="SWE Advisor"
          linkedin="https://www.linkedin.com/in/janik-sauerbier/"
        />
        <Card
          name="Ali Al-Ebrahim"
          image="/images/ali.jpeg"
          position="Community Advisor"
          linkedin="https://www.linkedin.com/in/alebrahimali/"
        />
        <Card
          name="Cavin Mozarmi"
          image="/images/cavin.jfif"
          position="VC Advisor"
          linkedin="https://www.linkedin.com/in/cavinmozarmi/"
        />
        <Card
          name="Jeremy Zhou"
          image="/images/jeremy.jpeg"
          position="PM Advisor"
          linkedin="https://www.linkedin.com/in/jeremy-zhou/"
        />
        <Card
          name="Dr. Chandra Vadhana"
          image="/images/chandra.jpeg"
          position="Senior Academic Advisor"
          linkedin="https://www.linkedin.com/in/connectceevee/"
        />
        <Card
          name="Sridhar Narahari"
          image="/images/sridhar.jpeg"
          position="Advisor for Management"
          linkedin="https://www.linkedin.com/in/sridhar-narahari-8ab3a212/"
        />
        <Card
          name="Armaan Goel"
          image="/images/armaan.jpeg"
          position="Technical Advisor"
          linkedin="https://www.linkedin.com/in/armaangoel/"
        />
        <Card
          name="Prof. Ben Brown, Ph.D."
          image="/images/ben.jpg"
          position="Advisor for Biosciences"
          linkedin="https://www.linkedin.com/in/ben-brown-41888656/"
        />
        <Card
          name="Victor Fang, Ph.D."
          image="/images/victor.jpeg"
          position="Cyber Security, ML and Web3 Advisor"
          linkedin="https://www.linkedin.com/in/drvictorfang/"
        />
        <Card
          name="Eric Han"
          image="/images/eric.jpeg"
          position="Technical Advisor for LLMs and ML"
          linkedin="https://www.linkedin.com/in/eric-han1/"
        />
        <Card
          name="Aaron Gyure"
          image="/images/aaron.jpeg"
          position="Hardware Advisor"
          linkedin="https://www.linkedin.com/in/aaron-gyure-912a42158/"
        />
        <Card
          name="Lucas Chu"
          image="/images/lucas.jpeg"
          position="Advisor"
          linkedin="https://www.linkedin.com/in/chulucas/"
        />
      </div>
    </Spotlight>
  </section>
);

export default Team;
