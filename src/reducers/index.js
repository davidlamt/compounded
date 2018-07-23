import { combineReducers } from 'redux';
import FieldReducer from './FieldReducer';

export default combineReducers({
  fields: FieldReducer,
});
