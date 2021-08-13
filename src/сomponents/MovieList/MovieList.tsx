import React from 'react';
import { Movie } from '../../types';
import WrapMovies from '../WrapMovies';
import styles from './MovieList.module.scss';

interface MovieListProps {
	movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => (
	<div>
		<h3 className={styles.title}>Search results:</h3>
		{movies.length === 0 ? (
			<p className={styles.noResults}>No results found</p>
		) : (
			<WrapMovies movies={movies} />
		)}
	</div>
);

export default MovieList;
