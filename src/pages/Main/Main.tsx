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
import {
	getCategoryValue,
	getTotalPages,
	getCurrentPage,
	getListMovies,
	getSearchValue,
	getListGenres,
	getLanguageSelected,
} from '../../selectors';

const Main = () => {
	const categoryValue = useAppSelector(getCategoryValue);
	const totalPages = useAppSelector(getTotalPages);
	const currentPage = useAppSelector(getCurrentPage);
	const listMovies = useAppSelector(getListMovies);
	const searchValue = useAppSelector(getSearchValue);
	const currentLanguage = useAppSelector(getLanguageSelected);
	const listGenres = useAppSelector(getListGenres);

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
