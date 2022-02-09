import React from 'react';
import axios from 'axios';
import Course from './course.js';
import StudentInput from './studentInput.js';
import StudentDetails from './studentDetails.js';
import SemesterDetails from './semesterDetails.js';
import CourseDetails from './courseDetails.js'

class student extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            curSemester: '',
            studentID: '',
            stdFirstName: '',
            stdLastName: '',
            stdProgram: '',
            currentStudent: '',
            students: []
        };
        
        this.handleCurSemesterChange = this.handleCurSemesterChange.bind(this);
        this.handleStudentIDChange = this.handleStudentIDChange.bind(this);
        this.handleStudentFirstNameChange = this.handleStudentFirstNameChange.bind(this);
        this.handleStudentLastNameChange = this.handleStudentLastNameChange.bind(this);
        this.handleStudentProgramChange = this.handleStudentProgramChange.bind(this);
        this.handleStudentSubmit = this.handleStudentSubmit.bind(this);
        this.chooseStudent = this.chooseStudent.bind(this);
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
    
    handleStudentFirstNameChange(event) {
        this.setState({
            stdFirstName: event.target.value
        });
    }
    
    handleStudentLastNameChange(event) {
        this.setState({
            stdLastName: event.target.value
        });
    }
    
    handleStudentProgramChange(event) {
        this.setState({
            stdProgram: event.target.value
        });
    }
    
    chooseStudent(std) {
        this.setState({
            currentStudent: std
        });
    }
    
    handleStudentSubmit(event) {
        event.preventDefault();
        const curSemester = this.state.curSemester;
        const stdId = this.state.studentID;
        const firstName = this.state.stdFirstName;
        const lastName = this.state.stdLastName;
        const program = this.state.stdProgram;
        axios.post('/project/v1/students', { semester: curSemester, studentID: stdId, stdFirstName: firstName, stdLastName: lastName, stdProgram: program })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    curSemester: '',
                    studentID: '',
                    stdFirstName: '',
                    stdLastName: '',
                    stdProgram: ''
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.semesters.length >= 1) {
            if (prevProps.current !== this.props.current || prevState.students.length !== this.state.students.length) {
                axios.get(`/project/v1/students/${this.props.current}`)
                    .then(results => {
                        if (results.data.length !== 0) {
                            const students = [];
                            for (let i = 0; i < results.data[0].students.length; i++) {
                                students[i] = results.data[0].students[i].studentID;
                            }
                            this.setState({
                                students
                            });
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
    
    render() {
        let formProps = {
            curSemester: this.state.curSemester,
            studentID: this.state.studentID,
            stdFirstName: this.state.stdFirstName,
            stdLastName: this.state.stdLastName,
            stdProgram: this.state.stdProgram,
            
            handleCurSemesterChange: this.handleCurSemesterChange,
            handleStudentIDChange: this.handleStudentIDChange,
            handleStudentFirstNameChange: this.handleStudentFirstNameChange,
            handleStudentLastNameChange: this.handleStudentLastNameChange,
            handleStudentProgramChange: this.handleStudentProgramChange,
            handleStudentSubmit: this.handleStudentSubmit
        };
        return <>
        <div className='student'>
            <h2>Enter student information for a semester</h2>
        </div>
        <StudentInput {...formProps}/>
        <Course/>
        <h2>Management details</h2>
        <SemesterDetails semesterList={this.props.semesters} chooseSemester={this.props.chooseSemester}/>
        <StudentDetails current={this.props.current} studentList={this.state.students} chooseStudent={this.chooseStudent}/>
        <CourseDetails currentStudent={this.state.currentStudent} current={this.props.current} studentList={this.state.students}/>
        </>;
    }
}
export default student;