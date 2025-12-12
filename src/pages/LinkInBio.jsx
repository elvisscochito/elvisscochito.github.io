import profile from '../assets/profile.jpg';
import tec from '../assets/tec.svg';
import styles from '../styles/LinkInBio.module.css';

function LinkInBio() {
  return (
    <div className={styles.linkInBio}>
      <figure className={styles.profileFigure}>
        <img src={profile} alt="My Profile Picture" className={styles.profileImage} />
        <div className={styles.onlineStatus}>
          {/* <span className={styles.statusIndicator}></span> */}
          {/* <span>Online</span> */}
        </div>
      </figure>
      <header className={styles.header}>
        <h1>Elviro Dominguez Soriano</h1>
        <p>CS Student <a href="https://tec.mx/en" target="_blank" rel="noopener noreferrer" className={styles.link}>@tecdemonterrey <img src={tec} alt="TEC Logo" style={{ width: '1em', verticalAlign: 'middle' }} /> &#8599;</a>  (On Hold)</p>
      </header>

      {/* <figure>
        <h2>My Anthem:</h2> */}
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *"
        frameBorder="0"
        height="150"
        style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', background: 'transparent' }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.music.apple.com/mx/album/desenfocao/1596868386?i=1596868402&l=en-GB"
        title="Apple Music Player"
      ></iframe>

      {/* <figcaption>Song from Apple Music</figcaption>
      </figure> */}
    </div>
  );
}

export default LinkInBio;
