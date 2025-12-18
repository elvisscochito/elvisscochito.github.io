import { faBars, /* faLanguage,  */ faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Navbar.module.css';
import ToggleLanguage from './ToggleLanguage';

const Navbar = () => {
  const { t } = useTranslation("global");
  const [isActiveHashLink, setIsActiveHashLink] = useState('home');

  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

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

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  }

  return (
    <nav className={isScrolled ? styles.navbarScrolled : styles.navbar}>
      <a href="#home" className={styles.navbarLink}>
        <span className={styles.navbarLogo}>Elviro Dominguez Soriano</span>
      </a>
      <ul className={styles.navbarContainer}>
        <li className={styles.navbarItem}>
          <a href="#home" className={isActiveHashLink === 'home' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('home')}>{t('Navbar.home')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about" className={isActiveHashLink === 'about' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('about')}>{t('Navbar.about')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#honors-and-awards" className={isActiveHashLink === 'honors-and-awards' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('honors-and-awards')}>{t('Navbar.honorsAndAwards')}{/*  Honors, Awards & Experiences */}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#work-experience" className={isActiveHashLink === 'work-experience' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('work-experience')}>{/* Work  */}{t('Navbar.Experience')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#soft-skills" className={isActiveHashLink === 'soft-skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('soft-skills')}>Soft Skills</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#skills" className={isActiveHashLink === 'skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('skills')}>{t('Navbar.skills')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#languages" className={isActiveHashLink === 'languages' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('languages')}>Languages</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#licenses-and-certifications" className={isActiveHashLink === 'licenses-and-certifications' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('licenses-and-certifications')}>{/* Licenses and  */}{t('Navbar.licensesAndCertifications')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#publications" className={isActiveHashLink === 'publications' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('publications')}>Publications</a>
        </li> */}
        {/* <li className={styles.navbarItem}>
          <a href="#activities-and-societies" className={isActiveHashLink === 'activities-and-societies' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('activities-and-societies')}>Activities & Societies</a>
        </li> */}
        {/* <li className={styles.navbarItem}>
          <a href="#hobbies-and-interests" className={isActiveHashLink === 'hobbies-and-interests' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('hobbies-and-interests')}>Hobbies & Interests</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#projects" className={isActiveHashLink === 'projects' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('projects')}>{t('Navbar.Projects')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#social-proof" className={isActiveHashLink === 'social-proof' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('social-proof')}>{t('Navbar.Social')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#services">Services</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#contact" className={isActiveHashLink === 'contact' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('contact')}>{t('Navbar.contact')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#quick-contact" className={isActiveHashLink === 'quick-contact' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('quick-contact')}>Quick Contact</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#faqs" className={isActiveHashLink === 'faqs' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('faqs')}>{t('Navbar.faqs')}</a>
        </li>
        <li className={styles.navbarItem}>
          |<ToggleLanguage />
        </li>
        <li className={styles.navbarItem}>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </li>
      </ul>

      <ul className={`${styles.sidebarContainer} ${isSidebarActive ? styles.isSidebarActive : styles.sidebarInactive}`}>
        <li className={styles.navbarItem}>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </li>
        <li className={styles.navbarItem}>
          <a href="#home" className={isActiveHashLink === 'home' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('home')}>{t('Navbar.home')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about" className={isActiveHashLink === 'about' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('about')}>{t('Navbar.about')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#honors-and-awards" className={isActiveHashLink === 'honors-and-awards' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('honors-and-awards')}>{t('Navbar.honorsAndAwards')}{/*  Honors, Awards & Experiences */}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#work-experience" className={isActiveHashLink === 'work-experience' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('work-experience')}>{/* Work  */}{t('Navbar.Experience')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#soft-skills" className={isActiveHashLink === 'soft-skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('soft-skills')}>{t('Navbar.softSkills')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#skills" className={isActiveHashLink === 'skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('skills')}>{t('Navbar.skills')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#languages" className={isActiveHashLink === 'languages' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('languages')}>{t('Navbar.languages')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#licenses-and-certifications" className={isActiveHashLink === 'licenses-and-certifications' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('licenses-and-certifications')}>{/* Licenses and  */}{t('Navbar.licensesAndCertifications')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#publications" className={isActiveHashLink === 'publications' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('publications')}>{t('Navbar.Publications')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#activities-and-societies" className={isActiveHashLink === 'activities-and-societies' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('activities-and-societies')}>{t('Navbar.Activities')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#hobbies-and-interests" className={isActiveHashLink === 'hobbies-and-interests' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('hobbies-and-interests')}>{t('Navbar.Hobbies')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#projects" className={isActiveHashLink === 'projects' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('projects')}>{t('Navbar.Projects')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#social-proof" className={isActiveHashLink === 'social-proof' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('social-proof')}>{t('Navbar.Social')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#services">Services</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#contact" className={isActiveHashLink === 'contact' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('contact')}>{t('Navbar.contact')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#faqs" className={isActiveHashLink === 'faqs' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('faqs')}>{t('Navbar.faqs')}</a>
        </li>
        <li className={styles.navbarItem}>
          {/* <FontAwesomeIcon icon={faLanguage} /> */}
          {/* Toggle  */}{t('Navbar.language')} {/* |  */}<ToggleLanguage />{/*  | */}
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#quick-contact" className={isActiveHashLink === 'quick-contact' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('quick-contact')}>Quick Contact</a>
        </li> */}
      </ul>
      <div className={isSidebarActive ? styles.overlayActive : styles.overlay} onClick={toggleSidebar}></div>
    </nav>
  );
}

export default Navbar;
