import { type NextPage } from 'next';
import Lines from '~/components/sections/Lines';
import Announcement from '~/components/sections/Announcement';
import Navbar from '~/components/sections/Navbar';
import Hero from '~/components/sections/Hero';
import Logos from '~/components/sections/Logos';
import About from '~/components/sections/About';
import Team from '~/components/sections/Team';
import Newsletter from '~/components/sections/Newsletter';
import Globe from '~/components/sections/Globe';
import Showcase from '~/components/sections/Showcase';
import Popup from '~/components/sections/Popup';
import FAQ from '~/components/sections/FAQ';

const Home: NextPage = () => (
  <>
    <Lines />
    <header>
      <Announcement />
      <Navbar />
    </header>
    <main>
      <Hero />
      <Logos />
      <Showcase />
      <About />
      <Popup />
      <Team />
      <FAQ />
      <Newsletter />
    </main>
    <footer>
      <Globe />
    </footer>
  </>
);

export default Home;
