import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
const imageUrl = (value) => value && (/^(https?:|data:|blob:)/.test(value) ? value : `${import.meta.env.BASE_URL}${value.replace(/^\/+/, "")}`);

export default function Blog() {
  const [posts, setPosts] = useState([]); const [state, setState] = useState("loading");
  useEffect(() => { fetch(`${API_URL}/blog`).then((r) => r.ok ? r.json() : Promise.reject(new Error())).then((data) => { setPosts(Array.isArray(data) ? data : []); setState("ready"); }).catch(() => setState("error")); }, []);
  return <main className="section"><div className="container"><h1>Go2Abroad Blog</h1>{state === "loading" && <p>Loading articles…</p>}{state === "error" && <p>Articles are temporarily unavailable. Please contact us for guidance.</p>}{state === "ready" && !posts.length && <p>No published articles yet.</p>}<div className="row g-4">{posts.map((post) => <div className="col-lg-4 col-md-6" key={post.id}><article className="sis-country-card h-100">{post.coverImageUrl && <img src={imageUrl(post.coverImageUrl)} alt={post.title} className="w-100" />}<div className="sis-country-card-body"><h2>{post.title}</h2><p>{post.excerpt}</p><Link to={`/blog/${post.slug}`} className="sis-country-card-link">Read article</Link></div></article></div>)}</div></div></main>;
}
