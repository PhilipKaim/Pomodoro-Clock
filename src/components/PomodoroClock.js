import React from 'react';
import Header from './Header';
import Inputs from './Inputs';
import PomBreak from './PomBreak';
import StartStop from './StartStop';
import Time from './Time';

export default class PomodoroClock extends React.Component {
    state = {
        time: '30:00'
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