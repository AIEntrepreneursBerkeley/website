import { type FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
  startups: number;
  vc: number;
  attendees: number;
};

const Hero: FC<HeroProps> = ({ startups, vc, attendees }) => (
  <section className="relative flex flex-col">
    <Background />
    <Stripe />
    <div className="mt-20 border-y border-dashed border-white/5 py-2 md:mt-24 lg:mt-28">
      <div className="container">
        <h1>
          AI Entrepreneurs{` `}
          <br className="hidden sm:block" />
          at Berkeley — Build{` `}
          <br className="hidden sm:block" />
          Your AI Startup.
        </h1>
        <div className="mt-8 max-w-lg md:max-w-xl">
          <p className="mb-6">
            AI Entrepreneurs at Berkeley is the premier AI incubator for early
            stage startups and a community of risk-takers, researchers, and
            investor partners.
          </p>
          <p>
            Propel your startup to the next level.{' '}
            <Link href="/apply" className="text-blue-500">
              Apply
            </Link>{' '}
            to our 10-week incubator today.
          </p>
        </div>
        <div className="mt-12 flex max-w-lg justify-between md:max-w-xl">
          <div>
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              {startups}
            </span>{' '}
            Startups
          </div>
          <div className="">
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              {vc}
            </span>{' '}
            VC Partners
          </div>
          <div>
            <span className="block text-3xl font-semibold md:text-4xl lg:text-5xl">
              {attendees}
            </span>{' '}
            Attendees
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Background: FC = () => (
  <div className="absolute inset-0 -top-16 -z-10 lg:-top-20">
    <div style={{ opacity: 1, transform: 'none' }}>
      <div className="absolute inset-x-0 top-0 max-w-7xl overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]">
        <div className="scale-[calc(16/9)] md:scale-100">
          <div className="flex aspect-square items-center md:aspect-video">
            <iframe
              src="https://player.vimeo.com/video/849691275?h=7363b7ae4f&amp;dnt=1&amp;loop=1&amp;background=1&amp;app_id=58479"
              width="426"
              height="240"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="AIEB"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="absolute -inset-px bg-background/10" />
        <div className="absolute -inset-px bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute -inset-px hidden bg-gradient-to-l from-transparent via-transparent to-background lg:block" />
      </div>
      <div className="relative flex justify-center overflow-hidden saturate-50">
        <Image
          src="/images/gradient-small.webp"
          width={640}
          height={1124}
          className="sm:hidden"
          draggable={false}
          alt=""
        />
        <Image
          src="/images/gradient-medium.webp"
          width={1024}
          height={1124}
          className="hidden sm:block lg:hidden"
          draggable={false}
          alt=""
        />
        <Image
          src="/images/gradient-large.webp"
          width={2510}
          height={1168}
          className="hidden max-w-none lg:block"
          draggable={false}
          alt=""
        />
      </div>
    </div>
  </div>
);

const Stripe: FC = () => (
  <div className="bg-stripe-gradient absolute top-0 h-full w-full md:top-10" />
);

export default Hero;
