import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLayoutEffect, useState } from 'react';
import styles from '../styles/Aside.module.css';

const Aside = () => {
  const [isActiveDot, setIsActiveDot] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      const sections = document.querySelectorAll('section[id]');
      const scroll = window.scrollY + 90;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scroll >= sectionTop && scroll <= sectionTop + sectionHeight) {
          setIsActiveDot(section.getAttribute('id'));
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const dots = ['home', 'about', 'skills', 'projects', 'contact'];
  const dotSizes = ['dotSize5', 'dotSize4', 'dotSize3', 'dotSize2', 'dotSize1'];

  const getDotClass = (index) => {
    const activeIndex = dots.indexOf(isActiveDot);
    const distance = Math.abs(activeIndex - index);
    return styles[dotSizes[distance]];
  };

  return (
    <aside className={styles.asideNav}>
      {dots.map((dot, index) => (
        <a key={dot} href={`#${dot}`} onClick={() => setIsActiveDot(dot)}>
          <FontAwesomeIcon
            icon={faCircle}
            className={`${isActiveDot === dot ? styles.dotActive : styles.dot} ${getDotClass(index)}`}
          />
        </a>
      ))}
    </aside>
  );
}

export default Aside;
