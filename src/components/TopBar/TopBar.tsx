import { FC, useState } from 'react';
import styles from './TopBar.module.css';
import Navigation from '../Navigation/Navigation';
import Social from '../Social/Social';
import logo from '../../images/logo.svg';
import cn from 'classnames';

const TopBar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onOpenMenu = () => {
    setIsOpen(true);
  }

  const onCloseMenu = () => {
    setIsOpen(false);
  }

  return (
    <div className={styles.topBar}>
      <img src={logo} alt='Логотип Динму' className={styles.logo} />
      <button className={styles.buttonOpen} type='button' onClick={onOpenMenu}></button>
      <div className={cn(styles.menu, { [styles.menuOpen]: isOpen })} >
        <button type='button' className={styles.buttonClose} onClick={onCloseMenu} ></button>
        <Navigation />
        <Social />
      </div>
    </div>
  )
}

export default TopBar;