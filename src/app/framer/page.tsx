"use client";
import Chandrayan from "@/assets/chandrayan.png";
import AnimatedTitleImageCard from "@/components/Cards/AnimatedTitleImageCard/AnimatedTitleImageCard";
import NavBar from "@/components/NavBar/NavBar";
import {
  useLandingCardsAnimation,
  useNavBarAnimation,
  useTitleImageAnimated,
} from "@/components/Cards/hooks";
import { useEffect } from "react";
import styles from "./page.module.css";
import FadeInCard from "@/components/Cards/FadeInCard/FadeInCard";

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
  useEffect(() => {
    (async () => {
      await titleImageAnimation(); // WAIT for the title image animation
      navBarAnimation(); // DO NOT wait for navbar animation to finish
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
        <div className={styles.fg}>
          <FadeInCard
            parentClassName={styles.titleCard}
            childrenScope={landingCardChildrenScope}
            scope={landingCardScope}
            initial={{ scaleY: 0 }}
          >
            <>hu</>
          </FadeInCard>
        </div>
      </div>
    </div>
  );
}
