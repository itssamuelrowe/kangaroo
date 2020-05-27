import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasks from './reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(tasks, devToolsEnhancer());

ReactDOM.render(
  	<React.StrictMode>
  		<Provider store={ store }>
    		<App />
    	</Provider>
  	</React.StrictMode>,
  	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		ReactDOM.render(
			<React.StrictMode>
				<Provider store={ store }>
					<NextApp />
				</Provider>
  			</React.StrictMode>,
			document.getElementById('root')
		);
	});

	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers').default;
		store.replaceReducer(nextRootReducer);
	});
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
