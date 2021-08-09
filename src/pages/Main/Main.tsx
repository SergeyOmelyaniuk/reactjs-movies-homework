import React from 'react';
import CategoriesSort from '../../сomponents/CategoriesSort';
import Pagination from '../../сomponents/Pagination';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './Main.module.scss';
import { movies } from '../../mocks/movies';
import { translate } from '../../constants';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { useDispatch } from 'react-redux';
import { changeCategory, setCurrentPage } from '../../store/filmsSlice';

function Main() {
	const categoryValue = useSelector(
		(state: RootState) => state.films.categoryValue
	);
	const pages = useSelector((state: RootState) => state.films.pages);
	const currentPage = useSelector(
		(state: RootState) => state.films.currentPage
	);

	const dispatch = useDispatch();

	const hundlerChangeCategory = (value: string) => {
		dispatch(changeCategory(value));
	};
	const hundlerSetCurrentPage = (value: number) => {
		dispatch(setCurrentPage(value));
	};

	return (
		<div className={styles.main}>
			<div className={styles.wrapCategoriesSort}>
				<CategoriesSort
					categories={translate.en.categories}
					categoryValue={categoryValue}
					changeCategory={hundlerChangeCategory}
				/>
			</div>
			<WrapMovies movies={movies[categoryValue]} />
			<div className={styles.wrapPagination}>
				<Pagination
					pages={pages}
					setCurrentPage={hundlerSetCurrentPage}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
}

export default Main;
