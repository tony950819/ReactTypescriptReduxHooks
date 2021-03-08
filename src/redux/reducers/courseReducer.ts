import { Course } from "../../Models/Models";
import * as types from '../actions/actionType'

export default function CourseReducer  (state:Array<Course> =new Array<Course>(),action:any){

    switch(action.type){
        case types.CREATE_COURSE:
            return [...state, { ...action.course }];
        default :
            return state;
    }
}

export class CourseReducerModel {
  courses:Array<Course> = new Array<Course>();
}