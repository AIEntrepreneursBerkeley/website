import type { FC, ReactNode } from 'react';

type MarqueeProps = {
  children: ReactNode;
};

const Marquee: FC<MarqueeProps> = ({ children }) => (
  <div className="relative m-auto flex gap-12 overflow-hidden before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-10 before:bg-gradient-to-r before:to-transparent before:content-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-10 after:bg-gradient-to-l after:to-transparent after:content-none md:before:content-[''] md:after:content-['']">
    <div className="marquee relative flex min-w-full flex-shrink-0 items-end justify-around gap-12">
      {children}
    </div>
    <div className="marquee relative flex min-w-full flex-shrink-0 items-end justify-around gap-12">
      {children}
    </div>
  </div>
);

export default Marquee;
