import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authourReducer'

const rootReducer = combineReducers({
    courses:courses,
    authors:authors
});

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer;