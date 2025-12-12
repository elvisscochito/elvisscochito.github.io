import { faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faTiktok, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import profile from '../assets/profile.jpg';
import tec from '../assets/tec.svg';
import styles from '../styles/LinkInBio.module.css';

function LinkInBio() {
  const { t } = useTranslation("global");
  return (
    <div className={styles.linkInBio}>
      <figure className={styles.profileFigure}>
        <img src={profile} alt="My Profile Picture" className={styles.profileImage} />
        <div className={styles.onlineStatus}>
          {/* <span className={styles.statusIndicator}></span> */}
          {/* <span>Online</span> */}
        </div>
      </figure>
      <header className={styles.header}>
        <h1 className={styles.heading}>Elviro Dominguez Soriano</h1>
        {/* <span className={styles.username}>@elvisscochio</span>
        <span className={styles.location}>Mexico City, Mexico</span>
        <span className={styles.role}>Full Stack Developer</span>
        <span className={styles.tagline}>Building the future, one line of code at a time.</span>
        <span className={styles.seo}>Full-Stack Developer | Front-End Developer | Back-End Developer | Data Scientist | Mobile Developer </span>
        <span className={styles.hastags}>#JavaScript #React #NodeJS #Python #Django #Flutter #TechEnthusiast</span> */}
        <p className={styles.subheading}>CS Student <a href="https://tec.mx/en" target="_blank" rel="noopener noreferrer" className={styles.link}>@tecdemonterrey <img src={tec} alt="TEC Logo" style={{ width: '1em', verticalAlign: 'middle' }} /> &#8599;</a>  (On Hold)</p>

        <div className={styles.socialLinks}>
          <a href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20Job%20Opportunity&body=Hello,%20Elviro:%0D%0A%0D%0AI%20want%20to%20get%20in%20touch%20with%20you%20regarding%20a%20job%20opportunity..." target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("SocialPath.email")} className={styles.headerLink}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          </a>
          <a href="tel:+527771395795" target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("SocialPath.whatsapp")} className={styles.headerLink}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("SocialPath.linkedin")} className={styles.headerLink}>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          </a>
          <a href="https://github.com/elvisscochito" target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("SocialPath.github")} className={styles.headerLink}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          </a>
          <a href="https://www.elvirodominguez.com/" target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content="Personal Website" className={styles.headerLink}>
            <FontAwesomeIcon icon={faGlobe} className={styles.icon} />
          </a>
        </div>

        {/* <figure>
        <h2>My Anthem:</h2> */}
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *"
          frameBorder="0"
          height="150"
          style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/mx/album/desenfocao/1596868386?i=1596868402&l=en-GB"
          title="Apple Music Player"
        ></iframe>

        {/* <figcaption>Song from Apple Music</figcaption>
      </figure> */}

        <div className={styles.disclaimer}>
          <p className={styles.disclaimerText}>
            Here’s all my presence online.
            Tap down bellow to open it.
            {/* {t("LinkInBio.disclaimer")} */}
          </p>
        </div>
      </header>

      <div className={styles.content}>
        <a href="https://www.tiktok.com/@elvisscochito" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
          tiktok.com/@elvisscochito
        </a>
        <a href="https://www.instagram.com/elvisscochito/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
          instagram.com/elvisscochito
        </a>
        <a href="https://wa.me/527771395795" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          wa.me/527771395795
        </a>
        <a href="https://www.facebook.com/elvirodominguezsoriano/" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
          facebook.com/elvirodominguezsoriano
        </a>
        <a href="https://twitter.com/elvisscochito" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
          twitter.com/elvisscochito
        </a>
        <a href="https://www.youtube.com/@elvisscochito" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
          youtube.com/@elvisscochito
        </a>
        <a href="https://medium.com/@elvisscochito" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          <FontAwesomeIcon icon={faMedium} className={styles.icon} />
          medium.com/@elvisscochito
        </a>
        {/* <a href="https://dev.to/elvisscochito" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          Dev.to
        </a>
        <a href="https://www.patreon.com/elvisscochito" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          Patreon
        </a>
        <a href="https://www.buymeacoffee.com/elvisscochito" target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
          Buy Me a Coffee
        </a> */}
      </div>
    </div>
  );
}

export default LinkInBio;
