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
      className={`${styles.navbar} ${goingDown ? `${styles.scrolled}` : ''}`}
    >
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <Link className={styles.logoLink} href="/">
              <Image
                className={styles.logoImg}
                src="/images/logo.svg"
                width={53}
                height={57}
                alt="logo"
              />
            </Link>
            <div className={styles.logoTitle}>
              <span className={styles.firstWord}>Web</span>
              <span className={styles.secondWord}>Navigator</span>
            </div>
          </div>

          <ul className={styles.menu}>
            {/* Menu links start */}
            {navbarLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    className={`${styles.link} ${
                      pathname == link.url ? `${styles.active}` : ''
                    }`}
                    href={link.url}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            {/* Menu links end */}
          </ul>
          <Link className={`primary-btn ${styles.btnNavbar}`} href="/contact">
            Get A Quote
          </Link>
          {/* Navbar mobile */}
          <NavbarMobile />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
