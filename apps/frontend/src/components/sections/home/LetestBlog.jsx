import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
const assetUrl = (value) => value && (/^(https?:|data:|blob:)/.test(value) ? value : `${import.meta.env.BASE_URL}${value.replace(/^\/+/, "")}`);
const fallbackPosts = [
  { id: "uk", title: "Study in the United Kingdom", excerpt: "Explore popular study destinations and application guidance.", coverImageUrl: "/images/unitedKingdom.jpg", href: "/destinations#uk" },
  { id: "au", title: "Study in Australia", excerpt: "Find the right course and plan your international education journey.", coverImageUrl: "/images/sydney-opera-house.jpg", href: "/destinations#australia" },
  { id: "ca", title: "Study in Canada", excerpt: "Get practical guidance for universities, visas, and life abroad.", coverImageUrl: "/images/canadawaterfall.jpg", href: "/destinations#canada" },
];

export default function LetestBlog() {
  const [posts, setPosts] = useState(fallbackPosts);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    fetch(`${API_URL}/blog`)
      .then((response) => response.ok ? response.json() : Promise.reject(new Error()))
      .then((data) => { if (active && Array.isArray(data) && data.length) setPosts(data.slice(0, 3)); })
      .catch(() => {})
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, []);
  return <section className="section sis-blog-section"><div className="container">
    <div className="sisf-sis-section-title sis-section-title text-center"><span className="sisf-m-subtitle sis-comman-bg">LATEST FROM GO2ABROAD</span><h2 className="sisf-m-title">Helpful guidance for your study journey</h2></div>
    {loading && <p className="text-center">Loading latest articles…</p>}
    <div className="row g-4">{posts.map((post) => <div className="col-lg-4 col-md-6" key={post.id}><article className="sis-country-card h-100"><img src={assetUrl(post.coverImageUrl)} alt={post.title} className="w-100" loading="lazy" /><div className="sis-country-card-body"><h3>{post.title}</h3><p>{post.excerpt}</p><Link className="sis-country-card-link" to={post.slug ? `/blog/${post.slug}` : post.href}>Read more <i className="fa-solid fa-arrow-right-long"></i></Link></div></article></div>)}</div>
  </div></section>;
}
