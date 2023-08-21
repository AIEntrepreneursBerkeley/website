import Image from 'next/image';
import { type FC } from 'react';

const Showcase: FC = () => (
  <section className="relative my-24">
    <div className="bg-stripe-gradient-asc absolute top-0 h-full w-full" />
    <div className="container relative grid grid-cols-1 grid-rows-4 gap-7 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3">
      <a className="relative row-span-2 after:absolute after:inset-0 after:h-full after:w-full after:rounded-lg after:bg-darken-image after:shadow-border after:content-[''] sm:col-span-1 md:col-span-2">
        <figure className="relative flex h-[500px] overflow-hidden rounded-xl">
          <Image
            src="/images/FALL 2023 RECRUITING.png"
            fill
            className="h-full w-full object-cover"
          />
        </figure>
      </a>
      <a className="relative after:absolute after:inset-0 after:h-full after:w-full after:rounded-lg after:bg-darken-image after:shadow-border after:content-['']">
        <figure className="relative flex h-full overflow-hidden rounded-xl">
          <Image
            src="/images/pedro.jpg"
            fill
            className="h-full w-full object-cover brightness-[0.6]"
          />
        </figure>
      </a>
      <a className="relative after:absolute after:inset-0 after:h-full after:w-full after:rounded-lg after:bg-darken-image after:shadow-border after:content-['']">
        <figure className="relative flex h-full overflow-hidden rounded-xl">
          <Image
            src="/images/AI Entrepreneurs at Berkeley Meet-Up.jpg"
            fill
            className="h-full w-full object-cover brightness-[0.6]"
          />
        </figure>
      </a>
    </div>
  </section>
);

export default Showcase;
