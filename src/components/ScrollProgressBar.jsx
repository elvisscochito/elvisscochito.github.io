import { useEffect, useState } from "react";
import styles from '../styles/ScrollProgressBar.module.css';

const ScrollProgressBar = () => {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={styles.scrollProgressBar}
      style={{ width: `${scrollProgress}%` }}>
    </div>
  );
};

export default ScrollProgressBar;
