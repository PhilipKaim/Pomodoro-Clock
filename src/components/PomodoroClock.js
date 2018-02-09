import React from 'react';
import Header from './Header';
import Inputs from './Inputs';
import PomBreak from './PomBreak';
import StartStop from './StartStop';
import Time from './Time';

export default class PomodoroClock extends React.Component {
    state = {
        time: '',
        session: 25,
        break: 5,
        start: false,
        stop: true
    }

    componentDidMount() {
        const pomButton = document.querySelector('.pom');

        pomButton.classList.add('active');

        this.setState(() => ({
            time: `${this.state.session}:00`
        }));
    }

    componentDidUpdate() {
        document.title = `(${this.state.time}) Pomodoro Clock`;
    }

    handleIncrementSession = () => {
        this.setState((prevState) => ({
            session: prevState.session + 1,
        }));

        if (this.state.stop === true) {
            this.setState(() => ({
                time: `${this.state.session + 1}:00`
            }));
        }
    }

    handleDecramentSession = () => {
        this.setState((prevState) => ({
            session: prevState.session - 1,
        }));

        if (this.state.stop === true) {
            this.setState(() => ({
                time: `${this.state.session - 1}:00`
            }));
        }
    }

    handleIncrementBreak = () => {
        this.setState((prevState) => ({
            break: prevState.break + 1,
        }));

        if (this.state.stop === true) {
            this.setState(() => ({
                time: `${this.state.break + 1}:00`
            }));
        }
    }

    handleDecramentBreak = () => {
        this.setState((prevState) => ({
            break: prevState.break + 1,
        }));

        if (this.state.stop === true) {
            this.setState(() => ({
                time: `${this.state.break + 1}:00`
            }));
        }
    }

    handleStartTimer = (seconds) => {

        const stopButton = document.querySelector('.stop');
        const resetButton = document.querySelector('.reset');

        // starts countdown
        const handleInterval = (function startTimer() {
            this.break = seconds--;
            const secondsLeft = this.break % 60;
            const mins = Math.round((this.break - secondsLeft) / 60);
            const hours = Math.round(mins / 60);
            const theTime = (secondsLeft < 10) ? `${mins}:0${secondsLeft}` : `${mins}:${secondsLeft}`;

            this.setState(() => ({
                time: theTime,
                start: true,
                stop: false
            }));

            if (this.state.time === '0:00') {
                stopTimer();
            }
        }.bind(this));

        const interval = setInterval(handleInterval, 1000);

        const stopTimer = (function stopTimer() {
            clearInterval(interval);
        
            this.setState(() => ({
                start: false,
                stop: true
            }));
            
        }.bind(this));

        const resetTimer = (function resetTimer() {
            const pomButton = document.querySelector('.pom');
            const breakButton = document.querySelector('.break');

            clearInterval(interval);

            if (pomButton.classList.contains('active')) {
                this.setState(() => ({
                    time: `${this.state.session}:00`,
                    stop: true,
                    start: false
                }));   
            }
    
            else if (breakButton.classList.contains('active')) {
                this.setState(() => ({
                    time: `${this.state.break}:00`,
                    stop: true,
                    start: false
                }));   
            }
         
        }.bind(this));

        stopButton.addEventListener('click', stopTimer);
        resetButton.addEventListener('click', resetTimer);
    }

    handlePomClick = () => {
        const pomButton = document.querySelector('.pom');
        pomButton.classList.add('active');

        const breakButton = document.querySelector('.break');
        breakButton.classList.remove('active');

        const sessionState = this.state.session;

        if (this.state.stop === true) {
            this.setState(() => ({
                time: `${sessionState}:00`
            }));
        }
    }

    handleBreakClick = () => {
        const breakButton = document.querySelector('.break');
        breakButton.classList.add('active');

        const pomButton = document.querySelector('.pom');
        pomButton.classList.remove('active');

        const breakState = this.state.break;

        if (this.state.stop === true) {
            this.setState(() => ({
                time: `${breakState}:00`
            }));
        }
    }

    handleStart = () => {
        const pomButton = document.querySelector('.pom');
        const breakButton = document.querySelector('.break');

        const time = this.state.time;

        const leftOfColon = time.substr(0, time.indexOf(':'));
        const rightOfColon = time.substr(time.indexOf(':') + 1, time.length);

        // gets seconds left on stopped timer, resumes timer
        if ((leftOfColon !== this.state.session && rightOfColon !== '00') || (leftOfColon !== this.state.break && rightOfColon !== '00')) {
            const minsSeconds = leftOfColon * 60;
            const secondsLeft = parseInt(rightOfColon);
            const totalSeconds = minsSeconds + secondsLeft;
            this.handleStartTimer(totalSeconds);
        }
        
        else if (pomButton.classList.contains('active')) {
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
                startSession={this.handlePomClick}
                startBreak={this.handleBreakClick}
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