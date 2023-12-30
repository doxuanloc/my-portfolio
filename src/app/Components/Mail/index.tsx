import { useState } from "react";
import clsx from "clsx";
import styles from "./index.module.scss";

export default function Mail() {
  const [planeFly, setPlaneFly] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={clsx(styles.frame, planeFly && styles.frameClose)}>
        <label
          htmlFor="cb"
          className={clsx(styles.button, planeFly && styles.buttonChecked)}
          onClick={() => setPlaneFly(!planeFly)}
        >
          Send mail
        </label>
        <div
          className={clsx(styles.circle, planeFly && styles.circleChecked)}
        ></div>
        <div className={styles.circleOuter}></div>
        <svg
          className={clsx(
            styles.icon,
            styles.mail,
            planeFly && styles.mailChecked
          )}
        >
          <polyline points="119,1 119,69 1,69 1,1" />
          <polyline points="119,1 60,45 1,1 119,1" />
        </svg>
        <svg
          className={clsx(
            styles.icon,
            styles.plane,
            planeFly && styles.planeChecked
          )}
        >
          <polyline points="119,1 1,59 106,80 119,1"></polyline>
          <polyline points="119,1 40,67 43,105 69,73"></polyline>
        </svg>
      </div>
    </div>
  );
}
