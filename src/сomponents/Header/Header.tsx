import React from 'react';
import styles from './Header.module.scss';
import LanguageBar from './LanguageBar';
import Search from './Search';
import { languages, translate } from '../../constants';
import { setSearcValue } from '../../store/moviesSlice';
import { setCurrentlanguage } from '../../store/languageSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getSearchValue, getLanguageSelected } from '../../selectors';
import { Language } from '../../types';

const Header = () => {
	const dispatch = useAppDispatch();

	const searchValue = useAppSelector(getSearchValue);
	const currentLanguage = useAppSelector(getLanguageSelected);

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
					<h1 className={styles.title}>
						{translate[currentLanguage.title].title}
					</h1>
				</a>
				<Search
					searchValue={searchValue}
					setSearcValue={handlerSetSearcValue}
					placeholder={translate[currentLanguage.title].placeholder}
				/>
				<LanguageBar
					languages={languages}
					currentlanguage={currentLanguage}
					setCurrentlanguage={handlerSetCurrentlanguage}
				/>
			</div>
		</header>
	);
};

export default Header;
