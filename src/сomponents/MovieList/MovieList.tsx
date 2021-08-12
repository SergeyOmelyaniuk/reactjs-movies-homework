import React from 'react';
import { Movie } from '../../types';
import WrapMovies from '../WrapMovies';
import styles from './MovieList.module.scss';

interface MovieListProps {
	movies: Movie[];
}

function MovieList(props: MovieListProps) {
	return (
		<div>
			<h3 className={styles.title}>Search results:</h3>
			{props.movies.length === 0 ? (
				<p className={styles.noResults}>No results found</p>
			) : (
				<WrapMovies movies={props.movies} />
			)}
		</div>
	);
}

export default MovieList;
