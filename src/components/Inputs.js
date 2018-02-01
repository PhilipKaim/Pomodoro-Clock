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

    // handleCustomSession = (e) => {
    //     this.setState(() => ({
    //         session: e.target.value
    //     }));
    // }

    // handleCustomBreak = (e) => {
    //     e.preventDefault();

    //     const customBreak = e.target.elements.customBreak.value.trim();
    //     const setBreak = this.handleCustomBreak(customBreak);

    //     this.setState(() => ({
    //         break: setBreak 
    //     }));
    // }

    render() {
        return (
            <div className='inputs'>
                <div className='inputs__session'>
                    <p>Session Length</p>
                    {/* <div className="custom-session">
                        <label htmlFor="custom-session">Custom Session:</label>
                        <input type="text" id='custom-session' onChange={this.handleCustomSession.bind(this)} />
                    </div> */}
                    <button id='increment-session' onClick={this.handleIncrementSession}>+</button>
                    <p>{this.state.session}</p>
                    <button id='decrement-session' onClick={this.handleDecramentSession}>-</button>
                </div>

                <div className='inputs__break'>
                    <p>Break Length</p>
                    {/* <form className='custom-break' onSubmit={this.handleCustomBreak}>
                        <label htmlFor="custom-break">Custom Break:</label>
                        <input type="text" id='custom-break' name='customBreak' />
                        <button>Add Custom Session</button>
                    </form> */}
                    <button id='increment-break' onClick={this.handleIncrementBreak}>+</button>
                    <p>{this.state.break}</p>
                    <button id='decrement-break' onClick={this.handleDecramentBreak}>-</button>
                </div>
            </div>
        );
    }
}

export default Inputs;