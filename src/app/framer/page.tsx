"use client";

import AnimatedTitleImageCard from "@/components/Cards/AnimatedTitleImageCard/AnimatedTitleImageCard";
import NavBar from "@/components/NavBar/NavBar";
import {
  useLandingCardsAnimation,
  useNavBarAnimation,
  useTitleImageAnimated,
} from "@/components/Cards/cardsAnimationHooks";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import star from "@/assets/star.svg";
import Team from "@/components/Cards/Team/team";
import FadeInCard from "@/components/Cards/FadeInCard/FadeInCard";

import Chandrayan from "@/assets/chandrayan.png";
import diamond from "@/assets/diamond.png";
import blackArrow from "@/assets/blackArrow.png";

import styles from "./page.module.css";
import SIH from "@/components/Cards/SIH/SIH";
export default function Page() {
  let { navbarScope, navBarChildrenScope, navBarAnimation } =
    useNavBarAnimation();
  let { scope, titleImageAnimation } = useTitleImageAnimated();

  let titleCard = useLandingCardsAnimation();
  let teamCard = useLandingCardsAnimation();
  let sih = useLandingCardsAnimation();
  let description = useLandingCardsAnimation();
  let scroll = useLandingCardsAnimation();

  useEffect(() => {
    (async () => {
      await titleImageAnimation(); // WAIT for the title image animation
      navBarAnimation(); // DO NOT wait for navbar animation to finish
      // do all cards animation
      // if you await for only one animation, then everything else is done in parallel.
      description.landingCardAnimation();
      teamCard.landingCardAnimation();
      sih.landingCardAnimation();
      scroll.landingCardAnimation();
      await titleCard.landingCardAnimation(); // wait for all cards to complete
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
            <div className="h-full flex flex-col justify-between">
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
              <div className="w-full h-full flex justify-between gap-[20px]">
                <FadeInCard
                  childrenScope={description.landingCardChildrenScope}
                  scope={description.landingCardScope}
                  parentClassName={`w-[60%] flex p-5 ${styles.transformTopRight}`}
                  initial={{ scaleX: 0, scaleY: 0 }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <Image src={diamond} width={50} height={20} alt="" />
                    <div className={styles.descText}>
                      {`Transforming faint lunar reflections into high-quality,
                      noise-free images to create the first-ever PSR map of
                      lunar poles, aiding landing site selection and
                      geomorphological research using Chandrayaan-2's OHRC data.`}
                    </div>
                  </div>
                </FadeInCard>
                <FadeInCard
                  childrenScope={scroll.landingCardChildrenScope}
                  scope={scroll.landingCardScope}
                  parentClassName={`mr-[16px] flex flex-1 bg-[#B09BA6] ${styles.transformTopRight}`}
                  initial={{ scaleX: 0, scaleY: 0 }}
                >
                  <div className={styles.scroll}>
                    <div className={styles.scrollTitle}>
                      <div>Want to see it working?</div>
                      <div>
                        <Image
                          src={blackArrow}
                          className={styles.image}
                          height={15}
                          width={15}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className={styles.scrollContent}>
                      Scroll to see the magic
                    </div>
                  </div>
                </FadeInCard>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-5">
              <Team
                childrenScope={teamCard.landingCardChildrenScope}
                scope={teamCard.landingCardScope}
                parentClassName={styles.team}
                initial={{ scaleY: 0, scaleX: 0 }}
              >
                <></>
              </Team>
              <SIH
                childrenScope={sih.landingCardChildrenScope}
                scope={sih.landingCardScope}
                parentClassName={styles.sih}
                initial={{ scaleX: 0 }}
                problemStatement={1732}
              >
                <></>
              </SIH>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
