"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';

const articles = [
  { id: 1, title: 'Breathing Techniques in Yoga', content: 'Explore the importance of breathwork in yoga and how it affects your physical and mental health...', image: 'https://blog.healthians.com/wp-content/uploads/2024/11/fitness-sport-people-healthy-lifestyle-concept-woman-making-yoga-meditation-lotus-pose-mat-urban-street-background.jpg' },
  { id: 2, title: 'Mindfulness and Yoga: A Perfect Pair', content: 'Learn how combining mindfulness and yoga can enhance your practice and bring mental clarity...', image: 'https://www.bacteriostaticwateraustralia.com.au/wp-content/uploads/2021/10/maxresdefault-5.jpg' },
  { id: 3, title: 'Yoga for Athletes: Benefits and Practices', content: 'Understand how athletes use yoga to enhance performance, prevent injury, and recover faster...', image: 'https://cdn.shopify.com/s/files/1/0594/1913/2096/files/image4-min.png?v=1698793340' },
  { id: 4, title: 'The Role of Yoga in Weight Loss', content: 'Can yoga help with weight loss? Learn how it can boost metabolism, burn calories, and improve physical fitness...',image: 'https://stylenrich.com/wp-content/uploads/2016/08/amazing-yoga-poses-for-weight-loss-stylenrich.jpg' },
  { id: 5, title: 'How Yoga Can Improve Flexibility', content: 'Yoga helps stretch and lengthen muscles, improving range of motion and preventing injury...', image: '/yoga3.avif' },
  { id: 6, title: 'Benefits of Yoga for Mental Health', content: 'Yoga can reduce stress and anxiety, improve mood, and promote a sense of well-being...', image: '/yoga1.avif' },
  { id: 7, title: 'Yoga for Better Sleep', content: 'Explore how yoga practices can improve your sleep quality and help with insomnia...', image: 'https://i.ytimg.com/vi/MzFCmnV4Fdw/maxresdefault.jpg' },
  { id: 8, title: 'Yoga for Stress Relief', content: 'Discover the best yoga poses and techniques for reducing stress and calming the mind...', image: 'https://i.ytimg.com/vi/RSyhR5q0FVc/maxresdefault.jpg' },
  { id: 9, title: 'The Science Behind Yoga and Mental Clarity', content: 'Explore the research behind yoga’s impact on brain function and mental clarity...', image: 'https://scienceriddle.com/wp-content/uploads/2021/09/science-behind-yoga-1.png' },
  { id: 10, title: 'Yoga for Digestive Health', content: 'Yoga can aid in digestion, reduce bloating, and promote a healthy gut...', image: 'https://i.pinimg.com/originals/b8/51/64/b85164d3fc8061bc3eed556c10ee9aed.jpg' },
  { id: 11, title: 'Top 5 Yoga Poses for Beginners', content: 'Learn about the best beginner-friendly poses to start your yoga journey...', image: '/yoga2.avif' },
];


export default function ArticlePage() {
  const { articleId } = useParams();
  const article = articles.find((a) => a.id === parseInt(articleId));

  if (!article) return <p>Article not found.</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <h1 style={{ fontWeight: 600, fontSize: '2.5rem', color: '#333' }}>{article.title}</h1>
      <Image src={article.image} alt={article.title} style={{ width: '70%', maxWidth: '600px', maxHeight: '600px', objectFit: 'cover', objectPosition: 'center', borderRadius: '10px', marginTop: '1rem' }} />
      <p style={{ marginTop: '2rem', lineHeight: '1.8', fontSize: '1.125rem', color: '#555' }}>{article.content}</p>
    </div>
  );
}
