import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const { t } = useTranslation("global");

  return (
    <footer className={styles.footer}>
      <p>{t('Footer.paragraph')} {t('Footer.by')} Elviro Dominguez Soriano. &copy; {new Date().getFullYear()} {t('Footer.rights')}</p>
      <hr className={styles.divider} />
      <div className={styles.footerLinks}>
        <a href="tel:+527771395795" target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("Footer.Links.phone")}>
          <FontAwesomeIcon icon={faPhone} className={styles.icon} />
        </a>
        <a href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20Job%20Opportunity&body=Hello,%20Elviro:%0D%0A%0D%0AI%20want%20to%20get%20in%20touch%20with%20you%20regarding%20a%20job%20opportunity..." target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("Footer.Links.email")}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
        </a>
        <a href="https://wa.me/527771395795?text=_Subject_:%20*Contacting%20for%20Job%20Opportunity*.%0D%0A%0D%0AHello,%20Elviro:%0D%0A%0D%0AI%20want%20to%20get%20in%20touch%20with%20you%20regarding%20a%20job%20opportunity..." target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("Footer.Links.whatsapp")}>
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("Footer.Links.linkedin")}>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/elvisscochito" target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("Footer.Links.github")}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
    </footer>
  )
}

export default Footer;
