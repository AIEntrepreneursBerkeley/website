import { type FC } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ReactGlobe = dynamic(() => import('~/components/ui/ReactGlobe'), {
  ssr: false,
});

const Globe: FC = () => (
  <section className="noise relative overflow-hidden border-t border-white/20 bg-[#151e30]/20">
    <Image
      src="/images/stars.svg"
      alt=""
      fill
      draggable={false}
      className="absolute left-1/2 rotate-[37deg] scale-150 object-contain"
    />
    <div className="-mb-60 flex justify-center xs:-mb-72 sm:-mb-96 md:-mb-[530px] lg:-mb-[570px] xl:-mb-[630px]">
      <h2 className="absolute top-1/2 z-10 text-2xl font-semibold xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Let's Create Seismic Change.
      </h2>
      <ReactGlobe />
    </div>
    <div className="relative h-12 bg-gray-900/10 backdrop-blur-3xl md:h-14 lg:h-16">
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
