import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => (
  <nav className="container flex h-16 items-center justify-between lg:h-20">
    <figure className="relative h-full w-16">
      <Link href="/">
        <Image src="/logos/aieb.svg" alt="AIEB Logo" fill />
      </Link>
    </figure>
    <button type="button">Contact</button>
  </nav>
);

export default Navbar;
