import React from 'react';
import MovieCard from '../MovieCard';
import styles from './WrapMovies.module.scss';

function WrapMovies() {
	return (
		<div className={styles.wrapMovies}>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
			<div className={styles.wrapMovie}>
				<MovieCard />
			</div>
		</div>
	);
}

export default WrapMovies;
