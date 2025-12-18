import { useTranslation } from "react-i18next";
import styles from "../styles/FAQ.module.css";
/* import { useState, useEffect } from "react"; */

const FAQ = () => {
  const { t } = useTranslation("global");

  /* const [faqItems, setFaqItems] = useState([]); */

  /* useEffect(() => { */
  const faqs = t("FAQ.faqsList", { returnObjects: true });
  const items = Array.isArray(faqs) ? faqs : Object.values(faqs || {});
  /* setFaqItems(items);
}, [t]); */

  /* const faqs = [
  ,
      "f22": {
        "question": "What is your experience level?",
        "answer": "I have experience working on various projects, both academic and personal, and I'm continuously learning and improving my skills. In fact, I can consider myself a Junior to Mid-Level professional, depending on the specific technology or domain. However, I am highly motivated and eager to take on new challenges to further develop my expertise."
      },
      "f23": {
        "question": "What is your typical project timeline?",
        "answer": "Project timelines can vary depending on the scope and complexity of the project. I work closely with clients to establish realistic timelines and ensure timely delivery."
      },
      "f24": {
        "question": "What is your preferred method of communication?",
        "answer": "I am flexible and can adapt to various communication methods, including email, phone calls, video conferencing, or instant messaging platforms, depending on the client's preferences."
      },
      "f25": {
        "question": "What is your preferred project management methodology?",
        "answer": "I am adaptable and can work with various project management methodologies, including Agile, Scrum, Kanban, or Waterfall, depending on the project's needs and the client's preferences."
      },
      "f26": {
        "question": "Do you provide post-project support and maintenance?",
        "answer": "Yes, I offer post-project support and maintenance services to ensure the continued success and functionality of the delivered solutions."
      },
      "f27": {
        "question": "What is your pricing structure?",
        "answer": "My pricing structure varies depending on the project's scope, complexity, and requirements. I typically provide custom quotes based on the specific needs of each project. My pricing structure varies depending on the scope and complexity of the project. I offer competitive rates and am open to discussing project budgets to find a solution that works for both parties."
      },
      "f28": {
        "question": "What industries do you have experience working in?",
        "answer": "I have experience working in various industries, including technology, healthcare, education, and e-commerce, among others."
      },
      "f29": {
        "question": "How do you stay updated with the latest industry trends and technologies?",
        "answer": "I stay updated by regularly reading industry blogs, attending webinars and conferences, participating in online courses, and engaging with professional communities."
      },
      "f30": {
        "question": "What is your preferred project size?",
        "answer": "I am comfortable working on projects of all sizes, from small-scale applications to large enterprise solutions. My adaptability allows me to effectively contribute to projects regardless of their scope."
      },
      "f31": {
        "question": "How do you handle project challenges or obstacles?",
        "answer": "I approach challenges with a problem-solving mindset, collaborating with stakeholders to identify solutions and adapt strategies as needed to overcome obstacles."
      },
      "f32": {
        "question": "What is your development process?",
        "answer": "My development process typically involves understanding the client's requirements, planning and designing the solution, developing and testing the application, and finally deploying and maintaining it."
      },
      "f33": {
        "question": "How do you ensure the quality of your work?",
        "answer": "I ensure the quality of my work through thorough testing, code reviews, and continuous feedback from clients to make sure the final product meets their expectations."
      },
      "f34": {
        "question": "What is your preferred project management tool?",
        "answer": "I am comfortable using various project management tools such as Jira, Trello, Asana, and Monday.com, depending on the client's preferences and project requirements."
      },
      "f35": {
        "question": "What is your preferred project type?",
        "answer": "I enjoy working on a variety of project types, including web applications, mobile apps, data analysis projects, and software development tasks. I'm adaptable and open to exploring new project types as well."
      }
  ]; */

  return (
    <section className={styles.faqs}>
      <header className={styles.header}>
        <h2 className={styles.heading}>{t("FAQ.heading")}</h2>
        <span className={styles.span}>{t("FAQ.subheading")}</span>
      </header>
      <div className={styles.faqsList}>
        {items.map((faq, index) => (
          <details key={`faq-${index}`} className={styles.faqItem} name="accordion">
            <summary className={styles.question}>{faq.question}</summary>
            <p className={styles.answer}>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
