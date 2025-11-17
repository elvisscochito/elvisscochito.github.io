import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/SoftSkills.module.css';

const SoftSkills = () => {
  return (
    <section id="skills" className={styles.softSkills}>
      <header className={styles.header}>
        <h2 className={styles.softSkillsHeading}>Soft skills.</h2>
        <span>Not everything it&apos;s about code, soft skills are important too.</span>
      </header>
      <ul className={styles.softSkillsList}>
        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Problem Solving</h3>
              <p>Ability to analyze issues and find effective solutions.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Critical Thinking</h3>
              <p>Evaluating information objectively to make informed decisions.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Effective Communication</h3>
              <p>Clearly conveying ideas and collaborating with team members.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Teamwork{/* Team Collaboration */}</h3>
              <p>Working well with others to achieve common goals.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Time Management</h3>
              <p>Prioritizing tasks to meet deadlines efficiently.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Leadership</h3>
              <p>Guiding and motivating teams to achieve their best performance.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Creativity</h3>
              <p>Thinking outside the box to develop innovative solutions.</p>
            </div>
          </div>
        </li>

        {/* <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Responsibility</h3>
              <p>Demonstrating dedication and reliability in all tasks.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Punctuality</h3>
              <p>Being consistently on time and respecting deadlines.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Perseverance</h3>
              <p>Maintaining effort and determination despite challenges.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Professionalism</h3>
              <p>Maintaining a high standard of conduct and work quality.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Adaptability</h3>
              <p>Adjusting to new challenges and environments with ease.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Emotional Intelligence</h3>
              <p>Understanding and managing emotions for better interpersonal relationships.</p>
            </div>
          </div>
        </li>

        <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Conflict Resolution</h3>
              <p>Effectively managing and resolving disagreements.</p>
            </div>
          </div>
        </li> */}

        {/* <li>
          <div className={styles.skillCard}>
            <FontAwesomeIcon icon={faCircleCheck} className={styles.icon} />
            <div className={styles.skillContent}>
              <h3>Work Ethic</h3>
              <p>Demonstrating dedication and reliability in all tasks.</p>
            </div>
          </div>
        </li> */}
      </ul>
    </section>
  );
}

export default SoftSkills;
