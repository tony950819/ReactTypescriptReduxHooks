import * as types from '../actions/actionType'
import {InitialState} from '../reducers/InitialState'
import  {Course} from '../../Models/Models'
export default function CourseReducer  (state=InitialState.courses,action:any){

    switch(action.type){
        case types.CREATE_COURSE_SUCCESS:
            return [...state,{...action.course}]
        case types.CREATE_COURSE_SUCCESS:
            return state.map((course:Course)=>course.id==action.course.id?action.course:course)
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        default :
            return state;
    }
}