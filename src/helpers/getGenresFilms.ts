//TODO
function getGenresFilms(listGenres: any, listFilms: any) {
	return listFilms.map((film: any) => ({
		...film,
		genre_ids: film.genre_ids.map(
			(genreId: any) =>
				listGenres.find((genre: any) => genre.id === genreId).name
		),
	}));
}

export default getGenresFilms;
