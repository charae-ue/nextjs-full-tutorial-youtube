import Image from 'next/image';
import Link from 'next/link';

import Hero from '/public/hero.png';
import Button from '@/components/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex flex-col gap-12">
        <h1 className="text-7xl font-bold bg-gradient-to-b from-indigo-500 to-[#bbb] bg-clip-text text-transparent">
          Better design for your digital products.
        </h1>
        <p className="text-2xl font-light">
          Turning your Idea into Reality. We bring together the teams form the
          global tech industry.
        </p>
        <Link href="/portfolio">
          <Button text="See Our Works" />
        </Link>
      </div>
      <div className=" flex-1">
        <Image
          className={`w-full h-[500px] object-contain ${styles.imageBounce}`}
          src={Hero}
          alt="Hero image"
        />
      </div>
    </div>
  );
}
