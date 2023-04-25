import { type FC, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

const persons = [
  {
    img: 'https://unsplash.com/photos/mzN7eMmv9IM/download?force=true&w=590&h=640',
    title:
      'chief financial officer and executive vice president for global finance, aon plc',
    name: 'Christa Davies',
  },
  {
    img: 'https://unsplash.com/photos/oifclaPX5oM/download?force=true&w=590&h=640',
    title: 'revenue and financial management, stripe',
    name: 'Vivek Sharma',
  },
  {
    img: 'https://unsplash.com/photos/fghYlu1ec2U/download?force=true&w=590&h=640',
    title: 'head of product marketing, stripe',
    name: 'Tanya Khakbaz',
  },
  {
    img: 'https://unsplash.com/photos/a5XdeIb9Zso/download?force=true&w=590&h=640',
    title: 'head of global sales, stripe',
    name: "Eileen O'Mara",
  },
  {
    img: 'https://unsplash.com/photos/RDUyi9YXPxk/download?force=true&w=590&h=640',
    title: 'founder, pulley',
    name: 'Yin Wu',
  },
  {
    img: 'https://unsplash.com/photos/TMZuhaL2kHo/download?force=true&w=590&h=640',
    title: 'ceo and cofounder, crowdai',
    name: 'Devaki Raj',
  },
  {
    img: 'https://unsplash.com/photos/XO25cX2_0iE/download?force=true&w=590&h=640',
    title: 'co-head of payments, wix',
    name: 'Amit Sagiv',
  },
  {
    img: 'https://unsplash.com/photos/DLKR_x3T_7s/download?force=true&w=590&h=640',
    title: 'general partner, andreessen horowitz',
    name: 'Angela Strange',
  },
];

const VerticalCarousel: FC = () => {
  const [activeItem, setActiveItem] = useState(5);
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty(
      '--transition',
      '600ms cubic-bezier(0.22, 0.61, 0.36, 1)'
    );

    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty('--transition');
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-full">
        <ul
          ref={wrapperRef}
          className="group flex flex-col gap-3 md:h-[640px] md:flex-row md:gap-[1.5%]"
        >
          {persons.map((person, index) => (
            <li
              onClick={() => setActiveItem(index)}
              aria-current={activeItem === index}
              className={classNames(
                "relative cursor-pointer md:w-[8%] md:first:w-[1%] md:last:w-[1%] md:[&[aria-current='true']]:w-[48%]",
                'md:[transition:width_var(--transition,200ms_ease-in)]',
                'md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white',
                'md:hover:w-[12%] md:[&:not(:hover),&:not(:first),&:not(:last)]:group-hover:w-[7%]',
                'first:pointer-events-none last:pointer-events-none md:[&_img]:first:opacity-0 md:[&_img]:last:opacity-0'
              )}
              key={person.name}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#c9c6c7]">
                <img
                  className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 object-cover grayscale md:left-1/2 md:h-[640px] md:w-[590px] md:-translate-x-1/2"
                  src={person.img}
                  alt={person.name}
                  width="590px"
                  height="640px"
                />
                <div
                  className={classNames(
                    'before:bg-texture after:bg-texture inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px]  before:z-10 after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 md:absolute md:transition-opacity',
                    activeItem === index ? 'md:opacity-25' : 'md:opacity-0'
                  )}
                />
                <div
                  className={classNames(
                    'left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0',
                    activeItem === index
                      ? 'md:translate-x-0 md:opacity-100'
                      : 'md:translate-x-4 md:opacity-0'
                  )}
                >
                  <p className="text-primary text-sm uppercase md:text-lg">
                    {person.title}
                  </p>
                  <p className="text-lg font-bold md:text-4xl">{person.name}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VerticalCarousel;
