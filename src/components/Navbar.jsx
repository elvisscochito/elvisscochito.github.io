import { useState } from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const [isActiveHashLink, setIsActiveHashLink] = useState('home')
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarContainer}>
        <li className={styles.navbarItem}>
          <a href="#home" className={isActiveHashLink === 'home' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('home')}>Home</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about" className={isActiveHashLink === 'about' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('about')}>About</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#skills" className={isActiveHashLink === 'skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('skills')}>Skills</a>
        </li>
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
  )
}

export default Navbar
