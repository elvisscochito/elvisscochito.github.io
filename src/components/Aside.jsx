import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLayoutEffect, useState } from 'react';
import styles from '../styles/Aside.module.css';

const Aside = () => {
  const [isActiveDot, setIsActiveDot] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const dots = ['home', 'about', /* 'honors-and-awards', */ 'work-experience', 'skills', /* 'licenses-and-certifications', */ 'projects', 'social-proof', 'contact'];
  const dotSizes = [/* 'dotSize9', 'dotSize8',  */'dotSize7', 'dotSize6', 'dotSize5', 'dotSize4', 'dotSize3', 'dotSize2', 'dotSize1'];

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

  /* const getDotClass = (index) => {
    const activeIndex = dots.indexOf(isActiveDot);
    const distance = Math.abs(activeIndex - index);
    return styles[dotSizes[distance]];
  }; */

  const getDotClass = (index, dot) => {
    /* console.log("dot:", dot);
    console.log("isActiveDot:", isActiveDot);
    console.log("index:", index); */
    const activeIndex = dots.indexOf(isActiveDot);
    const distance = Math.abs(activeIndex - index);
    /* console.log("styles[dotSizes[distance]]", styles[dotSizes[distance]]); */
    return styles[dotSizes[distance]];
  }

  return (
    <aside className={styles.asideNav}>
      {
        dots.map((dot, index) => (
          <a key={dot} href={`#${dot}`} onClick={() => setIsActiveDot(dot)} className={styles.asideLink} data-tooltip-id="global-tooltip" data-tooltip-content={dot.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}>
            <FontAwesomeIcon
              icon={faCircle}
              className={`${isActiveDot === dot ? styles.dotActive : styles.dot} ${getDotClass(index, dot)}`}
            />
          </a>
        ))
      }
    </aside>
  );
}

export default Aside;
