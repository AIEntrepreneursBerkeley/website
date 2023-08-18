import { MailQuestion } from 'lucide-react';
import { type FC } from 'react';
import { Button } from '~/components/ui/Button';

const Contact: FC = () => (
  <a
    href="mailto:contact@aientrepreneurs.org"
    className="fixed bottom-5 right-5 rounded-full"
  >
    <Button className="grid h-12 w-12 place-items-center rounded-full">
      <MailQuestion className="text-white" />
    </Button>
  </a>
);

export default Contact;
