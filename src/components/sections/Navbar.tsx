import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aieb from '@/logos/aieb.svg';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

const Navbar: FC = () => (
  <nav className="container flex h-16 items-center justify-between lg:h-20">
    <figure className="relative h-full w-11 sm:w-14 lg:w-16">
      <Link href="/">
        <Image
          src={aieb}
          alt="AIEB Logo"
          className="h-full"
          draggable={false}
          priority
        />
      </Link>
    </figure>
    <ul className="flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4">
      <li>
        <a
          href="#program"
          className="text-sm font-medium text-gray-300 transition-colors hover:text-gray-200 sm:text-base"
        >
          Program
        </a>
      </li>
      <li>
        <a
          href="#team"
          className="text-sm font-medium text-gray-300 transition-colors hover:text-gray-200 sm:text-base"
        >
          Team
        </a>
      </li>
      <li>
        <a
          href="#application"
          className="text-sm font-medium text-gray-300 transition-colors hover:text-gray-200 sm:text-base"
        >
          Application
        </a>
      </li>
      <li>
        <a
          href="#faq"
          className="text-sm font-medium text-gray-300 transition-colors hover:text-gray-200 sm:text-base"
        >
          FAQ
        </a>
      </li>
    </ul>
    <div className="flex scale-90 items-center gap-2 sm:scale-100 sm:gap-3 md:h-full">
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
);

export default Navbar;
