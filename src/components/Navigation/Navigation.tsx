import { FC } from "react";
import styles from "./Navigation.module.css"

const Navigation: FC = () => {
  return (
    <nav className={styles.navigation}>
      <a href="#reasons" className={styles.link}>
        Причины дрессировки
      </a>
      <a href="#dog-handler" className={styles.link}>
        C&nbspкинологом лучше
      </a>
      <a href="#about-me" className={styles.link}>
        Почему&nbspя
      </a>
      <a href="#training" className={styles.link}>
        Этапы дрессировки
      </a>
      <a href="#rewiews" className={styles.link}>
        Отзывы
      </a>
      <a href="#answers" className={styles.link}>
        Частые вопросы
      </a>
    </nav>
  );
};

export default Navigation;
