import React, { useEffect, useMemo } from 'react';
import CategoriesSort from '../../сomponents/CategoriesSort';
import Pagination from '../../сomponents/Pagination';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './Main.module.scss';
import { translate } from '../../constants';
import getGenresFilms from '../../helpers/getGenresFilms';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

import {
	changeCategory,
	setCurrentPage,
	fetchMovies,
	fetchGenres,
} from '../../store/moviesSlice';
import MovieList from '../../сomponents/MovieList';

const Main = () => {
	const categoryValue = useAppSelector((state) => state.movies.categoryValue);
	const totalPages = useAppSelector((state) => state.movies.totalPages);
	const currentPage = useAppSelector((state) => state.movies.currentPage);
	const listMovies = useAppSelector((state) => state.movies.listMovies);
	const searchValue = useAppSelector((state) => state.movies.searchValue);
	const currentLanguage = useAppSelector(
		(state) => state.language.languageSelected
	);
	const listGenres = useAppSelector((state) => state.movies.listGenres);

	const dispatch = useAppDispatch();

	const handlerChangeCategory = (value: string) => {
		dispatch(changeCategory(value));
	};
	const handlerSetCurrentPage = (value: number) => {
		dispatch(setCurrentPage(value));
	};

	useEffect(() => {
		dispatch(fetchGenres());
	}, [dispatch, currentLanguage]);

	useEffect(() => {
		dispatch(fetchMovies());
		window.scrollTo(0, 0);
	}, [dispatch, currentPage, categoryValue, searchValue, currentLanguage]);

	const movies = useMemo(() => {
		return getGenresFilms(listGenres, listMovies);
	}, [listGenres, listMovies]);

	return (
		<div className={styles.main}>
			{searchValue ? (
				<MovieList movies={movies} />
			) : (
				<>
					<div className={styles.wrapCategoriesSort}>
						<CategoriesSort
							categories={translate[currentLanguage.title].categories}
							categoryValue={categoryValue}
							changeCategory={handlerChangeCategory}
						/>
					</div>
					<WrapMovies movies={movies} />
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
};

export default Main;
