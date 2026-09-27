import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Eyebrow, Btn } from "@/components/ui";
import { Reveal } from "@/components/client";
import { SmartImage } from "@/components/smart-image";
import { posts, type Block } from "@/lib/blog";
import { PostCard } from "../blog-browser";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Article" };
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.t) {
    case "h2":
      return <h2 className="mt-12 font-display text-3xl md:text-4xl tracking-tight text-ink-900">{block.x}</h2>;
    case "quote":
      return (
        <blockquote className="my-12 border-l-2 border-iris-500 pl-6 md:pl-8">
          <p className="font-display text-2xl md:text-[2rem] italic leading-[1.25] tracking-tight text-ink-900">&ldquo;{block.x}&rdquo;</p>
        </blockquote>
      );
    case "list":
      return (
        <ul className="my-8 space-y-3">
          {block.x.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-900/75">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-iris-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    default:
      return <p className="mt-6 text-[15px] md:text-base leading-[1.85] text-ink-900/75 first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:leading-[0.85] first-letter:text-iris-600">{block.x}</p>;
  }
}

export default async function ArticlePage({ params }: PageProps<"/blogs/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="paper">
        <Container className="pt-28 md:pt-36">
          <Reveal>
            <Link href="/blogs" className="u-link inline-flex items-center gap-2 font-grotesk text-xs uppercase tracking-[0.2em] text-ink-900/60">
              <ArrowLeft size={14} />
              All articles
            </Link>
            <div className="mx-auto mt-10 max-w-3xl text-center">
              <p className="font-grotesk text-[11px] uppercase tracking-[0.26em] text-iris-600">{post.category}</p>
              <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.06] tracking-tight text-ink-900">{post.title}</h1>
              <p className="mt-5 font-display text-lg md:text-xl italic leading-relaxed text-ink-900/60">{post.dek}</p>
              <div className="mt-8 flex items-center justify-center gap-3 font-grotesk text-xs tracking-wide text-ink-900/50">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink-900 font-display text-sm text-bone-50">
                  {post.author.charAt(0)}
                </span>
                <span className="text-ink-900/80">{post.author}</span>
                <span>·</span>
                <span>{post.role}</span>
                <span>·</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </Reveal>
        </Container>

        <Container className="mt-12">
          <Reveal>
            <div className="relative aspect-[21/10] overflow-hidden rounded-[2rem]">
              <SmartImage src={post.image} alt={post.title} className="object-cover" sizes="100vw" priority />
            </div>
          </Reveal>
        </Container>

        <Container>
          <div className="mx-auto max-w-[680px] py-14 md:py-20">
            {post.body.map((b, i) => (
              <BlockRenderer key={i} block={b} />
            ))}

            <div className="mt-14 flex flex-wrap gap-2">
              {[post.category, "Social Impression", "Independent Artists"].map((t) => (
                <span key={t} className="rounded-full border border-ink-900/15 px-3.5 py-1.5 font-grotesk text-[11px] tracking-wide text-ink-900/60">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-5 rounded-3xl border border-ink-900/10 bg-white/50 p-7">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-ink-900 font-display text-xl text-bone-50">
                {post.author.charAt(0)}
              </span>
              <div>
                <p className="font-display text-xl tracking-tight text-ink-900">{post.author}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-900/60">
                  {post.role} at Social Impression. Writes from inside the release trenches.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <section className="border-t border-line py-16 md:py-24">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <Eyebrow className="text-bone-400">Keep reading</Eyebrow>
            <Link href="/blogs" className="u-link font-grotesk text-xs uppercase tracking-[0.2em] text-bone-400">
              All articles
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-ink-900/40 py-16 md:py-20">
        <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-3xl md:text-4xl leading-tight tracking-tight">
            Reading about releases is step one. <span className="italic text-iris-300">Shipping one is step two.</span>
          </h2>
          <Btn href="/contact?intent=artist" variant="signal" className="shrink-0 px-7 py-4">
            Start your journey
            <ArrowRight size={15} />
          </Btn>
        </Container>
      </section>
    </>
  );
}
