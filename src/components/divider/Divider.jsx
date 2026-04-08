import styles from "./Divider.module.css";
import useInView from "../../hooks/useInView";

export default function Divider({ image }) {
  const [ref, isVisible] = useInView();

  return (
    <section
      ref={ref}
      className={`${styles.divider} ${isVisible ? styles.show : ""}`}
    >
      {/* 🔥 imagem real (melhora performance) */}
      <img
        src={image}
        alt=""
        className={styles.bg}
        width="1920"
        height="600"
        loading="lazy"
      />

      <div className={styles.overlay}></div>

      <div className={styles.shapeTop}></div>
      <div className={styles.shapeMiddle}></div>
      <div className={styles.shapeBottom}></div>
    </section>
  );
}