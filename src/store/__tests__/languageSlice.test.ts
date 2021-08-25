import { store } from '../store';
import { setCurrentlanguage } from '../languageSlice';
import { languages } from '../../mocks/constants';

describe('languageSlice', () => {
	test('should change current language', () => {
		store.dispatch(setCurrentlanguage(languages[1]));

		const { languageSelected } = store.getState().language;

		expect(languageSelected).toEqual(languages[1]);
	});
});
