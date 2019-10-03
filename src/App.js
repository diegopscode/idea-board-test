import React from 'react'

import HeaderApp from './components/Header'
import MainApp from './components/Main'
import BoardContainer from './containers/BoardContainer'

const App = () => (
	<div className="app">
		<HeaderApp />
		<MainApp>
			<BoardContainer />
		</MainApp>
	</div>
)

export default App
