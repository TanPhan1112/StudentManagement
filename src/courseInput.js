import React from 'react';

class courseInput extends React.Component {
    render() {
        return <>
        <form onSubmit={this.props.handleCourseSubmit}>
            <label>
            Enter a semester:
                <input type='text' name='semester' value={this.props.curSemester} onChange={this.props.handleCurSemesterChange}/>
            </label>
            <label>
            Enter student ID:
                <input type='text' name='stdId' value={this.props.studentID} onChange={this.props.handleStudentIDChange}/>
            </label>
            <label>
            Enter course name:
                <input type='text' name='courseName' value={this.props.courseName} onChange={this.props.handleCourseNameChange}/>
            </label>
            <label>
            Enter instructor name:
                <input type='text' name='instructorName' value={this.props.instructorName} onChange={this.props.handleInstructorNameChange}/>
            </label>
            <input type='submit' value='Submit course information'/>
        </form>
        </>;
    }
}
export default courseInput;