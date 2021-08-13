import React from 'react';
import styles from './ActorDescription.module.scss';
import { Actor } from '../../types';
import TextBlock from '../TextBlock';

interface ActorDescriptionProps {
	actor: Actor;
}

const ActorDescription = ({ actor }: ActorDescriptionProps) => (
	<div className={styles.actorDescription}>
		<div className={styles.wrapPhotoActor}>
			<img
				className={styles.photoActor}
				src={require(`../../mocks/images/actors/${actor.photo}`).default}
				alt=''
			/>
		</div>
		<div className={styles.infoActor}>
			<h2 className={styles.nameActor}>{actor.name}</h2>
			<TextBlock title='Birthday' value={actor.birthday} />
			<TextBlock title='Place of birth' value={actor.placeBirth} />
			<TextBlock title='Biography' value={actor.biography} />
			<div className={styles.photosActor}>
				<span className={styles.titlePhotosActor}>Photos</span>
				<div className={styles.wrapPhotosActor}>
					{actor.photos.map((photo) => {
						return (
							<div key={photo} className={styles.wrapPhotoSmallActor}>
								<img
									className={styles.photoSmallActor}
									src={
										require(`../../mocks/images/additional_photos/${photo}`)
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

export default ActorDescription;
