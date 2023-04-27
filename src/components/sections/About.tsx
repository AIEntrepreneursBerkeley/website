import { type FC } from 'react';
import Image from 'next/image';

const About: FC = () => (
  <section id="program" className="relative bg-gray-900/90 py-12 md:py-32">
    <div className="absolute inset-0 flex justify-center overflow-hidden">
      <Image
        src="/images/gradient-small.webp"
        width={640}
        height={1124}
        className="max-w-none origin-top scale-125 sm:hidden"
        draggable={false}
        priority
        alt=""
      />
      <Image
        src="/images/gradient-medium.webp"
        width={1024}
        height={1124}
        className="hidden max-w-none origin-top scale-125 sm:block lg:hidden"
        draggable={false}
        priority
        alt=""
      />
      <Image
        src="/images/gradient-large.webp"
        width={2510}
        height={1168}
        className="hidden max-w-none origin-top scale-125 lg:block"
        draggable={false}
        priority
        alt=""
      />
      <div className="noise absolute inset-0 bg-left opacity-10" />
    </div>
    <div className="relative mx-auto">
      <div className="border-dashed border-white/5 lg:border-y">
        <div className="mx-auto py-2 px-2 md:px-4 lg:max-w-7xl lg:px-4">
          <div className="px-2">
            <h2>The Program</h2>
          </div>
          <div className="mt-4 grid gap-x-3.5 lg:mt-11 lg:grid-cols-3">
            <div className="px-2 lg:col-span-2">
              <div className="mt-8 space-y-4 text-gray-300 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:mt-6 lg:block lg:space-y-4 lg:text-lg">
                <p>
                  We host weekly, member-exclusive Hacking Sessions with
                  exceptional founders in AI. Our members are technical and
                  build their companies in the Generative AI, Computer Vision
                  and Robotics space!
                </p>
                <p>
                  We regularly bring in notable speakers from companies such as
                  Meta AI, Pear VC, or OpenAI. Recent topics have included LLM
                  Architecture, Open Source Projects, and Enterprise
                  Applications of Generative AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-dashed border-white/5 lg:mt-24 lg:border-y">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <p className="text-2xl font-semibold text-white md:text-3xl lg:px-2 lg:text-4xl">
            Benefits
          </p>
          <div className="mt-11 grid gap-x-3.5 gap-y-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
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
                <p className="font-semibold text-white">Workshops</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  We want you to get your start-up funded, which is why we have
                  hosted special workshops and events with Pear VC, Unusual
                  Ventures, and will have Y Combinator on campus in August to
                  specifically prepare AIEB members for their next cohort in
                  Winter 2024.
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
                  The VC Partners in our network are more than just logos. Many
                  of them offer office hours, their calendly link, or guarantee
                  an interview with a General Partner once your first prototype
                  is ready.
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
                <p className="font-semibold text-white">Education</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  We offer seminars, mentorship, and workshops on the latest AI
                  developments with a focus on Generative AI, Foundation Models,
                  and the Production Stack. DeCal planned.
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
                  We are thankful for the time and committment of our advisors,
                  consisting of researchers from Berkeley and Stanford, exited
                  founders, and industry professionals - only one Slack, text
                  message, or email away.
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
                  Members of AIEB understand how hard it is to be a founder. We
                  help each other strategically and emotional to navigate the
                  startup environment. We go to events together, give feed back
                  to each others' pitch decks and socialize outside of work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
