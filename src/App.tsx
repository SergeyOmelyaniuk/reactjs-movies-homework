import React from 'react';
import './App.scss';
// import ActorProfile from './pages/ActorProfile';
import MovieDetails from './pages/MovieDetails';
// import Main from './pages/Main';
import Header from './сomponents/Header';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<div className='container'>
				{/* <Main /> */}
				<MovieDetails />
				{/* <ActorProfile /> */}
			</div>
		</div>
	);
}

export default App;
