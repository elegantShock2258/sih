"use client";
import Chandrayan from "@/assets/chandrayan.png";
import AnimatedTitleImageCard from "@/components/Cards/AnimatedTitleImageCard/AnimatedTitleImageCard";
import NavBar from "@/components/NavBar/NavBar";
import {
  useFadeInCard,
  useFadeInCardLanding,
  useImageCardTextLanding,
  useLandingCardsAnimation,
  useNavBarAnimation,
  useTitleImageAnimated,
} from "@/components/Cards/hooks";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import FadeInCard from "@/components/Cards/FadeInCard/FadeInCard";
import ImageCard from "@/components/Cards/ImageCard/ImageCard";
import { motion, useAnimate } from "framer-motion";

export default function Page() {
  let { navbarScope, navBarAnmate, navBarChildrenScope, navBarAnimation } =
    useNavBarAnimation();
  let { scope, animate, titleImageAnimation } = useTitleImageAnimated();

  let {
    landingCardAnimate,
    landingCardScope,
    landingCardChildrenScope,
    landingCardAnimation,
  } = useLandingCardsAnimation();

  let {
    imageCardTextAnimate,
    imageCardTextAnimation,
    imageCardTextChildrenScope,
    imageCardTextScope,
  } = useImageCardTextLanding();
  let [fgOpacity, setFgOpacity] = useState(0);
  let [fgScope, fgAnimate] = useAnimate();
  useEffect(() => {
    (async () => {
      await titleImageAnimation(); // WAIT for the title image animation
      navBarAnimation(); // DO NOT wait for navbar animation to finish
      await fgAnimate(
        fgScope.current,
        { opacity: 1 },
        { duration: 0, type: "tween" },
      );
      await landingCardAnimation(); // WAIT for everything else
      // all animations are done
    })();
  });
  return (
    <div className="flex flex-col h-full w-full">
      <div className="nav">
        <NavBar childrenScope={navBarChildrenScope} scope={navbarScope} />
      </div>
      <div className={styles.parent}>
        <div className={styles.bg}>
          <div className="flex w-full h-full flex-col">
            <AnimatedTitleImageCard
              scope={scope}
              src={Chandrayan}
              height={350}
              width={350}
              alt="mkc"
            />
          </div>
        </div>
        <motion.div
          className={styles.fg}
          initial={{ opacity: 0 }}
          ref={fgScope}
        >
          <div className={styles.imageParent}>
            <FadeInCard
              parentClassName={styles.titleCard}
              childrenScope={landingCardChildrenScope}
              scope={landingCardScope}
              initial={{ scaleY: 0 }}
            >
              <>hu</>
            </FadeInCard>
            <ImageCard
              initial={{ scale: 1, opacity: 0 }}
              src={Chandrayan}
              height={262.5}
              width={262.5}
              alt="mkc"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
