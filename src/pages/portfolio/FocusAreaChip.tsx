import React, { type FC } from 'react';
import { type Member } from 'contentlayer/generated';
import { getLinkFromHTML } from '~/lib/helpers';

type FocusAreaChipProps = {
  focusArea: string;
};

const FocusAreaChip: FC<FocusAreaChipProps> = ({
  focusArea,
}: FocusAreaChipProps) => (
  <div className="flex items-center rounded-full border px-3 py-1">
    <p className="text-sm">{focusArea}</p>
  </div>
);

export default FocusAreaChip;
