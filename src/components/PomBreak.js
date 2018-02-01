import React from 'react';

const PomBreak = (props) => (
    <div className='pom-break'>
        <button onClick={props.startSession}>Pomodoro</button>
        <button onClick={props.startBreak}>Break</button>
    </div>
);

export default PomBreak;