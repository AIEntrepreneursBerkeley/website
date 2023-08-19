import { type ReactNode } from 'react';
import Announcement from '~/components/sections/Announcement';
import Navbar from '~/components/sections/Navbar';
import Newsletter from '~/components/sections/Newsletter';
import Globe from '~/components/sections/Globe';
import Contact from '~/components/sections/Contact';

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutType) => (
  <>
    <Announcement />
    <Navbar />
    {children}
    <footer>
      <Newsletter />
      <Globe />
    </footer>
    <Contact />
  </>
);

export default MainLayout;
