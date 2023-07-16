import { FC } from 'react';
import styles from './Reasons.module.css';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import cat from '../../images/cat.svg';
import ball from '../../images/ball.svg';
import dog from '../../images/dog.svg';
import paw from '../../images/paw.svg';
import leash from '../../images/leash.svg';
import banch from '../../images/banch.svg';
import barking from '../../images/barking.svg';
import preserves from '../../images/preserves.svg';

const Reasons: FC = () => (
	<section className={styles.Reasons} id='reasons'>
      <SectionTitle title='Причины дрессировать собаку' />
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>Гонится за животными</h3>
          <img src={cat} alt='Грустный кот' className={styles.image} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Роняет вещи</h3>
          <img src={ball} alt='Теннисный мяч' className={styles.image} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Грызёт мебель</h3>
          <img src={dog} alt='Вредная собака' className={styles.image} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Сдирает обои</h3>
          <img src={paw} alt='Лапка' className={styles.image} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Натянутый поводок</h3>
          <img src={leash} alt='Поводок' className={styles.image} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Не&nbsp;ходит в лоток</h3>
          <img src={banch} alt='Собачья кучка' className={styles.image} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Лает на&nbsp;людей</h3>
          <img src={barking} alt='Лающий пёс' className={styles.image} />
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Берет&nbsp;все в рот</h3>
          <img src={preserves} alt='Собачьи консервы' className={styles.image} />
        </li>
      </ul>
    </section>
);

export default Reasons;