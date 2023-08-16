import { type ReactNode } from 'react';
import Announcement from '~/components/sections/Announcement';
import Navbar from '~/components/sections/Navbar';
import Newsletter from '~/components/sections/Newsletter';
import Globe from '~/components/sections/Globe';

type LayoutType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutType) => (
  <>
    <Announcement />
    <Navbar />
    {children}
    <footer>
      <Newsletter />
      <Globe />
    </footer>
  </>
);

export default Layout;
