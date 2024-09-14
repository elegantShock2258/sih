"use client";
import Chandrayan from "@/assets/chandrayan.png";
import AnimatedTitleImageCard from "@/components/Cards/AnimatedTitleImageCard/AnimatedTitleImageCard";
import NavBar from "@/components/NavBar/NavBar";
import {
  useNavBarAnimation,
  useTitleImageAnimated,
} from "@/components/Cards/hooks";
import { useEffect } from "react";

export default function Page() {
  let { navbarScope, navBarAnmate, navBarChildrenScope, navBarAnimation } =
    useNavBarAnimation();
  let { scope, animate, titleImageAnimation } = useTitleImageAnimated();
  useEffect(() => {
    (async () => {
      await titleImageAnimation();
      await navBarAnimation();
    })();
  });
  return (
    <div className="flex flex-col h-full w-full">
      <div className="nav">
        <NavBar childrenScope={navBarChildrenScope} scope={navbarScope} />
      </div>
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
  );
}
