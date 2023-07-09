import { FC } from "react";
import styles from "./Lead.module.css";
import lead from "../../images/lead.svg"
import SubmitButton from "../../UI/SubmitButton/SubmitButton";

const Lead: FC = () => {
  const onSubmitButtonClick = () => {

  }

  return (
    <div className={styles.lead}>
      <div className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            <span className={styles.accent}>1 час</span> занятий
            с&nbsp;любимцем, под руководством кинолога
          </h1>
          <p className={styles.subtitle}>
            Сохранят нервные клетки и порядок в&nbsp;доме
          </p>
          <SubmitButton onClick={onSubmitButtonClick} />
        </div>
        <img
          src={lead}
          alt="Счастливый человек с собакой"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Lead;
