import { type Timeline, type } from 'contentlayer/generated';
import { add, format, parseISO } from 'date-fns';
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
            {renderEvent(event.date?.start, false)}
            {renderEvent(event.date?.end, true)}
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

function renderEvent(time: string | undefined, isEnd: boolean) {
  if (!time) return null;

  const containsTime = !time.includes('00:00:00.000Z');

  const arrow = isEnd ? '→' : '';

  if (containsTime) {
    return (
      <p className="text-sm xs:text-base md:text-lg">
        {arrow} {format(parseISO(time), 'LLLL d, yyyy hh:mm aaa')}
      </p>
    );
  }

  // Exported dates with no times are automatically '00:00:00.000Z', and therefore we need to add a day to the date
  return (
    <p className="text-xs xs:text-sm md:text-base">
      {arrow} {format(add(parseISO(time), { days: 1 }), 'LLLL d, yyyy')}
    </p>
  );
}

export default EventsTimeline;
