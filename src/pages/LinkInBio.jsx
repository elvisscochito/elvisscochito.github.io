import { faFacebook, faGithub, faInstagram, faLinkedin, faMedium, faPaypal, faTiktok, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faLocationDot, faMobile, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import corncrunch from '../assets/corncrunch.svg';
import neza from '../assets/neza-logo.svg';
import profile from '../assets/profile.webp';
import tec from '../assets/tec.svg';
import Modal from '../components/Modal';
import styles from '../styles/LinkInBio.module.css';

function LinkInBio() {
  const { t } = useTranslation("global");
  const modalRef = useRef(null);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'Socials',
      active: true
    },
    {
      id: 2,
      name: 'Projects',
      active: false
    },
  ]);

  /* handle tab switching */
  /* const handleTabClick = (id) => {
    setTabs(tabs.map((tab) => ({
      ...tab,
      active: tab.id === id,
    })));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tabName = params.get('tab') || 'Socials';

    setTabs(tabs.map((tab) => ({
      ...tab,
      active: tab.name === tabName,
    })));
  }, []);

  useEffect(() => {
    const activeTab = tabs.find(tab => tab.active);
    if (activeTab) {
      window.history.pushState(null, "", `?tab=${activeTab.name}`);
    }
  }, [tabs]); */

  /* handle tab switching */
  /* const handleTabClick = (id) => {
    const newTabs = tabs.map((tab) => ({
      ...tab,
      active: tab.id === id,
    }));
    setTabs(newTabs);

    const activeTab = newTabs.find(tab => tab.active);
    if (activeTab) {
      window.history.pushState({ tab: activeTab.name }, "", `?tab=${activeTab.name}`);
    }
  };

  useEffect(() => {
    const handlePopstate = (event) => {
      const tabName = event.state?.tab || new URLSearchParams(window.location.search).get('tab') || 'Socials';
      setTabs(prevTabs => prevTabs.map((tab) => ({
        ...tab,
        active: tab.name === tabName,
      })));
    };

    window.addEventListener('popstate', handlePopstate);
    return () => window.removeEventListener('popstate', handlePopstate);
  }, []); */

  const setActiveTabFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    const tabName = params.get("tab") || "Socials";

    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.name === tabName,
      }))
    );
  };

  // 🔹 Al montar: leer URL + escuchar back / forward
  useEffect(() => {
    setActiveTabFromURL();

    window.addEventListener("popstate", setActiveTabFromURL);

    return () => {
      window.removeEventListener("popstate", setActiveTabFromURL);
    };
  }, []);

  // 🔹 Cuando cambia la tab activa → actualizar URL
  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.active);
    if (!activeTab) return;

    const params = new URLSearchParams(window.location.search);
    const currentTab = params.get("tab");

    if (currentTab !== activeTab.name) {
      window.history.pushState(null, "", `?tab=${activeTab.name}`);
    }
  }, [tabs]);

  /*  handle tab switching */
  const handleTabClick = (id) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        active: tab.id === id,
      }))
    );
  };

  const handleModal = () => {
    modalRef.current?.open(
      "Welcome",
      "Hi there! Thanks for checking out my Link In Bio page. Feel free to explore my socials and projects. If you'd like to get in touch, don't hesitate to reach out via email, phone or WhatsApp. Have a great day!"
    );
  }

  return (
    <>
      <nav className={styles.navbar}>
        <h2 className={styles.navbarTitle}>Link In Bio</h2>
        {/* <a href="https://www.elvirodominguez.com/" target="_blank" rel="noopener noreferrer" className={styles.navbarLink}>
          &#8592; Back to Website */} {/* {t("LinkInBio.backToWebsite")} */}
        {/* </a> */}
      </nav>

      <div className={styles.linkInBio}>
        {/* TODO: ADD Modal like Instagram Stories */}
        <figure className={styles.profileFigure}>
          <img src={profile} alt="My Profile Picture" className={styles.profileImage} onClick={handleModal} />
          <div className={styles.onlineStatus}>
            {/* <span className={styles.statusIndicator}></span> */}
            {/* <span>Online</span> */}
          </div>
        </figure>
        <header className={styles.header}>
          <span className={styles.username}>@elvisscochito</span>
          <h1 className={styles.heading}>Elviro Dominguez Soriano</h1>

          <p className={styles.subheading}>CS Student <a href="https://tec.mx/en" target="_blank" rel="noopener noreferrer" className={styles.link}>@tecdemonterrey <img src={tec} alt="TEC Logo" style={{ width: '1em', verticalAlign: 'middle' }} /> &#8599;</a>  (On Hold)</p>

          {/* <div className={styles.description}>
            <span className={styles.location}>
              <FontAwesomeIcon icon={faLocationDot} />
              Mexico  City, Mexico
            </span> */}
          {/* <span className={styles.role}>Full Stack Developer</span>
            <span className={styles.tagline}>Building the future, one line of code at a time.</span> */}
          {/* <span className={styles.roles}>Full-Stack Developer | Front-End Developer | Back-End Developer | Data Scientist | Mobile Developer </span> */}
          {/* <span className={styles.stack}>#JavaScript #React #NodeJS #Python #Django #Flutter #TechEnthusiast</span> */}
          {/* <span className={styles.hashtags}>#coding #programming #developer #technology #innovation</span> */}

          {/* <span className={styles.skills}>
              Skills:
              Web Development
              •
              Software Development
              •
              Business Analytics
              •
              Graphic Design
              •
              Digital Marketing
            </span> */}
          {/* </div> */}

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
            <a href='https://maps.app.goo.gl/bvc5VhjiGeQQvTNV9' target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("SocialPath.location")} className={styles.headerLink}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
            </a>
            <a href='https://www.paypal.com/paypalme/elvirodominguez' target="_blank" rel="noopener noreferrer" data-tooltip-id="global-tooltip" data-tooltip-content={t("SocialPath.location")} className={styles.headerLink}>
              <FontAwesomeIcon icon={faPaypal} className={styles.icon} />
            </a>
          </div>

          {/* <figure>
        <h2>My Anthem:</h2> */}
          {/* <iframe
            allow="autoplay *; encrypted-media *; fullscreen *"
            frameBorder="0"
            height="150"
            style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/mx/album/desenfocao/1596868386?i=1596868402&l=en-GB"
            title="Apple Music Player"
            className={styles.appleMusicIframe}
          ></iframe> */}

          {/* <figcaption>Song from Apple Music</figcaption>
      </figure> */}

          {/* <div className={styles.disclaimer}>
            <p className={styles.disclaimerText}>
              Here’s all my presence online.
              Tap down bellow to open it. */}
          {/* {t("LinkInBio.disclaimer")} */}
          {/* </p>
          </div> */}
        </header>

        <div className={styles.switchTab}>
          {
            tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${styles.tabButton} ${tab.active ? styles.activeTab : ''}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.name}
              </button>
            ))
          }
        </div>

        <div className={styles.content}>
          {
            tabs.find(tab => tab.active).name === 'Socials' && (
              <>
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
              </>
            )
          }
          {
            tabs.find(tab => tab.active).name === 'Projects' && (
              <>
                <a href="https://www.nezastartup.com/link-in-bio" target="_blank" rel="noopener noreferrer" className={styles.linkButtonProjects}>
                  <img src={neza} alt="Neza Logo" className={styles.icon} />
                  Neza Startup
                </a>
                <a href="https://www.corncrunch.com/link-in-bio" target="_blank" rel="noopener noreferrer" className={styles.linkButtonProjects}>
                  <img src={corncrunch} alt="Corn Crunch Logo" className={styles.icon} />
                  Corn Crunch
                </a>
                <a href="https://www.instagram.com/mycover_app/" target="_blank" rel="noopener noreferrer" className={styles.linkButtonProjects}>
                  <FontAwesomeIcon icon={faMobile} className={styles.icon} />
                  myCover App
                </a>
              </>
            )
          }
        </div>

        <footer className={styles.footer}>
          <span className={styles.footerText}>Copyright &#169; {new Date().getFullYear()}. Elviro Dominguez Soriano. All rights reserved.</span>
        </footer>

        <Modal ref={modalRef} />
      </div>
    </>
  );
}

export default LinkInBio;
