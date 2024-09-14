import { AnimationScope } from "framer-motion";
import FadeInCard from "../Cards/FadeInCard/FadeInCard";
import styles from "./navbar.module.css";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";

export default function NavBar({
  scope,
  childrenScope,
}: {
  scope: AnimationScope<any>;
  childrenScope: AnimationScope<any>;
}) {
  return (
    <div className="w-full">
      <FadeInCard
        parentClassName={styles.navbarParent}
        scope={scope}
        childrenScope={childrenScope}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-[15px]">
            <Image src={logo} height={20} width={20} alt="logo" />
            <span className={styles.text}> ILLUMINA </span>
          </div>
          <div className="flex gap-[10px]">
            <Button className={`p-1 bg-transparent ${styles.button}`}>
              {" "}
              HOME{" "}
            </Button>
            <Button className={`p-1 bg-transparent ${styles.button}`}>
              {" "}
              UPLOAD{" "}
            </Button>
          </div>
        </div>
      </FadeInCard>
    </div>
  );
}
