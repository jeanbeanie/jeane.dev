import ThemeToggle from "../components/ThemeToggle";
export default function Home() {
    function toggleTheme() {
        const root = document.documentElement;
        const isDark = root.classList.toggle("dark");
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    return (
        <>
            {/* Top navbar */}
            <header className="sticky top-0 backdrop-blur border-b border-black/10 bg-paper/80 dark:border-white/10 dark:bg-ink/70">
                <div className="flex max-w-5xl mx-auto items-center justify-between px-4 py-4">
                    <a href="#top">
                        <div>Jeane</div>
                        <div>Ramos</div>
                    </a>

                    <nav className="items-center">
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#blog">Blog</a>

                        <a href="#" title="PDF Resume">
                            Download Resume
                        </a>

                        <ThemeToggle/>
                    </nav>

                    {/* Mobile */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button id="theme-toggle-mobile" type="button" aria-label="Toggle dark mode">
                            Dark
                        </button>
                        <a href="#skills">Menu</a>
                    </div>
                </div>
            </header>

            <main id="top" className="mx-auto max-w-5xl px-4">
                {/* Hero Section */}
                <section>
                    <div>
                        <p>Hello world, I’m</p>
                        <h1>Jeane Ramos</h1>
                        <p>
                            I’m in love with <span id="rotating-word">developing</span>.
                        </p>
                    </div>
                </section>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Skills */}
                <section id="skills" className="py-14 md:py-16">
                    <div className="flex gap-6 items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">Skills</h2>
                            <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                                A few of the seeds planted in the garden of my mind
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <div>
                            <h3 className="font-semibold">Frontend</h3>
                            <div>
                                <span>React</span><span>HTML</span><span>CSS</span>
                                <span>Tailwind</span><span>Accessibility</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold">Backend</h3>
                            <div>
                                <span>Node</span><span>Express</span><span>REST</span>
                                <span>Postgres</span><span>Testing</span>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold">Design / Planning</h3>
                            <div>
                                <span>Wireframing</span><span>Figma</span>
                                <span>UX</span><span>Docs</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <span>&lt;&lt;</span>
                        Feel free to send all the good tech recommendations my way.
                    </div>
                </section>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Projects */}
                <section id="projects" className="py-14">
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                        Recent fruits harvested from the garden of my mind
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <article>
                            <h3 className="font-semibold">Tiny Games</h3>
                            <p>
                                Collection of small vanilla JS games.
                            </p>
                            <a href="#">
                                View →
                            </a>
                        </article>

                        <article>
                            <h3 className="font-semibold">PomoRPG</h3>
                            <p>
                                Productivity tool and tracker.
                            </p>
                            <a href="#">
                                View →
                            </a>
                        </article>

                        <article>
                            <h3 className="font-semibold">Custom Biome Lumber Camps</h3>
                            <p>
                                Rimworld mod project.
                            </p>
                            <a href="#">
                                View →
                            </a>
                        </article>
                    </div>

                    <div className="mt-8">
                        <a href="#">
                            &lt;&lt; View GitHub Profile
                        </a>
                    </div>
                </section>

                <hr className="border-black/10 dark:border-white/10" />

                {/* Blog */}
                <section id="blog" className="py-14">
                    <h2 className="text-2xl font-bold">Blog</h2>
                    <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                        Compost fermenting in the garden of my mind
                    </p>

                    <div className="mt-10 grid gap-6 md:grid-cols-2">
                        <article>
                            <h3 className="font-semibold">Building Endurance To Resist Burnout</h3>
                            <p>
                                Notes on pacing, habits, and recovery.
                            </p>
                            <a href="#">
                                Read →
                            </a>
                        </article>

                        <article>
                            <h3 className="font-semibold">Pros and Cons of AI in Code Development</h3>
                            <p>
                                Where it helps, where it hurts, how to use it well.
                            </p>
                            <a href="#">
                                Read →
                            </a>
                        </article>
                    </div>

                    <div className="mt-8">
                        <span>&lt;&lt;</span> More posts (coming soon)
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-black/10 py-8 dark:border-white/10">
                <div className="mx-auto flex flex-col gap-3 px-4 text-sm max-w-5xl md:flex-row md:items-center md:justify-between">
                    <div>© 2026 Jeane Ramos</div>
                    <div className="flex gap-4">
                        <a href="#">LinkedIn</a>
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
            </footer>
        </>
  );
}
