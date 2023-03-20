import { useEffect, useRef } from 'react';
import Image from 'next/image';

type CardProps = {
  name: string;
  image: string;
  position: string;
  linkedin: string;
};

const Card = ({ name, image, position, linkedin }: CardProps) => {
  const card = useRef<HTMLDivElement>(null);

  const mouseMove = (e: MouseEvent) => {
    const rect = card.current?.getBoundingClientRect();
    card.current?.style.setProperty('--x', `${e.clientX - rect!.left}px`);
    card.current?.style.setProperty('--y', `${e.clientY - rect!.top}px`);
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <a className="px-2" href={linkedin} target="_blank" rel="noreferrer">
      <div className="card" ref={card}>
        <div className="avatar">
          <Image
            src={image}
            alt="My avatar"
            fill
            draggable={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL={image}
            className="image"
          />
          <Image
            src={image}
            aria-hidden
            width={550}
            height={550}
            alt="Profile picture blur"
            draggable={false}
            loading="lazy"
            placeholder="blur"
            blurDataURL={image}
            className="image-blur"
          />
        </div>
        <div className="info">
          <div className="row">
            <h2 className="name">{name}</h2>
          </div>
          <div className="row">
            <p>{position}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
