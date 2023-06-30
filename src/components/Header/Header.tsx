import { FC } from "react";
import styles from "./Header.module.css";
import TopBar from "../TopBar/TopBar";
import Lead from "../Lead/Lead";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <TopBar />
      <Lead />
    </header>
  );
};

export default Header;
