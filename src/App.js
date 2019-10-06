import React from 'react'
import { Provider } from 'mobx-react'

// # Mobx Stores
import BoardStore from './store/BoardStore'

import HeaderApp from './components/Header'
import MainApp from './components/Main'
import BoardContainer from './containers/BoardContainer'

const App = () => (
	<Provider
        BoardStore={new BoardStore()}
    >
		<div className="app">
			<HeaderApp />
			<MainApp>
				<BoardContainer />
			</MainApp>
		</div>
	</Provider>
)

export default App
