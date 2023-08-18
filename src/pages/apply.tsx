import { type NextPage } from 'next';
import { useState } from 'react';
import Layout from '~/components/layouts/Layout';
import { Skeleton } from '~/components/ui/Skeleton';

const ApplyPage: NextPage = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  return (
    <Layout>
      <div className="relative h-[800px] w-full">
        {!loaded && (
          <div className="absolute h-full w-full bg-white">
            <div className="mx-auto max-w-xl p-8">
              <Skeleton className="h-24 w-full" />
              <Skeleton className="mt-8 h-6 w-full" />
              <Skeleton className="mt-12 h-72 w-full" />
              <Skeleton className="mt-8 h-24 w-full" />
              <Skeleton className="mt-8 h-12 w-full" />
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
    </Layout>
  );
};

export default ApplyPage;
