import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextImput";
import SelectInput from "../common/SelectInput";
import {Author,Course} from '../../Models/Models'
const CourseForm = (
  course:Course,
  authors:Array<Author>,
  onSave:any,
  onChange:any,
  saving :any,
  errors:any
) => {
  return (
    <form onSubmit={onSave}>
      <h2>{course.id ? "Edit" : "Add"} Course</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}

      {TextInput("title",
                 "Title",
                  onChange,
                  "Title",
                  course.title,
                  errors.title)}

      {SelectInput("authorId",
                 "Author",
                  onChange,
                 "Select Author",
                 (course.authorId || ""),errors.author,authors)}
  
      {TextInput("category","Category",onChange,"Category",course.category,errors.category)}


      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

CourseForm.propTypes = {
  authors: PropTypes.array.isRequired,
  course: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default CourseForm;
