import React,{useState} from 'react';
import {Course} from '../../Models/Models'

function CoursePage () {
    const [course,setCourse]=useState(new Course())

    const handleChange =(event:any) => {
        setCourse({...course,title:event.target.value});
    }
    const handleSubmit   =(event:any) => {
        event.preventDefault();
        
    }
    return (
        <>
         <form onSubmit={handleSubmit}>
             <h2>Courses</h2>
             <h3>Add course</h3>
             <input type="text" onChange={handleChange} value={course.title}/>
             <input type="submit" value="save"></input>
         </form>
        </>
    )
}
export default CoursePage;