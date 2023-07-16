import { FC } from 'react';
import styles from './Info.module.css';

const Info: FC = () => (
	<section className={styles.Info}>
      <div className={styles.cell}>
        <h2 className={styles.title}>100&nbsp;людей</h2>
        <p className={styles.text}>Обучились  дрессировать своих питомцев</p>
      </div>
      <div className={styles.cell}>
        <h2 className={styles.title}>200&nbsp;собак</h2>
        <p className={styles.text}>Начали понимать команды</p>
      </div>
      <div className={styles.cell}>
        <h2 className={styles.title}>2600&nbsp;часов</h2>
        <p className={styles.text}>Совместных занятий и общения</p>
      </div>
      <div className={styles.cell}>
        <h2 className={styles.title}>10&nbsp;лет</h2>
        <p className={styles.text}>Посвятила собакам</p>
      </div>
    </section>
);

export default Info;