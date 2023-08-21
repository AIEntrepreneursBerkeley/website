import { type FC } from 'react';

const Application: FC = () => (
  <section className="relative pt-0 pb-28 sm:pt-8 sm:pb-24 md:pt-16 md:pb-32 lg:pb-40 lg:pt-24">
    <div className="bg-stripe-gradient absolute top-0 -z-10 h-full w-full md:top-10" />
    <div className="container">
      <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl">
        Membership — Non-Bullsh*t Application
      </h2>
      <p className="mb-4">
        Founders have better things to do than go through a pseudo-elite
        application process. We understand that you just want to build; to
        create. This is what this club is for: Meeting like-minded students.
      </p>
      <p className="mb-4">
        We are looking for individual excellence. If you have built something
        yourself, describe it in our application and provide as many links as
        possible. Many of us are computer science, engineering, data science,
        business or design (in some sort) majors, because eventually, we are
        building software products.
      </p>
      <p className="mb-4">
        After we screen your application, we will let you know within one week
        if we would like to get to know you in a single interview! Don't be
        surprised if we ask for more information throughout the process.
      </p>
      <p>
        Although we are past our recruitment cycle, we do take on new start-ups
        and members on a case-by-case basis. Kindly reach out to{' '}
        <a
          className="text-blue-500 transition-colors hover:text-blue-400"
          href="mailto:contact@aientrepreneurs.org"
        >
          contact@aientrepreneurs.org
        </a>
        .
      </p>
    </div>
  </section>
);

export default Application;
