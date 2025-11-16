import styles from '../styles/SoftSkills.module.css';

const SoftSkills = () => {
  return (
    <section id="skills" className={styles.softSkills}>
      <header className={styles.header}>
        <h2 className={styles.softSkillsHeading}>Soft skills.</h2>
        <span>Not everything it&apos;s about code, soft skills are important too.</span>
      </header>

      {/* <div className={styles.otherSkills}>
          <h3>Other Skills</h3>
          <ul>
            <li>Problem Solving</li>
            <li>Critical Thinking</li>
            <li>Effective Communication</li>
            <li>Team Collaboration</li>
            <li>Time Management</li>
          </ul>
        </div> */}
    </section>
  );
}

export default SoftSkills;
