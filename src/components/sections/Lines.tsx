import { type FC } from 'react';

const Lines: FC = () => (
  <div className="pointer-events-none absolute inset-0 flex justify-center">
    <div className="grid h-full w-full max-w-7xl grid-cols-1 gap-3.5 px-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="border-left border-x border-dashed border-white/5" />
      <div className="hidden border-x border-dashed border-white/5 md:block" />
      <div className="hidden border-x border-dashed border-white/5 lg:block" />
      <div className="border-right border-x border-dashed border-white/5" />
    </div>
  </div>
);

export default Lines;
