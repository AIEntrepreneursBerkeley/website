import { type FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import aieb from '@/logos/aieb.svg';
import { Linkedin, Instagram, Youtube } from 'lucide-react';

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
    <ul className="flex items-center gap-4">
      <li>
        <a
          href="#program"
          className="font-medium text-gray-300 transition-colors hover:text-gray-200"
        >
          Program
        </a>
      </li>
      <li>
        <a
          href="#team"
          className="font-medium text-gray-300 transition-colors hover:text-gray-200"
        >
          Team
        </a>
      </li>
      <li>
        <a
          href="#application"
          className="font-medium text-gray-300 transition-colors hover:text-gray-200"
        >
          Application
        </a>
      </li>
      <li>
        <a
          href="#faq"
          className="font-medium text-gray-300 transition-colors hover:text-gray-200"
        >
          FAQ
        </a>
      </li>
    </ul>
    <div className="flex items-start gap-3">
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
