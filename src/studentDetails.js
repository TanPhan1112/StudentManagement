import React from 'react';

class studentDetails extends React.Component {
    render() {
        return <>
        <div className='chooser'>
            <h3>Choose a student id (<label id='semester'>{this.props.current}</label>)</h3>
            <ul>{this.props.studentList.map((db, index)=><li key={index}><button onClick={()=>this.props.chooseStudent(db)}>{db}</button></li>)}</ul>
        </div>
        </>;
    }
}
export default studentDetails;