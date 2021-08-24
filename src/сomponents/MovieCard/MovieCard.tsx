import React from 'react';
import { Movie } from '../../types';
import styles from './MovieCard.module.scss';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }: { movie: Movie }) => {
	const moviePoster = movie.poster_path
		? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
		: require(`../../assets/images/movie-card.png`).default;

	return (
		<Link className={styles.movieCard} to={`/movies/${movie.id}`}>
			<div className={styles.wrapImage}>
				<div className={styles.overlay}></div>
				<img className={styles.image} src={moviePoster} alt='movie' />
				<span className={styles.rating}>{movie.vote_average.toFixed(1)}</span>
				<div className={styles.preview}></div>
			</div>
			<div className={styles.content}>
				<h2 className={styles.title}>{movie.title}</h2>
				<p className={styles.genre}>
					{movie.genre_ids.map((item) => (
						<span key={item}>{item}</span>
					))}
				</p>
			</div>
		</Link>
	);
};

export default MovieCard;
