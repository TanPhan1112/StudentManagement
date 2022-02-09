import React from 'react';

class studentInput extends React.Component {
    render() {
        return <>
        <form onSubmit={this.props.handleStudentSubmit}>
            <label>
            Enter a semester:
                <input type='text' name='semester' value={this.props.curSemester} onChange={this.props.handleCurSemesterChange}/>
            </label>
            <label>
            Enter student ID:
                <input type='text' name='stdId' value={this.props.studentID} onChange={this.props.handleStudentIDChange}/>
            </label>
            <label>
            Enter student first name:
                <input type='text' name='stdFirstName' value={this.props.stdFirstName} onChange={this.props.handleStudentFirstNameChange}/>
            </label>
            <label>
            Enter student last name:
                <input type='text' name='stdLastName' value={this.props.stdLastName} onChange={this.props.handleStudentLastNameChange}/>
            </label>
            <label>
            Enter student program:
                <input type='text' name='stdProgram' value={this.props.stdProgram} onChange={this.props.handleStudentProgramChange}/>
            </label>
            <input type='submit' value='Submit student information'/>
        </form>
        </>;
    }
}
export default studentInput;