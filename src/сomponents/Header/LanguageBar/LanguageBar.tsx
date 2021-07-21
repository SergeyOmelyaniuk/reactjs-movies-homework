import React from 'react';
import styles from './LanguageBar.module.scss';

function LanguageBar() {
	return (
		<div className={styles.languageBar}>
			<div className={styles.menu}>EN</div>
			<ul className={styles.popup}>
				<li className={styles.item}>ru</li>
				<li className={styles.item}>en</li>
			</ul>
		</div>
	);
}

export default LanguageBar;
