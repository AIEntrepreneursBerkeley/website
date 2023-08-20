import { MailQuestion } from 'lucide-react';
import { type FC } from 'react';
import { Button } from '~/components/ui/Button';

const Contact: FC = () => (
  <a
    href="mailto:contact@aientrepreneurs.org"
    className="fixed bottom-6 right-6 z-50 rounded-full"
  >
    <Button className="grid h-12 w-12 place-items-center rounded-full transition-transform hover:scale-110">
      <MailQuestion className="text-white" />
    </Button>
  </a>
);

export default Contact;
