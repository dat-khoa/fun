'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import logo from '../../images/logo.png';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      className="hidden md:block cursor-pointer"
      src={logo}
      height="100"
      width="100"
      alt="Logo"
      onClick={() => router.push('/')}
    />
  );
};

export default Logo;
