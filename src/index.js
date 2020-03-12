import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import App from './container/App';
import watchData from './sagas/sagas';
import Start from './Start';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchData);
render(
	<Provider store={store}>
		<Start />
	</Provider>,
	document.getElementById('root')
);
if (module.hot) {
	module.hot.accept(App);
}
