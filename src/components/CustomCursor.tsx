import { motion, useMotionValue, useSpring, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export function Cursor() {
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXAnimate = useAnimate();
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 14);
      cursorY.set(e.clientY - 14);

      if (e.target instanceof HTMLElement && e.target.id === "button") {
        setIsHoveringButton(true);
      } else {
        setIsHoveringButton(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className={`fixed left-0 top-0 w-7 h-7 rounded-full bg-white mix-blend-difference z-[999] pointer-events-none`}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  );
}
