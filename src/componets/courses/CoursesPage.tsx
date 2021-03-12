import React,{Dispatch,
             useEffect,
             useState} from 'react';
import {Course,
        Author} from '../../Models/Models'
import {connect} from "react-redux"
import {CreateCourse,loadCourses} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authorActions';
import {SetName} from '../../Actions'
import CourseList from './CourseList';
import { History, LocationState } from "history";
import Spinner from '../../componets/common/Spinner';

interface props extends StateCoursesPage,DispatchProps {}

class StateCoursesPage {
    courses:Array<Course>=  new Array<Course>();
    authors:Array<Author> = new Array<Author>();
    history:History<LocationState>;
    apiCallsInProgress:number;
}
interface DispatchProps {
    CreateCourse:typeof CreateCourse,
    loadCourses:typeof loadCourses,
    loadAuthors:typeof loadAuthors

}

function CoursePage (props:props) {

    useEffect(() => {
      
       if(props.courses.length==0) {
            props.loadCourses();
       }
       if(props.authors.length==0) {
        props.loadAuthors();
       }

    },[]);

   
   const deleteCourse =(course:Course)=>{
        console.log(course);
   }

   const redirectWithHistory  =()=> {
        props.history.push("/course");
   }
  
    return (
  
        <>
        {props.apiCallsInProgress>0?Spinner()
        
        :  
        <>
        <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => redirectWithHistory()}
        >
        Add Course
        </button>
        {CourseList(props.courses,deleteCourse)}
        </> }

      
        </>
    )
}


const  mapStateToProps  = (state:StateCoursesPage)=>({
    courses:(state.authors.length==0 || state.courses.length==0)?[]: 
    state.courses.map(course=>{
        return {
            ...course,authorName:SetName(course.id,state.authors)
        }
    }),
    authors:state.authors,
    apiCallsInProgress:state.apiCallsInProgress,
    
   
})

const mapDispatchToprops =(dispatch:Dispatch<any>) => ({
    CreateCourse: (course:Course) => dispatch(CreateCourse(course)),
    loadCourses: () =>dispatch(loadCourses()),
    loadAuthors: () =>dispatch(loadAuthors())
})

export default connect(mapStateToProps ,mapDispatchToprops) (CoursePage);
