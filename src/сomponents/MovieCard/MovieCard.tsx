import React from 'react';
import { Movie } from '../../types';
import styles from './MovieCard.module.scss';

function MovieCard(props: { movie: Movie }) {
	return (
		<div className={styles.movieCard}>
			<div className={styles.wrapImage}>
				<img
					className={styles.image}
					src={require(`../../mocks/images/films/${props.movie.img}`).default}
					alt=''
				/>
				<span className={styles.rating}>{props.movie.vote_average}</span>
				<div className={styles.preview}></div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{props.movie.title}</h2>
				<p className={styles.genre}>
					{props.movie.genre.map((item) => (
						<span key={item}>{item}</span>
					))}
				</p>
			</div>
		</div>
	);
}

export default MovieCard;
