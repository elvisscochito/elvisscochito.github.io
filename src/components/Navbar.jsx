import { useLayoutEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isActiveHashLink, setIsActiveHashLink] = useState('home');

  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      const sections = document.querySelectorAll('section[id]');
      const scroll = window.scrollY + 66;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scroll >= sectionTop && scroll <= sectionTop + sectionHeight) {
          setIsActiveHashLink(section.getAttribute('id'));
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  /* useLayoutEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scroll = window.scrollY + 66;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scroll >= sectionTop && scroll <= sectionTop + sectionHeight) {
          setIsActiveHashLink(section.getAttribute('id'));
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); */

  return (
    <nav className={isScrolled ? styles.navbarScrolled : styles.navbar}>
      <a href="#home" className={styles.navbarLink}>
        <span className={styles.navbarLogo}>Elviro Dominguez Soriano</span>
      </a>
      <ul className={styles.navbarContainer}>
        <li className={styles.navbarItem}>
          <a href="#home" className={isActiveHashLink === 'home' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('home')}>Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about" className={isActiveHashLink === 'about' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('about')}>About</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#skills" className={isActiveHashLink === 'skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('skills')}>Skills</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#projects" className={isActiveHashLink === 'projects' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('projects')}>Projects</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#services">Services</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#contact" className={isActiveHashLink === 'contact' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('contact')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
