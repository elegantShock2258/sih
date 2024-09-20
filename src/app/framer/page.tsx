"use client";

import AnimatedTitleImageCard from "@/components/Cards/AnimatedTitleImageCard/AnimatedTitleImageCard";
import NavBar from "@/components/NavBar/NavBar";
import {
  useLandingCardsAnimation,
  useNavBarAnimation,
  useTitleImageAnimated,
} from "@/components/Cards/hooks";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import star from "@/assets/star.svg";
import Team from "@/components/Team/team";
import FadeInCard from "@/components/Cards/FadeInCard/FadeInCard";
import Chandrayan from "@/assets/chandrayan.png";

import styles from "./page.module.css";
export default function Page() {
  let { navbarScope, navBarChildrenScope, navBarAnimation } =
    useNavBarAnimation();
  let { scope, titleImageAnimation } = useTitleImageAnimated();

  let titleCard = useLandingCardsAnimation();
  let teamCard = useLandingCardsAnimation();

  useEffect(() => {
    (async () => {
      await titleImageAnimation(); // WAIT for the title image animation
      navBarAnimation(); // DO NOT wait for navbar animation to finish
      teamCard.landingCardAnimation();
      await titleCard.landingCardAnimation(); // WAIT for everything else
      // all animations are done
    })();
  });

  return (
    <div className={styles.parent}>
      <div className={styles.bg}>
        <div className="flex w-full h-full items-center justify-center"></div>
      </div>
      <motion.div className={styles.fg}>
        <div className="flex flex-col h-full w-full">
          <div>
            <NavBar childrenScope={navBarChildrenScope} scope={navbarScope} />
          </div>
          <div className={styles.sec1}>
            <div className={styles.imageParent}>
              {/* TODO: fix wrong sizing of the card with the image on different screen sizes */}
              <FadeInCard
                scope={titleCard.landingCardScope}
                parentClassName={styles.titleCard}
                childrenScope={titleCard.landingCardChildrenScope}
                initial={{ scaleY: 0, scaleX: 0 }}
              >
                <div className="flex flex-col items-end gap-10">
                  <Image src={star} width={90} height={90} alt="star" />
                  <div className={styles.text}>
                    <div className="flex flex-col">
                      <> Innovating Low Light Image </>
                      <div className="flex gap-3">
                        <span className={styles.italics}>Enhancement</span>
                        <div className="flex items-center gap-3">for PSR</div>
                      </div>
                      <> Regions of Lunar Crater </>
                    </div>
                  </div>
                </div>
              </FadeInCard>
              <div className={styles.titleCardParent}>
                <AnimatedTitleImageCard
                  initial={{
                    scale: 1.6,
                    opacity: 1,
                    x: "-8vw", // TODO: figure out data to put this in the center for different screen sizes
                    y: "13vh",
                  }}
                  src={Chandrayan}
                  scope={scope}
                  height={450}
                  width={450}
                  alt="mkc"
                />
              </div>
            </div>
            <Team
              childrenScope={teamCard.landingCardChildrenScope}
              scope={teamCard.landingCardScope}
              parentClassName={styles.team}
              initial={""}
            >
              <></>
            </Team>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
