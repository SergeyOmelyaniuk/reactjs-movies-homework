import React, { useState } from 'react';
import { Language } from '../../../types';
import styles from './LanguageBar.module.scss';

interface LanguageBarProps {
	languages: Language[];
	currentlanguage: Language;
	setCurrentlanguage: (value: Language) => void;
}

function LanguageBar(props: LanguageBarProps) {
	const [isPopupVisible, togglePopup] = useState(false);

	const handler = (lang: Language) => {
		if (props.currentlanguage.title !== lang.title) {
			props.setCurrentlanguage(lang);
			togglePopup(false);
		}
	};

	return (
		<div className={styles.languageBar}>
			<div onClick={() => togglePopup(!isPopupVisible)} className={styles.menu}>
				{props.currentlanguage.title}
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
