import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer'
import apiStatusReduce  from './apiStatusReduce';
const rootReducer = combineReducers({
    courses:courses,
    authors:authors,
    apiCallsInProgress:apiStatusReduce
});

export type RootState = ReturnType<typeof rootReducer>


export default rootReducer;