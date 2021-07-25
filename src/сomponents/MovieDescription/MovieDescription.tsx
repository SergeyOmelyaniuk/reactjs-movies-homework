import React from 'react';
import TopBilledCast from '../TopBilledCast';
import styles from './MovieDescription.module.scss';

function MovieDescription() {
	return (
		<div className={styles.movieDescription}>
			<div className={styles.wrapPhotoMovie}>
				<img
					className={styles.photoMovie}
					src={require(`../../assets/images/movie-card.png`).default}
					alt=''
				/>
			</div>
			<div className={styles.infoMovie}>
				<span className={styles.title}>Title:</span>
				<h2 className={styles.nameMovie}>Movie Title</h2>
				<div className={styles.textBlock}>
					<span className={styles.title}>Overview:</span>
					<p className={styles.text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, in
						reprehenderit esse, magni aliquam ea expedita voluptates beatae
						soluta quae rem? Molestias eligendi delectus omnis veniam fugiat
						facilis, consequuntur inventore. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Quod, in reprehenderit esse, magni
						aliquam ea expedita voluptates beatae soluta quae rem? Molestias
						eligendi delectus omnis veniam fugiat facilis, consequuntur
						inventore.
					</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Release date:</span>
					<p className={styles.number}>2021-05-26</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Revenue:</span>
					<p className={styles.number}>$42 600 000</p>
				</div>
				<div className={styles.textBlock}>
					<span className={styles.title}>Duration:</span>
					<p className={styles.number}>2:14</p>
				</div>
				<div className={styles.wrapGenre}>
					<div className={styles.genre}>Genre-1</div>
					<div className={styles.genre}>Genre-2</div>
				</div>
				<div className={styles.wrapTopBilledCast}>
					<TopBilledCast />
				</div>
				<div className={styles.blockImages}>
					<span className={styles.titleImages}>Images</span>
					<div className={styles.wrapImages}>
						<div className={styles.wrapImage}>
							<img
								className={styles.image}
								src={require(`../../assets/images/images.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapImage}>
							<img
								className={styles.image}
								src={require(`../../assets/images/images.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapImage}>
							<img
								className={styles.image}
								src={require(`../../assets/images/images.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapImage}>
							<img
								className={styles.image}
								src={require(`../../assets/images/images.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapImage}>
							<img
								className={styles.image}
								src={require(`../../assets/images/images.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapImage}>
							<img
								className={styles.image}
								src={require(`../../assets/images/images.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapImage}>
							<img
								className={styles.image}
								src={require(`../../assets/images/images.png`).default}
								alt=''
							/>
						</div>
						<div className={styles.wrapImage}>
							<img
								className={styles.image}
								src={require(`../../assets/images/images.png`).default}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieDescription;
