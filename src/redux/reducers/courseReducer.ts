import { Course } from "../../Models/Models";
import * as types from '../actions/actionType'

export default function CourseReducer  (state:Array<Course> =new Array<Course>(),action:any){

    switch(action.type){
        case types.CREATE_COURSE:
            return [...state, { ...action.course }];
        case types.LOAD_COURSES_SUCCESS:
            //return {...state,courses:action.courses};
            return action.courses;
        default :
            return state;
    }
}

export class CourseReducerModel {
  courses:Array<Course> = new Array<Course>();
}