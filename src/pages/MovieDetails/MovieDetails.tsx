import React, { useEffect } from 'react';
import MovieDescription from '../../сomponents/MovieDescription';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './MovieDetails.module.scss';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMovieDetails } from '../../store/movieSlice';
import { fetchGenres } from '../../store/moviesSlice';

import { useParams } from 'react-router-dom';
import Preloader from '../../сomponents/Preloader';

import getGenresFilms from '../../helpers/getGenresFilms';
import { translate } from '../../constants';

const numberMoviesPerPage = 5;

const MovieDetails = () => {
	const dispatch = useAppDispatch();
	const { movieId } = useParams<{ movieId: string }>();

	const movieDetails = useAppSelector((state) => state.movie.movieDetails);
	const movieImages = useAppSelector((state) => state.movie.movieImages);
	const moviesRecommendations = useAppSelector(
		(state) => state.movie.moviesRecommendations
	);
	const topCast = useAppSelector((state) => state.movie.topCast);
	const listGenres = useAppSelector((state) => state.movies.listGenres);
	const currentLanguage = useAppSelector(
		(state) => state.language.languageSelected
	);

	useEffect(() => {
		dispatch(fetchGenres());
	}, [dispatch, currentLanguage]);

	useEffect(() => {
		dispatch(fetchMovieDetails(movieId));
		window.scrollTo(0, 0);
	}, [dispatch, movieId, currentLanguage]);

	if (!movieDetails || !movieImages || !moviesRecommendations || !topCast) {
		return <Preloader />;
	}

	const listMoviesRecommendations = moviesRecommendations.slice(
		0,
		numberMoviesPerPage
	);
	const movies = getGenresFilms(listGenres, listMoviesRecommendations);

	return (
		<div className={styles.movieDetails}>
			<MovieDescription
				movieDetails={movieDetails}
				movieImages={movieImages}
				topCast={topCast}
				currentLanguage={currentLanguage}
			/>
			<div className={styles.recommendations}>
				<span className={styles.titleRecommendations}>
					{translate[currentLanguage.title].recommendations}
				</span>
				<WrapMovies movies={movies} />
			</div>
		</div>
	);
};

export default MovieDetails;
