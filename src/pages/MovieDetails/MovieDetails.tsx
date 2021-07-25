import React from 'react';
import MovieDescription from '../../сomponents/MovieDescription';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './MovieDetails.module.scss';

function MovieDetails() {
	return (
		<div className={styles.movieDetails}>
			<MovieDescription />
			<div className={styles.recommendations}>
				<span className={styles.titleRecommendations}>Recommendations</span>
				<WrapMovies />
			</div>
		</div>
	);
}

export default MovieDetails;
