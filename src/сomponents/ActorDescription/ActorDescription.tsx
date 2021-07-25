import React from 'react';
import styles from './ActorDescription.module.scss';

function ActorDescription() {
	return (
		<div className={styles.actorDescription}>
			<div className={styles.wrapPhotoActor}>
				<img
					className={styles.photoActor}
					src={require(`../../assets/images/actor-card.png`).default}
					alt=''
				/>
			</div>
			<div className={styles.infoActor}>
				<h2 className={styles.nameActor}>Actor Name</h2>
				<div className={styles.textBlock}>
					<span className={styles.title}>Birthday:</span>
					<p className={styles.date}>1959-04-15</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Place of birth: </span>
					<p className={styles.placeBirthActor}>Paddington, London, England</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Biography:</span>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, in
						reprehenderit esse, magni aliquam ea expedita voluptates beatae
						soluta quae rem? Molestias eligendi delectus omnis veniam fugiat
						facilis, consequuntur inventore. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quod, in reprehenderit esse, magni
						aliquam ea expedita voluptates beatae soluta quae rem? Molestias
						eligendi delectus omnis veniam fugiat facilis, consequuntur
						inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Quod, in reprehenderit esse, magni aliquam ea expedita voluptates
						beatae soluta quae rem? Molestias eligendi delectus omnis veniam
						fugiat facilis, consequuntur inventore. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quod, in reprehenderit esse, magni
						aliquam ea expedita voluptates beatae soluta quae rem? Molestias
						eligendi delectus omnis veniam fugiat facilis, consequuntur
						inventore.
					</p>
				</div>
				<div className={styles.photosActor}>
					<span className={styles.titlePhotosActor}>Photos</span>
					<div className={styles.wrapPhotosActor}>
						<div className={styles.wrapPhotoSmallActor}>
							<img
								className={styles.photoSmallActor}
								src={require(`../../assets/images/actor-card.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapPhotoSmallActor}>
							<img
								className={styles.photoSmallActor}
								src={require(`../../assets/images/actor-card.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapPhotoSmallActor}>
							<img
								className={styles.photoSmallActor}
								src={require(`../../assets/images/actor-card.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapPhotoSmallActor}>
							<img
								className={styles.photoSmallActor}
								src={require(`../../assets/images/actor-card.png`).default}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ActorDescription;
