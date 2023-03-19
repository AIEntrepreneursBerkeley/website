import Image from 'next/image';
import pearVC from '@/logos/pearvc.svg';
import skydeck from '@/logos/skydeck.png';
import unusualVentures from '@/logos/unusual-ventures.svg';
import theHouseFund from '@/logos/the-house-fund.svg';
import raytheon from '@/logos/raytheon.svg';

const Logos = () => (
  <section className="mt-60 border-dashed border-white/5 pb-10 lg:border-b">
    <div className="container">
      <div className="m-auto flex gap-8 overflow-hidden before:content-none">
        <div className="align-center marquee relative flex h-10 min-w-full flex-shrink-0 justify-around gap-8">
          <Image
            className="h-full w-auto object-contain"
            src={pearVC}
            alt="Pear VC"
          />
          <Image
            className="h-full w-auto object-contain"
            src={skydeck}
            alt="Skydeck"
          />
          <Image
            className="h-full w-auto object-contain"
            src={unusualVentures}
            alt="Unusual Ventures"
          />
          <Image
            className="h-full w-auto object-contain"
            src={theHouseFund}
            alt="The House Fund"
          />
          <Image
            className="h-full w-auto object-contain"
            src={raytheon}
            alt="Raytheon"
          />
        </div>
        <div
          aria-hidden="true"
          className="align-center marquee flex h-10 min-w-full flex-shrink-0 justify-around gap-8"
        >
          <Image
            className="h-full w-auto object-contain"
            src={pearVC}
            alt="Pear VC"
          />
          <Image
            className="h-full w-auto object-contain"
            src={skydeck}
            alt="Skydeck"
          />
          <Image
            className="h-full w-auto object-contain"
            src={unusualVentures}
            alt="Unusual Ventures"
          />
          <Image
            className="h-full w-auto object-contain"
            src={theHouseFund}
            alt="The House Fund"
          />
          <Image
            className="h-full w-auto object-contain"
            src={raytheon}
            alt="Raytheon"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Logos;
