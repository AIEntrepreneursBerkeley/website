import { type FC } from 'react';
import Card from '~/components/ui/Card';

const Team: FC = () => (
  <section className="container px-4 py-12 md:py-32">
    <h2 className="mb-12">The Team</h2>
    <div className="grid grid-cols-1 gap-y-6 gap-x-3.5 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
  </section>
);

export default Team;
