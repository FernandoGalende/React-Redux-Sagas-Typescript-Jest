import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
	id: string;
	isDisable: boolean;
	onClick: Function;
	children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
	id,
	isDisable,
	onClick,
	children
}) => (
	<button
        data-testid='button-test'
		className={styles.button}
		id={id}
		disabled={isDisable}
		onClick={() => onClick()}>
		{children}
	</button>
);
