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
import MovieList from '../../сomponents/MovieList';

function Main() {
	const categoryValue = useSelector(
		(state: RootState) => state.films.categoryValue
	);
	const totalPages = useSelector((state: RootState) => state.films.totalPages);
	const currentPage = useSelector(
		(state: RootState) => state.films.currentPage
	);
	const listFilms = useSelector((state: RootState) => state.films.listfilms);
	const searchValue = useSelector(
		(state: RootState) => state.films.searchValue
	);

	const dispatch = useDispatch();

	const handlerChangeCategory = (value: string) => {
		dispatch(changeCategory(value));
	};
	const handlerSetCurrentPage = (value: number) => {
		dispatch(setCurrentPage(value));
	};

	useEffect(() => {
		dispatch(fetchFilms());
		window.scrollTo(0, 0);
	}, [dispatch, currentPage, categoryValue, searchValue]);

	return (
		<div className={styles.main}>
			{searchValue ? (
				<MovieList movies={listFilms} />
			) : (
				<>
					<div className={styles.wrapCategoriesSort}>
						<CategoriesSort
							categories={translate.en.categories}
							categoryValue={categoryValue}
							changeCategory={handlerChangeCategory}
						/>
					</div>
					<WrapMovies movies={listFilms} />
				</>
			)}

			<div className={styles.wrapPagination}>
				<Pagination
					totalPages={totalPages}
					setCurrentPage={handlerSetCurrentPage}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
}

export default Main;
