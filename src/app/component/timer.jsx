import React from 'react';
import ReactDOM from 'react-dom';

import './timer.css'

class TimerClock extends React.Component {
    render() {
        return(
            <div className="clock">
                <h2>{this.props.date.toLocaleTimeString()}</h2>
            </div>
        );
    };
};

export default TimerClock;