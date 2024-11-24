import Link from 'next/link';
import { HomeIcon, ShoppingCartIcon, ChatBubbleLeftIcon, Cog8ToothIcon } from '@heroicons/react/24/outline'; // Importing Heroicons v2 outline icons
import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
       <Image 
        src="/yoga-logo.png" 
        alt="Yoga Logo" 
        width={930} // Base width
  height={525} // Computed based on aspect ratio
        className={styles.navLogo} 
      />
      <div className={styles.navLinks}>
        <Link href="/" className={styles.link} aria-label="Home">
          <HomeIcon className={styles.icon} />
          Home
        </Link>
        <Link href="/products" className={styles.link} aria-label="Products">
          <ShoppingCartIcon className={styles.icon} />
          Products
        </Link>
        <Link href="/blog" className={styles.link} aria-label="Blog">
          <ChatBubbleLeftIcon className={styles.icon} />
          Blog
        </Link>
        <Link href="/admin" className={styles.link} aria-label="Admin Panel">
          <Cog8ToothIcon className={styles.icon} />
          Admin Panel
        </Link>
      </div>
    </nav>
  );
}
