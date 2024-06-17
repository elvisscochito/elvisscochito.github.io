import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Card.css';

const Card = ({ title, thumbnail, link, repo }) => {
  return (
    <div className="card">
      <header className='headerIcons'>
        <FontAwesomeIcon icon={faCircleInfo} className='firstIcon' />
        <a href={repo} target='_blank' rel='noreferrer' className='link'>
          <FontAwesomeIcon icon={faGithub} className='secondIcon' />
        </a>
      </header>
      <figure className='body'>
        <img src={thumbnail} alt="Project 1" />
        <figcaption>{title}</figcaption>
      </figure>
      <footer className='footer'>
        <a href={link} target='_blank'>Preview&#8599;</a>
      </footer>
    </div>
  );
}

export default Card;
