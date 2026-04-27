// HOMEPAGE
// src/pages/index.tsx
import RotatingWord from "@/components/RotatingWord";

export default function Home() {
    return (
        <>
        {/* Hero Section */}
            <section className="section">
                <div className="grid gap-10 md:grid-cols-[320px_1fr] md:items-center">

                    {/* Image below text on mobile, positioned left to text on desktop */}
                    <div className="mx-auto w-full max-w-[320px] order-2 md:order-1">
                        <div className="aspect-square overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/5 p-6 shadow-sm">
                            <img
                                src="/jeane.jpg"
                                alt="Stylized drawing of Jeane Ramos"
                                className="h-full w-full object-contain"
                                loading="eager"
                            />
                        </div>
                        {/* Optional small caption */}
                        {/* <p className="mt-3 text-center text-xs text-foreground/60">Frontend engineer • React • TypeScript</p> */}
                    </div>

                    <div className="order-1 md:order-2 max-w-2xl">
                        <p className="text-sm text-foreground/70">Hello world, I’m</p>
                        <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
                            Jeane Ramos
                        </h1>
                        <p className="mt-5 text-lg text-foreground/75">
                                I’m a self taught software developer that is in love with {" "}
                                <RotatingWord words={["building", "coding", "fixing bugs", "solving problems", "learning new techs"]} />.
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
                    </div>

                    <div className="card">
                        <h3 className="font-semibold">Testing & Practices</h3>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <span className="chip">Jest</span>
                            <span className="chip">Component Testing</span>
                            <span className="chip">Debugging</span>
                            <span className="chip">Production Fixes</span>
                            <span className="chip">Git / GitHub</span>
                        </div>
                        <p className="mt-4 text-sm text-foreground/60">
                            I like keeping UI predictable: clear state, small components, and tests where they pay off.
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
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    <article className="card">
                        <h3 className="font-semibold">PomoRPG</h3>
                        <p className="mt-2 text-sm text-foreground/60">
                            An RPG-inspired pomodoro timer focused on gamifying the art of building momentum and reaching flow state. Meant to provide satisfying feedback while helping reduce burnout.
                        </p>
                        <ul className="mt-4 space-y-1 text-sm text-foreground/70">
                            <li><b>Tech:</b> React, TypeScript, Vite</li>
                            <li><b>Highlights:</b> Timer state flow, UI feedback loops, component structure</li>
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
                            A collection of small vanilla JS games, including Colony Clicker and Tiny Pets: quick experiments for practicing logic, polish, and fun.
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

                <div className="mt-4 grid gap-6 md:grid-cols-3">
                    <article className="card">
                        <h4 className="font-semibold">Conway’s Game of Life</h4>
                        <p className="mt-2 text-sm text-foreground/60">
                            Interactive simulation playground built with React + Node.
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
                            Prototype: “set and forget” reminders to reduce the overhead of managing commitments.
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

                    <article className="card">
                        <h4 className="font-semibold">ImSoCode</h4>
                        <p className="mt-2 text-sm text-foreground/60">
                            A tutorial + project blog I built and ran, with active comments and ongoing posts.
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
                <article className="card">
                    <h3 className="font-semibold">Building Endurance To Resist Burnout</h3>
                    <p className="mt-2 text-sm text-foreground/60">Notes on pacing, habits, and recovery.</p>
                    <a className="link mt-4 inline-block text-sm" href="/blog/building-endurance-to-resist-burnout">Read →</a>
                </article>

                <article className="card">
                    <h3 className="font-semibold">Pros and Cons of AI in Code Development</h3>
                    <p className="mt-2 text-sm text-foreground/60">Where it helps, where it hurts, how to use it well.</p>
                    <a className="link mt-4 inline-block text-sm" href="/blog/pros-and-cons-of-ai-code-development">Read →</a>
                </article>
            </div>

            <div className="mt-8 text-sm text-foreground/60">
                <a href="/blog"><span className="font-semibold text-accent">&lt;&lt; </span>More posts (coming soon)</a>
            </div>
        </section>
        </>
    );
}