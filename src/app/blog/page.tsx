import Image from "next/image";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { simpleBlogCard } from "@/lib/interface";

export const revalidate = 30;

async function getData() {
    const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
      title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
    }`;
    return await client.fetch(query);
}

export default async function BlogPage() {
    const data: simpleBlogCard[] = await getData();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-16 md:px-16">
            {/* Header */}
            <div className="mb-16 border-b border-white/10 pb-10">
                <p className="text-xs uppercase tracking-[0.4em] text-zinc-500 mb-3 font-mono">
                    Aidan The Dev
                </p>
                <h1
                    className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter"
                    style={{ fontFamily: "'Georgia', serif" }}
                >
                    The<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Blog
          </span>
                </h1>
            </div>

            {/* Featured post (first card big) */}
            {data.length > 0 && (
                <Link href={`/blog/${data[0].currentSlug}`} className="group block mb-10">
                    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-zinc-900">
                        <div className="relative h-[360px] md:h-[480px] w-full overflow-hidden">
                            <Image
                                src={urlFor(data[0].titleImage).url()}
                                alt={data[0].title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 brightness-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12">
              <span className="inline-block text-xs uppercase tracking-widest text-orange-500 font-mono mb-3">
                Featured
              </span>
                            <h2 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-3 max-w-2xl group-hover:text-orange-400 transition-colors">
                                {data[0].title}
                            </h2>
                            <p className="text-zinc-400 text-sm md:text-base line-clamp-2 max-w-xl">
                                {data[0].smallDescription}
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-orange-500 text-sm font-mono uppercase tracking-widest">
                                Read Post
                                <span className="transition-transform duration-300 group-hover:translate-x-2 inline-block">→</span>
                            </div>
                        </div>
                    </div>
                </Link>
            )}

            {/* Rest of the posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.slice(1).map((post, idx) => (
                    <Link
                        key={idx}
                        href={`/blog/${post.currentSlug}`}
                        className="group block rounded-xl border border-white/5 bg-zinc-900 overflow-hidden hover:border-orange-500/30 transition-colors duration-300"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={urlFor(post.titleImage).url()}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-75"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-black uppercase leading-tight tracking-tight mb-2 group-hover:text-orange-400 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                            <p className="text-zinc-500 text-sm line-clamp-3 leading-relaxed">
                                {post.smallDescription}
                            </p>
                            <div className="mt-5 flex items-center gap-1 text-orange-500 text-xs font-mono uppercase tracking-widest">
                                Read
                                <span className="transition-transform duration-300 group-hover:translate-x-1 inline-block">→</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}