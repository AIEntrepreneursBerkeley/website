import { type FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion';

const FAQ: FC = () => (
  <section className="container mb-24">
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How long is the AI Entrepreneurs Incubator program?
        </AccordionTrigger>
        <AccordionContent>
          Our program spans 10 weeks, an intensive and focused mentorship for
          startup acceleration.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What kind of startups are eligible to apply?
        </AccordionTrigger>
        <AccordionContent>
          We welcome early stage startups that have an AI or machine learning
          focus. If your venture incorporates AI in any aspect, we're excited to
          hear from you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Are non-Berkeley students allowed to join?
        </AccordionTrigger>
        <AccordionContent>
          Currently, we prioritize Berkeley students, but we are always open to
          collaboration and partnerships with individuals from other
          institutions or cities.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Do you provide funding or investment for the startups?
        </AccordionTrigger>
        <AccordionContent>
          While we don't directly provide funding, our partnerships with VC
          partners and industry leaders can potentially lead to funding
          opportunities for exceptional projects.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Who can join and what are the application criteria?
        </AccordionTrigger>
        <AccordionContent>
          We believe in individual excellence. Whether you've created something
          yourself or bring expertise to the table, you're welcome here. You
          don't need to navigate a complicated interview process; just describe
          your experience in the application and provide relevant links.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>What do we actually do?</AccordionTrigger>
        <AccordionContent>
          Our mission is clear: we're here to help you develop your AI product.
          AIEB offers a straightforward approach. You choose your focus. We're
          built around three core pillars: Community, Mentorship, and Education.
          Engage in networking, demo days, hacking, and workshops to break into
          the AI industry.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>
          How do I apply and when is the deadline?
        </AccordionTrigger>
        <AccordionContent>
          Check our application deadline (see above), but we also embrace
          flexibility similar to Y-Combinator. If you're interested in joining
          during the semester, reach out anytime.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>What is our long-term vision?</AccordionTrigger>
        <AccordionContent>
          We aim to establish our own Decal, and fellowship program. If you're
          passionate about these ventures or have experience in education and
          venture capital, we'd love to hear from you.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="How do I get in touch?
"
      >
        <AccordionTrigger>
          HOw do I apply and when is the deadline?
        </AccordionTrigger>
        <AccordionContent>
          Reach out to us at{' '}
          <a href="mailto:contact@aientrepreneurs.org">
            contact@aientrepreneurs.org
          </a>
          . For informal conversations, connect with Julius Ritter and Dhruv
          Kulkarni on LinkedIn
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </section>
);

export default FAQ;
