import { combineReducers } from 'redux';
import user from './reducer_users';
import goals from './reducer_goals';
import completeGoals from './reducer_completeGoals';
import modal from './reducer_modals';

export default combineReducers({
    modal,
    user,
    goals,
    completeGoals
});