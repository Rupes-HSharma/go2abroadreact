import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
const imageUrl = (value) => value && (/^(https?:|data:|blob:)/.test(value) ? value : `${import.meta.env.BASE_URL}${value.replace(/^\/+/, "")}`);

export default function BlogPost() {
  const { slug } = useParams(); const [post, setPost] = useState(null); const [state, setState] = useState("loading");
  useEffect(() => { fetch(`${API_URL}/blog/${encodeURIComponent(slug)}`).then((r) => r.ok ? r.json() : Promise.reject(new Error())).then((data) => { setPost(data); setState(data ? "ready" : "error"); }).catch(() => setState("error")); }, [slug]);
  if (state === "loading") return <main className="section"><div className="container"><p>Loading article…</p></div></main>;
  if (state === "error") return <main className="section"><div className="container"><h1>Article not found</h1><Link to="/blog">Back to blog</Link></div></main>;
  return <main className="section"><article className="container"><Link to="/blog">← Back to blog</Link><h1 className="mt-4">{post.title}</h1>{post.publishedAt && <p>{new Date(post.publishedAt).toLocaleDateString()}</p>}{post.coverImageUrl && <img src={imageUrl(post.coverImageUrl)} alt={post.title} className="img-fluid mb-4" />}<p className="lead">{post.excerpt}</p><div style={{ whiteSpace: "pre-wrap" }}>{post.content}</div></article></main>;
}
