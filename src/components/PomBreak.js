import React from 'react';

const PomBreak = (props) => (
    <div className='pom-break'>
        <button onClick={props.startSession} className='pom'>Pomodoro</button>
        <button onClick={props.startBreak} className='break'>Break</button>
    </div>
);

export default PomBreak;