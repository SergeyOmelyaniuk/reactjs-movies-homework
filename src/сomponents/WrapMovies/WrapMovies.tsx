import React from 'react';
import { Movie } from '../../types';
import MovieCard from '../MovieCard';
import styles from './WrapMovies.module.scss';

interface WrapMoviesProps {
	movies: Movie[];
}

const WrapMovies = ({ movies }: WrapMoviesProps) => (
	<div className={styles.wrapMovies}>
		{movies.map((movie) => {
			return (
				<div key={movie.id} className={styles.wrapMovie}>
					<MovieCard movie={movie} />
				</div>
			);
		})}
	</div>
);

export default WrapMovies;
