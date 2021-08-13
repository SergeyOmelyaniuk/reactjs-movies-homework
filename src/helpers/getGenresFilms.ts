import { Genre, Movie, MovieAPI } from '../types';

function getGenresFilms(listGenres: Genre[], listFilms: MovieAPI[]): Movie[] {
	return listFilms.map((film) => ({
		...film,
		genre_ids: film.genre_ids.map((genreId) => {
			const currentGenre = listGenres.find((genre) => genre.id === genreId);
			return currentGenre ? currentGenre.name : '';
		}),
	}));
}

export default getGenresFilms;
