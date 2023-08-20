import { useEffect, type FC } from 'react';
import { Input } from '~/components/ui/Input';
import { Button } from '~/components/ui/Button';
import { Gradient } from '~/lib/gradient';

const Newsletter: FC = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('.gradient-canvas');
  });

  return (
    <section className="relative py-8">
      <canvas
        className="gradient-canvas absolute top-0"
        data-js-darken-top
        data-transition-in
      />
      <div className="container flex w-full items-center space-x-6">
        <p className="font-medium text-white xs:text-xs sm:text-sm md:text-base lg:text-lg">
          Stay updated by signing up for our newsletter &#10148;
        </p>
        <div className="flex w-full items-center">
          <Input
            type="email"
            placeholder="Join the newsletter"
            className="placeholder:text-white"
          />
          <Button type="submit" variant="secondary" className="ml-2 text-white">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
