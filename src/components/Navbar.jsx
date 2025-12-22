import { faBars, faGear, /* faLanguage,  */ faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLayoutEffect, /*  useRef, */ useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Navbar.module.css';
import AppearanceDropdown from './AppearanceDropdown';
import CommandPaletteModal from './CommandPaletteModal';
/* import SearchInput from './SearchInput'; */
import Settings from './Settings';
import ToggleLanguage from './ToggleLanguage';

const Navbar = () => {
  const { t } = useTranslation("global");
  const modalRef = CommandPaletteModal /* useRef(null) */;
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

  const openSettings = () => {
    console.log("Open Settings Modal");

    modalRef.current?.open();
  }

  return (
    <nav className={isScrolled ? styles.navbarScrolled : styles.navbar}>
      <a href="#home" className={styles.navbarLink}>
        <span className={styles.navbarLogo}>Elviro Dominguez Soriano</span>
      </a>
      <ul className={styles.navbarContainer}>
        <li className={styles.navbarItem}>
          <a href="#home" className={isActiveHashLink === 'home' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('home')} accessKey='H'>{t('Navbar.home')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about" className={isActiveHashLink === 'about' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('about')} accessKey='A'>{t('Navbar.about')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#honors-and-awards" className={isActiveHashLink === 'honors-and-awards' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('honors-and-awards')} accessKey='H'>{t('Navbar.honorsAndAwards')}{/*  Honors, Awards & Experiences */}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#work-experience" className={isActiveHashLink === 'work-experience' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('work-experience')} accessKey='E'>{/* Work  */}{t('Navbar.Experience')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#soft-skills" className={isActiveHashLink === 'soft-skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('soft-skills')}>Soft Skills</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#skills" className={isActiveHashLink === 'skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('skills')} accessKey='S'>{t('Navbar.skills')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#languages" className={isActiveHashLink === 'languages' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('languages')}>Languages</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#licenses-and-certifications" className={isActiveHashLink === 'licenses-and-certifications' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('licenses-and-certifications')} accessKey='L'>{/* Licenses and  */}{t('Navbar.licensesAndCertifications')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#publications" className={isActiveHashLink === 'publications' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('publications')} accessKey='P'>Publications</a>
        </li> */}
        {/* <li className={styles.navbarItem}>
          <a href="#activities-and-societies" className={isActiveHashLink === 'activities-and-societies' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('activities-and-societies')} accessKey='A'>Activities & Societies</a>
        </li> */}
        {/* <li className={styles.navbarItem}>
          <a href="#hobbies-and-interests" className={isActiveHashLink === 'hobbies-and-interests' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('hobbies-and-interests')} accessKey='I'>Hobbies & Interests</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#projects" className={isActiveHashLink === 'projects' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('projects')} accessKey='P'>{t('Navbar.Projects')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#social-proof" className={isActiveHashLink === 'social-proof' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('social-proof')} accessKey='T'>{t('Navbar.Social')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#services" accessKey='S'>Services</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#contact" className={isActiveHashLink === 'contact' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('contact')} accessKey='C'>{t('Navbar.contact')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#quick-contact" className={isActiveHashLink === 'quick-contact' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('quick-contact')} accessKey='Q'>Quick Contact</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#faqs" className={isActiveHashLink === 'faqs' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('faqs')} accessKey='F'>{t('Navbar.faqs')}{/* Preguntas Frecuentes */}</a>
        </li>
        {/* <li className={styles.navbarItem}> */}
        {/* |<ToggleLanguage /> */}{/* <AppearanceDropdown /> */}
        {/* </li> */}
        {/* <li className={styles.navbarItem}> */}
        {/* | */}{/* <SearchInput />
        </li> */}
        {/* <li className={styles.navbarItem}> */}
        {/* | */}{/* <AppearanceDropdown />
        </li> */}
        <li className={styles.navbarItem}>
          <button type='button' className={styles.settingsButton} onClick={openSettings} accessKey='K' aria-label="Open command palette">
            |<FontAwesomeIcon icon={faGear} className={styles.settingsIcon} />
          </button>
        </li>
        <li className={styles.navbarItem}>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </li>
      </ul>

      <CommandPaletteModal ref={modalRef}>
        <Settings />
      </CommandPaletteModal>

      <ul className={`${styles.sidebarContainer} ${isSidebarActive ? styles.isSidebarActive : styles.sidebarInactive}`}>
        <li className={styles.navbarItem}>
          <button className={styles.menuButton} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faX} />
          </button>
        </li>
        <li className={styles.navbarItem}>
          <a href="#home" className={isActiveHashLink === 'home' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('home')} /* accessKey='H' */>{t('Navbar.home')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#about" className={isActiveHashLink === 'about' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('about')} /* accessKey='A' */>{t('Navbar.about')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#honors-and-awards" className={isActiveHashLink === 'honors-and-awards' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('honors-and-awards')} /* accessKey='O' */>{t('Navbar.honorsAndAwards')}{/*  Honors, Awards & Experiences */}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#work-experience" className={isActiveHashLink === 'work-experience' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('work-experience')} /* accessKey='W' */>{/* Work  */}{t('Navbar.workExperience')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#soft-skills" className={isActiveHashLink === 'soft-skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('soft-skills')} /* accessKey='S' */>{t('Navbar.softSkills')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#skills" className={isActiveHashLink === 'skills' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('skills')} /* accessKey='K' */>{t('Navbar.skills')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#languages" className={isActiveHashLink === 'languages' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('languages')} /* accessKey='L' */>{t('Navbar.languages')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#licenses-and-certifications" className={isActiveHashLink === 'licenses-and-certifications' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('licenses-and-certifications')} /* accessKey='I' */>{/* Licenses and  */}{t('Navbar.licensesAndCertifications')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#publications" className={isActiveHashLink === 'publications' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('publications')} /* accessKey='P' */>{t('Navbar.Publications')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#activities-and-societies" className={isActiveHashLink === 'activities-and-societies' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('activities-and-societies')} /* accessKey='A' */>{t('Navbar.Activities')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#hobbies-and-interests" className={isActiveHashLink === 'hobbies-and-interests' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('hobbies-and-interests')} /* accessKey='H' */>{t('Navbar.Hobbies')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#projects" className={isActiveHashLink === 'projects' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('projects')} /* accessKey='R' */>{t('Navbar.Projects')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#social-proof" className={isActiveHashLink === 'social-proof' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('social-proof')} /* accessKey='S' */>{t('Navbar.Social')}</a>
        </li>
        {/* <li className={styles.navbarItem}>
          <a href="#services" accessKey='V'>{t('Navbar.Services')}</a>
        </li> */}
        <li className={styles.navbarItem}>
          <a href="#contact" className={isActiveHashLink === 'contact' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('contact')} /* accessKey='C' */>{t('Navbar.contact')}</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#faqs" className={isActiveHashLink === 'faqs' ? styles.activeLink : styles.navbarLink} onClick={() => setIsActiveHashLink('faqs')} /* accessKey='F' */>{t('Navbar.faqs')}{/* Preguntas Frecuentes */}</a>
        </li>
        <li className={styles.navbarItem}>
          {/* <FontAwesomeIcon icon={faLanguage} /> */}
          {/* Toggle  */}{t('Navbar.language')} {/* |  */}<ToggleLanguage />{/*  | */}
        </li>
        <li className={styles.navbarItem}>
          {t('Navbar.appearance')} {/* | */}<AppearanceDropdown />
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
