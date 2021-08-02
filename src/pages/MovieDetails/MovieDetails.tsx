import React from 'react';
import MovieDescription from '../../сomponents/MovieDescription';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './MovieDetails.module.scss';
import { movies } from '../../mocks/movies';

function MovieDetails() {
	return (
		<div className={styles.movieDetails}>
			<MovieDescription movie={movies.popular[0]} />
			<div className={styles.recommendations}>
				<span className={styles.titleRecommendations}>Recommendations</span>
				<WrapMovies movies={movies.upcoming} />
			</div>
		</div>
	);
}

export default MovieDetails;
