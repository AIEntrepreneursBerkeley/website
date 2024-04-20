import { allLinks } from 'contentlayer/generated';
import { ExternalLink } from 'lucide-react';
import { type NextPage, type } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import Title from '~/components/sections/Title';
import { Button } from '~/components/ui/Button';
import { Skeleton } from '~/components/ui/Skeleton';
import { getLinkFromHTML } from '~/lib/helpers';

import type Link from 'next/link';
import type { Links } from '.contentlayer/generated/types';

const ApplyPage: NextPage = () => {
  const applicationLink: Links[] = allLinks.find(
    (link: typeof Link) => link?.link === 'Application'
  );
  const formattedLink = getLinkFromHTML(applicationLink.url);

  const internLink: Links[] = allLinks.find(
    (link: typeof Link) => link?.link === 'Intern Application'
  );
  const formattedInternLink = getLinkFromHTML(internLink.url);

  const descriptionLink: Links[] = allLinks.find(
    (link: typeof Link) => link?.link === 'Intern Job Description'
  );
  const formattedDescriptionLink = getLinkFromHTML(descriptionLink.url);

  return (
    <>
      <Head>
        <title>Apply — AI Entrepreneurs at Berkeley</title>
      </Head>
      <SecondaryLayout color="gray">
        <div className="container flex flex-col items-center justify-center">
          <Title
            title="The First Big Step, To Build the Next Big Thing"
            description="Apply to the incubator today"
          />
          {/* Partition into two columns */}
          <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Centering div */}
            <div className="container flex flex-col items-center justify-center gap-8">
              <h1 className="text-xl font-semibold xs:text-4xl sm:text-5xl">
                Incubator Track
              </h1>
              <p className="text-gray-400">
                Berkeley's premier 10 week AI incubator program for early stage
                startups. We support you in taking your startup to the next
                level through our community of builders, researchers, & investor
                partners.
              </p>
            </div>
            <div className="container flex flex-col items-center justify-center gap-8">
              <h1 className="text-xl font-semibold xs:text-4xl sm:text-5xl">
                Builder Track
              </h1>
              <p className="text-gray-400">
                Enter AIEB's Builder Track to evolve your AI startup idea. Ideal
                for those in the ideation stage, our supportive ecosystem offers
                collaboration, expertise, and the tools to turn concepts into
                reality.
              </p>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center gap-8 py-8">
            <Button asChild variant="default">
              <a href={formattedLink} target="_blank" rel="noopener noreferrer">
                <p className="text-md font-semibold">Apply</p>
              </a>
            </Button>
          </div>
          {/* <section className="my-10 border-y border-dashed border-white/5 py-2 text-center">
            <div className="container">
              <h1 className="text-3xl font-semibold xs:text-4xl sm:text-5xl">
                Join The Team!
              </h1>
              <p className="mt-8 text-lg text-gray-400 sm:text-xl">
                Not looking to start a company but still want to get involved?
                Check out our open positions!
              </p>
            </div>
          </section>
          <div className="container grid grid-cols-1 gap-8 pb-10 md:grid-cols-2">
            <div className="flex items-center items-center justify-center gap-1 md:gap-2">
              <a
                className="flex items-center gap-2 text-xs xs:text-sm md:text-base"
                href={formattedDescriptionLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink />
                Position Descriptions
              </a>
            </div>
            <div className="flex items-center items-center justify-center gap-1 md:gap-2">
              <a
                className="flex items-center gap-2 text-xs xs:text-sm md:text-base"
                href={formattedInternLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink />
                Apply to Join the Team
              </a>
            </div>
         </div>  */}
        </div>
      </SecondaryLayout>
    </>
  );
};

export default ApplyPage;
