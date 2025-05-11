import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/" className='flex items-center text-black dark:text-white text-2xl font-semibold gap-4'>
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={60}
        height={60}
        quality={100}
      />
      Yes Chef
    </Link>
  );
};

export default Logo;
