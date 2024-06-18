import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <header>
        <h1 className={styles.h1}>Welcome to my website!</h1>
      </header>
      <div className={styles.body}>
        <p>Hi!, I'm <span className={styles.span}>@elvisscochito</span>, a <span className={styles.span}>Computer Science</span> student at <a href="https://tec.mx/en" target="_blank" className={styles.link}>Tecnologico de Monterrey&#8599;</a> University.</p>
        <div className={styles.buttonsCtaContainer}>
          <a href="https://drive.google.com/file/d/1njTFGZCH0N8A3AmNbSSXfdo-4RofscqK/view?usp=sharing" target="_blank" className={styles.btnAux}>View Resume</a>
          <a href="#contact" className={styles.btn}>Get in touch</a>
        </div>
      </div>
      <footer className={styles.buttons}>
        {/* <span href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20opportunity&body=Hello,%20Elviro:" target="_blank" className={styles.link}>
              <FontAwesomeIcon icon={faEnvelope} />
              contact@elvirodominguez.com
            </span>
            <span a href="tel:+527773464786" className={styles.link}>
              <FontAwesomeIcon icon={faPhone} />
              +52 777 346 4786
            </span> */}
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        <FontAwesomeIcon icon={faPhone} className={styles.icon} />
        <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/elvisscochito" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </footer>
      <div className={styles.more}>
        <span>Scroll down to know more</span>
        <a href="#about">
          <FontAwesomeIcon icon={faArrowDown} className={styles.arrowIcon} />
        </a>
      </div>
    </section>
  );
}

export default Home;
