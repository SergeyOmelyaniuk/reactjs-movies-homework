import React from 'react';
import styles from './ActorDescription.module.scss';
import { Actor } from '../../types';

interface ActorDescriptionProps {
	actor: Actor;
}

function ActorDescription(props: ActorDescriptionProps) {
	return (
		<div className={styles.actorDescription}>
			<div className={styles.wrapPhotoActor}>
				<img
					className={styles.photoActor}
					src={
						require(`../../mocks/images/actors/${props.actor.photo}`).default
					}
					alt=''
				/>
			</div>
			<div className={styles.infoActor}>
				<h2 className={styles.nameActor}>{props.actor.name}</h2>
				<div className={styles.textBlock}>
					<span className={styles.title}>Birthday:</span>
					<p className={styles.date}>{props.actor.birthday}</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Place of birth: </span>
					<p className={styles.placeBirthActor}>{props.actor.placeBirth}</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Biography:</span>
					<p className={styles.text}>{props.actor.biography}</p>
				</div>
				<div className={styles.photosActor}>
					<span className={styles.titlePhotosActor}>Photos</span>
					<div className={styles.wrapPhotosActor}>
						{props.actor.photos.map((photo) => {
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
}

export default ActorDescription;
