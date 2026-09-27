import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/client";
import { posts } from "@/lib/blog";
import { PostCard, BlogBrowser } from "./blog-browser";

export const metadata: Metadata = { title: "Blogs" };

export default function BlogsPage() {
  const featured = posts.find((p) => p.featured) ?? posts[0];

  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-32 md:pt-44">
        <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-iris-500/12 blur-[110px]" />
        <Container className="relative">
          <Reveal>
            <Eyebrow className="text-bone-400">The Impression · Blog</Eyebrow>
            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.6rem,6vw,5rem)] leading-[1.02] tracking-tight">
              A magazine for the <span className="italic text-iris-300">independent</span> artist.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-bone-400">
              Release strategy, marketing, production and honest industry decoding — written by the people who do this every day.
            </p>
          </Reveal>

          <Reveal delay={140} className="mt-14">
            <PostCard post={featured} large />
          </Reveal>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <BlogBrowser />
        </Container>
      </section>
    </>
  );
}
