import React from 'react';
import styles from './Header.module.scss';
import LanguageBar from './LanguageBar';
import Search from './Search';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<h1 className={styles.title}>title</h1>
				<Search />
				<LanguageBar />
			</div>
		</header>
	);
}

export default Header;
