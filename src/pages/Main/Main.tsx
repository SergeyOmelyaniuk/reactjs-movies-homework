import React, { useEffect } from 'react';
import CategoriesSort from '../../сomponents/CategoriesSort';
import Pagination from '../../сomponents/Pagination';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './Main.module.scss';
import { translate } from '../../constants';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { useDispatch } from 'react-redux';
import {
	changeCategory,
	setCurrentPage,
	fetchFilms,
} from '../../store/filmsSlice';

function Main() {
	const categoryValue = useSelector(
		(state: RootState) => state.films.categoryValue
	);
	const pages = useSelector((state: RootState) => state.films.pages);
	const currentPage = useSelector(
		(state: RootState) => state.films.currentPage
	);
	const listFilms = useSelector((state: RootState) => state.films.listfilms);

	const dispatch = useDispatch();

	const hundlerChangeCategory = (value: string) => {
		dispatch(changeCategory(value));
	};
	const hundlerSetCurrentPage = (value: number) => {
		dispatch(setCurrentPage(value));
	};

	useEffect(() => {
		dispatch(fetchFilms());
	}, [dispatch, currentPage, categoryValue]);

	return (
		<div className={styles.main}>
			<div className={styles.wrapCategoriesSort}>
				<CategoriesSort
					categories={translate.en.categories}
					categoryValue={categoryValue}
					changeCategory={hundlerChangeCategory}
				/>
			</div>
			<WrapMovies movies={listFilms} />
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
