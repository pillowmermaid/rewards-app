import { combineReducers} from 'redux';
import application from './application';
import user from './user';

/* Each reducer has an initial state with the data that
this demo will use. Ideally this data would be fetched from 
and external API in a production application */

export default combineReducers({
  application,
  user
});