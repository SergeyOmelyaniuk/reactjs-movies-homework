import React from 'react';
import styles from './Search.module.scss';

function Search() {
	return (
		<form className={styles.search}>
			<input
				id=''
				className={styles.input}
				type='search'
				placeholder='Movies, person, movie theaters'
			/>
		</form>
	);
}

export default Search;
