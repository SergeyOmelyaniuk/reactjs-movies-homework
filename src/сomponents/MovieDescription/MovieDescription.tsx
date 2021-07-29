import React from 'react';
import TopBilledCast from '../TopBilledCast';
import styles from './MovieDescription.module.scss';
import { Movie } from '../../types';

interface MovieDescriptionProps {
	movie: Movie;
}

function MovieDescription(props: MovieDescriptionProps) {
	return (
		<div className={styles.movieDescription}>
			<div className={styles.wrapPhotoMovie}>
				<img
					className={styles.photoMovie}
					src={require(`../../mocks/images/films/film_1.jpg`).default}
					alt=''
				/>
			</div>
			<div className={styles.infoMovie}>
				<span className={styles.title}>Title:</span>
				<h2 className={styles.nameMovie}>{props.movie.title}</h2>
				<div className={styles.textBlock}>
					<span className={styles.title}>Overview:</span>
					<p className={styles.text}>{props.movie.overview}</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Release date:</span>
					<p className={styles.number}>{props.movie.release_date}</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Revenue:</span>
					<p className={styles.number}>{`$${props.movie.revenue}`}</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Duration:</span>
					<p className={styles.number}>{props.movie.duration}</p>
				</div>
				<div className={styles.wrapGenre}>
					{props.movie.genre.map((item) => (
						<div key={item} className={styles.genre}>
							{item}
						</div>
					))}
				</div>
				<div className={styles.wrapTopBilledCast}>
					<TopBilledCast actors={props.movie.actors} />
				</div>
				<div className={styles.blockImages}>
					<span className={styles.titleImages}>Images</span>
					<div className={styles.wrapImages}>
						{props.movie.images.map((image) => {
							return (
								<div key={image} className={styles.wrapImage}>
									<img
										className={styles.image}
										src={
											require(`../../mocks/images/additional_images/${image}`)
												.default
										}
										alt=''
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieDescription;
