import { type FC, type ReactNode, type } from 'react';
import Contact from '~/components/sections/Contact';
import Globe from '~/components/sections/Globe';
import Navbar from '~/components/sections/Navbar';
import Newsletter from '~/components/sections/Newsletter';

type MainLayoutType = {
  children: ReactNode;
};

const MainLayout: FC<MainLayoutType> = ({ children }) => (
  <>
    <Navbar />
    {children}
    <footer>
      <Newsletter />
      {/* <Globe /> */}
    </footer>
    <Contact />
  </>
);

export default MainLayout;
