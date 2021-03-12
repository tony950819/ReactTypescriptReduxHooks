import React ,{useState,Dispatch, useEffect}from 'react';
import {Course,Author} from '../../Models/Models';
import { RootState } from '../../redux/reducers';
import CourseForm from "./CourseForm";
import {connect,useSelector,useDispatch} from "react-redux";
import {loadAuthors} from '../../redux/actions/authorActions';
import  {saveCourse} from '../../redux/actions/courseActions';
import {Redirect} from 'react-router-dom';
import {getCourseById} from '../../Actions';
import {loadCourses} from '../../redux/actions/courseActions'
import Spinner from '../../componets/common/Spinner';
import {toast} from 'react-toastify' ;
interface props extends Actions,state {}

interface state extends Actions {
    courses:Array<Course>;
    newCourse:Course
}
interface Actions  {
    loadCourses:typeof loadCourses
}

function ManageCoursePage (props:props) {
    
    const [redirectProperty,setRedirect] =useState(false)
    const [newCourse,setCourse] =useState(props.newCourse)
    const [errors,setError] = useState({});
    const [saving,setSaving]=useState(false);

    const dispatch=useDispatch();
    const authors:Array<Author> = useSelector((state: RootState) => {
        return state.authors;
    });
    
    useEffect(()=>{
        
        if(props.courses.length>0) {
            setCourse({...props.newCourse});
        }else{
            dispatch(loadCourses());
        }

        if(authors.length==0) {
            dispatch(loadAuthors())
        }
      

    },[props.newCourse]);

 
    const onSave = async (event:any) => {
        event.preventDefault();
        setSaving(true);
        try{
            await  dispatch(saveCourse(newCourse)); 
            toast.success("Course saved."); 
            setRedirect(true);
        }catch(err){
            setSaving(false);
            setError({
                onSave:err.message
            })
        }
      
    }

    const onChange = (event:any) => {

        const {name,value}=event.target;
        setCourse(prevCourse =>({
            ...prevCourse,
            [name]:name==="authorId"?parseInt(value,10):value
        }));
    }

    return (
        <>
          {props.courses.length ==0 || authors.length==0?
          (Spinner()):
            <>
            {redirectProperty?<Redirect to="/courses"/>:null}
            {CourseForm(newCourse,authors,onSave,onChange,saving,errors)}
            </>
          }
           
        </>
    );
}

const  mapStateToProps  = (state:state,ownProps:any)=>({
    courses:(state.courses.length==0)?[]: state.courses,
    newCourse:(ownProps.match.params.id && state.courses.length>0)?getCourseById(state.courses,ownProps.match.params.id):new Course(),
})

const mapDispatchToprops =(dispatch:Dispatch<any>) => ({
    loadCourses: () =>dispatch(loadCourses()),

})

export default connect(mapStateToProps,mapDispatchToprops) (ManageCoursePage);