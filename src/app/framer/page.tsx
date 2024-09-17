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
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import FadeInCard from "@/components/Cards/FadeInCard/FadeInCard";
import ImageCard from "@/components/Cards/ImageCard/ImageCard";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import star from "@/assets/star.svg";
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

      landingCardScope.current.width =
        scope.current.getBoundingClientRect().left;
    })();
  });
  return (
    <div className={styles.parent}>
      <div className={styles.bg}>
        <div className="flex w-full h-full items-center justify-center">
          <AnimatedTitleImageCard
            scope={scope}
            src={Chandrayan}
            height={350}
            width={350}
            alt="mkc"
          />
        </div>
      </div>
      <motion.div className={styles.fg} initial={{ opacity: 0 }} ref={fgScope}>
        <div className="flex flex-col h-full w-full gap-[1%]">
          <div className="nav">
            <NavBar childrenScope={navBarChildrenScope} scope={navbarScope} />
          </div>
          <div className={styles.imageParent}>
            <FadeInCard
              scope={landingCardScope}
              parentClassName={styles.titleCard}
              childrenScope={landingCardChildrenScope}
              initial={{ scaleY: 0 }}
            >
              <div className="flex flex-col items-end gap-10">
                <Image src={star} width={70} height={70} alt="star" />
                <div className={styles.text}>
                  <div className="flex flex-col">
                    <> Innovating Low Light Image </>
                    <div className="flex gap-3">
                      <span className={styles.italics}>Enhancement</span>{" "}
                      {/* TODO: use shadcn hovercard to show defination of PSR. */}
                      for PSR
                    </div>
                    <> Regions of Lunar Crater </>
                  </div>
                </div>
              </div>
            </FadeInCard>
            <div className={styles.titleCardParent}>
              {/* this is to make sure that the heights of the conatainer and image are the same, completly under the card. */}
              <ImageCard
                initial={{ scale: 1, opacity: 0 }}
                src={Chandrayan}
                height={315}
                width={315}
                alt="mkc"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
