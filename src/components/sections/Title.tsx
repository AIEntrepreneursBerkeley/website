import { type FC, type } from 'react';

type TitleProps = {
  title: string;
  description: string;
};

const Title: FC<TitleProps> = ({ title, description }) => (
  <section className="my-12 border-y border-dashed border-white/5 py-2 text-center sm:my-20">
    <div className="container">
      <h1 className="text-3xl font-semibold xs:text-4xl sm:text-5xl">
        {title}
      </h1>
      <p className="mt-8 text-lg text-gray-400 sm:text-xl">{description}</p>
    </div>
  </section>
);

export default Title;
