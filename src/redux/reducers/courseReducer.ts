import * as types from '../actions/actionType'
import {InitialState} from '../reducers/InitialState'

export default function CourseReducer  (state=InitialState.courses,action:any){

    switch(action.type){
        case types.CREATE_COURSE:
            return [...state, { ...action.course }];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default :
            return state;
    }
}