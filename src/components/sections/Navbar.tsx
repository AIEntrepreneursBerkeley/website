import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav className="container flex h-16 items-center">
    <figure className="relative h-full">
      <Link href="/">
        <Image
          src="/logos/aieb.svg"
          alt="AIEB Logo"
          fill
          className="object-contain"
        />
      </Link>
    </figure>
  </nav>
);

export default Navbar;
