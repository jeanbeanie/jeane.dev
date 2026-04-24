import { getAllPosts } from '@/lib/posts';
import Head from 'next/head';
import Link from 'next/link';
export default function BlogIndex({ posts }: { posts: ReturnType<typeof getAllPosts> }) {
    console.log('posts',posts);
    return (
        <>
            <Head>
                <title>Blog — Jeane Ramos</title>
            </Head>

            <main className="container-page section">
                <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
                <p className="mt-2 text-foreground/60">
                    Random thoughts and ideas patiently cultivated in the garden of my mind.
                </p>

                <div className="mt-10 grid gap-6">
                    {posts.map((p) => (
                        <article key={p.slug} className="card">
                            <div className="text-xs text-foreground/60">{p.date}</div>
                            <h2 className="mt-2 text-xl font-semibold">
                                <Link className="hover:underline" href={`/blog/${p.slug}`}>
                                    {p.title}
                                </Link>
                            </h2>
                            {p.description ? (
                                <p className="mt-2 text-sm text-foreground/60">{p.description}</p>
                            ) : null}
                            <div className="mt-4">
                                <Link className="link text-sm" href={`/blog/${p.slug}`}>
                                    Read →
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}

export function getStaticProps() {
    const posts = getAllPosts();
    return { props: { posts } };
}