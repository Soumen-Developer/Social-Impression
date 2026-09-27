"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { posts, categories, type Post } from "@/lib/blog";
import { SmartImage } from "@/components/smart-image";
import { ChipGroup } from "@/components/client";

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <Link
      href={`/blogs/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-ink-900 transition-all duration-500 hover:border-iris-500/40 hover:bg-ink-850 ${large ? "md:flex-row" : ""}`}
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[16/10]"}`}>
        <SmartImage src={post.image} alt={post.title} className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width:768px) 100vw, 50vw" />
        <span className="absolute left-4 top-4 rounded-full border border-line2 bg-ink-950/70 px-3 py-1.5 font-grotesk text-[10px] uppercase tracking-[0.18em] backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className={`flex flex-1 flex-col p-6 md:p-7 ${large ? "md:justify-center md:p-10" : ""}`}>
        <p className="font-grotesk text-[11px] uppercase tracking-[0.2em] text-bone-500">
          {post.date} · {post.readTime}
        </p>
        <h3 className={`mt-3 font-display tracking-tight transition-colors group-hover:text-iris-300 ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>
          {post.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-[13px] leading-relaxed text-bone-400">{post.dek}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 font-grotesk text-xs tracking-wide text-bone-400 transition-colors group-hover:text-bone-50">
          Read article
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function BlogBrowser() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const inCat = cat === "All" || p.category === cat;
      const inQ =
        q.trim() === "" ||
        `${p.title} ${p.dek} ${p.category} ${p.author}`.toLowerCase().includes(q.toLowerCase());
      return inCat && inQ;
    });
  }, [cat, q]);

  return (
    <div>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <ChipGroup options={categories} value={cat} onChange={setCat} />
        <label className="relative block md:w-72">
          <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-bone-500" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles…"
            className="field pl-10"
            aria-label="Search articles"
          />
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-bone-400">
          Nothing matches &ldquo;{q}&rdquo;{cat !== "All" ? ` in ${cat}` : ""}. Try another search — or write it yourself and pitch us.
        </p>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      )}
    </div>
  );
}
