import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import styles from '../styles/SoftSkills.module.css';

const SoftSkills = () => {
  const { t } = useTranslation("global");

  return (
    <section id="soft-skills" className={styles.softSkills}>
      <header className={styles.header}>
        <h2 className={styles.softSkillsHeading}>{t('SoftSkills.heading')}</h2>
        <span>{t('SoftSkills.subheading')}</span>
      </header>

      <ul className={styles.softSkillsList}>
        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s1.name')}</h3>
              <p>{t('SoftSkills.skillsList.s1.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s2.name')}</h3>
              <p>{t('SoftSkills.skillsList.s2.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s3.name')}</h3>
              <p>{t('SoftSkills.skillsList.s3.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s4.name')}{/* Team Collaboration */}</h3>
              <p>{t('SoftSkills.skillsList.s4.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s5.name')}</h3>
              <p>{t('SoftSkills.skillsList.s5.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s6.name')}</h3>
              <p>{t('SoftSkills.skillsList.s6.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s7.name')}</h3>
              <p>{t('SoftSkills.skillsList.s7.description')}</p>
            </div>
          </div>
        </li>

        {/* <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s8.name')}</h3>
              <p>{t('SoftSkills.skillsList.s8.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s9.name')}</h3>
              <p>{t('SoftSkills.skillsList.s9.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s10.name')}</h3>
              <p>{t('SoftSkills.skillsList.s10.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s11.name')}</h3>
              <p>{t('SoftSkills.skillsList.s11.description')}</p>
            </div>
          </div>
        </li> */}

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s12.name')}</h3>
              <p>{t('SoftSkills.skillsList.s12.description')}</p>
            </div>
          </div>
        </li>

        {/* <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s13.name')}</h3>
              <p>{t('SoftSkills.skillsList.s13.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s14.name')}</h3>
              <p>{t('SoftSkills.skillsList.s14.description')}</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>{t('SoftSkills.skillsList.s17.name')}</h3>
              <p>{t('SoftSkills.skillsList.s17.description')}</p>
            </div>
          </div>
        </li> */}
      </ul>
    </section>
  );
}

export default SoftSkills;
