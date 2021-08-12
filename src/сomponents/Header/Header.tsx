import React from 'react';
import styles from './Header.module.scss';
import LanguageBar from './LanguageBar';
import Search from './Search';
import { languages } from '../../constants';

import { useDispatch, useSelector } from 'react-redux';
import { setSearcValue } from '../../store/filmsSlice';
import { setCurrentlanguage } from '../../store/languageSlice';
import { RootState } from '../../store/store';
import { Language } from '../../types';

function Header() {
	const dispatch = useDispatch();

	const searchValue = useSelector(
		(state: RootState) => state.films.searchValue
	);
	const currentlanguage = useSelector(
		(state: RootState) => state.language.languageSelected
	);

	const handlerSetSearcValue = (value: string) => {
		dispatch(setSearcValue(value));
	};

	const handlerSetCurrentlanguage = (value: Language) => {
		dispatch(setCurrentlanguage(value));
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<a href='/'>
					<h1 className={styles.title}>title</h1>
				</a>
				<Search
					searchValue={searchValue}
					setSearcValue={handlerSetSearcValue}
				/>
				<LanguageBar
					languages={languages}
					currentlanguage={currentlanguage}
					setCurrentlanguage={handlerSetCurrentlanguage}
				/>
			</div>
		</header>
	);
}

export default Header;
