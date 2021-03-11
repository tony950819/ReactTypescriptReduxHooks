import React ,{useState,}from 'react';
import {Course,Author} from '../../Models/Models';
import { RootState } from '../../redux/reducers';
import CourseForm from "./CourseForm";
import {connect,useSelector,useDispatch} from "react-redux";
import {loadAuthors} from '../../redux/actions/authorActions';
import  {createCourseSuccess} from '../../redux/actions/courseActions'
function ManageCoursePage () {
    
    const dispatch=useDispatch();
    let authors:Array<Author> = useSelector((state: RootState) => {
        return state.authors;
    });
    
    if(authors.length==0) {
        dispatch(loadAuthors())
    }
    const [newCourse,setCourse] =useState(new Course())
    const [errors,setError] = useState({});
    const [saving,setSaving]=useState(false);
    
    const onSave = (event:any) => {
        console.log(newCourse,"new course");
        event.preventDefault();
        dispatch(createCourseSuccess(newCourse));
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
          {CourseForm(newCourse,authors,onSave,onChange,saving,errors)}
        </>
    );
}
export default ManageCoursePage;