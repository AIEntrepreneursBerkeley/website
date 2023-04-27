import Image from 'next/image';
import { type FC } from 'react';
import Masonry from 'react-masonry-css';

const breakpointColumns = {
  default: 3,
  1024: 2,
  540: 1,
};

const Showcase: FC = () => (
  <section className="container mt-36 mb-24">
    <Masonry
      breakpointCols={breakpointColumns}
      className="-ml-6 flex w-auto grayscale"
      columnClassName="pl-6"
    >
      <figure className="relative mb-6 h-72">
        <Image
          src="/images/AI Entrepreneurs at Berkeley Meet-Up.jpg"
          alt="Meet up"
          className="w-full object-cover"
          fill
        />
      </figure>
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7042464142045167616"
        height="767"
        width="504"
        title="Embedded post"
        className="mb-6 h-80 w-full"
      />
      <figure className="relative mb-6 h-64">
        <Image
          src="/images/pearvc-event.jpg"
          alt="Meet up"
          className="w-full object-cover"
          fill
        />
      </figure>
      <figure className="relative mb-6 h-64">
        <Image
          src="/images/IMG_6787.JPG"
          alt="Meet up"
          className="w-full object-cover"
          fill
        />
      </figure>
      <figure className="relative mb-6 h-64">
        <Image
          src="/images/AIEB Event 1.JPG"
          alt="Meet up"
          className="w-full object-cover"
          fill
        />
      </figure>
      <figure className="relative mb-6 h-64">
        <Image
          src="/images/IMG_7060.JPG"
          alt="Meet up"
          className="w-full object-cover"
          fill
        />
      </figure>
      <figure className="relative mb-6 h-64">
        <Image
          src="/images/pearvc-event2.jpg"
          alt="Meet up"
          className="w-full object-cover"
          fill
        />
      </figure>
      <figure className="relative mb-6 h-56 brightness-150">
        <Image
          src="/images/pearvc-event3.jpg"
          alt="Meet up"
          className="w-full object-cover"
          fill
        />
      </figure>
      <figure className="relative mb-6 h-72">
        <Image
          src="/images/pearvc-event4.jpg"
          alt="Meet up"
          className="w-full object-cover"
          fill
        />
      </figure>
    </Masonry>
    <div className="pointer-events-none sticky inset-x-0 bottom-0 -mt-52 flex justify-center bg-gradient-to-t from-background pt-32 pb-16 opacity-100" />
  </section>
);

export default Showcase;
