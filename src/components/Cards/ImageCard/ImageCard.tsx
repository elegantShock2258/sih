import React from "react";
import { Card } from "../../ui/card";
import Image, { StaticImageData } from "next/image";
import { motion, Target, VariantLabels } from "framer-motion";

export default function ImageCard({
  src,
  width,
  height,
  alt,
  initial,
}: {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
  initial: VariantLabels | Target | boolean;
}) {
  return (
    <motion.div initial={initial}>
      <Card>
        <Image src={src} width={width} height={height} alt={alt} />
      </Card>
    </motion.div>
  );
}
