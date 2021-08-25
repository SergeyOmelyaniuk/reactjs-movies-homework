import { Genre, Movie, MovieAPI } from '../types';

function getGenresFilms(listGenres: Genre[], listMovies: MovieAPI[]): Movie[] {
	return listMovies.map((movie) => ({
		...movie,
		genre_ids: movie.genre_ids.map((genreId) => {
			const currentGenre = listGenres.find((genre) => genre.id === genreId);
			return currentGenre ? currentGenre.name : '';
		}),
	}));
}

export default getGenresFilms;
