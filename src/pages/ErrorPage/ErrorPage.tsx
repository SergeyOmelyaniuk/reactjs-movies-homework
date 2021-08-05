import React from 'react';
import styles from './ErrorPage.module.scss';

function ErrorPage() {
	return (
		<div className={styles.errorPage}>
			<div className={styles.wrapImage}>
				<img
					className={styles.image}
					src={require(`../../assets/images/error.png`).default}
					alt=''
				/>
			</div>
			<div className={styles.title}>Something went wrong</div>
			<div className={styles.text}>Please, reload the page or try later</div>
		</div>
	);
}

export default ErrorPage;
