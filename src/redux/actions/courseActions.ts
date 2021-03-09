import {Course} from '../../Models/Models';
import * as courseapi from "../../api/courseApi";
import * as types from './actionType'

export function CreateCourse (course:Course) {
    return { 
        type:types.CREATE_COURSE,
        course
    }
}

export function   loadCoursesSuccess (courses:Array<Course>) {
    return {type:types.LOAD_COURSES_SUCCESS,courses}
}

export function loadCourses () {
    return function (dispatch:any){
        return courseapi.getCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error=>{
            throw error;
        });    
    }
}