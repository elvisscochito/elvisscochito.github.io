import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/SocialPath.css';

const Social = () => {
  return (
    <div className="container">
      {/* <h2>@</h2> */}
      <a href="https://www.linkedin.com/in/elviro-dominguez-soriano" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="icon" />
      </a>
      <a href="https://github.com/elvisscochito" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="icon" />
      </a>
      <a href="https://wa.me/527773464786" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} className="icon" />
      </a>
      <a href="mailto:contact@elvirodominguez.com?subject=Contacting%20for%20opportunity&body=Hello,%20Elviro:" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </a>
    </div>
  );
}

export default Social;
