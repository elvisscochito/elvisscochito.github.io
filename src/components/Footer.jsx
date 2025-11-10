import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
/* import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Built with React &#43; Vite by Elviro Dominguez Soriano. &copy; {new Date().getFullYear()} All rights reserved.</p>
      <div className={styles.footerLinks}>
        {/* <a href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20Job%20Opportunity&body=Hello,%20Elviro:%0D%0A%0D%0AI%20want%20to%20get%20in%20touch%20with%20you%20regarding%20a%20job%20opportunity..." target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </a> */}
        <a href="https://wa.me/527771395795?text=_Subject_:%20*Contacting%20for%20Job%20Opportunity*.%0D%0A%0D%0AHello,%20Elviro:%0D%0A%0D%0AI%20want%20to%20get%20in%20touch%20with%20you%20regarding%20a%20job%20opportunity..." target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/elvisscochito" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
