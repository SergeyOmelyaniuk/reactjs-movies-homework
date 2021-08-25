import React from 'react';
import styles from './ActorDescription.module.scss';
import { Actor, Language, MovieImages } from '../../types';
import TextBlock from '../TextBlock';
import { translate } from '../../constants';

const numberImagesPerPage = 4;

interface ActorDescriptionProps {
	actorProfile: Actor;
	actorImages: MovieImages[];
	currentLanguage: Language;
}

const ActorDescription = ({
	actorProfile,
	actorImages,
	currentLanguage,
}: ActorDescriptionProps) => {
	const listImages = actorImages.slice(0, numberImagesPerPage);

	const actorPhoto = actorProfile.profile_path
		? `https://image.tmdb.org/t/p/w500/${actorProfile.profile_path}`
		: require(`../../assets/images/actor-card.png`).default;

	return (
		<div className={styles.actorDescription}>
			<div className={styles.wrapPhotoActor}>
				<img className={styles.photoActor} src={actorPhoto} alt='actor' />
			</div>
			<div className={styles.infoActor}>
				<h2 className={styles.nameActor}>{actorProfile.name}</h2>
				<TextBlock
					title={translate[currentLanguage.title].birthday}
					value={actorProfile.birthday}
				/>
				<TextBlock
					title={translate[currentLanguage.title].placeOfBirth}
					value={actorProfile.place_of_birth}
				/>
				<TextBlock
					title={translate[currentLanguage.title].biography}
					value={actorProfile.biography}
				/>
				<div className={styles.photosActor}>
					<span className={styles.titlePhotosActor}>
						{translate[currentLanguage.title].photos}
					</span>
					<div className={styles.wrapPhotosActor}>
						{listImages.map((photo: MovieImages) => {
							return (
								<div
									key={photo.file_path}
									className={styles.wrapPhotoSmallActor}
								>
									<img
										className={styles.photoSmallActor}
										src={`https://image.tmdb.org/t/p/w500/${photo.file_path}`}
										alt='movie'
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

export default ActorDescription;
