"use client";

import { useState, useEffect } from "react";
import styles from "./AdminPanel.module.css";
import Image from "next/image";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className={styles.adminPanel}>
      <h1 className={styles.header}>Admin Panel</h1>
      <div className={styles.tabs}>
        <button
          className={`${styles.tabButton} ${activeTab === "products" ? styles.active : ""}`}
          onClick={() => setActiveTab("products")}
        >
          Manage Products
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "blogs" ? styles.active : ""}`}
          onClick={() => setActiveTab("blogs")}
        >
          Manage Blogs
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === "social" ? styles.active : ""}`}
          onClick={() => setActiveTab("social")}
        >
          Social Media Links
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === "products" && <ManageProducts />}
        {activeTab === "blogs" && <ManageBlogs />}
        {activeTab === "social" && <ManageSocialLinks />}
      </div>
    </div>
  );
}

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({ name: "", description: "", price: "", image: "" });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    // Fetch products from your API
    fetch("/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddProduct = () => {
    fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(productForm),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((newProduct) => setProducts((prev) => [...prev, newProduct]));
    setProductForm({ name: "", description: "", price: "", image: "" });
  };

  const handleEditProduct = (product) => {
    setProductForm(product);
    setEditingProduct(product.id);
  };

  const handleSaveProduct = () => {
    fetch(`/api/products/${editingProduct}`, {
      method: "PUT",
      body: JSON.stringify(productForm),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((updatedProduct) =>
        setProducts((prev) =>
          prev.map((prod) => (prod.id === updatedProduct.id ? updatedProduct : prod))
        )
      );
    setEditingProduct(null);
    setProductForm({ name: "", description: "", price: "", image: "" });
  };

  const handleDeleteProduct = (id) => {
    fetch(`/api/products/${id}`, { method: "DELETE" })
      .then(() => setProducts((prev) => prev.filter((prod) => prod.id !== id)));
  };

  return (
    <div>
      <h2>Manage Products</h2>
      <div>
        <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
        <input
          type="text"
          name="name"
          value={productForm.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="description"
          value={productForm.description}
          onChange={handleChange}
          placeholder="Product Description"
        />
        <input
          type="number"
          name="price"
          value={productForm.price}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <input
          type="text"
          name="image"
          value={productForm.image}
          onChange={handleChange}
          placeholder="Product Image URL"
        />
        <button onClick={editingProduct ? handleSaveProduct : handleAddProduct}>
          {editingProduct ? "Save Changes" : "Add Product"}
        </button>
      </div>

      <h3 className="my-4">Product List</h3>
      <ul className="flex gap-3 flex-wrap">
        {products.map((product) => (
          <li key={product.id} className="bg-slate-100 p-4 rounded w-auto">
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <Image src={product.image} alt={product.name} width="100" />
            <button className="mr-3" onClick={() => handleEditProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState({ title: "", content: "" });
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBlog = () => {
    fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(blogForm),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((newBlog) => setBlogs((prev) => [...prev, newBlog]));
    setBlogForm({ title: "", content: "" });
  };

  const handleEditBlog = (blog) => {
    setBlogForm(blog);
    setEditingBlog(blog.id);
  };

  const handleSaveBlog = () => {
    fetch(`/api/blogs/${editingBlog}`, {
      method: "PUT",
      body: JSON.stringify(blogForm),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((updatedBlog) =>
        setBlogs((prev) =>
          prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog))
        )
      );
    setEditingBlog(null);
    setBlogForm({ title: "", content: "" });
  };

  const handleDeleteBlog = (id) => {
    fetch(`/api/blogs/${id}`, { method: "DELETE" })
      .then(() => setBlogs((prev) => prev.filter((blog) => blog.id !== id)));
  };

  return (
    <div>
      <h2>Manage Blogs</h2>
      <div>
        <h3>{editingBlog ? "Edit Blog" : "Add Blog"}</h3>
        <input
          type="text"
          name="title"
          value={blogForm.title}
          onChange={handleChange}
          placeholder="Blog Title"
        />
        <textarea
          name="content"
          value={blogForm.content}
          onChange={handleChange}
          placeholder="Blog Content"
        />
        <button onClick={editingBlog ? handleSaveBlog : handleAddBlog}>
          {editingBlog ? "Save Changes" : "Add Blog"}
        </button>
      </div>

      <h3>Blog List</h3>
      <ul className="flex gap-3 flex-wrap">
        {blogs.map((blog) => (
          <li key={blog.id} className="bg-slate-100 p-4 rounded w-auto">
            <h4>{blog.title}</h4>
            <p>{blog.content}</p>
            <button className="mr-3" onClick={() => handleEditBlog(blog)}>Edit</button>
            <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ManageSocialLinks() {
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    linkedin: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveLinks = () => {
    fetch("/api/socialLinks", {
      method: "POST",
      body: JSON.stringify(socialLinks),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => console.log("Updated Social Links:", data));
  };

  return (
    <div>
      <h2>Update Social Media Links</h2>
      <input
        type="text"
        name="facebook"
        value={socialLinks.facebook}
        onChange={handleChange}
        placeholder="Facebook URL"
      />
      <input
        type="text"
        name="twitter"
        value={socialLinks.twitter}
        onChange={handleChange}
        placeholder="Twitter URL"
      />
      <input
        type="text"
        name="instagram"
        value={socialLinks.instagram}
        onChange={handleChange}
        placeholder="Instagram URL"
      />
      <input
        type="text"
        name="linkedin"
        value={socialLinks.linkedin}
        onChange={handleChange}
        placeholder="LinkedIn URL"
      />
      <button onClick={handleSaveLinks}>Save Links</button>
    </div>
  );
}
