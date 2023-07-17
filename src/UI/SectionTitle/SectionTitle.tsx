import { FC } from 'react';
import styles from './SectionTitle.module.css';
import cn from 'classnames';

interface ISectionTitleProps {
	theme?: 'white' | 'dark',
	title: string,
}

const SectionTitle: FC<ISectionTitleProps> = ({ theme = 'dark', title }) => (
  <h2 className={cn(styles.SectionTitle, styles[theme])}>{title}</h2>
);

export default SectionTitle;