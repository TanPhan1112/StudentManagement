import React from 'react';
import axios from 'axios';
import Student from './student.js';
import SemesterInput from './semesterInput.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            currentSemester: '',
            cur: '',
            semesters: []
        };
    
        this.handleSemesterChange = this.handleSemesterChange.bind(this);
        this.handleSemesterSubmit = this.handleSemesterSubmit.bind(this);
        this.chooseSemester = this.chooseSemester.bind(this);
    }
    
    handleSemesterChange(event) {
        this.setState({
           currentSemester: event.target.value
        });
    }
    
    handleSemesterSubmit(event) {
        event.preventDefault();
        const newSemester = this.state.currentSemester;
        axios.post('/project/v1/semesters', { semester: newSemester })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    currentSemester: '',
                    semesters: [res.data.semester]
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    chooseSemester(semester) {
        this.setState({
            cur: semester
        });
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.semesters.length !== this.state.semesters.length) {
            axios.get(`/project/v1/semesters`)
                .then(results => {
                    const semesters = [];
                    for (let i = 0; i < results.data.length; i++) {
                        semesters[i] = results.data[i].semester;
                    }
                    this.setState({
                        semesters
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    componentDidMount() {
        axios.get(`/project/v1/semesters`)
            .then(results => {
                const semesters = [];
                for (let i = 0; i < results.data.length; i++) {
                    semesters[i] = results.data[i].semester;
                }
                this.setState({
                    semesters
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return <>
        <SemesterInput currentSemester={this.state.currentSemester} handleSemesterSubmit={this.handleSemesterSubmit} handleSemesterChange={this.handleSemesterChange}/>
        <Student current={this.state.cur} semesters={this.state.semesters} chooseSemester={this.chooseSemester}/>
        </>;
    }
}
export default App;