import { allLinks } from 'contentlayer/generated';
import { NextPage, type } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import Title from '~/components/sections/Title';
import { Button } from '~/components/ui/Button';
import { Skeleton } from '~/components/ui/Skeleton';
import { getLinkFromHTML } from '~/lib/helpers';

import type { Links } from '.contentlayer/generated/types';

const ApplyPage: NextPage = () => {
  const applicationLink: Links[] = allLinks.find(
    (link: typeof Link) => link?.link === 'Application'
  );
  const formattedLink = getLinkFromHTML(applicationLink.url);

  return (
    <>
      <Head>
        <title>Apply — AI Entrepreneurs at Berkeley</title>
      </Head>
      <SecondaryLayout color="gray">
        <Title
          title="The First Big Step, To Build the Next Big Thing"
          description="Apply to the incubator today"
        />
        {/* Partition into two columns */}

        {/* Centering div */}
        <div className="container flex flex-col items-center justify-center gap-8">
          <Link href={formattedLink}>
            <Button variant="default">Apply</Button>
          </Link>
        </div>
      </SecondaryLayout>
    </>
  );
};

export default ApplyPage;
