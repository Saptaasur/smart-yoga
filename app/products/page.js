"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>; // Display loading state
  }

  if (error) {
    return <p>{error}</p>; // Display error message if there's an issue
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontWeight: 600, fontSize: '2.5rem', color: '#333' }}>Our Smart Yoga Products</h1>
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {products.length === 0 ? (
          <p>No products available.</p> // Fallback message if no products
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ddd',
                padding: '1rem',
                borderRadius: '5px',
                textAlign: 'center',
                width: '200px',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', borderRadius: '5px' }}
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>
                <strong>{product.price}</strong>
              </p>
              <Link href={`/products/${product._id}`}>
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#0070f3',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                  }}
                >
                  View Details
                </button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
