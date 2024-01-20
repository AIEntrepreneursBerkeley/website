import React from 'react';
import { type Member } from 'contentlayer/generated';
import { getLinkFromHTML } from '~/lib/helpers';

type FounderChipProps = {
  founder: Member;
};

const FounderChip: FC<FounderChipProps> = ({ founder }: FounderChipProps) => (
  <a href={getLinkFromHTML(founder.linkedin)} target="_blank" rel="noreferrer">
    <div className="flex items-center rounded-full bg-gray-200 px-3 py-1">
      <img
        src={founder.imageLink}
        alt="Person's Name"
        className="mr-2 h-6 w-6 rounded-full"
      />

      <div className="h-6 border border-gray-400 bg-gray-400" />
      <span className="ml-2">{founder.name}</span>
    </div>
  </a>
);

export default FounderChip;
