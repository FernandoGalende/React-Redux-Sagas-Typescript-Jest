import React from 'react';
import styles from './Recommendation.module.scss';
import Card from '../../commons/Card/Card.component';
import {Recomendation} from '../../../state/Auth/types'

type RecommendationProps = {
	userRecomendation: Recomendation[];
};

export const Recommendation: React.FC<RecommendationProps> = ({
	userRecomendation = []
}) => (
	<div className={styles.container}>
		{
			userRecomendation.length > 0 ? <div className={styles.wrap}>
				<h1>We got your recommendation</h1>
				{userRecomendation.map((recommentation: Recomendation, idx: number) => (
					<Card
						key={idx}
						type={recommentation.type}
						amount={recommentation.price.amount}
						periodicity={recommentation.price.periodicity}
					/>
				))}
			</div> :
			<span>loading recommendations...</span>}
	</div>
);
