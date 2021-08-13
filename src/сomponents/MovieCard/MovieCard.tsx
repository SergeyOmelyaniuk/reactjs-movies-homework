import React from 'react';
import { Movie } from '../../types';
import styles from './MovieCard.module.scss';

const MovieCard = ({ movie }: { movie: Movie }) => (
	<div className={styles.movieCard}>
		<div className={styles.wrapImage}>
			<div className={styles.overlay}></div>
			<img
				className={styles.image}
				src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
				alt=''
			/>
			<span className={styles.rating}>{movie.vote_average}</span>
			<div className={styles.preview}></div>
		</div>
		<div className={styles.content}>
			<h2 className={styles.title}>{movie.title}</h2>
			<p className={styles.genre}>
				{movie.genre_ids.map((item: string) => (
					<span key={item}>{item}</span>
				))}
			</p>
		</div>
	</div>
);

export default MovieCard;
