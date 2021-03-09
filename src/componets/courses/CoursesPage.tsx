import React,{Dispatch,/* useState,*/useEffect} from 'react';
import {Course,Authour} from '../../Models/Models'
import {connect,useSelector/* useSelector,useDispatch*/} from "react-redux"
import {CreateCourse,loadCourses} from '../../redux/actions/courseActions';
import {loadAuthours} from '../../redux/actions/authourActions';
import {SetName} from '../../Actions'
//import { bindActionCreators } from 'redux';
//import { store } from '../../redux/configureStore';

//import {CourseReducerModel} from '../../redux/reducers/courseReducer'
//import {store} from '../../redux/configureStore'
import CourseList from './CourseList';
//import { RootState } from '../../redux/reducers';

interface props extends StateCoursesPage,DispatchProps {}

class StateCoursesPage {
    courses:Array<Course>=  new Array<Course>();
    authours:Array<Authour> = new Array<Authour>();
}
interface DispatchProps {
    CreateCourse:typeof CreateCourse,
    loadCourses:typeof loadCourses,
    loadAuthours:typeof loadAuthours

}

function CoursePage (props:props) {

    /*
    let userData = useSelector((state: RootState) => {
        return state.authours;
      });
    console.log(userData,"data");
    */

    /*
    let userData = useSelector((state: RootState) => {
        return state.courses;
      });
      console.log(userData,"data");

    const test= useSelector <Array<Course>>((state)=>state);
    console.log(test);
    const dispatch=useDispatch();

    
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

       ///console.log(test,"test");
       props.loadCourses();
       props.loadAuthours();
       console.log(props,"au");
    },[]);

    /*
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
    */
   const deleteCourse =(course:Course)=>{
        console.log(course);
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
            {ShowCourses()}
        
        */}
        {CourseList(props.courses,deleteCourse)}
             
        </>
    )
}


const  mapStateToProps  = (state:StateCoursesPage)=>({
    courses:(state.authours.length==0 || state.courses.length==0)?[]: 
    state.courses.map(course=>{
        return {
            ...course,authorName:SetName(course.id,state.authours)
        }
    }),
    authours:state.authours
   
})

const mapDispatchToprops =(dispatch:Dispatch<any>) => ({
    CreateCourse: (course:Course) => dispatch(CreateCourse(course)),
    loadCourses: () =>dispatch(loadCourses()),
    loadAuthours: () =>dispatch(loadAuthours())
})

export default connect(mapStateToProps ,mapDispatchToprops) (CoursePage);
