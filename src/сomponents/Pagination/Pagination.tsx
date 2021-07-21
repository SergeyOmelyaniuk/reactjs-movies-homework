import React from 'react';
import styles from './Pagination.module.scss';

function Pagination() {
	return (
		<ul className={styles.pagination}>
			<li className={styles.item + ' ' + styles.active}>1</li>
			<li className={styles.item}>2</li>
			<li className={styles.item}>3</li>
			<li className={styles.item}>4</li>
			<li className={styles.item}>5</li>
		</ul>
	);
}

export default Pagination;
