import React from 'react';
import Header from './Header';
import Inputs from './Inputs';
import Time from './Time';

export default class PomodoroClock extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Inputs />
                <Time />
            </div>
        );
    }
}