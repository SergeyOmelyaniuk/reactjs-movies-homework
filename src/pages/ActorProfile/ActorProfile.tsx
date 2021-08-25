import React, { useEffect } from 'react';
import ActorDescription from '../../сomponents/ActorDescription';
import WrapMovies from '../../сomponents/WrapMovies';
import styles from './ActorProfile.module.scss';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchGenres } from '../../store/moviesSlice';
import { fetchActorProfile } from '../../store/actorSlice';
import Preloader from '../../сomponents/Preloader';
import getGenresFilms from '../../helpers/getGenresFilms';
import { translate } from '../../constants';
import {
	getLanguageSelected,
	getActorProfile,
	getActorImages,
	getActorKnowBy,
	getListGenres,
} from '../../selectors';

const numberMoviesPerPage = 10;

const ActorProfile = () => {
	const dispatch = useAppDispatch();
	const { actorId } = useParams<{ actorId: string }>();

	const currentLanguage = useAppSelector(getLanguageSelected);
	const actorProfile = useAppSelector(getActorProfile);
	const actorImages = useAppSelector(getActorImages);
	const actorKnowBy = useAppSelector(getActorKnowBy);
	const listGenres = useAppSelector(getListGenres);

	useEffect(() => {
		dispatch(fetchGenres());
	}, [dispatch, currentLanguage]);

	useEffect(() => {
		dispatch(fetchActorProfile(actorId));
		window.scrollTo(0, 0);
	}, [dispatch, actorId, currentLanguage]);

	if (!actorProfile || !actorImages || !actorKnowBy) {
		return <Preloader />;
	}

	const listMoviesRecommendations = actorKnowBy.slice(0, numberMoviesPerPage);
	const movies = getGenresFilms(listGenres, listMoviesRecommendations);

	return (
		<div className={styles.actorProfile}>
			<ActorDescription
				actorProfile={actorProfile}
				actorImages={actorImages}
				currentLanguage={currentLanguage}
			/>
			<div className={styles.knownBy}>
				<span className={styles.titleKnownBy}>
					{translate[currentLanguage.title].knownBy}
				</span>
				<WrapMovies movies={movies} />
			</div>
		</div>
	);
};

export default ActorProfile;
