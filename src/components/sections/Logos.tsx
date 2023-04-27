import { type FC } from 'react';
import Image from 'next/image';
import Marquee from '~/components/ui/Marquee';
import pearVC from '@/logos/pearvc.svg';
import skydeck from '@/logos/skydeck.png';
import unusualVentures from '@/logos/unusual-ventures.svg';
import theHouseFund from '@/logos/the-house-fund.svg';
import antler from '@/logos/antler.svg';
import courtyardVentures from '@/logos/courtyard-ventures.png';

const Logos: FC = () => (
  <section className="mt-32 border-b border-dashed border-white/5 pb-6 md:mt-40 lg:mt-32">
    <div className="container">
      <Marquee>
        <Image
          className="h-14 w-auto object-cover brightness-0 invert"
          src={pearVC}
          alt="Pear VC"
          draggable={false}
          priority
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={skydeck}
          alt="Skydeck"
          draggable={false}
          priority
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={unusualVentures}
          alt="Unusual Ventures"
          draggable={false}
          priority
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={theHouseFund}
          alt="The House Fund"
          draggable={false}
          priority
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={antler}
          alt="Antler"
          draggable={false}
          priority
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={courtyardVentures}
          alt="Courtyard Ventures"
          draggable={false}
          priority
        />
      </Marquee>
    </div>
  </section>
);

export default Logos;
