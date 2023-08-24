import { type Timeline } from 'contentlayer/generated';
import { type FC } from 'react';
import { format, parseISO } from 'date-fns';
import { MapPin } from 'lucide-react';
import { Button } from '~/components/ui/Button';

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
            {event.location && (
              <div className="mt-6 flex items-center gap-1 md:gap-2">
                <MapPin />
                <p className="text-sm xs:text-base md:text-lg">
                  {event.location}
                </p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
    <div className="mt-12 flex justify-center">
      <Button variant="default">Apply today &rarr;</Button>
    </div>
  </>
);

export default EventsTimeline;
