import React from 'react';
import TopBilledCast from '../TopBilledCast';
import styles from './MovieDescription.module.scss';
import { Movie } from '../../types';
import TextBlock from '../TextBlock';

interface MovieDescriptionProps {
	movie: Movie;
}

const MovieDescription = ({ movie }: MovieDescriptionProps) => {
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
				<h2 className={styles.nameMovie}>{movie.title}</h2>
				<TextBlock title='Overview' value={movie.overview} />
				<TextBlock title='Release date' value={movie.release_date} />
				<TextBlock title='Revenue' value={`$${movie.revenue}`} />
				<TextBlock title='Duration' value={movie.duration} />
				<div className={styles.wrapGenre}>
					{movie.genre.map((item) => (
						<div key={item} className={styles.genre}>
							{item}
						</div>
					))}
				</div>
				<div className={styles.wrapTopBilledCast}>
					<TopBilledCast actors={movie.actors} />
				</div>
				<div className={styles.blockImages}>
					<span className={styles.titleImages}>Images</span>
					<div className={styles.wrapImages}>
						{movie.images.map((image) => {
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
};

export default MovieDescription;
