import {Course} from '../../Models/Models';
import * as types from './actionType'
export function CreateCourse (course:Course) {
    return { 
        type:types.CREATE_COURSE,
        course
    }
}