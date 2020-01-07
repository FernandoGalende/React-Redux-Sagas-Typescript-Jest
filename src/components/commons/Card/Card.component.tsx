import React from 'react';
import styles from './Card.module.scss';

type CardProps = {
	type: string;
	amount: string;
	periodicity: string;
};

export const Card: React.FC<CardProps> = ({ type, amount, periodicity }) => {
	const formatType = (type: string) =>
		type
			.split('_')
			.map(
				(word) =>
					word.charAt(0).toUpperCase() +
					word.substring(1).toLowerCase()
			)
			.join(' ');

	return (
		<div className={styles.container} data-testid='card-test'>
			<div>
				<strong data-testid='card-type-test'>{formatType(type)}</strong>
			</div>
			<div>
				<p>
					€{amount} per <small>{formatType(periodicity)}</small>
				</p>
			</div>
		</div>
	);
};
