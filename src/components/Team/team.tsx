import Image from "next/image";
import FadeInCard, { FadeInCardProps } from "../Cards/FadeInCard/FadeInCard";
import ImageCard from "../Cards/ImageCard/ImageCard";

import styles from "./team.module.css";
import arrow from "@/assets/arrow.png";
import moon from "@/assets/moon.png";

const data = [
  {
    name: "Ragav",
    roll: "106122095",
  },
  {
    name: "Akash",
    roll: "106122008",
  },

  {
    name: "Manimozhi",
    roll: "106122091",
  },
  {
    name: "Jeya",
    roll: "106122102",
  },
  {
    name: "Hrishit",
    roll: "107122045",
  },
  {
    name: "Ayush",
    roll: "106122027",
  },
];

export default function Team({
  scope,
  childrenScope,
  parentClassName,
  initial,
}: FadeInCardProps) {
  return (
    <FadeInCard
      scope={scope}
      childrenScope={childrenScope}
      parentClassName={parentClassName}
      initial={initial}
    >
      <div className={styles.parent}>
        <div className="flex items-center justify-between w-full">
          <div className={styles.title}> Team </div>
          <Image src={arrow} height={20} width={20} alt="" />
        </div>
        <img src={moon.src} alt="moon" width="100%" />
        <div className={`flex flex-col items-center w-full ${styles.rolls}`}>
          {data.map((item) => (
            <div
              className={`w-full flex gap-5 justify-between ${styles.item}`}
              key={item.roll}
            >
              <div>{item.name}</div>
              <div>{item.roll}</div>
            </div>
          ))}
        </div>
      </div>
    </FadeInCard>
  );
}
