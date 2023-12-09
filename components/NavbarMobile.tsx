'use client';

import { useState, useEffect } from 'react';
import styles from './NavbarMobile.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// Links import from Navbar.tsx
import { navbarLinks } from './Navbar';

const NavbarMobile = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  // function close menu on press escape key

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <nav className="relative lg:hidden block z-[999]">
      <div className={styles.menu}>
        <button
          aria-label="Navbar mobile toggle button"
          onClick={() => setIsOpen(!isOpen)}
          className={styles.menuBtn}
        >
          {isOpen ? (
            <Image
              src="/images/navbar/menu-mobile__close.svg"
              width={40}
              height={40}
              alt="menu"
              className={styles.menuBtn}
            />
          ) : (
            <Image
              src="/images/navbar/menu-mobile.svg"
              width={40}
              height={40}
              alt="menu"
              className={styles.menuBtn}
            />
          )}
        </button>
      </div>

      <div className={`${styles.menuMobile} ${isOpen ? `${styles.open}` : ''}`}>
        <ul className={styles.menuList}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <Image
                className={styles.logoImg}
                src="/images/logo.svg"
                width={57}
                height={61}
                alt="logo"
              />
            </Link>
          </div>
          {/* Menu links */}
          {navbarLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  className={`${styles.link} ${
                    pathname == link.url ? `${styles.active}` : ''
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
