import React,{Dispatch,/* useState,*/useEffect} from 'react';
import {Course} from '../../Models/Models'
import {connect,/* useSelector,useDispatch*/} from "react-redux"
import {CreateCourse,loadCourses} from '../../redux/actions/courseActions';
//import { bindActionCreators } from 'redux';
//import { store } from '../../redux/configureStore';

//import {CourseReducerModel} from '../../redux/reducers/courseReducer'
//import {store} from '../../redux/configureStore'


interface props extends StateCoursesPage,DispatchProps {}

interface StateCoursesPage {
    courses:Array<Course>,
}
interface DispatchProps {
    CreateCourse:typeof CreateCourse,
    loadCourses:typeof loadCourses

}

function CoursePage (courses:props) {

    //const dispatch=useDispatch();

    /*
    const test= useSelector <Array<Course>>((state)=>state);
    console.log(test,"test");
    const [course,setCourse]=useState(new Course())
    const handleChange =(event:any) => {
        const valor:string=event.target.value
        setCourse({...course,title:valor});
    }
    const handleSubmit   =(event:any) => {
        event.preventDefault();
        courses.CreateCourse(course);
        
    }
    */

    useEffect(() => {
        console.log("cargando");
        //dispatch(loadCourses())
       //loadCourses();
       courses.loadCourses();
    },[]);

    const ShowCourses = () => {
            
        let coursesTemp:Array<any> = new Array<any>();
        courses.courses.map((dato:Course)=>{
            coursesTemp.push( <div key={dato.title}>{dato.title}</div>);
        });
        
        return(
            <>
              {coursesTemp}
            </>
        );
    }
    return (
        <>
        {/*  
           <form onSubmit={handleSubmit}>
             <h2>Courses</h2>
             <h3>Add course</h3>
             <input type="text" onChange={handleChange} value={course.title}/>
             <input type="submit" value="save"></input>
            </form>
        
        */}
      
             {ShowCourses()}
     
        </>
    )
}


const  mapStateToProps  = (state:any)=>({
    courses:state.courses
})

const mapDispatchToprops =(dispatch:Dispatch<any>) => ({
    CreateCourse: (course:Course) => dispatch(CreateCourse(course)),
    loadCourses: () =>dispatch(loadCourses())
})
export default connect(mapStateToProps ,mapDispatchToprops) (CoursePage);
