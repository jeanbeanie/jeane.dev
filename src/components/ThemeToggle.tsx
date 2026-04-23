import { useEffect, useState } from "react";

type Theme = "dark" | "light";

/**
 * Uses <html class="dark"> to control theme.
 * Persists to localStorage under key "theme".
 *
 *  _document.tsx sets an initial theme before paint.
 */
export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme | null>(null);

    // Read current theme after hydration
    useEffect(() => {
        const root = document.documentElement;
        const isDark = root.classList.contains("dark");
        setTheme(isDark ? "dark" : "light");
    }, []);

    function apply(next: Theme) {
        const root = document.documentElement;

        if (next === "dark") root.classList.add("dark");
        else root.classList.remove("dark");

        localStorage.setItem("theme", next);
        setTheme(next);
    }

    function toggle() {
        // If theme isn't set, default to dark and then toggle to light
        const current: Theme = theme ?? "dark";
        apply(current === "dark" ? "light" : "dark");
    }

    // Avoid SSR/CSR mismatch in label by rendering a stable button early
    const label =
        theme === null ? "Theme" : theme === "dark" ? "☀️" : "☽";

    return (
        <button
            type="button"
            onClick={toggle}
            className="cursor-pointer rounded px-2 py-1 text-sm transition-colors hover:bg-black/10 dark:hover:bg-white/10"
            aria-label="Toggle theme"
            aria-pressed={theme === "dark"}
        >
            {label}
        </button>
    );
}