import { Timeline, type } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { ExternalLink, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '~/components/ui/Button';

import type { FC } from 'react';

type EventsTimelineProps = {
  timeline: Timeline[];
};

const EventsTimeline: FC<EventsTimelineProps> = ({ timeline }) => (
  <>
    <ul className="mt-24 px-4 md:px-24">
      {timeline.map((event) => (
        <li className="flex min-h-[120px] justify-between">
          <div className="flex-1 text-right italic">
            <p className="text-sm xs:text-base md:text-lg">
              {format(parseISO(event.date?.start), 'LLLL d, yyyy')}
            </p>
            {!event.date?.start.includes('00:00:00.000Z') && (
              <p className="text-xs xs:text-sm md:text-base">
                {format(parseISO(event.date?.start), 'hh:mm aaa')}
              </p>
            )}
            {event.date?.end && (
              <p className="mt-2 text-sm xs:text-base md:text-lg">
                &rarr; {format(parseISO(event.date?.end), 'LLLL d, yyyy')}
              </p>
            )}
          </div>
          <div className="mx-5 flex flex-col items-center">
            <span className="my-2 rounded-full bg-gray-500 p-2" />
            <span className="w-0.5 flex-1 bg-gray-500" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold text-gray-200 xs:text-base md:text-lg">
              {event.name}
            </p>
            <p className="mt-2 text-sm xs:text-base md:text-lg">
              {event.information}
            </p>
            <div className="mt-6 flex flex-col gap-4 pb-10">
              {event.location && (
                <div className="flex items-center gap-1 md:gap-2">
                  <MapPin />
                  <p className="text-xs xs:text-sm md:text-base">
                    {event.location}
                  </p>
                </div>
              )}
              {event.url && (
                <div className="flex items-center gap-1 md:gap-2">
                  <a
                    className="flex items-center gap-2 text-xs xs:text-sm md:text-base"
                    href={event.url}
                  >
                    <ExternalLink />
                    More Details
                  </a>
                </div>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className="mt-12 flex justify-center">
      <Link href="/apply">
        <Button variant="default">Apply today &rarr;</Button>
      </Link>
    </div>
  </>
);

export default EventsTimeline;
