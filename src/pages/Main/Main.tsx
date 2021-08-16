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
	fetchFilms,
	fetchGenres,
} from '../../store/filmsSlice';
import MovieList from '../../сomponents/MovieList';

const Main = () => {
	const categoryValue = useAppSelector((state) => state.films.categoryValue);
	const totalPages = useAppSelector((state) => state.films.totalPages);
	const currentPage = useAppSelector((state) => state.films.currentPage);
	const listFilms = useAppSelector((state) => state.films.listfilms);
	const searchValue = useAppSelector((state) => state.films.searchValue);
	const currentLanguage = useAppSelector(
		(state) => state.language.languageSelected
	);
	const listGenres = useAppSelector((state) => state.films.listGenres);

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
		dispatch(fetchFilms());
		window.scrollTo(0, 0);
	}, [dispatch, currentPage, categoryValue, searchValue, currentLanguage]);

	const movies = useMemo(() => {
		return getGenresFilms(listGenres, listFilms);
	}, [listGenres, listFilms]);

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
