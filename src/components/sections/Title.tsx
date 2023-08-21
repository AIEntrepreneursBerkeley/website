import { type FC } from 'react';

type TitleProps = {
  title: string;
  description: string;
};

const Title: FC<TitleProps> = ({ title, description }) => (
  <section className="my-20 border-y border-dashed border-white/5 py-2 text-center">
    <div className="container">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <p className="mt-8 text-xl text-gray-400">{description}</p>
    </div>
  </section>
);

export default Title;
