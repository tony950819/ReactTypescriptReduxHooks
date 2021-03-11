import {Course} from '../../Models/Models';
import * as courseApi from "../../api/courseApi";
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

export function updateCourseSuccess(course:Course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
  }
  
  export function deleteCourseOptimistic(course:Course) {
    return { type: types.DELETE_COURSE_OPTIMISTIC, course };
  }

  export function createCourseSuccess(course:Course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
  }
  
export function loadCourses () {
    return function (dispatch:any){
        return courseApi.getCourses().then(courses=>{
            dispatch(loadCoursesSuccess(courses));
        }).catch(error=>{
            throw error;
        });    
    }
}

export function saveCourse(course:Course) {

    return function(dispatch:any, getState:any) {
      return courseApi
        .saveCourse(course)
        .then(savedCourse => {
          course.id
            ? dispatch(updateCourseSuccess(savedCourse))
            : dispatch(createCourseSuccess(savedCourse));
        })
        .catch(error => {
         // dispatch(apiCallError(error));
          throw error;
        });
    };
  }