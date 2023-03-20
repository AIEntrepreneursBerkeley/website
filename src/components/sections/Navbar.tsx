import Link from 'next/link';
import Image from 'next/image';
import aieb from '@/logos/aieb.svg';

const Navbar = () => (
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
    <button type="button">Berkeley, CA</button>
  </nav>
);

export default Navbar;
