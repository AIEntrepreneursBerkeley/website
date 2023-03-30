import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aieb from '@/logos/aieb.svg';

const Navbar: FC = () => (
  <nav className="container flex h-16 items-center justify-between lg:h-20">
    <figure className="relative h-full w-14 lg:w-16">
      <Link href="/">
        <Image
          src={aieb}
          alt="AIEB Logo"
          className="h-full"
          draggable={false}
        />
      </Link>
    </figure>
    <p className="text-lg font-medium">Berkeley, CA</p>
  </nav>
);

export default Navbar;
