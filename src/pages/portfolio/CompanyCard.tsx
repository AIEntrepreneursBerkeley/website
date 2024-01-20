import React from 'react';
import { type Company, type Member } from 'contentlayer/generated';

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
import { type FC } from 'react';

import aieb from '@/logos/aieb.svg';

import Image from 'next/image';
import FounderChip from './FounderChip';

type CompanyCardProps = {
  company: Company;
  founders: Member[];
};

const CompanyCard: FC<CompanyCardProps> = ({ company, founders }) => (
  <Dialog>
    <DialogTrigger>
      <Card className="h-[200px] w-[295px]">
        <CardHeader>
          <CardTitle className="flex flex-row items-center border">
            {company.companyLogo ? (
              <img
                src={company.companyLogo}
                alt={company.companyName}
                width="50"
                height="50"
                className="mr-5"
              />
            ) : (
              <Image
                src={aieb}
                alt="AIEB"
                width="50"
                height="50"
                className="mr-5"
              />
            )}

            {company.companyName}
          </CardTitle>
          <CardDescription>{company.shortDescription}</CardDescription>
        </CardHeader>

        <CardContent />
        <CardFooter className="flex justify-between border">
          {company.focusAreas.map((focusArea) => (
            <p>{focusArea}</p>
          ))}
        </CardFooter>
      </Card>
    </DialogTrigger>
    <DialogContent className="w-11/12">
      <DialogHeader>
        <DialogTitle className="flex flex-row items-center text-3xl">
          {company.companyLogo ? (
            <img
              src={company.companyLogo}
              alt={company.companyName}
              width="50"
              height="50"
              className="mr-5"
            />
          ) : (
            <Image
              src={aieb}
              alt="AIEB"
              width="50"
              height="50"
              className="mr-5"
            />
          )}
          {company.companyName}
        </DialogTitle>
        {company.longDescription}
      </DialogHeader>
      <DialogFooter>
        {founders.map((founder) => (
          <FounderChip founder={founder} />
        ))}
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default CompanyCard;
