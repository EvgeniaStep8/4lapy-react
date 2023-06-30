import { FC } from 'react';
import styles from './TopBar.module.css';
import Navigation from '../Navigation/Navigation';
import Social from '../Social/Social';

const TopBar: FC = () => {
  return (
    <div className={styles.topBar}>
      <img src="./images/logo.svg" alt="Логотип Динму" className="header__logo" />
      <button className="header__menu-button" type="button"></button>
      <div className="header__menu">
        <button type="button" className="header__button-close"></button>
        <Navigation />
        <Social />
      </div>
    </div>
  )
}

export default TopBar;