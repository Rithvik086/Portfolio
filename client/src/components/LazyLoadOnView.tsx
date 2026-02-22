import React, { useState, useRef, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LazyLoadOnViewProps {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  fallback?: React.ReactNode;
  animationDuration?: number;
}

export default function LazyLoadOnView({
  children,
  rootMargin = "0px",
  threshold = 0.1,
  fallback = <div className="w-full text-center py-8">Loading...</div>,
  animationDuration = 0.6,
}: LazyLoadOnViewProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} style={{ minHeight: "1px" }}>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: animationDuration, ease: "easeOut" }}
            style={{ width: "100%", maxWidth: "100%" }}
          >
            <Suspense fallback={fallback}>{children}</Suspense>
          </motion.div>
        ) : (
          fallback
        )}
      </AnimatePresence>
    </div>
  );
}
