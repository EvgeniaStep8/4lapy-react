import { FC } from 'react';
import styles from './Footer.module.css';
import Social from '../Social/Social';
import logo from '../../images/logo.svg';

const Footer: FC = () => (
  <footer className={styles.Footer}>
    <img src={logo} alt='Логотип Динму' className={styles.logo}/>
    <p className={styles.copyright}>&#169;2023</p>
    <Social />
  </footer>
);

export default Footer;