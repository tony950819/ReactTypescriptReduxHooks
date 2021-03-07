import {Course} from '../../Models/Models'
export function CreateCourse (course:Course) {
    return { 
        type:"CREATE_COURSE",
        course
    }
}