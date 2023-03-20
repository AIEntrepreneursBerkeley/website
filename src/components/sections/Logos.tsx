import Image from 'next/image';
import Marquee from '~/components/ui/Marquee';
import pearVC from '@/logos/pearvc.svg';
import skydeck from '@/logos/skydeck.png';
import unusualVentures from '@/logos/unusual-ventures.svg';
import theHouseFund from '@/logos/the-house-fund.svg';
import raytheon from '@/logos/raytheon.svg';

const Logos = () => (
  <section className="mt-24 border-b border-dashed border-white/5 pb-6 md:mt-40 lg:mt-52">
    <div className="container">
      <Marquee>
        <Image
          className="h-full w-auto object-contain"
          src={pearVC}
          alt="Pear VC"
          draggable={false}
          priority
        />
        <Image
          className="h-full w-auto object-contain"
          src={skydeck}
          alt="Skydeck"
          draggable={false}
          priority
        />
        <Image
          className="h-full w-auto object-contain"
          src={unusualVentures}
          alt="Unusual Ventures"
          draggable={false}
          priority
        />
        <Image
          className="h-full w-auto object-contain"
          src={theHouseFund}
          alt="The House Fund"
          draggable={false}
          priority
        />
        <Image
          className="h-full w-auto object-contain"
          src={raytheon}
          alt="Raytheon"
          draggable={false}
          priority
        />
      </Marquee>
    </div>
  </section>
);

export default Logos;
