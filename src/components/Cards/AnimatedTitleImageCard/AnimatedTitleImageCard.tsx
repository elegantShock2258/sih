"use client";
import React, { useEffect } from "react";
import {
  AnimationScope,
  motion,
  Target,
  useAnimate,
  VariantLabels,
} from "framer-motion";
import ImageCard from "../ImageCard/ImageCard";
import { StaticImageData } from "next/image";
import styles from "./AnimatedTitleImage.module.css";

export default function AnimatedTitleImageCard({
  src,
  width,
  height,
  alt,
  scope,
  initial,
}: {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  scope: AnimationScope<any>;
  initial: VariantLabels | Target | boolean;
}) {
  return (
    <>
      <motion.div
        ref={scope}
        initial={initial}
        className={styles.titleImageCard}
      >
        <ImageCard
          src={src}
          height={height}
          width={width}
          alt={alt}
          initial={false}
        />
      </motion.div>
    </>
  );
}
