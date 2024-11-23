// pages/index.js
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"; // Import social media icons

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroImageContainer}>
            <Image
              src="/yoga1.jpg"
              alt="Smart Yoga Products"
              layout="fill"
              objectFit="cover"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Elevate Your Yoga Experience</h1>
            <p className={styles.heroSubtitle}>
              Discover smart yoga products designed to enhance your practice.
            </p>
            <Link href="/products" className={styles.shopNowButton}>
              Shop Now
            </Link>
          </div>
        </section>

        {/* Reviews Section */}
        <section className={styles.reviews}>  
  <h2 className="mb-8">What Our Customers Are Saying</h2>  
  <div className={styles.reviewItems}>  
    <div className={styles.reviewItem}>  
      <h3>Jane D. - Yoga Enthusiast</h3>  
      <p>  
        The intelligent progress tracking feature has completely transformed  
        my yoga practice. It is like having a personal yoga coach guiding me  
        through every pose!  
      </p>  
    </div>  
    <div className={styles.reviewItem}>  
      <h3>Michael T. - Fitness Coach</h3>  
      <p>  
        The durability and design of these products are top-notch. I  
        recommend them to all my clients looking for reliable and  
        eco-friendly yoga gear.  
      </p>  
    </div>  
    <div className={styles.reviewItem}>  
      <h3>Emily R. - Beginner Yogi</h3>  
      <p>  
        As a beginner, the personalized guidance has been a game changer.  
        It is so encouraging to see my progress and stay motivated.  
      </p>  
    </div>  
    <div className={styles.reviewItem}>  
      <h3>Raj K. - Professional Yoga Instructor</h3>  
      <p>  
        These products are a must-have for any serious yoga practitioner.  
        The professional-grade insights they offer are unmatched!  
      </p>  
    </div>  
  </div>  
</section>  


<footer className={styles.footer}>
  <div className={styles.footerContent}>
    <div className={styles.contact}>
      <h3>Contact Us</h3>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:info@smartyogaproducts.com">
            info@smartyogaproducts.com
          </a>
        </li>
        <li>
          Phone: <a href="tel:+1234567890">+1 234 567 890</a>
        </li>
        <li>Address: 123 Yoga Lane, Wellness City, YC 10001</li>
      </ul>
    </div>
    <div className={styles.socialMedia}>
      <h3>Follow us on</h3>
      <ul>
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
        </li>
        <li>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
        </li>
      </ul>
    </div>
  </div>
  {/* Logo centered */}
  <Image
    src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/generic-yoga-logo.png?auto=format&q=60&fit=max&w=930"
    alt="Yoga Logo"
    className={styles.footerLogo}
  />
  <p className={styles.footerBottom}>
    © 2024 Smart Yoga Products. All rights reserved.
  </p>
</footer>


      </main>
    </>
  );
}
