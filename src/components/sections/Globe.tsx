import { type FC } from 'react';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import aieb from '@/logos/aieb.svg';

const ReactGlobe = dynamic(() => import('~/components/ui/ReactGlobe'), {
  ssr: false,
});

const Globe: FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section className="relative overflow-hidden border-t border-white/20">
      <h2
        ref={ref}
        className={classNames(
          'text-gradient absolute left-1/2 z-50 flex -translate-x-1/2 items-end text-gray-100 transition-transform duration-1000 lg:z-0',
          inView && 'translate-y-12 xl:translate-y-20',
          !inView && 'translate-y-48'
        )}
      >
        <p className="w-max text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Planet of the{' '}
        </p>
        <figure className="relative inline-flex h-full w-16 pb-2 xs:w-20 sm:w-24 md:w-32 lg:w-36">
          <Image
            src={aieb}
            alt="AIEB Logo"
            className="h-full"
            draggable={false}
          />
        </figure>
      </h2>
      <Image
        src="/images/stars.svg"
        alt="stars"
        fill
        draggable={false}
        className="absolute left-1/2 rotate-[37deg] scale-150 object-contain"
      />
      <div className="absolute inset-0 flex justify-center overflow-hidden saturate-50">
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
      <div className="-mb-60 flex justify-center xs:-mb-72 sm:-mb-96 md:-mb-[530px] lg:-mb-[570px] xl:-mb-[630px]">
        <ReactGlobe />
      </div>
      <div className="relative h-12 bg-background/10 backdrop-blur-3xl md:h-14 lg:h-16">
        <div className="flex h-full items-center justify-center" />
        <div
          aria-hidden
          className="absolute top-[1px] h-[1px] w-full"
          style={{
            background:
              'linear-gradient(90deg,#d9d9d9 -1.53%,transparent -1.52%,#666 50%,transparent)',
          }}
        />
      </div>
    </section>
  );
};

export default Globe;
