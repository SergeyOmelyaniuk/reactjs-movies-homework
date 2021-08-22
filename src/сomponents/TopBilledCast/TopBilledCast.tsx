import React from 'react';
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
	const listActors = actors.slice(0, numberActorsPerPage);

	return (
		<div className={styles.topBilledCast}>
			<div className={styles.header}>
				<span className={styles.title}>
					{translate[currentLanguage.title].topBilledCast}
				</span>
				<button className={styles.button}>
					{translate[currentLanguage.title].buttonShowAll}
				</button>
			</div>
			<div className={styles.wrap}>
				{listActors.map((actor: Actor) => (
					<ActorCard key={actor.name} actor={actor} />
				))}
			</div>
		</div>
	);
};

export default TopBilledCast;
