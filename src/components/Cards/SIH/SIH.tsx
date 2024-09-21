import { AnimationScope, Target, VariantLabels } from "framer-motion";
import FadeInCard from "../FadeInCard/FadeInCard";
import styles from "./sih.module.css";

export type SIHCardProps = {
  children: JSX.Element;
  childrenScope: AnimationScope<any>;
  scope: AnimationScope<any>;
  parentClassName: string;
  initial: VariantLabels | Target | boolean;
  problemStatement: number;
};

export default function SIH({
  children,
  scope,
  childrenScope,
  parentClassName,
  initial,
  problemStatement,
}: SIHCardProps) {
  return (
    <>
      <FadeInCard
        scope={scope}
        childrenScope={childrenScope}
        parentClassName={parentClassName}
        initial={initial}
      >
        <div className={styles.card}>
          <div className={styles.title}>SIH</div>
          <div className={styles.problemStatement}>{problemStatement}</div>
        </div>
      </FadeInCard>
    </>
  );
}
