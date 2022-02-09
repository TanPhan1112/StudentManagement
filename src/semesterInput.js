import React from 'react';

class semesterInput extends React.Component {
    render() {
        return <>
        <h1>Student management project</h1>
        <form onSubmit={this.props.handleSemesterSubmit}>
            <label>
            Create a new semester:
                <input type='text' name='semester' value={this.props.currentSemester} onChange={this.props.handleSemesterChange}/>
            </label>
            <input type='submit' value='Create a semester'/>
        </form>
        </>;
    }
}
export default semesterInput;