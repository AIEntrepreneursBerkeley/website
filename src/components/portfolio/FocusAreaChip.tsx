import React, { type FC } from 'react';
import { type Member } from 'contentlayer/generated';
import { getLinkFromHTML } from '~/lib/helpers';

type FocusAreaChipProps = {
  focusArea: string;
  textSize: string;
};

const FocusAreaChip: FC<FocusAreaChipProps> = ({
  focusArea,
  textSize,
}: FocusAreaChipProps) => (
  <div className="mr-1 grow-0 items-center rounded-full border px-3 py-1">
    <p className={textSize}>{focusArea}</p>
  </div>
);

export default FocusAreaChip;
