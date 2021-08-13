import React from 'react';
import ActorDescription from '../../сomponents/ActorDescription';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './ActorProfile.module.scss';
import { movies } from '../../mocks/movies';

const ActorProfile = () => (
	<div className={styles.actorProfile}>
		<ActorDescription actor={movies.popular[0].actors[0]} />
		<div className={styles.knownBy}>
			<span className={styles.titleKnownBy}>Known by</span>
			<WrapMovies movies={movies.popular} />
		</div>
	</div>
);

export default ActorProfile;
