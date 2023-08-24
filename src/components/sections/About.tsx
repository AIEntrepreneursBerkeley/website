import { type FC } from 'react';
import Image from 'next/image';
import Logos from '~/components/sections/Logos';
import EventsTimeline from '~/components/ui/EventsTimeline';
import { type Timeline } from 'contentlayer/generated';

type AboutProps = {
  timeline: Timeline[];
};

const About: FC<AboutProps> = ({ timeline }) => (
  <section
    id="program"
    className="relative bg-gray-900/90 py-24 sm:py-28 md:py-32"
  >
    <div className="absolute inset-0 flex justify-center overflow-hidden">
      <Image
        src="/images/gradient-small.webp"
        width={640}
        height={1124}
        className="max-w-none origin-top scale-125 sm:hidden"
        draggable={false}
        alt=""
      />
      <Image
        src="/images/gradient-medium.webp"
        width={1024}
        height={1124}
        className="hidden max-w-none origin-top scale-125 sm:block lg:hidden"
        draggable={false}
        alt=""
      />
      <Image
        src="/images/gradient-large.webp"
        width={2510}
        height={1168}
        className="hidden max-w-none origin-top scale-125 lg:block"
        draggable={false}
        alt=""
      />
      <div className="noise absolute inset-0 bg-left opacity-10" />
    </div>
    <div className="relative mx-auto max-w-5xl">
      <div className="mx-auto py-2 px-2 md:px-4 lg:px-4">
        <div className="px-2">
          <h2 className="text-center font-serif font-normal">Program 2023</h2>
        </div>
        <p className="mt-10 text-center text-2xl">
          10 Weeks. 12 Teams. Propel your startup to the next level.
        </p>
      </div>
      <div className="mt-16">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <div className="mt-6 grid gap-x-3.5 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
            <div className="lg:px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-4 h-8 w-8 shrink-0 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-semibold text-white">Education</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Our curated seminars, workshops, and exclusive events cover
                  topics like GenAI, Foundation Models, and more. Connect with
                  VC partners and Y Combinator for unparalleled networking.
                </p>
              </div>
            </div>
            <div className="lg:px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-4 h-8 w-8 shrink-0 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-semibold text-white">VC Partners</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Through a strong network, our partners offer office hours,
                  Calendly links, and interviews with a General Partner once
                  your first prototype is finalized.
                </p>
              </div>
            </div>
            <div className="lg:px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-4 h-8 w-8 shrink-0 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-semibold text-white">Mentorship</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Our experienced mentors provided one-on-one coaching, delving
                  into your specific challenges and opportunities, ensuring your
                  strategies are laser-focused.
                </p>
              </div>
            </div>
            <div className="lg:px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-4 h-8 w-8 shrink-0 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-semibold text-white">Advisors</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Our advisors consist of researchers from Berkeley and
                  Stanford, successful founders, and industry professionals.
                  They are committed to guide startups in achieving their goals.
                </p>
              </div>
            </div>
            <div className="lg:px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-4 h-8 w-8 shrink-0 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-semibold text-white">Demo Day & Hackathon</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Our upcoming Demo Day and Hackathon are your platforms to
                  shine. Pitch your innovations at Demo Day or unleash your
                  creativity and skills at the Hackathon, pushing the boundaries
                  of AI innovation.
                </p>
              </div>
            </div>
            <div className="lg:px-2">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="mr-4 h-8 w-8 shrink-0 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="font-semibold text-white">Community</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  We are not just a program; we are a supportive family that's
                  here to guide you strategically and emotionally through the
                  dynamic startup landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Logos />
        <EventsTimeline timeline={timeline} />
      </div>
    </div>
  </section>
);

export default About;
