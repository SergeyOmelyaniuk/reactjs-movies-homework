import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Actor, MovieAPI, MovieImages } from '../types';

export const fetchActorProfile = createAsyncThunk(
	'actor/fetchActorProfile',
	async function (id: string, { rejectWithValue, getState }) {
		const state = getState() as any;
		const { languageSelected } = state.language;

		try {
			const [actor, images, movies] = await Promise.all([
				fetch(
					`https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${languageSelected.value}`
				),
				fetch(
					`https://api.themoviedb.org/3/person/${id}/images?api_key=${process.env.REACT_APP_API_KEY}`
				),
				fetch(
					`https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}&language=${languageSelected.value}`
				),
			]).then((data) => Promise.all(data.map((res) => res.json())));

			return { actor, images, movies };
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export interface ActorState {
	status: string | null;
	actorProfile: Actor | null;
	actorImages: MovieImages[] | null;
	actorKnowBy: MovieAPI[] | null;
}

const initialState: ActorState = {
	status: null,
	actorProfile: null,
	actorImages: null,
	actorKnowBy: null,
};

const actorReducer = createSlice({
	name: 'actor',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchActorProfile.pending, (state) => {
			state.status = 'loading';
		});
		builder.addCase(
			fetchActorProfile.fulfilled,
			//TODO
			(state, { payload }: PayloadAction<any>) => {
				state.status = 'fulfilled';
				state.actorProfile = payload.actor;
				state.actorImages = payload.images.profiles;
				state.actorKnowBy = payload.movies.cast;
			}
		);
		builder.addCase(fetchActorProfile.rejected, (state) => {
			state.status = 'failed';
		});
	},
});

export default actorReducer.reducer;
