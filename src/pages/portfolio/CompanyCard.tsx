import React from 'react';
import { type Company } from 'contentlayer/generated';

import {
  Dialog,
  DialogContent,
  DialogDescription,
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

import Image from 'next/image';

type CompanyCardProps = {
  company: Company;
};

const CompanyCard: FC<CompanyCardProps> = ({ company }) => (
  <Dialog>
    <DialogTrigger>
      <Card className="h-[200px] w-[295px]">
        <CardHeader>
          <CardTitle className="flex flex-row items-center border">
            <img
              src={company.companyLogo}
              alt={company.companyName}
              width="50"
              height="50"
              className="mr-5"
            />
            {company.companyName}
          </CardTitle>
          <CardDescription>{company.shortDescription}</CardDescription>
        </CardHeader>

        <CardContent />
        <CardFooter className="flex justify-between" />
      </Card>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{company.companyName}</DialogTitle>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

export default CompanyCard;
