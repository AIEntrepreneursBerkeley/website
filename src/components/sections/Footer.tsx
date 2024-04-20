import React from 'react';
import { Linkedin, Instagram, MailIcon, Slack } from 'lucide-react';

interface FooterProps {
  year?: number;
}

const Footer: React.FC<FooterProps> = ({ year = new Date().getFullYear() }) => (
  <footer className="backdrop-saturate-20 justify-center bg-opacity-50 py-10 backdrop-blur-md">
    <div className="flex w-full justify-center">
      <a
        className="pr-2 pl-2"
        href="https://www.instagram.com/ai_entrepreneurs/"
        target="_blank"
        rel="noreferrer"
      >
        <Instagram />
      </a>

      <a
        className="pr-2 pl-2"
        href="https://www.linkedin.com/company/aientrepreneurs/mycompany/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>

      <a
        className="pr-2 pl-2"
        href="https://join.slack.com/t/aieberkeley/shared_invite/zt-2h80j4qg1-b1DsZEyLhNeadkXXdED2Bw"
        target="_blank"
        rel="noreferrer"
      >
        <Slack />
      </a>

      <a
        className="pr-2 pl-2"
        href="mailto:contact@aientrepreneurs.org"
        target="_blank"
        rel="noreferrer"
      >
        <MailIcon />
      </a>
    </div>
    <div className="mt-9 flex w-full justify-center">
      <p className="text-sm">Copyright © {year} AIEB</p>
    </div>
    <div className="w mt-4 flex w-full justify-center">
      <p className="flex text-xs">
        We are a student group acting independently of the University of
        California. We take full responsibility for our organization and this
        web site.
      </p>
    </div>

    <div className="mr-8 mt-5 flex justify-end">
      <a href="https://www.ocf.berkeley.edu">
        <img
          className="w-20"
          src="http://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin-dark.svg"
          alt="Hosted by the OCF"
        />
      </a>
    </div>
  </footer>
);

export default Footer;
