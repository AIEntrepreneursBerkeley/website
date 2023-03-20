import dynamic from 'next/dynamic';

const ReactGlobe = dynamic(() => import('~/components/ui/ReactGlobe'), {
  ssr: false,
});

const Globe = () => (
  <section className="overflow-y-hidden">
    <div className="-mb-[700px] flex justify-center overflow-x-hidden">
      <ReactGlobe />
    </div>
    <div className="relative h-20 bg-gray-900/5 backdrop-blur-3xl">
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
