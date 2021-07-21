import React from 'react';
import styles from './CategoriesSort.module.scss';

function CategoriesSort() {
	return (
		<div className={styles.categoriesSort}>
			<input
				id='radio-1'
				type='radio'
				name='sort'
				value='popular'
				defaultChecked
			/>
			<label htmlFor='radio-1'>Popular</label>
			<input id='radio-2' type='radio' name='sort' value='topRated' />
			<label htmlFor='radio-2'>Top rated</label>
			<input id='radio-3' type='radio' name='sort' value='upcoming' />
			<label htmlFor='radio-3'>Upcoming</label>
		</div>
	);
}

export default CategoriesSort;
