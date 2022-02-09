import React from 'react';
import axios from 'axios';

class courseDetails extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            studentID: '',
            stdFirstName: '',
            stdLastName: '',
            stdProgram: '',
            coursesName: [],
            instructor: []
        };
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.props.studentList.length >= 1 && this.props.currentStudent.length !== 0) {
            if (prevProps.current !== this.props.current || prevProps.currentStudent !== this.props.currentStudent || prevState.coursesName.length !== this.state.coursesName.length || prevState.instructor.length !== this.state.instructor.length) {
                axios.get(`/project/v1/courses/`, {
                        params: {
                            'semester': this.props.current,
                            'stdId': this.props.currentStudent
                        }
                    })
                    .then(results => {
                        const coursesName = [];
                        const instructor = [];
                        for (let i = 0; i < results.data.courses.length; i++) {
                            coursesName[i] = results.data.courses[i].courseName;
                            instructor[i] = results.data.courses[i].instructorName;
                        }
                        this.setState({
                            studentID: results.data.studentID,
                            stdFirstName: results.data.stdFirstName,
                            stdLastName: results.data.stdLastName,
                            stdProgram: results.data.stdProgram,
                            coursesName,
                            instructor
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        }
    }
    
    render() {
        return <>
        <div className='chooser'>
            <h3>Student id: <label id='stdId'>{this.props.currentStudent}</label> Semester: <label id='semester'>{this.props.current}</label></h3>
        <table>
            <thead>
                <tr>
                    <th>Student ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Program</th>
                    <th>Courses</th>
                    <th>Instructor</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.studentID}</td>
                    <td>{this.state.stdFirstName}</td>
                    <td>{this.state.stdLastName}</td>
                    <td>{this.state.stdProgram}</td>
                    <td><ul>{this.state.coursesName.map((db, index)=><li key={index}>{db}</li>)}</ul></td>
                    <td><ul>{this.state.instructor.map((db, index)=><li key={index}>{db}</li>)}</ul></td>
                </tr>
            </tbody>
        </table>
        </div>
        </>;
    }
}
export default courseDetails;