import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className={'bg-black'}>
      <div className='flex-center wrapper flex flex-between flex-col gap-4 p-5 text-center sm:flex-row text-[#fff]'>
        <Link href={'/'}>
          <Image src={'/assets/images/logo.svg'} alt={'Logo'} width={128} height={38} />
        </Link>
        <p> &copy; {new Date().getFullYear()} Eventify. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
