import React from 'react';
import axios from 'axios';
import CourseInput from './courseInput.js';

class course extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            curSemester: '',
            studentID: '',
            courseName: '',
            instructorName: ''
        };
        
        this.handleCurSemesterChange = this.handleCurSemesterChange.bind(this);
        this.handleStudentIDChange = this.handleStudentIDChange.bind(this);
        this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
        this.handleInstructorNameChange = this.handleInstructorNameChange.bind(this);
        this.handleCourseSubmit = this.handleCourseSubmit.bind(this);
    }
    
    handleCurSemesterChange(event) {
        this.setState({
            curSemester: event.target.value
        });
    }
    
    handleStudentIDChange(event) {
        this.setState({
            studentID: event.target.value
        });
    }
    
    handleCourseNameChange(event) {
        this.setState({
            courseName: event.target.value
        });
    }
    
    handleInstructorNameChange(event) {
        this.setState({
            instructorName: event.target.value
        });
    }
    
    handleCourseSubmit(event) {
        event.preventDefault();
        const curSemester = this.state.curSemester;
        const stdId = this.state.studentID;
        const courseName = this.state.courseName;
        const instructorName = this.state.instructorName;
        axios.post('/project/v1/courses', { semester: curSemester, studentID: stdId, courseName: courseName, instructorName: instructorName })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    curSemester: '',
                    studentID: '',
                    courseName: '',
                    instructorName: ''
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    render() {
        let formProps = {
            curSemester: this.state.curSemester,
            studentID: this.state.studentID,
            courseName: this.state.courseName,
            instructorName: this.state.instructorName,
            
            handleCurSemesterChange: this.handleCurSemesterChange,
            handleStudentIDChange: this.handleStudentIDChange,
            handleCourseNameChange: this.handleCourseNameChange,
            handleInstructorNameChange: this.handleInstructorNameChange,
            handleCourseSubmit: this.handleCourseSubmit
        };
        return <>
        <div className='course'>
            <h2>Enter courses for a student</h2>
        </div>
        <CourseInput {...formProps}/>
        </>;
    }
}
export default course;