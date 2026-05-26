import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MouseGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)");
    setEnabled(!mq.matches);
    const onMove = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    if (!mq.matches) window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <div
        className="size-[420px] rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.70 0.27 300 / 0.45), transparent 60%)" }}
      />
    </motion.div>
  );
}
