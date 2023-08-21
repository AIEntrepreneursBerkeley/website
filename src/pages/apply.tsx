import { type NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import SecondaryLayout from '~/components/layouts/SecondaryLayout';
import { Skeleton } from '~/components/ui/Skeleton';

const ApplyPage: NextPage = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      <Head>
        <title>Apply — AI Entrepreneurs @ Berkeley</title>
      </Head>
      <SecondaryLayout color="gray">
        <div className="relative h-screen w-full">
          {!loaded && (
            <div className="absolute h-full w-full">
              <div className="mx-auto max-w-xl px-8 py-16">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="mt-8 h-28 w-full" />
                <Skeleton className="mt-16 h-12 w-full" />
                <Skeleton className="mt-8 h-24 w-full" />
                <Skeleton className="mt-8 h-16 w-full" />
                <Skeleton className="mt-16 h-12 w-full" />
                <Skeleton className="mt-8 h-24 w-full" />
              </div>
            </div>
          )}
          <iframe
            title="AIEB Recruiting"
            className="airtable-embed"
            src="https://airtable.com/embed/appgANJjEVJSLaBQ4/shry2fBbjnRmJPa0N?backgroundColor=yellow"
            width="100%"
            height="100%"
            onLoad={handleLoad}
            className={`${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </SecondaryLayout>
    </>
  );
};

export default ApplyPage;
