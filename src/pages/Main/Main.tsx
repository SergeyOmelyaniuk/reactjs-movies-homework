import React, { useState } from 'react';
import CategoriesSort from '../../сomponents/CategoriesSort';
import Pagination from '../../сomponents/Pagination';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './Main.module.scss';
import { movies } from '../../mocks/movies';
import { categories } from '../../mocks/constants';

function Main() {
	const [categoryValue, setCategoryValue] = useState(categories[0].value);
	return (
		<div className={styles.main}>
			<div className={styles.wrapCategoriesSort}>
				<CategoriesSort
					categories={categories}
					categoryValue={categoryValue}
					changeCategory={setCategoryValue}
				/>
			</div>
			<WrapMovies movies={movies[categoryValue]} />
			<div className={styles.wrapPagination}>
				<Pagination pages={5} />
			</div>
		</div>
	);
}

export default Main;
