import React from 'react';
import Header from './Header';
import Inputs from './Inputs';
import PomBreak from './PomBreak';
import StartStop from './StartStop';
import Time from './Time';

export default class PomodoroClock extends React.Component {
    state = {
        time: '0:00',
        session: 25,
        break: 5
    }

    componentDidUpdate() {
        document.title = `(${this.state.time}) Pomodoro Clock`;
    }

    handleIncrementSession = () => {
        this.setState((prevState) => ({
            session: prevState.session + 1,
            time: `${this.state.session + 1}:00`
        }));
    }

    handleDecramentSession = () => {
        this.setState((prevState) => ({
            session: prevState.session - 1,
            time: `${this.state.session - 1}:00`
        }));
    }

    handleIncrementBreak = () => {
        this.setState((prevState) => ({
            break: prevState.break + 1,
            time: `${this.state.break + 1}:00`
        }));
    }

    handleDecramentBreak = () => {
        this.setState((prevState) => ({
            break: prevState.break - 1,
            time: `${this.state.break - 1}:00`
        }));
    }

    handleStartTimer = (seconds) => {

        const stopButton = document.querySelector('.stop');
        const resetButton = document.querySelector('.reset');

        // sets countdown
        const handleInterval = (function startTimer() {
            this.break = seconds--;
            const secondsLeft = this.break % 60;
            const mins = Math.round((this.break - secondsLeft) / 60);
            const hours = Math.round(mins / 60);
            const theTime = (secondsLeft < 10) ? `${mins}:0${secondsLeft}` : `${mins}:${secondsLeft}`;
            this.setState(() => ({
                time: theTime
            }));

            if (this.state.time === '0:00') {
                stopTimer();
            }

            // else if (this.state.time !== '0:00') {
                
            // }
        }.bind(this));

        const interval = setInterval(handleInterval, 1000);

        function stopTimer() {
            clearInterval(interval);
        }

        const resetTimer = (function resetTimer() {
            const pomButton = document.querySelector('.pom');
            const breakButton = document.querySelector('.break');

            clearInterval(interval);

            if (pomButton.classList.contains('active')) {
                this.setState(() => ({
                    time: `${this.state.session}:00`
                }));   
            }
    
            else if (breakButton.classList.contains('active')) {
                this.setState(() => ({
                    time: `${this.state.break}:00`
                }));   
            }
         
        }.bind(this));

        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);
    }

    handleSessionStart = () => {
        const sessionState = this.state.session;

        this.setState(() => ({
            time: `${sessionState}:00`
        }));

        const pomButton = document.querySelector('.pom');
        pomButton.classList.add('active');

        const breakButton = document.querySelector('.break');
        breakButton.classList.remove('active');
    }

    handleBreakStart = () => {
        const breakState = this.state.break;

        this.setState(() => ({
            time: `${breakState}:00`
        }));

        const breakButton = document.querySelector('.break');
        breakButton.classList.add('active');

        const pomButton = document.querySelector('.pom');
        pomButton.classList.remove('active');
    }

    handleStart = () => {
        const pomButton = document.querySelector('.pom');
        const breakButton = document.querySelector('.break');
        
        if (pomButton.classList.contains('active')) {
            const sessionSeconds = this.state.session * 60;
            this.handleStartTimer(sessionSeconds);
        }

        else if (breakButton.classList.contains('active')) {
            const breakSeconds = this.state.break * 60;
            this.handleStartTimer(breakSeconds);
        }
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
                <StartStop
                start={this.handleStart}
                stop={this.handleStop}
                reset={this.handleReset}
                />
                <Time
                time={this.state.time}
                break={this.state.break}
                />
            </div>
        );
    }
}