import React from 'react';
import styles from './MovieCard.module.scss';

function MovieCard() {
	return (
		<div className={styles.movieCard}>
			<div className={styles.wrapImage}>
				<img
					className={styles.image}
					src={require(`../../assets/images/movie-card.png`).default}
					alt=''
				/>
				<span className={styles.rating}>7.1</span>
				<div className={styles.preview}></div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>Movie Title</h2>
				<p className={styles.genre}>Genre-1 Genre-2 Genre-3</p>
			</div>
		</div>
	);
}

export default MovieCard;
