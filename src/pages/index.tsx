

export default function Home() {
    return (
        <>
        {/* Hero Section */}
        <section className="section">
            <div className="max-w-2xl">
                <p className="text-sm text-foreground/60">Hello world, I’m</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
                    Jeane Ramos
                </h1>
                <p className="mt-5 text-lg text-foreground/75">
                    I’m in love with <span className="font-semibold text-accent">developing</span>.
                </p>
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
                        <span className="chip">HTML</span>
                            <span className="chip">CSS</span>
                            <span className="chip">Vanilla JS</span>
                        <span className="chip">Tailwind</span>
                        <span className="chip">Accessibility</span>
                    </div>
                </div>

                <div className="card">
                    <h3 className="font-semibold">Backend</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="chip">Node</span>
                        <span className="chip">Express</span>
                        <span className="chip">REST</span>
                        <span className="chip">Postgres</span>
                        <span className="chip">Testing</span>
                    </div>
                </div>

                <div className="card">
                    <h3 className="font-semibold">Design / Planning</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <span className="chip">Wireframing</span>
                        <span className="chip">Figma</span>
                        <span className="chip">UX</span>
                        <span className="chip">Docs</span>
                    </div>
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

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                <article className="card">
                    <h3 className="font-semibold">Tiny Games</h3>
                        <p className="mt-2 text-sm text-foreground/60">Collection of small vanilla JS games.</p>
                        <ul className="mt-2 text-sm text-foreground/60">
                            <li><b>Tech:</b> HTML, CSS, JavaScript</li>
                            <li><b>Features:</b> Multiple mini-games, score tracking, responsive design</li>
                        </ul>
                    <a className="link mt-4 inline-block text-sm" href="#">View →</a>
                </article>

                <article className="card">
                    <h3 className="font-semibold">PomoRPG</h3>
                        <p className="mt-2 text-sm text-foreground/60">Productivity tool and tracker.</p>
                        <ul className="mt-2 text-sm text-foreground/60">
                            <li><b>Tech:</b> Vite, HTML, CSS, JavaScript</li>
                            <li><b>Features:</b> Productivity tracking, task management, gamification elements</li>
                        </ul>
                    <a className="link mt-4 inline-block text-sm" href="#">View →</a>
                </article>

                <article className="card">
                    <h3 className="font-semibold">Custom Biome Lumber Camps</h3>
                        <p className="mt-2 text-sm text-foreground/60">Rimworld mod project.</p>
                        <ul className="mt-2 text-sm text-foreground/60">
                            <li><b>Tech:</b> C++, XML, Unity</li>
                            <li><b>Features:</b> Custom biomes, lumber camps, modding tools</li>
                        </ul>
                    <a className="link mt-4 inline-block text-sm" href="#">View →</a>
                </article>
            </div>

            <div className="mt-8">
                <a className="link text-sm" href="#">
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
                    <a className="link mt-4 inline-block text-sm" href="#">Read →</a>
                </article>
            </div>

            <div className="mt-8 text-sm text-foreground/60">
                <a href="/blog"><span className="font-semibold text-accent">&lt;&lt; </span>More posts (coming soon)</a>
            </div>
        </section>
        </>
    );
}