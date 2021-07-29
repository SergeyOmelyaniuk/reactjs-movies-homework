import React from 'react';
import CategoriesSort from '../../сomponents/CategoriesSort';
import Pagination from '../../сomponents/Pagination';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './Main.module.scss';
import { movies } from '../../mocks/movies';

function Main() {
	return (
		<div className={styles.main}>
			<div className={styles.wrapCategoriesSort}>
				<CategoriesSort />
			</div>
			<WrapMovies movies={movies} />
			<div className={styles.wrapPagination}>
				<Pagination />
			</div>
		</div>
	);
}

export default Main;
