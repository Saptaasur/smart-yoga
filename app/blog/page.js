"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Blog.module.css';
import Image from 'next/image';

export default function BlogPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://yoga-backend-tprc.onrender.com/api/articles'); // Replace with your backend API URL
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className={styles.blogPage}>
      <h1 style={{ fontWeight: 600, fontSize: '2.5rem', color: '#333' }}>Yoga and Wellness Articles</h1>
      <div className={styles.articleList}>
        {articles.map((article) => (
          <div key={article._id} className={styles.articleItem}>
            <Image src={article.image} alt={article.title} className={styles.articleImage} />
            <div className={styles.articleContent}>
              <h3>{article.title}</h3>
              <p>{article.preview}</p>
              <Link href={`/blog/${article._id}`}>
                <button className={styles.readMoreButton}>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
