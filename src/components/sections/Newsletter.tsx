import { type FC, useState } from 'react';
import { Button } from '~/components/ui/Button';
import { Input } from '~/components/ui/Input';
import { api } from '~/utils/api';
import { useForm, type SubmitHandler } from 'react-hook-form';
import Link from 'next/link';
import Image from 'next/image';

const Newsletter: FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const subscriber = api.email.addSubscriber.useMutation();

  type EmailInputs = {
    name: string;
    email: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInputs>();
  const onSubmit: SubmitHandler<EmailInputs> = (data: EmailInputs) => {
    subscriber.mutate(data, {
      onSuccess: () => {
        console.log('Success');
        setSubmitted(true);
      },
      onError: (err) => {
        console.log('Error');
        console.error(err);
        setSubmitted(false);
      },
    });
    setSubmitted(true);
  };
  return (
    <section className="relative flex flex-row bg-gradient-to-r from-purple-700 to-indigo-700 py-3">
      {submitted ? (
        <p className="container flex items-center justify-center text-center font-medium text-white first-line:text-xs sm:text-sm md:text-base lg:text-lg">
          Thank you for subscribing! 🎉
        </p>
      ) : (
        <div className="container flex flex-col items-center space-x-6 sm:flex-row">
          <p className="text-xs font-medium text-white sm:text-sm md:text-base lg:text-lg">
            Stay updated by signing up for our newsletter &#10148;
          </p>
          <form
            className="flex w-full flex-col items-center sm:flex-row"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="text"
              placeholder="Name"
              className="m-1 placeholder:text-white"
              {...register('name', { required: true })}
            />
            <Input
              type="email"
              placeholder="Email"
              className="m-1 placeholder:text-white"
              {...register('email', { required: true })}
            />
            <Button type="submit" variant="default" className="ml-2 text-white">
              Subscribe
            </Button>
          </form>
        </div>
      )}
      {/* <Link
        href="https://join.slack.com/t/aieberkeley/shared_invite/zt-2com7j4g7-3DIrpYvdHigyc7ExkvLxTQ"
        className="p-2 pr-8"
      >
        <Image
          width={40}
          height={40}
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-plain.svg"
          alt="Join our Slack community"
        />
      </Link> */}
    </section>
  );
};

export default Newsletter;
