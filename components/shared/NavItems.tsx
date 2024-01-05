'use client';
import { headerLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
  const pathName = usePathname();
  return (
    <ul className={'flex md:flex-between w-full flex-col items-start gap-5 md:flex-row'}>
      {headerLinks.map((headerLink, i) => {
        const active = pathName === headerLink.route;
        return (
          <li
            key={i}
            className={`${
              active ? 'text-[#eaa79c]' : 'text-gray-200'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={headerLink.route}>{headerLink.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
