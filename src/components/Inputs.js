import React from 'react';

class Inputs extends React.Component {

    render() {
        return (
            <div className='inputs'>
                <div className='inputs__session'>
                    <p>Session Length</p>
                    <button id='increment-session' onClick={this.props.incrementSession}>+</button>
                    <p>{this.props.session}</p>
                    <button id='decrement-session' onClick={this.props.decramentSession}>-</button>
                </div>

                <div className='inputs__break'>
                    <p>Break Length</p>
                    <button id='increment-break' onClick={this.props.incrementBreak}>+</button>
                    <p>{this.props.break}</p>
                    <button id='decrement-break' onClick={this.props.decramentBreak}>-</button>
                </div>
            </div>
        );
    }
}

export default Inputs;