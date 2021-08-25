import React, { useState, useEffect } from 'react';
import ActorCard from '../ActorCard';
import styles from './TopBilledCast.module.scss';
import { Actor, Language } from '../../types';
import { translate } from '../../constants';

interface TopBilledCastProps {
	actors: Actor[];
	currentLanguage: Language;
}
const numberActorsPerPage = 6;

const TopBilledCast = ({ actors, currentLanguage }: TopBilledCastProps) => {
	const [numberActors, setNumberActors] = useState(numberActorsPerPage);

	const handlerShowAllActors = () => {
		setNumberActors(actors.length);
	};

	const listActors = actors.slice(0, numberActors);

	useEffect(() => {
		setNumberActors(numberActorsPerPage);
	}, [actors]);

	return (
		<div className={styles.topBilledCast}>
			<div className={styles.header}>
				<span className={styles.title}>
					{translate[currentLanguage.title].topBilledCast}
				</span>
				<button className={styles.button} onClick={handlerShowAllActors}>
					{translate[currentLanguage.title].buttonShowAll}
				</button>
			</div>
			<div className={styles.wrap}>
				{listActors.map((actor) => (
					<ActorCard key={actor.name} actor={actor} />
				))}
			</div>
		</div>
	);
};

export default TopBilledCast;
