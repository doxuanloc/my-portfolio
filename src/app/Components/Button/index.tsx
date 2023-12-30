import styles from "./index.module.scss";

type ButtonProps = {
  children: React.ReactNode,
  onClick?: () => void;
}
export default function Button({ children, onClick } : ButtonProps) {
  return (
    <button className={styles["wrapper"]} onClick={onClick}>
      {children}
    </button>
  );
}

