import { FC } from 'react';
import styles from './DogHandler.module.css';
import SectionTitle from '../../UI/SectionTitle/SectionTitle';

const DogHandler: FC = () => (
  <section className={styles.DogHandler} id ='dog-handler'>
			<SectionTitle title='С&nbsp;кинологом лучше' theme='white' />
      <ul className={styles.list}>
        <li className={styles.item}>
          <h3 className={styles.title}>Опыт работы</h3>
          <p className={styles.text}>Благодаря многолетнему опыту кинологи легко могут заметить недостаточно чёткие жесты, противоречивые команды или несвоевременное подкрепление. Так же вы не окажитесь в тупике, не зная, как разрешить ту или иную ситуацию. Профессионал подскажет простой выход из неё.</p>
        </li>
        <li className={styles.item}>
          <h3 className={styles.title}>Экономия времени</h3>
          <p className={styles.text}>На&nbsp;поиски нужной информации не&nbspуходят недели. 1&nbsp;час занятий и команда лежать уже выучена.</p>
        </li>
      </ul>
    </section>
);

export default DogHandler;