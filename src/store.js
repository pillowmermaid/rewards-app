import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import reducers from 'reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['application']
}

const persistedReducer = persistReducer(persistConfig, reducers);
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(persistedReducer, reduxDevtools);
const persistor = persistStore(store);

export default {
  store,
  persistor 
};