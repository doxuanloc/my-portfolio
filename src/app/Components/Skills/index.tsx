import styles from "./index.module.scss";
// import { DATA_SKILLS } from "../../Layouts/Body";

type SkillProps = {
  id: string,
  title: string,
  name: string,
  onClick: () => void,
  isOpacity: boolean,
}
function Skills({ id, title, name, onClick, isOpacity } : SkillProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <div
          className={isOpacity ? styles.center : styles.centerOpacity}
          id={id}
          onClick={onClick}
        >
          <div className={styles.headline}>
            <div className={styles.small}></div>
            {title}
          </div>
          <div className={styles["circle-big"]}>
            <div className={styles.text}>
              70%<div className={styles.small}>{name[0]}</div>
            </div>
            <svg>
              <circle className={styles.bg} cx="57" cy="57" r="52" />
              <circle className={styles.progress} cx="57" cy="57" r="52" />
            </svg>
          </div>
          <div className={styles["circles-small"]}>
            <div className={styles["circle-small"]}>
              <div className={styles.text}>
                60%<div className={styles.small}>{name[1]}</div>
              </div>
              <svg>
                <circle className={styles.bg} cx="40" cy="40" r="37" />
                <circle className={styles.progressOne} cx="40" cy="40" r="37" />
              </svg>
            </div>
            <div className={styles["circle-small"]}>
              <div className={styles.text}>
                40%<div className={styles.small}>{name[2]}</div>
              </div>
              <svg>
                <circle className={styles.bg} cx="40" cy="40" r="37" />
                <circle className={styles.progressTwo} cx="40" cy="40" r="37" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
