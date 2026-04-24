import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMeta = {
    title: string;
    date: string;
    description: string;
    slug: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): PostMeta[] {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
        // Only consider markdown files
        .filter((fileName) => fileName.endsWith('.md'))
        // Read and parse each markdown file to extract metadata
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);
            const meta = data as PostMeta;

            if (!meta.title || !meta.date || !meta.description || !meta.slug) {
                throw new Error(`Post ${fileName} is missing required metadata.`);
            }

            return {
                title: meta.title,
                date: meta.date,
                description: meta.description,
                slug: meta.slug,
            } satisfies PostMeta;
        });

    // Sort posts by date in descending order
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));

    return posts;
}