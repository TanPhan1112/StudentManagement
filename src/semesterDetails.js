import React from 'react';

class semesterDetails extends React.Component {
    render() {
        return <>
        <div className='chooser'>
            <h3>Choose a semester</h3>
            <ul>{this.props.semesterList.map((db, index)=><li key={index}><button onClick={()=>this.props.chooseSemester(db)}>{db}</button></li>)}</ul>
        </div>
        </>;
    }
}
export default semesterDetails;