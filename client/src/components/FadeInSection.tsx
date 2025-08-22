"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.1, // when 10% is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        overflow: "hidden",
        width: "100%",
        maxWidth: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}
