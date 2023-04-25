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
