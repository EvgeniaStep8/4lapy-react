import { FC } from 'react';
import styles from './SubmitButton.module.css';

interface ISubmitButtonProps {
	onClick: () => void;
}

const SubmitButton: FC<ISubmitButtonProps> = ({ onClick }) => (
	<button
	  className={styles.button}
		onClick={onClick}
		type='button'
	>
		Стать учителем четвероного друга
	</button>
)

export default SubmitButton;