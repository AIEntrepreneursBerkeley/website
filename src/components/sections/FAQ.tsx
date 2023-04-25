import { type FC } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/Accordion';

const FAQ: FC = () => (
  <Accordion type="single" collapsible className="container md:mb-24">
    <AccordionItem value="item-1">
      <AccordionTrigger>
        Who can join and what are your application criteria?
      </AccordionTrigger>
      <AccordionContent>
        We are very much no-nonsense. We are looking for individual excellence.
        We will not put you through a cumbersome coffee chat and tiered
        interview process. If you have built something yourself, describe it in
        our application and provide as many links as possible. If you are
        experienced, but not in getting your own project going, that is fine.
        Many of us are proficient computer science, engineering, data science,
        business or design (in some sort) majors, because eventually, we are
        developing products. There is so much work to be done in AI ethics for
        example, so we are actively looking for help in that domain.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>What do we actually do?</AccordionTrigger>
      <AccordionContent>
        Our mission follows one goal: Help you build your AI product. It is a
        non-bullshit club in which you get to choose on what you would like to
        work on. For that, we have established three main pillars: Community,
        Projects, and Education. Community: After interviewing 30+ experienced
        founders and AI-experts, we realised that they mainly want to meet other
        like-minded people. So we are creating an atmosphere for that by
        organizing a weekly hacking and networking on Sunday afternoons. Dates
        and Location to be announced soon. Moreover, we will hold our first
        multi-day Hackathon in April this year. We also count on our community
        to deliver high-quality workshops on prompt-engineering, AI ethics and
        alignment research and generative AI. Projects: By collaborating with
        VCs, start-ups and industry leaders to build Machine Learning products.
        Typically, our teams are comprised of one PM and two to three members.
        Every project is going to be different - it is possible to spin a
        company. This is the exact opposite of the consulting club experience.
        Instead of working for the client, your building with him. Your fast
        track to PM and entrepreneurship. Also, we are building a research track
        to push the boundaries of state-of-the-art models with precise
        applications in mind. Education: We initially aimed to focus on
        education just as much as building an innovative community and offering
        exciting projects. While we will hold workshops and welcome guest
        speakers for direct advice and interactions, our broader vision to
        educate a broader audience will start in future semesters.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
        How are we different from ML@B or SCET?
      </AccordionTrigger>
      <AccordionContent>
        UC Berkeley offers a myriad of ways to conduct AI research - Machine
        Learning @ Berkeley, BAIR, CHAI, and PhD programs of all kind. But here,
        you learn to do research, get recruited into the industry or, at the
        most, work on your advisors start-up. We have the world leading computer
        science program. At the same time, SCET offers great resources in form
        of accelerator programs. These, on the other hand, focus on general
        start-up. We focus on the most important domain of the century: AI.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-4">
      <AccordionTrigger>
        How do I apply and when is the deadline?
      </AccordionTrigger>
      <AccordionContent>
        We have a deadline set (see above), but love the more flexible
        Y-Combinator approach. So if you would like to join throughout the
        semester, please reach out.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-5">
      <AccordionTrigger>What is our long-term vision?</AccordionTrigger>
      <AccordionContent>
        We strive to launch our own Decal, start our own incubator, and our own
        fellowship program. Let us know if you are incredibly passionate in
        building any of these. Experience in education and venture capital ideal
        for these sakes.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-6">
      <AccordionTrigger>How do I get in touch?</AccordionTrigger>
      <AccordionContent>
        contact@aientrepreneurs.org. For less formal comments, The LinkedIn of
        Julius Ritter and Dhruv Kulkarni works, too.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default FAQ;
