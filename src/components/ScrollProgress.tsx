import { useRef } from "react";

interface ScrollProgressProps {}

const ScrollProgress = (_props: ScrollProgressProps) => {
  const ref = useRef<HTMLDivElement>(null);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (!ref.current) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      ref.current.style.width = `${progress}%`;
    }, { passive: true });
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
      <div
        ref={ref}
        className="h-full bg-gradient-to-r from-primary via-accent to-primary transition-[width] duration-100 shadow-lg shadow-accent/50"
        style={{ width: "0%" }}
      />
    </div>
  );
};

export default ScrollProgress;
