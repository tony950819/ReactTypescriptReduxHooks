import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses:courses
});

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer;