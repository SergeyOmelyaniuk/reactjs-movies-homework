import React from 'react';
import styles from './ActorCard.module.scss';
import { Actor } from '../../types';

function ActorCard(props: { actor: Actor }) {
	return (
		<div className={styles.actorCard}>
			<div className={styles.wrapImage}>
				<img
					className={styles.image}
					src={
						require(`../../mocks/images/actors/${props.actor.photo}`).default
					}
					alt=''
				/>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{props.actor.name}</h2>
				<p className={styles.character}>{props.actor.character}</p>
			</div>
		</div>
	);
}

export default ActorCard;
