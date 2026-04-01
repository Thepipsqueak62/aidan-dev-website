import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { fullBlog } from "@/lib/interface";

export const revalidate = 30;

async function getData(slug: string) {
    const query = `
    *[_type == "blog" && slug.current == $slug] {
      "currentSlug": slug.current,
      title,
      content,
      titleImage
    }[0]`;
    return await client.fetch(query, { slug });
}

type PageProps = {
    params: Promise<{ slug: string }>;
};

export default async function BlogArticle({ params }: PageProps) {
    const { slug } = await params;
    const data: fullBlog = await getData(slug);

    if (!data) {
        return (
            <main className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
                <div className="text-center">
                    <p className="text-zinc-600 font-mono text-sm uppercase tracking-widest mb-4">404</p>
                    <h1 className="text-4xl font-black uppercase mb-6">Post not found</h1>
                    <Link href="/blog" className="text-orange-500 font-mono text-sm uppercase tracking-widest hover:underline">
                        ← Back to blog
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Hero image */}
            <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
                <Image
                    src={urlFor(data.titleImage).url()}
                    fill
                    alt={data.title}
                    priority
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                {/* Back link */}
                <div className="absolute top-8 left-6 md:left-16">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-widest transition-colors"
                    >
                        ← Blog
                    </Link>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-16">
                    <p className="text-xs uppercase tracking-[0.4em] text-orange-500 font-mono mb-4">
                        Aidan The Dev
                    </p>
                    <h1
                        className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter max-w-4xl"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        {data.title}
                    </h1>
                </div>
            </div>

            {/* Article body */}
            <article className="px-6 md:px-16 py-16 max-w-3xl">
                <div
                    className="
            prose prose-invert prose-lg max-w-none
            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-zinc-300 prose-p:leading-relaxed
            prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-li:text-zinc-300
            prose-li:marker:text-orange-500
            prose-blockquote:border-orange-500 prose-blockquote:text-zinc-400
            prose-code:text-orange-400 prose-code:bg-zinc-900 prose-code:px-1 prose-code:rounded
            prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10
            prose-img:rounded-xl prose-img:border prose-img:border-white/10
          "
                >
                    <PortableText value={data.content} />
                </div>

                {/* Footer */}
                <div className="mt-20 pt-10 border-t border-white/10">
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-orange-500 font-mono text-sm uppercase tracking-widest hover:gap-4 transition-all"
                    >
                        ← All posts
                    </Link>
                </div>
            </article>
        </main>
    );
}