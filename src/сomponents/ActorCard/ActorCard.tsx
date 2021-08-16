import React from 'react';
import styles from './ActorCard.module.scss';
import { Actor } from '../../types';
import { Link } from 'react-router-dom';

const ActorCard = ({ actor }: { actor: Actor }) => (
	<Link className={styles.actorCard} to={`/actors/${actor.id}`}>
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
	</Link>
);

export default ActorCard;
