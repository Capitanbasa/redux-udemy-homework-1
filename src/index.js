import React from 'react';
import ReactDOM from 'react-dom';
import { createStore , combineReducers, applyMiddleware , compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; //redux thunk middleware
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducers = combineReducers({
    ctr : counterReducer,
    res : resultReducer
});
//Custom Middleware
const logger = () => {
    return next => {
        return action => {
            console.log('[middleware] Dispatching', action);
            const result = next(action);
            console.log('[middleware] next state', store.getState());
            return result;
        }
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducers,composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
