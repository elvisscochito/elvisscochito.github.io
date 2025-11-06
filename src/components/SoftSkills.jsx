import styles from '../styles/SoftSkills.module.css';

const SoftSkills = () => {
  return (
    <section id="skills" className={styles.softSkills}>
      <header className={styles.header}>
        <h2 className={styles.softSkillsHeading}>Soft skills.</h2>
        <span>Not everything it&apos;s about code, soft skills are important too.</span>
      </header>
    </section>
  );
}

export default SoftSkills;
