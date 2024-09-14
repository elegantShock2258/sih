import React from "react";
import { Card } from "../../ui/card";
import Image, { StaticImageData } from "next/image";

export default function ImageCard({
  src,
  width,
  height,
  alt,
}: {
  src: StaticImageData;
  width: number;
  height: number;
  alt: string;
}) {
  return (
    <>
      <Card>
        <Image src={src} width={width} height={height} alt={alt} />
      </Card>
    </>
  );
}
