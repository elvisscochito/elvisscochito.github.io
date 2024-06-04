import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <header>
        <h1 className={styles.h1}>Welcome to my website!</h1>
      </header>
      <div className={styles.content}>
        <p>Hi!, I'm <span className={styles.span}>@elvisscochito</span>, a <span className={styles.span}>Computer Science</span><br /> student at <a href="https://tec.mx/en" target="_blank" className={styles.link}>Tecnologico de Monterrey&#8599;</a> University.</p>
        <a href="#contact" className={styles.btn}>Get in touch</a>
      </div>
    </section>
  );
}

export default Home;
