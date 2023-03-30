import type { FC, ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
};

const Marquee: FC<MarqueeProps> = ({ children }) => (
  <div className="relative m-auto flex gap-12 overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-10 before:bg-gradient-to-r before:from-background before:to-transparent before:content-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-10 after:bg-gradient-to-l after:from-background after:to-transparent after:content-none md:before:content-[''] md:after:content-['']">
    <div className="align-center marquee relative flex h-8 min-w-full flex-shrink-0 justify-around gap-12 lg:h-10">
      {children}
    </div>
    <div className="align-center marquee relative flex h-8 min-w-full flex-shrink-0 justify-around gap-12 lg:h-10">
      {children}
    </div>
  </div>
);

export default Marquee;
