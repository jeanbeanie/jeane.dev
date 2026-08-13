// HOMEPAGE
// src/pages/index.tsx
import RotatingWord from "@/components/RotatingWord";
import { getAllPosts, type PostMeta } from "@/lib/posts";
import Head from 'next/head';
import Link from 'next/link';

export default function Home({ latestPosts }: { latestPosts: PostMeta[] }) {
    return (
        <>
        <Head>
            <title>Jeane Ramos — Software Developer</title>
            <meta
                name="description"
                content="Portfolio of Jeane Ramos, a frontend engineer building projects with React, Next.js, TypeScript, and Node."
            />
        </Head>

        {/* Hero Section */}
            <section className="section">
                <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-center">
                    { /* Placeholder for profile image or illustration */ }
                    <div className="order-1 md:order-2 max-w-2xl">
                        <p className="text-sm text-foreground/70">Hello world, I’m</p>
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
                            Jeane Ramos
                        </h1>
                        <p className="mt-5 text-lg text-foreground/75">
                            I’m a frontend engineer who’s in love with {" "}
                            <RotatingWord words={[
                                "building cool things", 
                                "clean code", 
                                "fixing tricky bugs", 
                                "solving problems", 
                                "learning new techs"
                                ]}
                            />.
                        </p>
                    </div>
                </div>
        </section>

        <hr className="divider" />

            {/* Skills */}
            <section id="skills" className="section">
                <h2 className="section-title">Skills</h2>
                <p className="section-subtitle">
                    A few of the seeds planted in the garden of my mind
                </p>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <div className="card">
                        <h3 className="font-semibold">Frontend</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="chip">React</span>
                            <span className="chip">React Router</span>
                            <span className="chip">Next.js</span>
                            <span className="chip">TypeScript</span>
                            <span className="chip">Vite</span>
                            <span className="chip">Tailwind</span>
                            <span className="chip">HTML</span>
                            <span className="chip">CSS</span>
                            <span className="chip">Vanilla JS</span>
                            <span className="chip">Accessibility</span>
                            <span className="chip">Responsive UI</span>
                        </div>
                        <p className="mt-4 text-sm text-foreground/60">
                            My passion lies in building and deploying unique ideas from start to finish.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="font-semibold">Testing & Practices</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="chip">Jest</span>
                            <span className="chip">Vitest</span>
                            <span className="chip">Component Testing</span>
                            <span className="chip">Debugging</span>
                            <span className="chip">CI/CD</span>
                            <span className="chip">Git</span>
                            <span className="chip">Production Fixes</span>
                            <span className="chip">GitHub Actions</span>
                            <span className="chip">Copilot</span>
                        </div>
                        <p className="mt-4 text-sm text-foreground/60">
                            I focus on writing clean, maintainable code by utilizing testing and modern tools.
                        </p>
                    </div>

                    <div className="card">
                        <h3 className="font-semibold">Backend / Other</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="chip">Node</span>
                            <span className="chip">Express</span>
                            <span className="chip">REST</span>
                            <span className="chip">Postgres</span>
                            <span className="chip">Ruby on Rails</span>
                            <span className="chip">PHP (LAMP)</span>
                            <span className="chip">Bash / Vim</span>
                            <span className="chip">Railway</span>
                            <span className="chip">Zod</span>
                            <span className="chip">Docker</span>
                        </div>
                        <p className="mt-4 text-sm text-foreground/60">
                            Comfortable shipping end-to-end features and collaborating across the stack.
                        </p>
                    </div>
                </div>

                <div className="mt-8 text-sm text-foreground/60">
                    <span className="font-semibold text-accent">&lt;&lt;</span> Feel free to send all the good tech recommendations my way.
                </div>
            </section>

            <hr className="divider" />

            {/* Projects */}
            <section id="projects" className="section">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">
                    Recent fruits harvested from the garden of my mind
                </p>

                {/* Featured */}
                <div className="mt-10 grid gap-6 md:grid-cols-4">
                    <article className="card">
                        <h3 className="font-semibold">YT Catchup</h3>
                        <p className="mt-2 text-sm text-foreground/60">
                          A YouTube subscription dashboard, live in production, that pulls recent uploads from every channel you follow into
                          one round robin queue. Includes curated Lists to narrow the queue and a catch up autoplay mode.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Tech:</b> React, TypeScript, Vite, Express, Postgres, Google APIs</li>
                            <li><b>Highlights:</b> custom auth &amp; session middleware, curated Lists feature, caching, automated test suite (Vitest + RTL), deployed on Railway</li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <a
                                className="link"
                                href="https://ytcatchup.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live →
                            </a>
                            <a
                                className="link"
                                href="https://github.com/jeanbeanie/better-yt-tv"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code →
                            </a>
                        </div>
                    </article>

                    <article className="card">
                        <h3 className="font-semibold">PomoRPG</h3>
                        <p className="mt-2 text-sm text-foreground/60">
                            An RPG-inspired pomodoro timer focused on gamifying the art of building momentum and reaching flow state. Meant to provide satisfying feedback while helping reduce burnout.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Tech:</b> React, TypeScript, Vite</li>
                            <li><b>Highlights:</b> Timer state flow, UI feedback loops</li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <a
                                className="link"
                                href="https://jeanbeanie.github.io/pomoRPG/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live →
                            </a>
                        </div>
                    </article>

                    <article className="card">
                        <h3 className="font-semibold">Tiny Games</h3>
                        <p className="mt-2 text-sm text-foreground/60">
                            A collection of small vanilla JS games, including Colony Clicker and Tiny Pets: quick experiments for staying sharp with bare bones Javascript 
                              while providing a creative outlet.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Tech:</b> HTML, CSS, JavaScript</li>
                            <li><b>Highlights:</b> Input handling, small game loops, reusable patterns</li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <a
                                className="link"
                                href="https://jeanbeanie.github.io/tiny-games/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live →
                            </a>
                            <a
                                className="link"
                                href="https://github.com/jeanbeanie/tiny-games"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code →
                            </a>
                        </div>
                    </article>

                    <article className="card">
                        <h3 className="font-semibold">LumberCampBiomePatch (RimWorld Mod)</h3>
                        <p className="mt-2 text-sm text-foreground/60">
                            Extends RimWorld logging worksites by adding support for custom biomes and wood types. 150+ active Steam subscribers
                        </p>

                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Tech:</b> C#, RimWorld/Verse API</li>
                            <li><b>Highlights:</b> HarmonyLib (runtime patching), biome-based log mapping, loot/site spawn rule overrides</li>
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <a
                                className="link"
                                href="https://steamcommunity.com/sharedfiles/filedetails/?id=3584277707"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Steam Workshop →
                            </a>
                        </div>
                    </article>
                </div>

                {/* More projects */}
                <h3 className="mt-14 text-sm font-semibold tracking-wide text-foreground/70">
                    More projects
                </h3>

                <div className="mt-4 grid gap-6 md:grid-cols-4">

                    <article className="card">
                        <h4 className="font-semibold">project-switcher.nvim</h4>
                        <p className="mt-2 text-sm text-foreground/60">
                          A small neovim plugin for quick switching between projects. Restore project sessions in a single Neovim instance: 
                          selecting a project changes the working directory and restores that projects session automatically.

                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Tech:</b> Lua, Neovim</li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <a
                                className="link"
                                href="https://github.com/jeanbeanie/project-switcher.nvim"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code →
                            </a>
                        </div>
                    </article>

                    <article className="card">
                        <h4 className="font-semibold">ImSoCode</h4>
                        <p className="mt-2 text-sm text-foreground/60">
                            A tutorial + project blog I built and ran in the 2010s to teach others LAMP stack.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Role:</b> PHP Developer & Site Admin</li>
                            <li><b>Highlights:</b> Built from scratch, wrote tutorials, maintained content + community</li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <a
                                className="link"
                                href="https://web.archive.org/web/20131005043222/http://imsocode.com:80/?p=285"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Archive →
                            </a>
                        </div>
                    </article>

                    <article className="card">
                        <h4 className="font-semibold">Conway’s Game of Life</h4>
                        <p className="mt-2 text-sm text-foreground/60">
                            Interactive simulation playground based on the famous simulation by Conway, built with React + Node.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Tech:</b> React, Node/Express</li>
                            <li><b>Highlights:</b> Simulation state, controls, visualization</li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <a
                                className="link"
                                href="https://github.com/jeanbeanie/CGOL_node_react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code →
                            </a>
                        </div>
                    </article>

                    <article className="card">
                        <h4 className="font-semibold">AskMan</h4>
                        <p className="mt-2 text-sm text-foreground/60">
                            Prototype: “set and forget” reminders to reduce the overhead of managing commitments. AskMan 2.0 is on my radar as a future creative project
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Tech:</b> JavaScript</li>
                            <li><b>Status:</b> In development</li>
                        </ul>
                        <div className="mt-5 flex flex-wrap gap-4 text-sm">
                            <a
                                className="link"
                                href="https://github.com/jeanbeanie/askman"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code →
                            </a>
                        </div>
                    </article>

                </div>

               

                <div className="mt-8">
                    <a
                        className="link text-sm"
                        href="https://github.com/jeanbeanie"
                        target="_blank"
                        rel="noreferrer"
                    >
                        &lt;&lt; View GitHub Profile
                    </a>
                </div>
            </section>

            <hr className="divider" />

        {/* Blog */}
        <section id="blog" className="section">
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle">
                Compost fermenting in the garden of my mind
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
                {latestPosts.map((post) => (
                    <article key={post.slug} className="card">
                        <div className="text-xs text-foreground/60">{post.date}</div>
                        <h3 className="mt-2 font-semibold">{post.title}</h3>
                        <p className="mt-2 text-sm text-foreground/60">{post.description}</p>
                        <Link className="link mt-4 inline-block text-sm" href={`/blog/${post.slug}`}>
                            Read →
                        </Link>
                    </article>
                ))}
            </div>

            <div className="mt-8 text-sm text-foreground/60">
                <Link href="/blog"><span className="font-semibold text-accent">&lt;&lt; </span>More posts (coming soon)</Link>
            </div>
        </section>
        </>
    );
}

export function getStaticProps() {
    const allPosts = getAllPosts();
    const latestPosts = allPosts.slice(0, 2);
    return {
        props: { latestPosts },
    };
}
