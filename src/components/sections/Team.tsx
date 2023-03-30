import { type FC } from 'react';
import Image from 'next/image';
import Card from '~/components/ui/Card';
import Spotlight from '~/components/ui/Spotlight';

const Team: FC = () => (
  <section className="relative py-12 md:py-32">
    <div className="absolute inset-0 flex justify-center overflow-hidden saturate-[0.25]">
      <Image
        src="/images/gradient-small.webp"
        width={640}
        height={1124}
        className="max-w-none origin-top scale-125 sm:hidden"
        draggable={false}
        priority
        alt=""
      />
      <Image
        src="/images/gradient-medium.webp"
        width={1024}
        height={1124}
        className="hidden max-w-none origin-top scale-125 sm:block lg:hidden"
        draggable={false}
        priority
        alt=""
      />
      <Image
        src="/images/gradient-large.webp"
        width={2510}
        height={1168}
        className="hidden max-w-none origin-top scale-125 lg:block"
        draggable={false}
        priority
        alt=""
      />
      <div className="noise absolute inset-0 bg-left opacity-10" />
    </div>
    <Spotlight color="194,97,254" colorDark="40,53,77">
      <h2 className="text-gradient mb-11 translate-y-[40%] pt-[12rem] text-center text-5xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-6xl [.is-visible_&]:translate-y-0">
        A Passionate Team
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
  </section>
);

export default Team;
