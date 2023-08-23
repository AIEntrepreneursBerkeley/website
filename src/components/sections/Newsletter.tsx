import { type FC } from 'react';
import { Input } from '~/components/ui/Input';
import { Button } from '~/components/ui/Button';

const Newsletter: FC = () => (
  <section className="relative bg-gradient-to-r from-purple-700 to-indigo-700 py-8">
    <div className="container flex w-full items-center space-x-6">
      <p className="text-xs font-medium text-white sm:text-sm md:text-base lg:text-lg">
        Stay updated by signing up for our newsletter &#10148;
      </p>
      <div className="flex w-full items-center">
        <Input
          type="email"
          placeholder="Email"
          className="placeholder:text-white"
        />
        <Button type="submit" variant="default" className="ml-2 text-white">
          Subscribe
        </Button>
      </div>
    </div>
  </section>
);

export default Newsletter;
