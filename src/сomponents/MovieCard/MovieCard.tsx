import React from 'react';
// import { Movie } from '../../types';
import styles from './MovieCard.module.scss';

//TODO
// { movie: Movie }
function MovieCard(props: { movie: any }) {
	return (
		<div className={styles.movieCard}>
			<div className={styles.wrapImage}>
				<div className={styles.overlay}></div>
				<img
					className={styles.image}
					src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
					alt=''
				/>
				<span className={styles.rating}>{props.movie.vote_average}</span>
				<div className={styles.preview}></div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{props.movie.title}</h2>
				<p className={styles.genre}>
					{props.movie.genre_ids.map((item: string) => (
						<span key={item}>{item}</span>
					))}
				</p>
			</div>
		</div>
	);
}

export default MovieCard;
