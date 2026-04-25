import Head from 'next/head';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getPostBySlug, getAllPosts, PostMeta } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdown';

export default function BlogPost({ meta, html }: { meta: PostMeta; html: string }) {
    return (
        <>
            <Head>
                <title>{meta.title} — Jeane Ramos</title>
            </Head>

            <main className="container-page section">
                <Link className="text-sm text-foreground/70 hover:text-foreground" href="/blog">
                    ← Back to Blog
                </Link>

                <div className="mt-8">
                    <div className="text-xs text-foreground/60">{meta.date}</div>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight">{meta.title}</h1>
                    {meta.description ? (
                        <p className="mt-3 text-foreground/70">{meta.description}</p>
                    ) : null}
                </div>

                <hr className="divider my-10" />

                {/* minimal “prose” styling without a plugin */}
                <article
                    className="prose-min max-w-none text-foreground/90"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            </main>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();
    return {
        paths: posts.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const slug = String(ctx?.params?.slug);
    const { meta, content } = getPostBySlug(slug);
    const html = await markdownToHtml(content);

    return {
        props: { meta, html },
    };
};