import { type FC } from 'react';
import { cn } from '~/utils/cn';

type LinesProps = {
  width: string;
  numberLines: 3 | 4;
};

const Lines: FC<LinesProps> = ({ width, numberLines }) => (
  <div className="pointer-events-none absolute inset-0 flex justify-center">
    <div
      className={cn(
        'grid h-full w-full grid-cols-1 gap-3.5 px-4',
        width,
        numberLines === 3 && 'xs:grid-cols-2 md:grid-cols-3',
        numberLines === 4 && 'xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      )}
    >
      <div className="border-left border-x border-dashed border-white/5" />
      <div className="hidden border-x border-dashed border-white/5 md:block" />
      {numberLines === 4 && (
        <div className="hidden border-x border-dashed border-white/5 lg:block" />
      )}
      <div className="border-right border-x border-dashed border-white/5" />
    </div>
  </div>
);

export default Lines;
