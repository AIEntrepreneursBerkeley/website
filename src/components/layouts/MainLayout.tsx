import { type FC, type ReactNode } from 'react';
import Navbar from '~/components/sections/Navbar';
import Newsletter from '~/components/sections/Newsletter';
import Globe from '~/components/sections/Globe';
import Contact from '~/components/sections/Contact';

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => (
  <>
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
