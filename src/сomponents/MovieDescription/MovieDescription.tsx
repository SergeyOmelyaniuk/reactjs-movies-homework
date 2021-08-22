import React from 'react';
import TopBilledCast from '../TopBilledCast';
import styles from './MovieDescription.module.scss';

import { Actor, MovieDetails, MovieImages, Language, Genre } from '../../types';
import TextBlock from '../TextBlock';
import { translate } from '../../constants';

interface MovieDescriptionProps {
	movieDetails: MovieDetails;
	movieImages: MovieImages[];
	topCast: Actor[];
	currentLanguage: Language;
}
const numberImagesPerPage = 8;

const MovieDescription = ({
	movieDetails,
	movieImages,
	topCast,
	currentLanguage,
}: MovieDescriptionProps) => {
	const listImages = movieImages.slice(0, numberImagesPerPage);

	return (
		<div className={styles.movieDescription}>
			<div className={styles.wrapPhotoMovie}>
				<img
					className={styles.photoMovie}
					src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
					alt=''
				/>
				<span className={styles.rating}>{movieDetails.vote_average}</span>
			</div>
			<div className={styles.infoMovie}>
				<span className={styles.title}>
					{`${translate[currentLanguage.title].titleMovie}:`}
				</span>
				<h2 className={styles.nameMovie}>{movieDetails.title}</h2>
				<TextBlock
					title={translate[currentLanguage.title].overviewMovie}
					value={movieDetails.overview}
				/>
				<TextBlock
					title={translate[currentLanguage.title].releaseDate}
					value={movieDetails.release_date}
				/>
				<TextBlock
					title={translate[currentLanguage.title].revenue}
					value={`$${movieDetails.revenue}`}
				/>
				<TextBlock
					title={translate[currentLanguage.title].duration}
					value={`${movieDetails.runtime} ${
						translate[currentLanguage.title].minutes
					}`}
				/>
				<div className={styles.wrapGenre}>
					{movieDetails.genres.map((item: Genre) => (
						<div key={item.id} className={styles.genre}>
							{item.name}
						</div>
					))}
				</div>
				<div className={styles.wrapTopBilledCast}>
					<TopBilledCast actors={topCast} currentLanguage={currentLanguage} />
				</div>
				<div className={styles.blockImages}>
					<span className={styles.titleImages}>
						{translate[currentLanguage.title].images}
					</span>
					<div className={styles.wrapImages}>
						{listImages.map((image: MovieImages) => {
							return (
								<div key={image.file_path} className={styles.wrapImage}>
									<img
										className={styles.image}
										src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
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
