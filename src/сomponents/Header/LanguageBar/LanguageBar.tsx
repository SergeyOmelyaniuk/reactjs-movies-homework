import React, { useState } from 'react';
import { Language } from '../../../types';
import styles from './LanguageBar.module.scss';

import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import { useDispatch } from 'react-redux';
import { setCurrentlanguage } from '../../../store/languageSlice';

interface LanguageBarProps {
	languages: Language[];
}

function LanguageBar(props: LanguageBarProps) {
	const currentlanguage = useSelector(
		(state: RootState) => state.language.languageSelected
	);

	const dispatch = useDispatch();

	const [isPopupVisible, togglePopup] = useState(false);

	const handler = (lang: Language) => {
		if (currentlanguage.title !== lang.title) {
			dispatch(setCurrentlanguage(lang));
			togglePopup(false);
		}
	};

	return (
		<div className={styles.languageBar}>
			<div onClick={() => togglePopup(!isPopupVisible)} className={styles.menu}>
				{currentlanguage.title}
			</div>
			{isPopupVisible && (
				<ul className={styles.popup} role='menubar'>
					{props.languages.map((lang) => (
						<li
							onClick={() => handler(lang)}
							key={lang.title}
							className={styles.item}
							role='menuitem'
						>
							{lang.title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default LanguageBar;
