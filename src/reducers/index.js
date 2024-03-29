import { combineReducers} from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import application from './application';
import user from './user';

/* Each reducer has an initial state with the data that
this demo will use. Ideally this data would be fetched from 
and external API in a production application */

/* The configs are for redux-persist and tell the store which
values not to perisit in local storage (they are lost on refresh)*/

const applicationConfig = {
  key: 'application',
  storage,
  blacklist: [ 'isModalOpen' ]
}

const userConfig = {
  key: 'user',
  storage,
  blacklist: [ 'products', 'selectedProduct', 'points']
}

export default combineReducers({
  application: persistReducer(applicationConfig, application),
  user: persistReducer(userConfig, user)
});