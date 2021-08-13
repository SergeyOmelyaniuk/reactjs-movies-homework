import React from 'react';
import styles from './ActorCard.module.scss';
import { Actor } from '../../types';

const ActorCard = ({ actor }: { actor: Actor }) => (
	<div className={styles.actorCard}>
		<div className={styles.wrapImage}>
			<img
				className={styles.image}
				src={require(`../../mocks/images/actors/${actor.photo}`).default}
				alt=''
			/>
		</div>
		<div className={styles.content}>
			<h2 className={styles.title}>{actor.name}</h2>
			<p className={styles.character}>{actor.character}</p>
		</div>
	</div>
);

export default ActorCard;
