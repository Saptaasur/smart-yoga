// app/social-media/page.js

import styles from './SocialMedia.module.css';

export default function SocialMediaPage() {
  return (
    <div className={styles.socialMediaPage}>
      <h1>Follow Us on Instagram</h1>
      <div className={styles.embedContainer}>
        <iframe
          src="https://www.instagram.com/p/BkbXWC7F3fQ/embed"
          className={styles.embedIframe}
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
        ></iframe>
        <iframe
          src="https://www.instagram.com/p/Cs_TtoFokuH/embed"
          className={styles.embedIframe}
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
        ></iframe>
      </div>
    </div>
  );
}
