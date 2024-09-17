"use client";
import {
  AnimationProps,
  AnimationScope,
  motion,
  Target,
  useAnimate,
  VariantLabels,
} from "framer-motion";
import { ReactChild, useEffect } from "react";

export default function FadeInCard({
  children,
  scope,
  childrenScope,
  parentClassName,
  initial,
}: {
  children: JSX.Element;
  childrenScope: AnimationScope<any>;
  scope: AnimationScope<any>;
  parentClassName: string;
  initial: VariantLabels | Target | boolean;
}) {
  // the card needs to be wrapped into a container element which has the exact width and height
  // of the ui element required, since we're changing the width and height of the node, there's nothing
  // fixed.

  return (
    <motion.div className={parentClassName} initial={initial} ref={scope}>
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
