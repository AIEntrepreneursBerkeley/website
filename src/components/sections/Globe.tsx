import { type FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ReactGlobe = dynamic(() => import('~/components/ui/ReactGlobe'), {
  ssr: false,
});

const Globe: FC = () => (
  <section className="relative overflow-hidden border-t border-white/20">
    <Image
      src="/images/stars.svg"
      alt=""
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

export default Globe;
