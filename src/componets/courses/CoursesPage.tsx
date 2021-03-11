import React,{Dispatch,useEffect, useState} from 'react';
import {Course,
        Author} from '../../Models/Models'
import {connect} from "react-redux"
import {CreateCourse,loadCourses} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authorActions';
import {SetName} from '../../Actions'
import CourseList from './CourseList';
import {Redirect} from 'react-router-dom';

interface props extends StateCoursesPage,DispatchProps {}

class StateCoursesPage {
    courses:Array<Course>=  new Array<Course>();
    authors:Array<Author> = new Array<Author>();
}
interface DispatchProps {
    CreateCourse:typeof CreateCourse,
    loadCourses:typeof loadCourses,
    loadAuthors:typeof loadAuthors

}

function CoursePage (props:props) {

    const [redirectToAddCoursePage,setRedirectToAddCoursePage] =useState(false)
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
  
    return (
  
        <>
         {redirectToAddCoursePage && <Redirect to="/course" />}
        <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => setRedirectToAddCoursePage(true)}
        >
            Add Course
        </button>
        {CourseList(props.courses,deleteCourse)}
             
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
    authors:state.authors
   
})

const mapDispatchToprops =(dispatch:Dispatch<any>) => ({
    CreateCourse: (course:Course) => dispatch(CreateCourse(course)),
    loadCourses: () =>dispatch(loadCourses()),
    loadAuthors: () =>dispatch(loadAuthors())
})

export default connect(mapStateToProps ,mapDispatchToprops) (CoursePage);
