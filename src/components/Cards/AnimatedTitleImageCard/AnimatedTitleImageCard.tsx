"use client";
import React, { useEffect } from "react";
import { AnimationScope, motion, useAnimate } from "framer-motion";
import ImageCard from "../ImageCard/ImageCard";
import { StaticImageData } from "next/image";
import styles from "./AnimatedTitleImage.module.css";

export default function AnimatedTitleImageCard({
  src,
  width,
  height,
  alt,
  scope,
}: {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  scope: AnimationScope<any>;
}) {
  return (
    <>
      <motion.div
        initial={{ y: "-15%" }}
        ref={scope}
        className={styles.titleImageCard}
      >
        <ImageCard src={src} height={height} width={width} alt={alt} />
      </motion.div>
    </>
  );
}
