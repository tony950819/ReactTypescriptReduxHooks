import React,{Dispatch,useEffect} from 'react';
import {Course,
        Author} from '../../Models/Models'
import {connect} from "react-redux"
import {CreateCourse,loadCourses} from '../../redux/actions/courseActions';
import {loadAuthors} from '../../redux/actions/authourActions';
import {SetName} from '../../Actions'
import CourseList from './CourseList';


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
