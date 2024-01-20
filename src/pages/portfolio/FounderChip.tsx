import React, { type FC } from 'react';
import { type Member } from 'contentlayer/generated';
import { getLinkFromHTML } from '~/lib/helpers';

type FounderChipProps = {
  founderName: string;
  founderImage: string;
  founderLink: string;
};

const FounderChip: FC<FounderChipProps> = ({
  founderName,
  founderImage,
  founderLink,
}: FounderChipProps) => (
  <a href={getLinkFromHTML(founderLink)} target="_blank" rel="noreferrer">
    <div className="flex items-center rounded-full border px-3 py-1">
      <img
        src={founderImage}
        alt="Person's Name"
        className="mr-2 h-6 w-6 rounded-full"
      />

      <div className="h-6 border border-gray-400" />
      <p className="ml-2">{founderName}</p>
    </div>
  </a>
);

export default FounderChip;
