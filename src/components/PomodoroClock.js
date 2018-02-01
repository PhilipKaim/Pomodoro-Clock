import React from 'react';
import Header from './Header';
import Inputs from './Inputs';
import PomBreak from './PomBreak';
import StartStop from './StartStop';
import Time from './Time';

let seconds;

function time() {
    let date = Date.now();
    let currentDate = new Date(date);
    seconds = currentDate.getSeconds();
}

setInterval(time, 1000);

export default class PomodoroClock extends React.Component {
    state = {
        time: '20:00'
    }

    render() {
        return (
            <div>
                <Header />
                <PomBreak />
                <Inputs />
                <StartStop />
                <Time time={this.state.time}/>
            </div>
        );
    }
}