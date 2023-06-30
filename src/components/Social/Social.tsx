import { FC } from "react";
import cn from "classnames"
import styles from './Social.module.css';
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";
import vk from "../../images/vk.svg";
import telegram from "../../images/telegram.svg";

const Social: FC = () => {
  return (
    <ul className={styles.social}>
      <li className={cn(styles.icon, styles.instagram)}>
        <img
          src={instagram}
          alt="Иконка Инстаграм"
          className={styles.image}
        />
      </li>
      <li className={cn(styles.icon, styles.facebook)}>
        <img
          src={facebook}
          alt="Иконка Фейсбук"
          className={styles.image}
        />
      </li>
      <li className={cn(styles.icon, styles.vk)}>
        <img
          src={vk}
          alt="Иконка Вконтакте"
          className={styles.image}
        />
      </li>
      <li className={cn(styles.icon, styles.telegram)}>
        <img
          src={telegram}
          alt="Иконка Телеграм"
          className={styles.image}
        />
      </li>
    </ul>
  );
};

export default Social;
