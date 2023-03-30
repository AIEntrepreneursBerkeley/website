import type { FC, ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';
import { useInView } from 'react-intersection-observer';

type SpotlightProps = {
  children: ReactNode;
  color: string;
  colorDark: string;
};

const Spotlight: FC<SpotlightProps> = ({ children, color, colorDark }) => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <section
      ref={ref}
      className={classNames(
        'after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent) relative flex flex-col items-center overflow-x-clip before:pointer-events-none before:absolute before:h-[15rem] before:w-full before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:bg-no-repeat before:transition-[transform,opacity] before:duration-1000 before:ease-in before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] after:pointer-events-none after:absolute after:inset-0',
        inView &&
          'is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]',
        !inView && 'before:rotate-180 before:opacity-40'
      )}
      style={
        {
          '--feature-color': color,
          '--feature-color-dark': colorDark,
        } as CSSProperties
      }
    >
      <div className="mt-[12.8rem] w-full md:mt-[10rem]">{children}</div>
    </section>
  );
};

export default Spotlight;
