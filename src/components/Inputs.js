import React from 'react';

class Inputs extends React.Component {

    render() {
        return (
            <div className='inputs'>
                <div className='inputs__session'>
                    <p>Session Length</p>
                    <div className="custom-session">
                        <label htmlFor="custom-session">Custom Session:</label>
                        <input type="text" id='custom-session' />
                    </div>
                    <button id='increment-session'>+</button>
                    <p>5</p>
                    <button id='decrement-session'>-</button>
                </div>

                <div className='inputs__break'>
                    <p>Break Length</p>
                    <div className='custom-break'>
                        <label htmlFor="custom-break">Custom Break:</label>
                        <input type="text" id='custom-break' />
                    </div>
                    <button id='increment-break'>+</button>
                    <p>25</p>
                    <button id='decrement-break'>-</button>
                </div>
            </div>
        );
    }
}

export default Inputs;