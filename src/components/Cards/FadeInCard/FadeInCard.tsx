"use client";
import { AnimationScope, motion, useAnimate } from "framer-motion";
import { ReactChild, useEffect } from "react";

export default function FadeInCard({
  children,
  scope,
  childrenScope,
  parentClassName,
}: {
  children: JSX.Element;
  childrenScope: AnimationScope<any>;
  scope: AnimationScope<any>;
  parentClassName: string;
}) {
  // the card needs to be wrapped into a container element which has the exact width and height
  // of the ui element required, since we're changing the width and height of the node, there's nothing
  // fixed.

  return (
    <motion.div className={parentClassName} initial={{ scaleX: 0 }} ref={scope}>
      <motion.div
        ref={childrenScope}
        initial={{ opacity: 0 }}
        className="w-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
