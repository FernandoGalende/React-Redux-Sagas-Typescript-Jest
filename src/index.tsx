import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';
import store from './state/store';

import './styles/font.scss';
import './styles/common.scss';

ReactDOM.render(
	<Provider store={store}>
		<AppRoutes />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
