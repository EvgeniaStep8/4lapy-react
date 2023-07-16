import { FC } from 'react';
import styles from './SectionTitle.module.css';
import cn from 'classnames';

interface ISectionTitleProps {
	className?: string,
	title: string,
}

const SectionTitle: FC<ISectionTitleProps> = ({ className = 'dark', title }) => (
  <h2 className={cn(styles.SectionTitle, styles[className])}>{title}</h2>
);

export default SectionTitle;