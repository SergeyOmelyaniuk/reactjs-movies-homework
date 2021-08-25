import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = () => (
	<div className={styles.loader}>
		<div className={styles.wrapImage}>
			<img
				className={styles.image}
				src={require(`../../assets/images/loader.png`).default}
				alt='loader'
			/>
		</div>
		<div className={styles.title}>Loading...</div>
	</div>
);

export default Preloader;
