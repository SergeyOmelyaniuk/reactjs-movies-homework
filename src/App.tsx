import React from 'react';
import './App.scss';
// import ActorProfile from './pages/ActorProfile';
// import MovieDetails from './pages/MovieDetails';
import Main from './pages/Main';
import Header from './сomponents/Header';
import ErrorBoundary from './сomponents/ErrorBoundary';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='container'>
				<ErrorBoundary>
					<Main />
					{/* <MovieDetails /> */}
					{/* <ActorProfile /> */}
				</ErrorBoundary>
			</div>
		</div>
	);
}

export default App;
