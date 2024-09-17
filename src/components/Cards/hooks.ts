"use client";
import { useAnimate } from "framer-motion";
export function useFadeInCard() {
  const [scope, animate] = useAnimate();
  const [childrenScope, childrenAnimate] = useAnimate();
  let fadeInAnimation = async () => {
    await animate(
      scope.current,
      { scaleX: 1 },
      { type: "tween", duration: 1.5, ease: "easeInOut" },
    );
    await childrenAnimate(
      childrenScope.current,
      { opacity: 1 },
      { type: "tween", duration: 1, ease: "easeInOut" },
    );
  };
  return { scope, animate, fadeInAnimation, childrenScope, childrenAnimate };
}
export function useFadeInCardLanding(scale: number) {
  const [scope, animate] = useAnimate();
  const [childrenScope, childrenAnimate] = useAnimate();
  let fadeInAnimation = async () => {
    await animate(
      scope.current,
      { scaleY: scale },
      { type: "tween", duration: 1.5, ease: "easeInOut" },
    );
    await childrenAnimate(
      childrenScope.current,
      { opacity: 1 },
      { type: "tween", duration: 1, ease: "easeInOut" },
    );
  };
  return { scope, animate, fadeInAnimation, childrenScope, childrenAnimate };
}
export function useTitleImageAnimated() {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  let titleImageAnimation = async () => {
    await animate(
      scope.current,
      { scale: 0.9 },
      { type: "tween", duration: 0.8 },
    );
    await animate(
      scope.current,
      { x: "20%", y: "-43%" },
      { type: "tween", duration: 1 },
    );
  };
  return { scope, animate, titleImageAnimation };
}

export function useNavBarAnimation() {
  let { scope, animate, fadeInAnimation, childrenScope } = useFadeInCard();
  return {
    navbarScope: scope,
    navBarAnmate: animate,
    navBarAnimation: fadeInAnimation,
    navBarChildrenScope: childrenScope,
  };
}

export function useLandingCardsAnimation() {
  let { scope, animate, fadeInAnimation, childrenScope } =
    useFadeInCardLanding(1);
  return {
    landingCardScope: scope,
    landingCardAnimate: animate,
    landingCardAnimation: fadeInAnimation,
    landingCardChildrenScope: childrenScope,
  };
}

export function useImageCardTextLanding() {
  let { scope, animate, fadeInAnimation, childrenScope } =
    useFadeInCardLanding(1);
  return {
    imageCardTextScope: scope,
    imageCardTextAnimate: animate,
    imageCardTextAnimation: fadeInAnimation,
    imageCardTextChildrenScope: childrenScope,
  };
}
