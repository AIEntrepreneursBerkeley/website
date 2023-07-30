import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aieb from '@/logos/aieb.svg';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import NavigationMenu from '~/components/ui/NavigationMenu';

const Navbar: FC = () => (
  <header className="sticky top-0 z-50 border-b border-gray-700 bg-gray-900 bg-opacity-50 py-0.5 backdrop-blur-md backdrop-saturate-200 backdrop-filter">
    <nav className="container flex h-16 items-center justify-between lg:h-20">
      <figure className="relative h-full">
        <Link href="/">
          <Image
            src={aieb}
            alt="AIEB Logo"
            className="h-full w-20 py-2 lg:w-32"
            draggable={false}
          />
        </Link>
      </figure>
      <NavigationMenu />

      <div className="flex scale-90 items-center gap-1 xs:gap-2 sm:scale-100 sm:gap-3 md:h-full">
        <a
          href="https://www.linkedin.com/company/aientrepreneurs/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a
          href="https://www.instagram.com/ai_entrepreneurs/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.youtube.com/@aientrepreneurs/videos"
          target="_blank"
          rel="noreferrer"
        >
          <Youtube className="ml-0.5 scale-125" />
        </a>
      </div>
    </nav>
  </header>
);

export default Navbar;
