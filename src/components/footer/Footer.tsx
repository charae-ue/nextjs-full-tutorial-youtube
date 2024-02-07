import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="h-12 flex items-center justify-between text-sm">
      <div>
        Coded with love by{' '}
        <Link
          className="text-indigo-500 hover:underline"
          href="https://github.com/charaekeow"
        >
          Charae
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Image
          className="cursor-pointer"
          src="/facebook.png"
          width={16}
          height={16}
          alt="Facebook logo"
        />
        <Image
          className="cursor-pointer"
          src="/instagram.png"
          width={16}
          height={16}
          alt="Instagram logo"
        />
        <Image
          className="cursor-pointer"
          src="/twitter.png"
          width={16}
          height={16}
          alt="Twitter logo"
        />
        <Image
          className="cursor-pointer"
          src="/youtube.png"
          width={16}
          height={16}
          alt="Youtube logo"
        />
      </div>
    </div>
  );
};

export default Footer;
