import React from 'react';
import './App.scss';
import ActorProfile from './pages/ActorProfile';
import MovieDetails from './pages/MovieDetails';
import Main from './pages/Main';
import Header from './сomponents/Header';
import ErrorBoundary from './сomponents/ErrorBoundary';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='container'>
				<ErrorBoundary>
					<Switch>
						<Route exact path='/' component={Main} />
						<Route path='/movies/:movieId' component={MovieDetails} />
						<Route path='/actors/:actorId' component={ActorProfile} />
					</Switch>
				</ErrorBoundary>
			</div>
		</div>
	);
}

export default App;
