import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useRef, useState } from 'react';
import styles from '../styles/Card.module.css';

const Card = ({ brand, project, role, date, thumbnail, logo, preview, repo }) => {
  const wrapperRef = useRef(null);
  const infoBtnRef = useRef(null);
  const codeBtnRef = useRef(null);
  const gitHubBtnRef = useRef(null);
  const hideTimerRef = useRef(null);

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPos, setTooltipPos] = useState({ left: '50%', top: 0 });

  /** 📍 Calcula posición del tooltip */
  const computeTooltipPosition = useCallback((btn) => {
    const wrapper = wrapperRef.current;
    if (!btn || !wrapper) return;

    const btnRect = btn.getBoundingClientRect();
    const wrapRect = wrapper.getBoundingClientRect();

    const left = btnRect.left - wrapRect.left + btnRect.width / 2;
    const top = btnRect.top - wrapRect.top;

    setTooltipPos({ left: `${left}px`, top: `${top}px` });
  }, []);

  /** 🎯 Muestra tooltip */
  const showTooltip = useCallback(
    (text, ref) => {
      clearTimeout(hideTimerRef.current);
      computeTooltipPosition(ref.current);
      setTooltipText(text);
      setTooltipVisible(true);
    },
    [computeTooltipPosition]
  );

  /** 🚫 Oculta tooltip */
  const hideTooltip = useCallback(() => {
    clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => setTooltipVisible(false), 80);
  }, []);

  const cancelHide = useCallback(() => clearTimeout(hideTimerRef.current), []);

  return (
    <div className={styles.cardWrapper} ref={wrapperRef}>
      <div className={styles.card}>
        <header className={styles.headerIcons}>
          {role && (
            <div className={styles.leftContainer}>
              <span className={styles.role}>| {role}</span>
            </div>
          )}

          <div className={styles.middleContainer}>
            <span className={styles.date}>{date}</span>
          </div>

          <div className={styles.rightContainer}>
            {/* 🧠 Tooltip para el ícono de código */}
            <div
              className={styles.tooltipWrapper}
              onMouseEnter={() => showTooltip('Built with React & CSS', codeBtnRef)}
              onMouseLeave={hideTooltip}
              onFocus={() => showTooltip('Built with React & CSS', codeBtnRef)}
              onBlur={hideTooltip}
            >
              <button type="button" className={styles.infoButton} ref={codeBtnRef}>
                <FontAwesomeIcon icon={faCode} className={styles.codeIcon} />
              </button>
            </div>

            {/* 🐙 Tooltip para el ícono de GitHub */}
            <div
              className={styles.tooltipWrapper}
              onMouseEnter={() => showTooltip('View Repository on GitHub', gitHubBtnRef)}
              onMouseLeave={hideTooltip}
              onFocus={() => showTooltip('View Repository on GitHub', gitHubBtnRef)}
              onBlur={hideTooltip}
            >
              <a
                href={repo}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                ref={gitHubBtnRef}
              >
                <FontAwesomeIcon icon={faGithub} className={styles.gitHubIcon} />
              </a>
            </div>

            {/* ℹ️ Tooltip para el ícono de información */}
            <div
              className={styles.tooltipWrapper}
              onMouseEnter={() => showTooltip('View Project Information', infoBtnRef)}
              onMouseLeave={hideTooltip}
              onFocus={() => showTooltip('View Project Information', infoBtnRef)}
              onBlur={hideTooltip}
            >
              <button
                type="button"
                className={styles.infoButton}
                aria-label="View project information"
                ref={infoBtnRef}
              >
                <FontAwesomeIcon icon={faCircleInfo} className={styles.infoDescriptionIcon} />
              </button>
            </div>
          </div>
        </header>

        <figure className={styles.body}>
          <img src={thumbnail} alt={`${project} preview`} className={styles.thumbImg} />
          <img src={logo} alt={`${brand} logo`} className={styles.brandLogo} />
          <figcaption className={styles.figcaption}>
            &quot;{project}&quot; • {brand}
          </figcaption>
        </figure>

        <footer className={styles.footer}>
          <a href={preview} target="_blank" rel="noreferrer">
            Preview&#8599;
          </a>
        </footer>
      </div>

      {/* 💬 Tooltip flotante (único y compartido entre los íconos) */}
      <div
        className={styles.cardTooltip}
        style={{
          left: tooltipPos.left,
          top: tooltipPos.top,
          opacity: tooltipVisible ? 1 : 0,
          visibility: tooltipVisible ? 'visible' : 'hidden',
          transform: tooltipVisible
            ? 'translate(-50%, -160%) scale(1)'
            : 'translate(-50%, -140%) scale(0.97)',
        }}
        onMouseEnter={cancelHide}
        onMouseLeave={hideTooltip}
      >
        {tooltipText}
      </div>
    </div>
  );
};

export default Card;
