import React from 'react';
import styles from './ActorCard.module.scss';

function ActorCard() {
	return (
		<div className={styles.actorCard}>
			<div className={styles.wrapImage}>
				<img
					className={styles.image}
					src={require(`../../assets/images/actor-card.png`).default}
					alt=''
				/>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>Actor Name</h2>
				<p className={styles.character}>Played character</p>
			</div>
		</div>
	);
}

export default ActorCard;
