import {combineReducers} from 'redux';
import courses from './courseReducer';
import authours from './authourReducer'

const rootReducer = combineReducers({
    courses:courses,
    authours:authours
});

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer;