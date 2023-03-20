import type { ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
};

const Marquee = ({ children }: MarqueeProps) => (
  <div className="m-auto flex gap-8 overflow-hidden before:content-none">
    <div className="align-center marquee relative flex h-8 min-w-full flex-shrink-0 justify-around gap-8 lg:h-10">
      {children}
    </div>
    <div className="align-center marquee relative flex h-8 min-w-full flex-shrink-0 justify-around gap-8 lg:h-10">
      {children}
    </div>
  </div>
);

export default Marquee;
