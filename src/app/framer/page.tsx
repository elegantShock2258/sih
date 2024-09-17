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
import { useEffect } from "react";
import styles from "./page.module.css";
import FadeInCard from "@/components/Cards/FadeInCard/FadeInCard";
import ImageCard from "@/components/Cards/ImageCard/ImageCard";

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
  useEffect(() => {
    (async () => {
      // await titleImageAnimation(); // WAIT for the title image animation
      navBarAnimation(); // DO NOT wait for navbar animation to finish
      // await landingCardAnimation(); // WAIT for everything else
      imageCardTextAnimation();
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
          <div className="flex w-full h-full flex-col bg-red-700">
            {/* <AnimatedTitleImageCard
                scope={scope}
                src={Chandrayan}
                height={350}
                width={350}
                alt="mkc"
              /> */}
          </div>
        </div>
        <div className={styles.fg}>
          <div className={styles.imageParent}>
            <FadeInCard
              parentClassName={styles.titleCard}
              childrenScope={imageCardTextChildrenScope}
              scope={imageCardTextScope}
              initial={{ scaleY: 0 }}
            >
              <>hu</>
            </FadeInCard>
            <ImageCard
              initial={{ scale: 0.75 }}
              src={Chandrayan}
              height={350}
              width={350}
              alt="mkc"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
