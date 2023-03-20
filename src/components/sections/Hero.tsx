import Image from 'next/image';

const Hero = () => (
  <section className="relative flex flex-col">
    <Background />
    <div className="mt-28 border-y border-dashed border-white/5 py-2 md:mt-32 lg:mt-36">
      <header className="container">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-[40px] md:leading-[1.1] lg:col-span-2 lg:text-[64px] lg:leading-[1.125em] lg:tracking-[-0.0375em]">
          The Premier
          <br />
          Community to Build
          <br />
          Your AI Startup.
        </h1>
        <div className="mt-8 max-w-lg space-y-6 text-lg leading-[1.4] md:max-w-xl lg:text-xl">
          <p>
            AI Entrepreneurs Berkeley is dedicated to fostering a tight
            community of students and industry professionals who are passionate
            about Artificial Intelligence and Entrepreneurship.
          </p>
          <p>
            Collaborate on our cutting-edge projects, learn from the biggest
            names in the space, and connect with top VC firms.
          </p>
        </div>
      </header>
    </div>
  </section>
);

const Background = () => (
  <div className="absolute inset-0 -top-16 -z-10 lg:-top-20">
    <div style={{ opacity: 1, transform: 'none' }}>
      <div className="absolute inset-x-0 top-0 max-w-7xl overflow-hidden lg:bottom-auto lg:right-0 lg:left-auto lg:w-[80%]">
        <div className="scale-[calc(16/9)] md:scale-100">
          <div
            className="flex aspect-square items-center md:aspect-video"
            data-vimeo-initialized="true"
          >
            <iframe
              src="https://player.vimeo.com/video/804797342?h=51726ce665&amp;dnt=1&amp;loop=1&amp;background=1&amp;app_id=58479"
              width="426"
              height="240"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="AIEB"
              data-ready="true"
              className="h-full w-full"
            />
          </div>
        </div>
        <div className="absolute -inset-px bg-gray-900/50" />
        <div className="absolute -inset-px bg-gradient-to-b from-transparent via-transparent to-gray-900" />
        <div className="absolute -inset-px hidden bg-gradient-to-l from-transparent via-transparent to-gray-900 lg:block" />
      </div>
      <div className="relative flex justify-center overflow-hidden">
        <Image
          src="/images/gradient-small.webp"
          width={640}
          height={1124}
          className="sm:hidden"
          alt=""
        />
        <Image
          src="/images/gradient-medium.webp"
          width={1024}
          height={1124}
          className="hidden sm:block lg:hidden"
          alt=""
        />
        <Image
          src="/images/gradient-large.webp"
          width={2510}
          height={1168}
          className="hidden max-w-none lg:block"
          alt=""
        />
      </div>
    </div>
  </div>
);

export default Hero;
