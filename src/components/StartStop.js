import React from 'react';

const StartStop = (props) => (
    <div className='start-stop'>
        <button className='btn-green start' onClick={props.start}>Start</button>
        <button className='btn-red stop' onClick={props.stop}>Stop</button>
        <button className='btn-grey reset' onClick={props.reset}>Reset</button>
    </div>
);

export default StartStop;