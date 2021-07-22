import React from 'react';
import ActorDescription from '../../сomponents/ActorDescription';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './ActorProfile.module.scss';

function ActorProfile() {
	return (
		<div className={styles.actorProfile}>
			<ActorDescription />
			<div className={styles.knownBy}>
				<span className={styles.titleKnownBy}>Known by</span>
				<WrapMovies />
			</div>
		</div>
	);
}

export default ActorProfile;
