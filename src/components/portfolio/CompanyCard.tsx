import React from 'react';
import { type Company, type Member, type VCs } from 'contentlayer/generated';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/Dialog';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/ShadCard';

import aieb from '@/logos/aieb.svg';

import Image from 'next/image';
import { getLinkFromHTML } from '~/lib/helpers';
import FounderChip from './FounderChip';
import FocusAreaChip from './FocusAreaChip';

type CompanyCardProps = {
  company: Company;
  founders: Member[];
  backers: VCs[];
};

const CompanyCard = ({ company, founders, backers }: CompanyCardProps) => (
  <Dialog>
    <DialogTrigger>
      <Card className="h-[200px] w-[295px]">
        <CardHeader>
          <CardTitle className="flex flex-row items-center">
            {LogoOrAlt({
              logo: company.companyLogo,
              alt: company.companyName,
              size: 70,
            })}

            {company.companyName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base">{company.shortDescription}</p>
        </CardContent>
      </Card>
    </DialogTrigger>
    <DialogContent className="w-11/12">
      <DialogHeader>
        <DialogTitle className="flex flex-row place-content-between items-center py-1 text-3xl">
          <div className="flex flex-row">
            {LogoOrAlt({
              logo: company.companyLogo,
              alt: company.companyName,
              size: 70,
            })}
            <div className="flex flex-col">
              <a
                href={getLinkFromHTML(company.companyWebsite)}
                target="_blank"
                rel="noreferrer"
              >
                <p className="text-3xl">{company.companyName}</p>
              </a>
              <div className="flex flex-row">
                <FocusAreaChip focusArea={company.batch} textSize="text-xs" />
              </div>
            </div>
          </div>
        </DialogTitle>
        <div className="flex flex-row pb-3">
          {company.focusAreas.map((focusArea) => (
            <FocusAreaChip focusArea={focusArea} textSize="text-sm" />
          ))}
        </div>
        <p className="text-xs sm:text-lg">{company.longDescription}</p>
      </DialogHeader>
      <DialogFooter>
        <div className="flex w-full flex-row place-content-between">
          <div className="flex flex-row flex-wrap">
            {backers.map((backer: VCs) => (
              <FounderChip
                founderName={backer.name}
                founderImage={backer.icon}
                founderLink={backer.websiteLink}
              />
            ))}
          </div>
          <div className="flex flex-row flex-wrap">
            {founders.map((founder) => (
              <FounderChip
                founderName={founder.name}
                founderImage={founder.imageLink}
                founderLink={founder.linkedin}
              />
            ))}
          </div>
        </div>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

const LogoOrAlt = ({
  logo,
  alt,
  size,
}: {
  logo: string | undefined;
  alt: string;
  size: number;
}) => {
  if (logo) {
    return (
      <img src={logo} alt={alt} width={size} height={size} className="mr-5" />
    );
  }

  return (
    <Image src={aieb} alt={alt} width={size} height={size} className="mr-5" />
  );
};

export default CompanyCard;
