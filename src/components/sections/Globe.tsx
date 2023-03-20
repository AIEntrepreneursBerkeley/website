import dynamic from 'next/dynamic';
import Image from 'next/image';

const ReactGlobe = dynamic(() => import('~/components/ui/ReactGlobe'), {
  ssr: false,
});

const Globe = () => (
  <section className="relative overflow-hidden">
    <Image
      src="/images/stars.svg"
      alt=""
      fill
      draggable={false}
      className="absolute left-1/2 rotate-[37deg] scale-150 object-contain"
    />
    <div className="-mb-80 flex justify-center sm:-mb-96 md:-mb-[530px] lg:-mb-[570px] xl:-mb-[630px]">
      <h2 className="absolute top-72 text-6xl font-semibold">
        Let's Create Seismic Change.
      </h2>
      <ReactGlobe />
    </div>
    <div className="relative h-12 bg-gray-900/5 backdrop-blur-3xl md:h-14 lg:h-16">
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
