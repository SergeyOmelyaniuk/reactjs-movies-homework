export interface Movie {
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

export interface Actor {
	name: string;
	birthday: string;
	placeBirth: string;
	biography: string;
	photo: string;
	photos: string[];
	character: string;
}
