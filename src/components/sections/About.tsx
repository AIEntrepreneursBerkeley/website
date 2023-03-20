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
              Join Build UI Pro
            </h2>
          </div>
          <div className="mt-4 grid gap-x-3.5 lg:mt-11 lg:grid-cols-3">
            <div className="px-2 lg:col-span-2">
              <p className="text-lg text-white lg:text-2xl">
                Watch every video, support our work, and get exclusive perks!
              </p>
              <div className="mt-8 space-y-4 text-gray-300 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:mt-6 lg:block lg:space-y-4 lg:text-lg">
                <p>
                  Build UI is the new home for all our ideas. It will eventually
                  have hundreds of premium videos and a thriving community, but
                  right now it's the early days.
                </p>
                <p>
                  If you like what you see and you've ever wanted to support our
                  work, subscribe today and start enjoying all the perks of
                  becoming a member!
                </p>
              </div>
            </div>
            <div className="mx-auto mt-24 flex w-full max-w-md flex-col items-center rounded-lg px-2 lg:mt-0 lg:items-start">
              <p className="flex items-center font-semibold text-white">
                <span className="text-3xl">$29</span>
                <span className="ml-2 text-gray-300">/month</span>
              </p>
              <p className="mt-2 text-lg font-medium text-white lg:text-base">
                Watch everything<span className="hidden"> for $29/month</span>.
                Cancel anytime.
              </p>
              <div className="mt-10 w-full">
                <form>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white"
                  >
                    Enter your email
                  </label>
                  <div className="mt-2 flex flex-col rounded-md shadow-sm lg:flex-row">
                    <div className="relative flex flex-grow items-stretch focus-within:z-10">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        data-testid="checkout-email"
                        className="block w-full rounded-md border-gray-400 bg-white/5 focus-visible:border-white focus-visible:outline-none focus-visible:ring-0 sm:text-sm lg:rounded-none lg:rounded-l-md"
                        value=""
                      />
                    </div>
                    <button
                      className="border-accent bg-accent hover:bg-accent-light relative mt-4 -ml-px space-x-2 overflow-hidden rounded-md border py-2 px-4 font-semibold text-white focus-visible:border-white focus-visible:outline-none lg:mt-0 lg:rounded-l-none lg:rounded-r-md lg:border-gray-400 lg:py-2 lg:text-sm lg:focus-visible:border-white "
                      type="submit"
                      data-testid="checkout-button"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 border-white/5 lg:mt-32 lg:border-y">
        <div className="mx-auto max-w-7xl px-4 py-2">
          <p className="text-xl font-semibold text-white lg:px-2 lg:text-2xl">
            What you'll get as a Build UI Pro member
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
                  Full access to all Build UI videos
                </p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Get full access to all of our premium video content, updated
                  monthly.
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
                <p className="font-semibold text-white">Private Discord</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Ask questions and get answers from Sam, Ryan and other pro
                  members.
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
                  Video summaries with code snippets
                </p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Easily reference videos with text summaries and copyable code
                  snippets.
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
                <p className="font-semibold text-white">Source code</p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  View the source code for every video, right on GitHub.
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
                  Invoices and receipts
                </p>
              </div>
              <div>
                <p className="mt-1 ml-12 text-gray-300 lg:mt-3">
                  Get reimbursed from your employer for becoming a better coder!
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
