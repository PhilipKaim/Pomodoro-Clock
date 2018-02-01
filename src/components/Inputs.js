import React from 'react';

class Inputs extends React.Component {
    state = {
        session: 30,
        break: 10
    };

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

    handleCustomSession = (e) => {
        this.setState(() => ({
            session: e.target.value
        }));
    }

    handleCustomBreak = (e) => {
        this.setState(() => ({
            break: e.target.value
        }));
    }

    render() {
        return (
            <div className='inputs'>
                <div className='inputs__session'>
                    <p>Session Length</p>
                    <div className="custom-session">
                        <label htmlFor="custom-session">Custom Session:</label>
                        <input type="text" id='custom-session' onBlur={this.handleCustomSession} />
                    </div>
                    <button id='increment-session' onClick={this.handleIncrementSession}>+</button>
                    <p>{this.state.session}</p>
                    <button id='decrement-session' onClick={this.handleDecramentSession}>-</button>
                </div>

                <div className='inputs__break'>
                    <p>Break Length</p>
                    <div className='custom-break'>
                        <label htmlFor="custom-break">Custom Break:</label>
                        <input type="text" id='custom-break' onBlur={this.handleCustomBreak} />
                    </div>
                    <button id='increment-break' onClick={this.handleIncrementBreak}>+</button>
                    <p>{this.state.break}</p>
                    <button id='decrement-break' onClick={this.handleDecramentBreak}>-</button>
                </div>
            </div>
        );
    }
}

export default Inputs;