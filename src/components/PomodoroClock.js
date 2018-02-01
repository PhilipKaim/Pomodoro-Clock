import React from 'react';
import Header from './Header';
import Inputs from './Inputs';
import PomBreak from './PomBreak';
import StartStop from './StartStop';
import Time from './Time';

export default class PomodoroClock extends React.Component {
    state = {
        time: '',
        session: 1,
        break: 5
    }

    handleIncrementSession = () => {
        this.setState((prevState) => ({
            session: prevState.session + 1
        }));
    }

    handleDecramentSession = () => {
        this.setState((prevState) => ({
            session: prevState.session - 1
        }));
    }

    handleIncrementBreak = () => {
        this.setState((prevState) => ({
            break: prevState.break + 1
        }));
    }

    handleDecramentBreak = () => {
        this.setState((prevState) => ({
            break: prevState.break - 1
        }));
    }

    handleStartTimer = (seconds) => {

        // sets countdown
        const handleInterval = (function interval() {
            this.break = seconds--;
            const secondsLeft = this.break % 60;
            const mins = Math.round((this.break - secondsLeft) / 60);
            const hours = Math.round(mins / 60);
            const theTime = (secondsLeft < 10) ? `${mins}:0${secondsLeft}` : `${mins}:${secondsLeft}`;
            this.setState(() => ({
                time: theTime
            }));

            // will not play, gets aborted!!!!!!!!!
            if (this.state.time === '0:00') {
                const audio = new Audio('../../public/sounds/timer.wav');
                audio.play();
            }
        }.bind(this));

        setInterval(handleInterval, 1000);
    }

    handleSessionStart = () => {
        const sessionSeconds = this.state.session * 60;
        this.handleStartTimer(sessionSeconds);
    }

    handleBreakStart = () => {
        const breakSeconds = this.state.break * 60;
        this.handleStartTimer(breakSeconds);
    }

    render() {
        return (
            <div>
                <Header />
                <PomBreak
                startSession={this.handleSessionStart}
                startBreak={this.handleBreakStart}
                />
                <Inputs
                session={this.state.session}
                break={this.state.break}
                incrementBreak={this.handleIncrementBreak}
                incrementSession={this.handleIncrementSession}
                decramentBreak={this.handleDecramentBreak}
                decramentSession={this.handleDecramentSession}
                />
                <StartStop />
                <Time
                time={this.state.time}
                break={this.state.break}
                />
            </div>
        );
    }
}