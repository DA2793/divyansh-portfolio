import { lazy, Suspense } from "react";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => ({
    default: mod.motion.div,
  }))
);

const AnimateOnScroll = ({ children, className = "", delay = 0 }) => {
  return (
    <Suspense fallback={<div className={className}>{children}</div>}>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </MotionDiv>
    </Suspense>
  );
};

export default AnimateOnScroll;
