import { useEffect, useState } from "react";

export default function RotatingWord({
    words,
    intervalMs = 2500,
}: {
    words: string[];
    intervalMs?: number;
    }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (words.length <= 1) return;

        const tick = () => {
            setVisible(false);
            window.setTimeout(() => {
                // Move to the next word in the list, wrap back around to the start if necessary
                setCurrentIndex((prev) => (prev + 1) % words.length);
                setVisible(true);
            }, 250); // Fade out duration
        };

        const id = window.setInterval(tick, intervalMs);
        return () => window.clearInterval(id);
    }, [words, intervalMs]);

    return (
        <span className={`font-semibold transition-opacity duration-250 text-accent ${visible ? "opacity-100" : "opacity-0"}`}>
            {words[currentIndex] ?? ""}
        </span>
    );
}