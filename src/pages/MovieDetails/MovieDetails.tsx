import React from 'react';
import MovieDescription from '../../сomponents/MovieDescription';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './MovieDetails.module.scss';
import { movies } from '../../mocks/movies';

function MovieDetails() {
	return (
		<div className={styles.movieDetails}>
			<MovieDescription movie={movies[0]} />
			<div className={styles.recommendations}>
				<span className={styles.titleRecommendations}>Recommendations</span>
				<WrapMovies movies={movies} />
			</div>
		</div>
	);
}

export default MovieDetails;
