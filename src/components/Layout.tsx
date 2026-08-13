import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        {/* Top navbar */}
        <header className = "sticky top-0 z-50 backdrop-blur border-b border-foreground/10 bg-background/80">
            <div className="container-page flex items-center justify-between py-4">
                <Link href="/" className="leading-tight">
                    <div className="text-base font-semibold tracking-tight">Jeane</div>
                    <div className="text-xs tracking-tight text-foreground/60">Ramos</div>
                </Link>

                <nav className="hidden items-center gap-3 text-sm md:flex">
                    <Link className="px-2 text-foreground/70 hover:text-foreground" href="/#skills">Skills</Link>
                    <Link className="px-2 text-foreground/70 hover:text-foreground" href="/#projects">Projects</Link>
                    <Link className="px-2 text-foreground/70 hover:text-foreground" href="/blog">Blog</Link>

                    <a className="px-3 py-2 border rounded-xl border-foreground/20 text-foreground/70 hover:text-foreground" href="#" title="PDF Resume">
                        Download Resume
                    </a>

                    <ThemeToggle />
                </nav>

                {/* Mobile */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <Link className="rounded-xl border border-foreground/15 px-3 py-2 text-sm" href="/#skills">
                        Menu
                    </Link>
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
                        <a className="text-foreground/70 hover:text-foreground" href="https://www.linkedin.com/in/jeane-ramos-83339399/">LinkedIn</a>
                        <a className="text-foreground/70 hover:text-foreground" href="https://github.com/jeanbeanie">GitHub</a>
                        <a className="text-foreground/70 hover:text-foreground" href="https://x.com/onlyjeanbean">Twitter</a>
                    </div>
                </div>
            </footer>
        </>
    );
}
