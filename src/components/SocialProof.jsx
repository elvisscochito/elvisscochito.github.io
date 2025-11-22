import { useState } from 'react';
import misael from '../assets/misael.jpeg';
import styles from '../styles/SocialProof.module.css';
import SocialProofCard from './SocialProofCard';

const SocialProof = () => {
  const [proofs, setProofs] = useState([
    {
      id: 1,
      profile: misael,
      linkedin: 'https://www.linkedin.com/in/misael-delgado/',
      name: 'Misael Delgado',
      position: 'Data Scientist',
      comment: 'His technical skills in data analysis, statistical modeling, and programming languages such as Python and SQL are truly commendable.'
    }/* ,
    {
      id: 2,
      name: 'Mike Johnson',
      position: 'Project Manager at WebSolutions',
      comment: 'Working with Elvis has been a pleasure. His skills and dedication are unmatched.'
    },
    {
      id: 3,
      name: 'Jane Smith',
      position: 'CTO at TechCorp',
      comment: 'Elvis is an exceptional developer who consistently delivers high-quality work.'
    } */
  ]);

  return (
    <section className={styles.socialProof}>
      <header className={styles.header}>
        <h2 className={styles.socialProofHeading}>Social Proof</h2>
        <span>Here are some testimonials from my colleagues and clients.</span>
      </header>
      <div className={styles.proofsContainer}>
        {
          proofs.map(proof => (
            <SocialProofCard
              key={proof.id}
              profile={proof.profile}
              linkedin={proof.linkedin}
              name={proof.name}
              position={proof.position}
              comment={proof.comment}
            />
          ))
        }
      </div>
      {/* Add testimonials or social proof content here */}
    </section>
  );
};

export default SocialProof;
