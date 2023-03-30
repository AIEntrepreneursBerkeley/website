import { type FC } from 'react';
import Masonry from 'react-masonry-css';

const breakpointColumns = {
  default: 3,
  700: 2,
  500: 1,
};

const Showcase: FC = () => (
  <section className="container mt-36">
    <Masonry
      breakpointCols={breakpointColumns}
      className="-ml-6 flex w-auto"
      columnClassName="pl-6"
    >
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7042464142045167616"
        height="767"
        width="504"
        title="Embedded post"
        className="h-64 w-full"
      />
      <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:share:7046889759952031744"
        height="767"
        width="504"
        title="Embedded post"
      />
      <div className="bg-orange-400">3</div>
      <div className="bg-orange-400">4</div>
      <div className="h-4 bg-orange-400">5</div>
      <div className="bg-orange-400">6</div>
      <div className="h-20 bg-orange-400">7</div>
      <div className="bg-orange-400">8</div>
      <div className="bg-orange-400">9</div>
      <div className="bg-orange-400">10</div>
      <div className="bg-orange-400">11</div>
      <div className="bg-orange-400">12</div>
      <div className="bg-orange-400">13</div>
      <div className="bg-orange-400">14</div>
      <div className="bg-orange-400">15</div>
      <div className="bg-orange-400">16</div>
      <div className="bg-orange-400">17</div>
      <div className="bg-orange-400">18</div>
    </Masonry>
  </section>
);

export default Showcase;
