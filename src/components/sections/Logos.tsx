import Image from 'next/image';
import { type FC, type } from 'react';
import Marquee from '~/components/ui/Marquee';

import a16z from '@/logos/a16z.svg';
import antler from '@/logos/antler.svg';
import bigIdeas from '@/logos/big-ideas.png';
import costanoa from '@/logos/costanoa-vc.svg';
import courtyardVentures from '@/logos/courtyard-ventures.png';
import futurexcapital from '@/logos/futurexcapital.png';
import mercury from '@/logos/mercury.svg';
import microsoft from '@/logos/microsoft.png';
import nfx from '@/logos/nfx.svg';
import openAI from '@/logos/openai.svg';
import pearVC from '@/logos/pearvc.svg';
import skydeck from '@/logos/skydeck.png';
import theHouseFund from '@/logos/the-house-fund.svg';
import unusualVentures from '@/logos/unusual-ventures.svg';
import yCombinator from '@/logos/y-combinator.svg';

const Logos: FC = () => (
  <section className="mt-28 border-b border-dashed border-white/5 pb-6 md:mt-36 lg:mt-24">
    <div className="container">
      <Marquee>
        <Image
          className="h-14 w-auto object-cover brightness-0 invert"
          src={futurexcapital}
          alt="FutureX Capital"
          draggable={false}
        />
        <Image
          className="h-14 w-auto object-cover brightness-0 invert"
          src={pearVC}
          alt="Pear VC"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={a16z}
          alt="a16z"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={openAI}
          alt="OpenAI"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={microsoft}
          alt="Microsoft"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={nfx}
          alt="NFX"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={costanoa}
          alt="Costanoa"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={yCombinator}
          alt="Y Combinator"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={skydeck}
          alt="Skydeck"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={mercury}
          alt="Mercury"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={unusualVentures}
          alt="Unusual Ventures"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={theHouseFund}
          alt="The House Fund"
          draggable={false}
        />
        <Image
          className="h-12 w-auto object-cover brightness-0 invert"
          src={nfx}
          alt="NFX"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={antler}
          alt="Antler"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={bigIdeas}
          alt="Big Ideas"
          draggable={false}
        />
        <Image
          className="h-10 w-auto object-cover brightness-0 invert"
          src={courtyardVentures}
          alt="Courtyard Ventures"
          draggable={false}
        />
      </Marquee>
    </div>
  </section>
);

export default Logos;
