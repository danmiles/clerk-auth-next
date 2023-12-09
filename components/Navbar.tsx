'use client';

import Link from 'next/link';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
// Components
import NavbarMobile from './NavbarMobile';

// Data
import { navbarLinks } from '@/data/navbarData';

const Navbar = () => {
  const pathname = usePathname();

  const [scrollPosition, setScrollPosition] = useState(0);

  const [goingDown, setGoingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollPosition(currentScrollY);

      if (scrollPosition < 50 && goingDown) {
        setGoingDown(false);
      }
      if (scrollPosition > 50 && !goingDown) {
        setGoingDown(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingDown, scrollPosition]);

  return (
    <nav
      className={`fixed top-[0] left-[0] right-[0] bg-slate-100 px-[0] py-[10px] border-b border-gray-100 [transition:all_0.8s_ease-in-out] ${
        goingDown ? `!bg-slate-600 shadow-md` : ''
      }`}
    >
      <div className="container">
        {/* Content */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link className="leading-[0]" href="/">
              <Image
                className="lg:w-13 lg:h-13 md:w-10 md:h-10 w-8 h-8 "
                src="/images/logo.svg"
                width={55}
                height={55}
                alt="logo"
              />
            </Link>
            <div className="lg:text-3xl md:text-2xl text-prim-clr text-xl font-semibold flex gap-[10px]">
              Clerk
            </div>
          </div>
          {/* Menu links start */}
          <ul className="lg:flex hidden gap-5 items-center">
            {navbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className={`link ${
                      pathname == link.url ? '!text-hover' : ''
                    }`}
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          {/* Menu links end */}
          <Link className="btn-main lg:block hidden" href="/contact">
            Get A Quote
          </Link>
          {/* Navbar mobile */}
          <NavbarMobile />
        </div>
        {/* content end */}
      </div>
    </nav>
  );
};

export default Navbar;
