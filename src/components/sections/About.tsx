import Image from 'next/image';

const About = () => (
  <section className="relative bg-gray-700/20 py-12 md:py-32">
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
      <div className="border-white/5 lg:border-y">
        <div className="mx-auto py-2 px-2 md:px-4 lg:max-w-7xl lg:px-4">
          <div className="px-2">
            <h2 className="text-3xl font-semibold leading-none tracking-tight text-white lg:text-[40px]">
              What We Do
            </h2>
          </div>
          <div className="mt-4 grid gap-x-3.5 lg:mt-11 lg:grid-cols-3">
            <div className="px-2 lg:col-span-2">
              <div className="mt-8 space-y-4 text-gray-300 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:mt-6 lg:block lg:space-y-4 lg:text-lg">
                <p>
                  We offer two tracks for all members, AI Project Studio and
                  Build Your Startup.
                </p>
                <p>
                  AI Project Studio members build products through porjects for
                  companies and Build Your Startup members learn and network
                  through weekly events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 border-white/5 lg:mt-32 lg:border-y">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <p className="text-xl font-semibold text-white lg:px-2 lg:text-2xl">
            The Perks
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
                <p className="font-semibold text-white">
                  Community of Founders
                </p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Connect with founders and startups through an incubator-like
                  community.
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
                <p className="font-semibold text-white">
                  Weekly Hacking Sessions
                </p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Network and build in our Hackathons, grants, and competitions.
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
                <p className="font-semibold text-white">
                  An Educational Foundation
                </p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  We offer seminars, mentorship, and workshops on the latest AI
                  Developments. DeCal planned.
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
                <p className="font-semibold text-white">Fast-track to VC's</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  We are partnered with leading VC firms such as Pear VC,
                  Unusual Ventures, and Courtyard Ventures.
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
                <p className="font-semibold text-white">
                  Tech Entrepreneurship
                </p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Get involved in our industry-oriented research and real
                  product development.
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
