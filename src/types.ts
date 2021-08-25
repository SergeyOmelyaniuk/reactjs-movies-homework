export interface Movies {
	[key: string]: Movie[];
}

interface BaseMovie {
	poster_path: string;
	id: number;
	img: string;
	title: string;
	release_date: string;
	genre: string[];
	vote_average: number;
	popularity: number;
	overview: string;
	revenue: number;
	duration: string;
	images: string[];
	actors: Actor[];
}

export interface Movie extends BaseMovie {
	genre_ids: string[];
}

export interface MovieAPI extends BaseMovie {
	genre_ids: number[];
}

export interface Actor {
	id: number;
	name: string;
	birthday: string;
	place_of_birth: string;
	biography: string;
	photo: string;
	photos: string[];
	character: string;
	profile_path: string;
}

export interface Category {
	id: number;
	value: string;
	title: string;
}

export interface Language {
	title: string;
	value: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface MovieDetails {
	poster_path: string;
	vote_average: number;
	title: string;
	overview: string;
	release_date: string;
	revenue: number;
	runtime: number;
	genres: Genre[];
}

export interface MovieImages {
	file_path: string;
}
