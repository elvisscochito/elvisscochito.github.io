import styles from '../styles/About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="aboutContainer">
        <h2 className="aboutHeading">About Us</h2>
        <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam eget est nec nunc ultrices ultricies. Proin nec mi nec turpis accumsan tincidunt. Nulla facilisi. Nullam ac mi nec nunc ultrices ultricies. Proin nec mi nec turpis accumsan tincidunt. Nulla facilisi.</p>
      </div>
    </section>
  )
}

export default About
