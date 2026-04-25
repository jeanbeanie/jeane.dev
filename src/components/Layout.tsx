import ThemeToggle from "../components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        {/* Top navbar */}
        <header className = "sticky top-0 z-50 backdrop-blur border-b border-foreground/10 bg-background/80">
            <div className="container-page flex items-center justify-between py-4">
                <a href="/" className="leading-tight">
                    <div className="text-sm font-semibold tracking-tight">Jeane</div>
                    <div className="text-sm font-semibold tracking-tight">Ramos</div>
                </a>

                <nav className="hidden items-center gap-5 text-sm md:flex">
                    <a className="px-2 text-foreground/70 hover:text-foreground" href="/#skills">Skills</a>
                    <a className="px-2 text-foreground/70 hover:text-foreground" href="/#projects">Projects</a>
                    <a className="px-2 text-foreground/70 hover:text-foreground" href="/blog">Blog</a>

                    <a className="px-2 text-foreground/70 hover:text-foreground" href="#" title="PDF Resume">
                        Download Resume
                    </a>

                    <ThemeToggle />
                </nav>

                {/* Mobile */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <a className="rounded-xl border border-foreground/15 px-3 py-2 text-sm" href="/#skills">
                        Menu
                    </a>
                </div>
            </div>
            </header>

            <main id="top" className="container-page">
                {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-foreground/10 py-8">
                <div className="container-page flex flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
                    <div className="text-foreground/60">© 2026 Jeane Ramos</div>
                    <div className="flex gap-4">
                        <a className="text-foreground/70 hover:text-foreground" href="#">LinkedIn</a>
                        <a className="text-foreground/70 hover:text-foreground" href="#">GitHub</a>
                        <a className="text-foreground/70 hover:text-foreground" href="#">Twitter</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
