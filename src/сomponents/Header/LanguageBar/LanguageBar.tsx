import React, { useState } from 'react';
import { Language } from '../../../types';
import styles from './LanguageBar.module.scss';

interface LanguageBarProps {
	languages: Language[];
	currentlanguage: Language;
	setCurrentlanguage: (value: Language) => void;
}

const LanguageBar = ({
	languages,
	currentlanguage,
	setCurrentlanguage,
}: LanguageBarProps) => {
	const [isPopupVisible, togglePopup] = useState(false);

	const handler = (lang: Language) => {
		if (currentlanguage.title !== lang.title) {
			setCurrentlanguage(lang);
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
					{languages.map((lang) => (
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
};

export default LanguageBar;
