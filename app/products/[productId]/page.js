"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ProductPage({ params }) {
  const { productId } = params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/products/${productId}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading product...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.name}</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <p>{product.description}</p>
      <p><strong>{product.price}</strong></p>
      <button>Add to Cart</button>
    </div>
  );
}
